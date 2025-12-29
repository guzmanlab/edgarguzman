import { router } from "@rpc/client";
import { addressRouter } from "@rpc/routers/address";
import { countryRouter } from "@rpc/routers/country";
import { customerRouter } from "@rpc/routers/customer";
import { orderRouter } from "@rpc/routers/order";
import { productRouter } from "@rpc/routers/product";
import { userRouter } from "@rpc/routers/user";
import { wishlistRouter } from "@rpc/routers/wishlist";

export const appRouter = router({
  address: addressRouter,
  country: countryRouter,
  customer: customerRouter,
  order: orderRouter,
  product: productRouter,
  user: userRouter,
  wishlist: wishlistRouter,
});

export type AppRouter = typeof appRouter;
