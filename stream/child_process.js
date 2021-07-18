const {execFile} = require('child_process')

const execFiles = execFile('ls', ['../ && pwd'])
execFiles.stdout.on('data', (chunk)=>{
  console.log(chunk)
})

execFiles.stdout.on('error', (chunk)=>{
  console.log(chunk)
})
// const {exec} = require('child_process');
// const util = require('util')
// const execPromise = util.promisify(exec)
//
// const n = '; pwd'
//
// execPromise(`ls ${n}`).then((chunk)=>{
//   console.log(chunk.stdout)
// })

// exec('ls ../', (error,stdout, stderr) => {
//   console.log(stdout)
// })
