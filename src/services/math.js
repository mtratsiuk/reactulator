import math from 'mathjs'

export const evalExpression = expr => new Promise((resolve, reject) => {
  try {
    const result = math.eval(expr)
    resolve((typeof result === 'number') ? result : result.value)
  } catch (error) {
    reject(error.message)
  }
})
