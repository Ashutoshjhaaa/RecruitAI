import { NextResponse } from "next/server";
import { userOperations } from "@/lib/db/operations";
import { z } from "zod";

// Schema for user creation
const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyId: z.string().uuid("Invalid company ID format"),
  role: z.enum(["admin", "recruiter", "viewer"]).default("recruiter"),
});

// Schema for user updates
const updateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().min(2).optional(),
  role: z.enum(["admin", "recruiter", "viewer"]).optional(),
});

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const companyId = url.searchParams.get("companyId");
    const userId = url.searchParams.get("userId");

    let users;

    if (companyId) {
      // Get users by company
      users = await userOperations.getByCompany(companyId);
    } else if (userId) {
      // Get specific user
      const user = await userOperations.getById(userId);
      users = user ? [user] : [];
    } else {
      // Get all users (admin only)
      users = await userOperations.getAll();
    }

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createUserSchema.parse(body);

    const user = await userOperations.create({
      ...validatedData,
      id: crypto.randomUUID(),
    });

    return NextResponse.json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);

    const user = await userOperations.update(id, validatedData);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }

    await userOperations.delete(id);

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete user" },
      { status: 500 }
    );
  }
}