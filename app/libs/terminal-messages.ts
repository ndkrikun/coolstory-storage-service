export const requestMessage = (complete: Boolean, method: String, name: String): void => {
  const line: String = '----------------------------------------------------------------------------'
  const arrow: String = complete ? '<-----' : '----->'
  
  !complete && console.log(`\n${line}\n`)
  console.log(`${arrow} ${method} | ${name}`)
  complete && console.log(`${line}\n`)
}