export const requestMessage = (complete: Boolean, method: String, name: String): void => {
  const line: String = '---------------------------------------------'
  const arrow: String = complete ? '<-----' : '----->'
  
  console.log(`${arrow} ${method} | ${name}`)
  complete && console.log(`\n${line}\n`)
}