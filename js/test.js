// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// new Promise((re,rj)=>{
//     console.log(7)
// })
// Promise.resolve().then(() => {
// 	console.log(3)
// }).then(() => {
// 	console.log(4)
// })

// console.log(5)


setImmediate(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 100)
    setImmediate(() => {
      console.log(3)
    })
    process.nextTick(() => {
      console.log(4)
    })
  })
  process.nextTick(() => {
    console.log(5)
    setTimeout(() => {
      console.log(6)
    }, 100)
    setImmediate(() => {
      console.log(7)
    })
    process.nextTick(() => {
      console.log(8)
    })
  })
  console.log(9)