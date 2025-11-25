ALTER TABLE "customers" ADD COLUMN "name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "email" varchar NOT NULL;--> statement-breakpoint
CREATE INDEX "customer_name_idx" ON "customers" USING btree ("name");--> statement-breakpoint
CREATE INDEX "customer_email_idx" ON "customers" USING btree ("email");--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_email_unique" UNIQUE("email");