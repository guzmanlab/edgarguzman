// @pages/api/prisma/index.ts
import config from '@lib/config';
import { PrismaClient } from '@prisma/client';

export const prisma = global.prisma || new PrismaClient();

if (config.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

// export default prisma;
