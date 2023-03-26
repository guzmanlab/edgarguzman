// @pages/api/supabase/protected-route.ts
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const ProtectedRoute: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Create authenticated Supabase Client
    const supabase = createServerSupabaseClient({ req, res });
    // Check if we have a session
    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (!session) {
        {
            return res.status(401).json({
                error: 'not_authenticated',
                description: 'THe user does not have an active session or is not authenticated'
            });
        }
    }

    // Run queries with RLS on the server
    const { data } = await supabase.from('').select('*');
    res.json(data);
};

export default ProtectedRoute;
