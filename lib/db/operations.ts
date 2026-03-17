import { and, eq, gte, lte, sql } from "drizzle-orm";
import { db } from "./index";
import {
  companies,
  users,
  candidates,
  interviews,
  assessments,
  schedules,
  type Company,
  type InsertCompany,
  type User,
  type InsertUser,
  type Candidate,
  type InsertCandidate,
  type Interview,
  type InsertInterview,
  type Assessment,
  type InsertAssessment,
  type Schedule,
  type InsertSchedule,
} from "./schema";

// Company Operations
export const companyOperations = {
  // Create a new company
  async create(data: InsertCompany): Promise<Company> {
    const [company] = await db.insert(companies).values(data).returning();
    return company;
  },

  // Get company by ID
  async getById(id: string): Promise<Company | undefined> {
    const [company] = await db.select().from(companies).where(eq(companies.id, id));
    return company;
  },

  // Get company by domain
  async getByDomain(domain: string): Promise<Company | undefined> {
    const [company] = await db.select().from(companies).where(eq(companies.domain, domain));
    return company;
  },

  // Update company
  async update(id: string, data: Partial<InsertCompany>): Promise<Company | undefined> {
    const [company] = await db
      .update(companies)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(companies.id, id))
      .returning();
    return company;
  },

  // Delete company (soft delete by setting a deleted flag or hard delete)
  async delete(id: string): Promise<void> {
    await db.delete(companies).where(eq(companies.id, id));
  },

  // Get all companies (admin only)
  async getAll(): Promise<Company[]> {
    return await db.select().from(companies);
  },
};

// User Operations
export const userOperations = {
  // Create a new user
  async create(data: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(data).returning();
    return user;
  },

  // Get user by ID
  async getById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  },

  // Get user by email
  async getByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  },

  // Get users by company
  async getByCompany(companyId: string): Promise<User[]> {
    return await db.select().from(users).where(eq(users.companyId, companyId));
  },

  // Update user
  async update(id: string, data: Partial<InsertUser>): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  },

  // Delete user
  async delete(id: string): Promise<void> {
    await db.delete(users).where(eq(users.id, id));
  },

  // Get user with company details
  async getUserWithCompany(id: string): Promise<(User & { company: Company }) | undefined> {
    const result = await db
      .select({
        user: users,
        company: companies,
      })
      .from(users)
      .innerJoin(companies, eq(users.companyId, companies.id))
      .where(eq(users.id, id));

    return result[0];
  },
};

// Candidate Operations
export const candidateOperations = {
  // Create a new candidate
  async create(data: InsertCandidate): Promise<Candidate> {
    const [candidate] = await db.insert(candidates).values(data).returning();
    return candidate;
  },

  // Get candidate by ID
  async getById(id: string): Promise<Candidate | undefined> {
    const [candidate] = await db.select().from(candidates).where(eq(candidates.id, id));
    return candidate;
  },

  // Get candidates by company
  async getByCompany(companyId: string, limit = 50, offset = 0): Promise<Candidate[]> {
    return await db
      .select()
      .from(candidates)
      .where(eq(candidates.companyId, companyId))
      .orderBy(candidates.createdAt)
      .limit(limit)
      .offset(offset);
  },

  // Get candidates by recruiter
  async getByRecruiter(recruiterId: string, limit = 50, offset = 0): Promise<Candidate[]> {
    return await db
      .select()
      .from(candidates)
      .where(eq(candidates.createdBy, recruiterId))
      .orderBy(candidates.createdAt)
      .limit(limit)
      .offset(offset);
  },

  // Update candidate
  async update(id: string, data: Partial<InsertCandidate>): Promise<Candidate | undefined> {
    const [candidate] = await db
      .update(candidates)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(candidates.id, id))
      .returning();
    return candidate;
  },

  // Update candidate status
  async updateStatus(id: string, status: Candidate["status"]): Promise<Candidate | undefined> {
    const [candidate] = await db
      .update(candidates)
      .set({ status, updatedAt: new Date() })
      .where(eq(candidates.id, id))
      .returning();
    return candidate;
  },

  // Delete candidate
  async delete(id: string): Promise<void> {
    await db.delete(candidates).where(eq(candidates.id, id));
  },

  // Search candidates by name or email
  async search(companyId: string, query: string): Promise<Candidate[]> {
    return await db
      .select()
      .from(candidates)
      .where(
        and(
          eq(candidates.companyId, companyId),
          sql`${candidates.firstName} ILIKE ${`%${query}%`} OR ${candidates.lastName} ILIKE ${`%${query}%`} OR ${candidates.email} ILIKE ${`%${query}%`}`
        )
      );
  },
};

