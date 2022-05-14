function z1(n) {
    const id = setInterval(
        () => {
            console.log(n);
            if (n === 0) {
                clearInterval(id);
            }
            n=n-1;
        },
        1000
    )
}

console.log("Проверка")
z1(10);