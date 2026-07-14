import {
    createAddress,
    deleteAddress,
    fetchAddress,
    fetchAddresses,
    updateAddress,
} from "@edgarguzman/drizzle/queries/address";
import {
    addressIdSchema,
    createAddressParams,
    updateAddressParams,
} from "@edgarguzman/lib/schema/address";

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const addressRouter = router({
    all: protectProcedure
        // .input()
        .query(async () => {
            return await fetchAddresses({});
        }),

    find: protectProcedure
        .input(addressIdSchema)
        .query(async () => {
            return await fetchAddress({});
        }),

    create: protectProcedure
        .input(createAddressParams)
        .mutation(async () => {
            return await createAddress({});
        }),

    update: protectProcedure
        .input(updateAddressParams)
        .mutation(async () => {
            return await updateAddress({});
        }),

    delete: protectProcedure
        .input(addressIdSchema)
        .mutation(async () => {
            return await deleteAddress({});
        }),
});
