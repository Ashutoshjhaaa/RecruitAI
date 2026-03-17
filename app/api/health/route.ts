import { NextResponse } from "next/server";
import { db, dbUtils } from "@/lib/db";

export async function GET() {
  try {
    // Test database connection
    const connectionStatus = await dbUtils.healthCheck();
    
    // Get database statistics
    const stats = await dbUtils.getStats();

    return NextResponse.json({
      success: true,
      status: "healthy",
      database: connectionStatus,
      stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json({
      success: false,
      status: "unhealthy",
      error: "Database connection failed",
      timestamp: new Date().toISOString(),
    }, { status: 503 });
  }
}

export async function POST() {
  try {
    // Trigger database migrations (admin only in real app)
    await dbUtils.runMigrations();
    
    return NextResponse.json({
      success: true,
      message: "Database migrations completed successfully",
    });
  } catch (error) {
    console.error("Migration failed:", error);
    return NextResponse.json({
      success: false,
      error: "Database migration failed",
    }, { status: 500 });
  }
}