CREATE TABLE "education" (
	"id" serial PRIMARY KEY,
	"school" varchar(255) NOT NULL,
	"href" text,
	"degree" varchar(255) NOT NULL,
	"logo_url" text,
	"start_date" date NOT NULL,
	"end_date" date,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hackathons" (
	"id" serial PRIMARY KEY,
	"title" varchar(255) NOT NULL,
	"date" date,
	"location" varchar(255),
	"description" text NOT NULL,
	"image" text,
	"links" jsonb DEFAULT '[]' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL UNIQUE,
	"href" text,
	"date" date,
	"active" boolean DEFAULT true NOT NULL,
	"description" text NOT NULL,
	"technologies" text[] DEFAULT '{}'::text[] NOT NULL,
	"links" jsonb DEFAULT '[]' NOT NULL,
	"image" text,
	"video" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work_experience" (
	"id" serial PRIMARY KEY,
	"company" varchar(255) NOT NULL,
	"href" text,
	"location" varchar(255),
	"title" varchar(255) NOT NULL,
	"logo_url" text,
	"start_date" date NOT NULL,
	"end_date" date,
	"badges" text[] DEFAULT '{}'::text[] NOT NULL,
	"description" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
