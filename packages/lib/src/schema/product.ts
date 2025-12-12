import type { fetchProducts } from "@edgarguzman/drizzle/queries/product";
import { product } from "@edgarguzman/drizzle/schema/product";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(product).omit(timestamp);

export const createProductSchema = createInsertSchema(product).omit(timestamp);

export const createProductParams = baseSchema
  .extend({
    activated: z.boolean().default(true).nullish(),
    status: z.enum(["Stock", "OutOfStock"]).default("Stock").nullish(),
  })
  .omit({
    id: true,
    userId: true,
  });

export const updateProductSchema = createUpdateSchema(product).omit(timestamp);

export const updateProductParams = baseSchema
  .extend({
    activated: z.boolean().default(true).nullish(),
    status: z.enum(["Stock", "OutOfStock"]).default("Stock").nullish(),
  })
  .omit({
    userId: true,
  });

export const productIdSchema = baseSchema.pick({
  id: true,
});

export type Product = typeof product.$inferSelect;

export type CreateProduct = z.infer<typeof createProductSchema>;

export type CreateProductParams = z.infer<typeof createProductParams>;

export type UpdateProduct = z.infer<typeof updateProductSchema>;

export type UpdateProductParams = z.infer<typeof updateProductParams>;

export type ProductId = z.infer<typeof productIdSchema>["id"];

export type CompleteProduct = Awaited<
  ReturnType<typeof fetchProducts>
>["products"][number];
