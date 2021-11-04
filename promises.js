// const promiseFUnc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1, 5, 9])
//         reject('There is an error')
//     }, 1500)
// })

// promiseFUnc.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })



const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(2, 3).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//         add(sum2, 10).then((sum3) => {
//             console.log(sum3)
//         }).catch((e) => {
//             console.log(e)
//         })
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })


add(2, 3).then((sum) => {
    console.log(sum)
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 10)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})