import { relations, sql } from "drizzle-orm";
import { index, integer, pgTable, primaryKey, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { z } from "zod";

// Zod schemas for validation
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2),
  companyId: z.string().uuid(),
  role: z.enum(["admin", "recruiter", "viewer"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const companySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  domain: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const candidateSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  source: z.enum(["upload", "ats", "api"]),
  status: z.enum(["new", "screened", "interviewed", "hired", "rejected"]),
  companyId: z.string().uuid(),
  createdBy: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const interviewSchema = z.object({
  id: z.string().uuid(),
  candidateId: z.string().uuid(),
  recruiterId: z.string().uuid(),
  companyId: z.string().uuid(),
  status: z.enum(["scheduled", "in_progress", "completed", "cancelled"]),
  scheduledAt: z.date().optional(),
  startedAt: z.date().optional(),
  completedAt: z.date().optional(),
  transcript: z.string().optional(),
  recordingUrl: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const assessmentSchema = z.object({
  id: z.string().uuid(),
  interviewId: z.string().uuid(),
  candidateId: z.string().uuid(),
  recruiterId: z.string().uuid(),
  companyId: z.string().uuid(),
  technicalScore: z.number().min(0).max(100),
  communicationScore: z.number().min(0).max(100),
  culturalFitScore: z.number().min(0).max(100),
  overallScore: z.number().min(0).max(100),
  feedback: z.string().optional(),
  recommendations: z.array(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const scheduleSchema = z.object({
  id: z.string().uuid(),
  candidateId: z.string().uuid(),
  recruiterId: z.string().uuid(),
  companyId: z.string().uuid(),
  interviewId: z.string().uuid().optional(),
  startTime: z.date(),
  endTime: z.date(),
  timezone: z.string(),
  status: z.enum(["pending", "confirmed", "rescheduled", "cancelled"]),
  meetingUrl: z.string().url().optional(),
  calendarEventId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Database tables
export const companies = pgTable("companies", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  companyId: varchar("company_id", { length: 36 }).notNull(),
  role: varchar("role", { length: 20 }).default("recruiter").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const candidates = pgTable("candidates", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  resumeUrl: varchar("resume_url", { length: 500 }),
  source: varchar("source", { length: 20 }).default("upload").notNull(),
  status: varchar("status", { length: 20 }).default("new").notNull(),
  companyId: varchar("company_id", { length: 36 }).notNull(),
  createdBy: varchar("created_by", { length: 36 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const interviews = pgTable("interviews", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  candidateId: varchar("candidate_id", { length: 36 }).notNull(),
  recruiterId: varchar("recruiter_id", { length: 36 }).notNull(),
  companyId: varchar("company_id", { length: 36 }).notNull(),
  status: varchar("status", { length: 20 }).default("scheduled").notNull(),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }),
  startedAt: timestamp("started_at", { withTimezone: true }),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  transcript: text("transcript"),
  recordingUrl: varchar("recording_url", { length: 500 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const assessments = pgTable("assessments", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  interviewId: varchar("interview_id", { length: 36 }).notNull(),
  candidateId: varchar("candidate_id", { length: 36 }).notNull(),
  recruiterId: varchar("recruiter_id", { length: 36 }).notNull(),
  companyId: varchar("company_id", { length: 36 }).notNull(),
  technicalScore: integer("technical_score").notNull(),
  communicationScore: integer("communication_score").notNull(),
  culturalFitScore: integer("cultural_fit_score").notNull(),
  overallScore: integer("overall_score").notNull(),
  feedback: text("feedback"),
  recommendations: text("recommendations"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const schedules = pgTable("schedules", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  candidateId: varchar("candidate_id", { length: 36 }).notNull(),
  recruiterId: varchar("recruiter_id", { length: 36 }).notNull(),
  companyId: varchar("company_id", { length: 36 }).notNull(),
  interviewId: varchar("interview_id", { length: 36 }),
  startTime: timestamp("start_time", { withTimezone: true }).notNull(),
  endTime: timestamp("end_time", { withTimezone: true }).notNull(),
  timezone: varchar("timezone", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).default("pending").notNull(),
  meetingUrl: varchar("meeting_url", { length: 500 }),
  calendarEventId: varchar("calendar_event_id", { length: 255 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// Table relations
export const companiesRelations = relations(companies, ({ many }) => ({
  users: many(users),
  candidates: many(candidates),
  interviews: many(interviews),
  assessments: many(assessments),
  schedules: many(schedules),
}));

export const usersRelations = relations(users, ({ one, many }) => ({
  company: one(companies, {
    fields: [users.companyId],
    references: [companies.id],
  }),
  candidates: many(candidates),
  interviews: many(interviews),
  assessments: many(assessments),
  schedules: many(schedules),
}));

export const candidatesRelations = relations(candidates, ({ one, many }) => ({
  company: one(companies, {
    fields: [candidates.companyId],
    references: [companies.id],
  }),
  createdBy: one(users, {
    fields: [candidates.createdBy],
    references: [users.id],
  }),
  interviews: many(interviews),
  assessments: many(assessments),
  schedules: many(schedules),
}));

export const interviewsRelations = relations(interviews, ({ one, many }) => ({
  company: one(companies, {
    fields: [interviews.companyId],
    references: [companies.id],
  }),
  candidate: one(candidates, {
    fields: [interviews.candidateId],
    references: [candidates.id],
  }),
  recruiter: one(users, {
    fields: [interviews.recruiterId],
    references: [users.id],
  }),
  assessments: many(assessments),
}));

export const assessmentsRelations = relations(assessments, ({ one }) => ({
  company: one(companies, {
    fields: [assessments.companyId],
    references: [companies.id],
  }),
  interview: one(interviews, {
    fields: [assessments.interviewId],
    references: [interviews.id],
  }),
  candidate: one(candidates, {
    fields: [assessments.candidateId],
    references: [candidates.id],
  }),
  recruiter: one(users, {
    fields: [assessments.recruiterId],
    references: [users.id],
  }),
}));

export const schedulesRelations = relations(schedules, ({ one }) => ({
  company: one(companies, {
    fields: [schedules.companyId],
    references: [companies.id],
  }),
  candidate: one(candidates, {
    fields: [schedules.candidateId],
    references: [candidates.id],
  }),
  recruiter: one(users, {
    fields: [schedules.recruiterId],
    references: [users.id],
  }),
  interview: one(interviews, {
    fields: [schedules.interviewId],
    references: [interviews.id],
  }),
}));

// Type exports for TypeScript
export type Company = typeof companies.$inferSelect;
export type InsertCompany = typeof companies.$inferInsert;

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Candidate = typeof candidates.$inferSelect;
export type InsertCandidate = typeof candidates.$inferInsert;

export type Interview = typeof interviews.$inferSelect;
export type InsertInterview = typeof interviews.$inferInsert;

export type Assessment = typeof assessments.$inferSelect;
export type InsertAssessment = typeof assessments.$inferInsert;

export type Schedule = typeof schedules.$inferSelect;
export type InsertSchedule = typeof schedules.$inferInsert;