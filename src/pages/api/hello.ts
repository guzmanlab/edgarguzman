// @pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import config from '@lib/configuration';

const hello = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        name: config.env.COMPANY_NAME
    });
};

export default hello;
