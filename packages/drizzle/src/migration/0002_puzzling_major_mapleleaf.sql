DROP INDEX "users_id_index";--> statement-breakpoint
CREATE INDEX "country_title_idx" ON "countries" USING btree ("title");--> statement-breakpoint
CREATE INDEX "product_title_idx" ON "products" USING btree ("title");--> statement-breakpoint
CREATE INDEX "user_name_idx" ON "users" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "user_email_idx" ON "users" USING btree ("email");