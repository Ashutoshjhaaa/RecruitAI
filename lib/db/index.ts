import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import * as schema from "./schema";

// Create Neon connection
const sql = neon(process.env.DATABASE_URL!);

// Create Drizzle ORM instance
export const db = drizzle(sql, { schema });

// Database connection test
export async function testConnection() {
  try {
    const result = await db.execute(sql`SELECT 1 as test`);
    console.log("✅ Database connection successful");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}

// Database migration function
export async function runMigrations() {
  try {
    await migrate(db, { migrationsFolder: "./lib/db/migrations" });
    console.log("✅ Database migrations completed");
  } catch (error) {
    console.error("❌ Database migration failed:", error);
    throw error;
  }
}

// Database utilities
export const dbUtils = {
  // Health check
  async healthCheck() {
    try {
      await db.execute(sql`SELECT 1`);
      return { status: "healthy", timestamp: new Date().toISOString() };
    } catch (error) {
      return { status: "unhealthy", error: error.message, timestamp: new Date().toISOString() };
    }
  },

  // Get database statistics
  async getStats() {
    try {
      const stats = await db.execute(sql`
        SELECT 
          (SELECT COUNT(*) FROM companies) as companies_count,
          (SELECT COUNT(*) FROM users) as users_count,
          (SELECT COUNT(*) FROM candidates) as candidates_count,
          (SELECT COUNT(*) FROM interviews) as interviews_count,
          (SELECT COUNT(*) FROM assessments) as assessments_count
      `);
      return stats.rows[0];
    } catch (error) {
      console.error("Error getting database stats:", error);
      return null;
    }
  },

  // Clean up old data (for development/testing)
  async cleanupOldData(days = 30) {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);

      await db.execute(sql`
        DELETE FROM assessments WHERE created_at < ${cutoffDate.toISOString()}
      `);
      await db.execute(sql`
        DELETE FROM interviews WHERE created_at < ${cutoffDate.toISOString()}
      `);
      await db.execute(sql`
        DELETE FROM schedules WHERE created_at < ${cutoffDate.toISOString()}
      `);
      await db.execute(sql`
        DELETE FROM candidates WHERE created_at < ${cutoffDate.toISOString()}
      `);

      console.log(`✅ Cleaned up data older than ${days} days`);
    } catch (error) {
      console.error("Error cleaning up old data:", error);
      throw error;
    }
  },
};

// Export schema for direct use
export { schema };