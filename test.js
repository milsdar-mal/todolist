function aboba(f) {
    let end = 0;
    let dlin = f.length;
    for (let i = 0; i < dlin; i++){
        for (let j = i + 1; j < dlin; j++){
            if (f[i]+f[j] === 0) {
                end++;
                delete f[i];
                delete f[j];
                break;
            }
        }
    }
    return end;
}

console.log('0 ', aboba([]));
console.log('1 ', aboba([1,-1]));
console.log('1 ', aboba([0,0]));
console.log('2 ', aboba([-4,6,4,12,-6]));