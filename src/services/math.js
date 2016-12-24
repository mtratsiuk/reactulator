import math from 'mathjs'

export const evalExpression = expr => new Promise((resolve, reject) => {
  try {
    resolve(math.eval(expr))
  } catch (error) {
    reject(error.message)
  }
})
