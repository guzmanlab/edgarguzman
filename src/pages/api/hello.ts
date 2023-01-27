import { type NextApiRequest, type NextApiResponse } from 'next';
import config from '../../lib/config';

const hello = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        name: config.env.COMPANY_LOGO,
    });
};

export default hello;
