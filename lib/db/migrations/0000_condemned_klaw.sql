CREATE TABLE "assessments" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"interview_id" varchar(36) NOT NULL,
	"candidate_id" varchar(36) NOT NULL,
	"recruiter_id" varchar(36) NOT NULL,
	"company_id" varchar(36) NOT NULL,
	"technical_score" integer NOT NULL,
	"communication_score" integer NOT NULL,
	"cultural_fit_score" integer NOT NULL,
	"overall_score" integer NOT NULL,
	"feedback" text,
	"recommendations" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "candidates" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(20),
	"resume_url" varchar(500),
	"source" varchar(20) DEFAULT 'upload' NOT NULL,
	"status" varchar(20) DEFAULT 'new' NOT NULL,
	"company_id" varchar(36) NOT NULL,
	"created_by" varchar(36) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "companies" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"domain" varchar(255),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "interviews" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"candidate_id" varchar(36) NOT NULL,
	"recruiter_id" varchar(36) NOT NULL,
	"company_id" varchar(36) NOT NULL,
	"status" varchar(20) DEFAULT 'scheduled' NOT NULL,
	"scheduled_at" timestamp with time zone,
	"started_at" timestamp with time zone,
	"completed_at" timestamp with time zone,
	"transcript" text,
	"recording_url" varchar(500),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "schedules" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"candidate_id" varchar(36) NOT NULL,
	"recruiter_id" varchar(36) NOT NULL,
	"company_id" varchar(36) NOT NULL,
	"interview_id" varchar(36),
	"start_time" timestamp with time zone NOT NULL,
	"end_time" timestamp with time zone NOT NULL,
	"timezone" varchar(50) NOT NULL,
	"status" varchar(20) DEFAULT 'pending' NOT NULL,
	"meeting_url" varchar(500),
	"calendar_event_id" varchar(255),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"company_id" varchar(36) NOT NULL,
	"role" varchar(20) DEFAULT 'recruiter' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
