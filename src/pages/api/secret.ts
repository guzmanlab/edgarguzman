import type { NextApiHandler } from 'next';
import { getSession } from 'next-auth/react';

/**
 * Wrapper for unstable_getServerSession https://next-auth.js.org/configuration/nextjs
 * See example usage in trpc createContext or the restricted API route
 */
const SecretSession: NextApiHandler = async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        res.end(`Welcome to the mega secret VIP club, ${session.user?.email ?? session.user?.name}`);
    } else {
        res.statusCode = 403;
        res.end('Hold on, you are not allowed in here!');
    }
};

export default SecretSession;
