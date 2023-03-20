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
      title: string
      name: string
      email: string

      address: {
        prefecture?: string | undefined
        city: string
        detail?: string | undefined
      }

      detail: string
    }
  }
}
