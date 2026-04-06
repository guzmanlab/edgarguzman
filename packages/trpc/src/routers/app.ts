import { router } from "../client";
import { addressRouter } from "../routers/address";
import { countryRouter } from "../routers/country";
import { customerRouter } from "../routers/customer";
import { orderRouter } from "../routers/order";
import { productRouter } from "../routers/product";
import { userRouter } from "../routers/user";
import { wishlistRouter } from "../routers/wishlist";

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
