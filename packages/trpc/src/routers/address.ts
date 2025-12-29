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

import { router } from "@rpc/client";
import { protectProcedure } from "@rpc/procedure";

export const addressRouter = router({
  all: protectProcedure
    // .input()
    .query(async ({ ctx }) => {
      return await fetchAddresses({
        userId: ctx.session?.user?.id,
      });
    }),

  find: protectProcedure.input(addressIdSchema).query(async ({ input }) => {
    return await fetchAddress({
      countryId: input.addressId,
      userId: input.userId,
    });
  }),

  create: protectProcedure
    .input(createAddressParams)
    .mutation(async ({ input }) => {
      return await createAddress({
        countryId: input.countryId,
        userId: input.userId,
        title: input.title,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        postalCode: input.postalCode,
        phone: input.phone,
        defaulted: input.defaulted,
      });
    }),

  update: protectProcedure
    .input(updateAddressParams)
    .mutation(async ({ input }) => {
      return await updateAddress({
        id: input.id,
        countryId: input.countryId,
        userId: input.userId,
        title: input.title,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        postalCode: input.postalCode,
        phone: input.phone,
        defaulted: input.defaulted,
      });
    }),

  delete: protectProcedure
    .input(addressIdSchema)
    .mutation(async ({ input }) => {
      return await deleteAddress({
        countryId: input.countryId,
        userId: input.userId,
      });
    }),
});
