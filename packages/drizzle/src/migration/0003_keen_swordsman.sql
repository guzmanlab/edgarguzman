CREATE TABLE "customers" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "customers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "addresses" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "addresses" ALTER COLUMN "country_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "addresses" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "product_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "sessions" ALTER COLUMN "id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "sessions" ALTER COLUMN "user_id" SET DATA TYPE varchar(24);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "wishlists" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "wishlists" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "wishlists" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
-- ALTER TABLE "accounts" ADD CONSTRAINT "accounts_provider_id_account_id_pk" PRIMARY KEY("provider_id","account_id");--> statement-breakpoint
-- ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_identifier_value_pk" PRIMARY KEY("identifier","value");--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "account_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "provider_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "access_token" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "refresh_token" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "id_token" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "access_token_expires_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "refresh_token_expires_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "scope" varchar;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "password" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "slug" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "token" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "expires_at" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "ip_address" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "user_agent" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "verification_tokens" ADD COLUMN "identifier" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "verification_tokens" ADD COLUMN "value" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "verification_tokens" ADD COLUMN "expires_at" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "customer_user_id_idx" ON "customers" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "customer_name_idx" ON "customers" USING btree ("name");--> statement-breakpoint
CREATE INDEX "customer_email_idx" ON "customers" USING btree ("email");
