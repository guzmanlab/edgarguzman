ALTER TABLE "customers" DROP CONSTRAINT "customers_email_unique";--> statement-breakpoint
DROP INDEX "customer_name_idx";--> statement-breakpoint
DROP INDEX "customer_email_idx";--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "email";
