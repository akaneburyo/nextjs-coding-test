export const sleep = (ms: number = 3000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
