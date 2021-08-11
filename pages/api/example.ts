import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiExampleResType } from '../../models/types';

export default (req: NextApiRequest, res: NextApiResponse<ApiExampleResType>) => {
  res.status(200).json({ title: '- Is This Architecture Perfect?' });
};
