function isPalindrome (str) {
    if (str.length > 1) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function zadacha(txt) {
    let max = "";
    for (let i = 0; i < txt.length; i++) {
        let pal = "";
        for (let j = i; j < txt.length; j++) {
            pal = pal + txt[j];
            if (isPalindrome(pal)) {
                break;
            } else if (j+1 === txt.length) {
                pal = "";
            }
        }
        if (pal.length > max.length) {
            max = pal
        }
    }
    return max;
}

function randomString(i) {
    let rnd = '';
    while (rnd.length < i)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
}

max = zadacha(randomString(100000));
console.log(max)