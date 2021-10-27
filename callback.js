const callbackFunc = (callback) => {
    setTimeout(() => {
        callback('Error', undefined);
    }, 3000)
}

callbackFunc((error, result) => {
    if (error) {
        return console.log('Error ', error)
    }
    console.log(result)
})