DROP INDEX "account_user_idx";--> statement-breakpoint
DROP INDEX "address_country_idx";--> statement-breakpoint
DROP INDEX "address_user_idx";--> statement-breakpoint
DROP INDEX "country_user_idx";--> statement-breakpoint
DROP INDEX "order_product_idx";--> statement-breakpoint
DROP INDEX "order_user_idx";--> statement-breakpoint
DROP INDEX "product_user_idx";--> statement-breakpoint
DROP INDEX "wishlist_product_idx";--> statement-breakpoint
DROP INDEX "wishlist_user_idx";--> statement-breakpoint
CREATE INDEX "account_user_id_idx" ON "accounts" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "address_country_id_idx" ON "addresses" USING btree ("country_id");--> statement-breakpoint
CREATE INDEX "address_user_id_idx" ON "addresses" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "country_user_id_idx" ON "countries" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "order_product_id_idx" ON "orders" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "order_user_id_idx" ON "orders" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "product_user_id_idx" ON "products" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_user_id_idx" ON "sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "wishlist_product_id_idx" ON "wishlists" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "wishlist_user_id_idx" ON "wishlists" USING btree ("user_id");