// Interview Operations
export const interviewOperations = {
  // Create a new interview
  async create(data: InsertInterview): Promise<Interview> {
    const [interview] = await db.insert(interviews).values(data).returning();
    return interview;
  },

  // Get interview by ID
  async getById(id: string): Promise<Interview | undefined> {
    const [interview] = await db.select().from(interviews).where(eq(interviews.id, id));
    return interview;
  },

  // Get interviews by candidate
  async getByCandidate(candidateId: string): Promise<Interview[]> {
    return await db.select().from(interviews).where(eq(interviews.candidateId, candidateId)).orderBy(interviews.createdAt);
  },

  // Get interviews by recruiter
  async getByRecruiter(recruiterId: string, limit = 50, offset = 0): Promise<Interview[]> {
    return await db
      .select()
      .from(interviews)
      .where(eq(interviews.recruiterId, recruiterId))
      .orderBy(interviews.createdAt)
      .limit(limit)
      .offset(offset);
  },

  // Get interviews by company
  async getByCompany(companyId: string, limit = 50, offset = 0): Promise<Interview[]> {
    return await db
      .select()
      .from(interviews)
      .where(eq(interviews.companyId, companyId))
      .orderBy(interviews.createdAt)
      .limit(limit)
      .offset(offset);
  },

  // Update interview
  async update(id: string, data: Partial<InsertInterview>): Promise<Interview | undefined> {
    const [interview] = await db
      .update(interviews)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(interviews.id, id))
      .returning();
    return interview;
  },

  // Update interview status
  async updateStatus(id: string, status: Interview["status"]): Promise<Interview | undefined> {
    const [interview] = await db
      .update(interviews)
      .set({ status, updatedAt: new Date() })
      .where(eq(interviews.id, id))
      .returning();
    return interview;
  },

  // Start interview
  async start(id: string): Promise<Interview | undefined> {
    const [interview] = await db
      .update(interviews)
      .set({ status: "in_progress", startedAt: new Date(), updatedAt: new Date() })
      .where(eq(interviews.id, id))
      .returning();
    return interview;
  },

  // Complete interview
  async complete(id: string, transcript?: string, recordingUrl?: string): Promise<Interview | undefined> {
    const [interview] = await db
      .update(interviews)
      .set({
        status: "completed",
        completedAt: new Date(),
        transcript,
        recordingUrl,
        updatedAt: new Date(),
      })
      .where(eq(interviews.id, id))
      .returning();
    return interview;
  },

  // Delete interview
  async delete(id: string): Promise<void> {
    await db.delete(interviews).where(eq(interviews.id, id));
  },
};

// Assessment Operations
export const assessmentOperations = {
  // Create a new assessment
  async create(data: InsertAssessment): Promise<Assessment> {
    const [assessment] = await db.insert(assessments).values(data).returning();
    return assessment;
  },

  // Get assessment by ID
  async getById(id: string): Promise<Assessment | undefined> {
    const [assessment] = await db.select().from(assessments).where(eq(assessments.id, id));
    return assessment;
  },

  // Get assessment by interview
  async getByInterview(interviewId: string): Promise<Assessment | undefined> {
    const [assessment] = await db.select().from(assessments).where(eq(assessments.interviewId, interviewId));
    return assessment;
  },

  // Get assessments by candidate
  async getByCandidate(candidateId: string): Promise<Assessment[]> {
    return await db.select().from(assessments).where(eq(assessments.candidateId, candidateId)).orderBy(assessments.createdAt);
  },

  // Get assessments by recruiter
  async getByRecruiter(recruiterId: string): Promise<Assessment[]> {
    return await db.select().from(assessments).where(eq(assessments.recruiterId, recruiterId)).orderBy(assessments.createdAt);
  },

  // Update assessment
  async update(id: string, data: Partial<InsertAssessment>): Promise<Assessment | undefined> {
    const [assessment] = await db
      .update(assessments)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(assessments.id, id))
      .returning();
    return assessment;
  },

  // Delete assessment
  async delete(id: string): Promise<void> {
    await db.delete(assessments).where(eq(assessments.id, id));
  },
};

