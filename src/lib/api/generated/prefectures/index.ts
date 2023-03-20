/* eslint-disable */
export type Methods = {
  /** fetch prefecture list */
  get: {
    status: 200

    /** success */
    resBody: {
      data: {
        items: {
          code: string
          name: string
        }[]
      }
    }
  }
}
