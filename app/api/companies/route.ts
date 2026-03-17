import { NextResponse } from "next/server";
import { companyOperations } from "@/lib/db/operations";
import { z } from "zod";

// Schema for company creation
const createCompanySchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  domain: z.string().optional(),
});

// Schema for company updates
const updateCompanySchema = z.object({
  name: z.string().min(2).optional(),
  domain: z.string().optional(),
});

export async function GET() {
  try {
    // In a real app, you'd want authentication here
    const companies = await companyOperations.getAll();
    return NextResponse.json({ success: true, data: companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch companies" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createCompanySchema.parse(body);

    const company = await companyOperations.create({
      ...validatedData,
      id: crypto.randomUUID(),
    });

    return NextResponse.json({
      success: true,
      data: company,
      message: "Company created successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating company:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create company" },
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
        { success: false, error: "Company ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = updateCompanySchema.parse(body);

    const company = await companyOperations.update(id, validatedData);

    if (!company) {
      return NextResponse.json(
        { success: false, error: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: company,
      message: "Company updated successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error updating company:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update company" },
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
        { success: false, error: "Company ID is required" },
        { status: 400 }
      );
    }

    await companyOperations.delete(id);

    return NextResponse.json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting company:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete company" },
      { status: 500 }
    );
  }
}