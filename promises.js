const promiseFUnc = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 5, 9])
        reject('There is an error')
    }, 1500)
})

promiseFUnc.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})