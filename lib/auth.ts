import { NextRequest, NextResponse } from "next/server";

// Simple authentication middleware (in a real app, use proper auth like NextAuth.js)
export function authenticateRequest(request: NextRequest): { success: boolean; userId?: string; companyId?: string; error?: string } {
  // In a real application, you'd use proper authentication like:
  // - JWT tokens
  // - NextAuth.js
  // - OAuth
  // - Database session validation
  
  // For now, we'll use a simple API key approach for demo purposes
  const apiKey = request.headers.get("x-api-key");
  
  if (!apiKey) {
    return { success: false, error: "API key required" };
  }

  // In a real app, validate against database or environment variables
  // For demo purposes, we'll accept any non-empty API key
  if (apiKey.length < 10) {
    return { success: false, error: "Invalid API key" };
  }

  // Mock user data - in real app, decode from JWT or fetch from database
  return {
    success: true,
    userId: "demo-user-id",
    companyId: "demo-company-id",
  };
}

// Middleware to protect API routes
export function withAuth(handler: (request: NextRequest, context: { userId: string; companyId: string }) => Promise<Response>) {
  return async function protectedHandler(request: NextRequest) {
    const auth = authenticateRequest(request);
    
    if (!auth.success) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: 401 }
      );
    }

    try {
      return await handler(request, { userId: auth.userId!, companyId: auth.companyId! });
    } catch (error) {
      console.error("Error in protected handler:", error);
      return NextResponse.json(
        { success: false, error: "Internal server error" },
        { status: 500 }
      );
    }
  };
}

// Role-based access control
export function requireRole(requiredRole: string) {
  return function roleMiddleware(handler: any) {
    return async function roleProtectedHandler(request: NextRequest, context: any) {
      // In a real app, check user role from database or JWT
      const userRole = "admin"; // Mock for demo
      
      if (userRole !== requiredRole && requiredRole !== "any") {
        return NextResponse.json(
          { success: false, error: "Insufficient permissions" },
          { status: 403 }
        );
      }

      return await handler(request, context);
    };
  };
}

// Company isolation middleware
export function ensureCompanyAccess(handler: any) {
  return async function companyProtectedHandler(request: NextRequest, context: any) {
    // In a real app, ensure user can only access their company's data
    // This would be handled in the database operations
    
    return await handler(request, context);
  };
}