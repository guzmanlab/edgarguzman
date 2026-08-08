import {
    createAddress,
    deleteAddress,
    fetchAddress,
    fetchAddresses,
    updateAddress,
} from "@edgarguzman/drizzle/queries/address";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const addressRouter = router({
    all: protectProcedure
        .input(
            z.object({})
        )
        .query(async () => {
            return await fetchAddresses({});
        }),

    find: protectProcedure
        .input(
            z.object({})
        )
        .query(async () => {
            return await fetchAddress({});
        }),

    create: protectProcedure
        .input(
            z.object({})
        )
        .mutation(async () => {
            return await createAddress({});
        }),

    update: protectProcedure
        .input(
            z.object({})
        )
        .mutation(async () => {
            return await updateAddress({});
        }),

    delete: protectProcedure
        .input(
            z.object({})
        )
        .mutation(async () => {
            return await deleteAddress({});
        }),
});
