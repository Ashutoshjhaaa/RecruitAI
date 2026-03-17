import { db } from "./index";
import { users, companies } from "./schema";
import { eq, and } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export async function createUserFromClerk(clerkUserId: string, email: string, name: string) {
  try {
    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.id, clerkUserId),
    });

    if (existingUser) {
      return existingUser;
    }

    // Check if company exists for this email domain
    const emailDomain = email.split('@')[1];
    let company = await db.query.companies.findFirst({
      where: eq(companies.domain, emailDomain),
    });

    // Create company if it doesn't exist
    if (!company) {
      const companyId = uuidv4();
      company = await db.insert(companies).values({
        id: companyId,
        name: emailDomain,
        domain: emailDomain,
      }).returning().then(rows => rows[0]);
    }

    // Create user
    const newUser = await db.insert(users).values({
      id: clerkUserId,
      email: email,
      name: name,
      companyId: company!.id,
      role: "recruiter",
    }).returning().then(rows => rows[0]);

    return newUser;
  } catch (error) {
    console.error("Error creating user from Clerk:", error);
    throw error;
  }
}

export async function getUserWithCompany(clerkUserId: string) {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, clerkUserId),
      with: {
        company: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error getting user with company:", error);
    throw error;
  }
}