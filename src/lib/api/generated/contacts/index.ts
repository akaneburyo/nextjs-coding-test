/* eslint-disable */
export type Methods = {
  /** create contact */
  post: {
    status: 201

    /** success */
    resBody: {
      message: string
    }

    reqBody: {
      category: string
      name: string
      email: string

      address: {
        prefecture_code: string
        city: string
        detail?: string | undefined
      }

      detail: string
    }
  }
}
