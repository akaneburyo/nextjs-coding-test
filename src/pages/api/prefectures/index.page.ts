import type { NextApiRequest, NextApiResponse } from 'next'

import { PREFECTURES } from './const'

import { sleep } from '../util'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  await sleep()

  res.status(200).json({
    data: {
      items: PREFECTURES,
    },
  })
}
