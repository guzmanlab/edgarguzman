// @lib/prisma.ts
import { PrismaClient } from '@prisma/client';

import config from '@lib/config';

export const prisma = global.prisma || new PrismaClient();

if (config.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

// export default prisma;
