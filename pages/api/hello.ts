// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { restaurantList, restaurantCarousels } from '../../components/datav2';

const restaurantListData = restaurantList;
const restaurantCarouselsData = restaurantCarousels;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // future: use req.body to specify a restaurant to fetch in the future?
    res.status(200).json({ restaurantListData, restaurantCarouselsData });
}
