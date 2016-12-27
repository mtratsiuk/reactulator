import math from 'mathjs'

export const evalExpression = expr => new Promise((resolve, reject) => {
  try {
    let result = math.eval(expr)
    result = (typeof result === 'number') ? result : result.value
    resolve(result)
  } catch (error) {
    reject(error.message)
  }
})

export const shorten = number => math.format(number, {
  notation: 'exponential',
  precision: 4
})
