// @pages/api/supabase/index.ts
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Database } from '@utils/data-base';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Get product
    const supabaseServerClient = createServerSupabaseClient<Database>({
        req,
        res
    });

    const {
        data: { user }
    } = await supabaseServerClient.auth.getUser();

    res.status(200).json({ name: user?.id ?? '' });
};

export default handler;
