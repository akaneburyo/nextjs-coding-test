import type { NextApiRequest, NextApiResponse } from 'next'

import { sleep } from '../util'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
    return
  }

  await sleep()

  if (
    !req.body.title ||
    !req.body.name ||
    !req.body.address?.prefecture ||
    !req.body.address?.city ||
    !req.body.address.detail
  ) {
    res.status(400).json({
      message: 'リクエストが不正です',
    })
    return
  }

  res.status(201).json({
    data: {
      message: 'お問い合わせが完了しました',
    },
  })
}