// Schedule Operations
export const scheduleOperations = {
  // Create a new schedule
  async create(data: InsertSchedule): Promise<Schedule> {
    const [schedule] = await db.insert(schedules).values(data).returning();
    return schedule;
  },

  // Get schedule by ID
  async getById(id: string): Promise<Schedule | undefined> {
    const [schedule] = await db.select().from(schedules).where(eq(schedules.id, id));
    return schedule;
  },

  // Get schedules by candidate
  async getByCandidate(candidateId: string): Promise<Schedule[]> {
    return await db.select().from(schedules).where(eq(schedules.candidateId, candidateId)).orderBy(schedules.startTime);
  },

  // Get schedules by recruiter
  async getByRecruiter(recruiterId: string, startDate?: Date, endDate?: Date): Promise<Schedule[]> {
    let query = db.select().from(schedules).where(eq(schedules.recruiterId, recruiterId));

    if (startDate && endDate) {
      query = query.where(and(gte(schedules.startTime, startDate), lte(schedules.startTime, endDate)));
    }

    return await query.orderBy(schedules.startTime);
  },

  // Get schedules by company
  async getByCompany(companyId: string, startDate?: Date, endDate?: Date): Promise<Schedule[]> {
    let query = db.select().from(schedules).where(eq(schedules.companyId, companyId));

    if (startDate && endDate) {
      query = query.where(and(gte(schedules.startTime, startDate), lte(schedules.startTime, endDate)));
    }

    return await query.orderBy(schedules.startTime);
  },

  // Get available time slots for a recruiter
  async getAvailableSlots(
    recruiterId: string,
    startDate: Date,
    endDate: Date,
    durationMinutes: number = 30
  ): Promise<{ startTime: Date; endTime: Date }[]> {
    // Get all existing schedules for the recruiter in the date range
    const existingSchedules = await db
      .select({
        startTime: schedules.startTime,
        endTime: schedules.endTime,
      })
      .from(schedules)
      .where(
        and(
          eq(schedules.recruiterId, recruiterId),
          gte(schedules.startTime, startDate),
          lte(schedules.startTime, endDate),
          eq(schedules.status, "confirmed")
        )
      );

    // This is a simplified version - in a real app, you'd want to generate
    // available time slots based on business hours and existing bookings
    const availableSlots: { startTime: Date; endTime: Date }[] = [];
    const current = new Date(startDate);

    while (current < endDate) {
      // Check if this time slot conflicts with existing schedules
      const conflicts = existingSchedules.some(
        (schedule) =>
          (current >= schedule.startTime && current < schedule.endTime) ||
          (new Date(current.getTime() + durationMinutes * 60000) > schedule.startTime &&
            new Date(current.getTime() + durationMinutes * 60000) <= schedule.endTime)
      );

      if (!conflicts) {
        availableSlots.push({
          startTime: new Date(current),
          endTime: new Date(current.getTime() + durationMinutes * 60000),
        });
      }

      // Move to next time slot (e.g., 30 minutes)
      current.setMinutes(current.getMinutes() + 30);
    }

    return availableSlots;
  },

  // Update schedule
  async update(id: string, data: Partial<InsertSchedule>): Promise<Schedule | undefined> {
    const [schedule] = await db
      .update(schedules)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schedules.id, id))
      .returning();
    return schedule;
  },

  // Update schedule status
  async updateStatus(id: string, status: Schedule["status"]): Promise<Schedule | undefined> {
    const [schedule] = await db
      .update(schedules)
      .set({ status, updatedAt: new Date() })
      .where(eq(schedules.id, id))
      .returning();
    return schedule;
  },

  // Delete schedule
  async delete(id: string): Promise<void> {
    await db.delete(schedules).where(eq(schedules.id, id));
  },
};