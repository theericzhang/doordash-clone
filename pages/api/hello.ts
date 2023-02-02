// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { restaurantList, restaurantCarousels } from '../../components/datav2';

type Data = {
    name: string
};

const restaurantListData = restaurantList;
const restaurantCarouselsData = restaurantCarousels;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe' });
}
