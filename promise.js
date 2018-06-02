function calculoLargo(value) {
    console.log('A');
    return new Promise((resolver,reject) => {
        setTimeout(() => {
            if(value > 10) {
                reject('Ha fallado el calculo largo');
            } else {
                console.log('B')
                resolver({result: 100});
            }
    }, 3000);
    console.log('C')
});
}

console.log(calculoLargo(2));
