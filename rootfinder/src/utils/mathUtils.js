export const bisectionMethod = (funcStr, a, b, tol) => {
    const f = eval(`(x) => ${funcStr}`);
    let mid;

    while ((b - a) / 2 > tol) {
        mid = (a + b) / 2;
        if (f(mid) === 0) break;
        if (f(a) * f(mid) < 0) b = mid;
        else a = mid;
    }

    return mid;
};

export const newtonMethod = (funcStr, x0, tol) => {
    const f = eval(`(x) => ${funcStr}`);
    const fPrime = eval(`(x) => ${funcStr.replace(/x/g, '1')}`);
    let x = x0;

    while (Math.abs(f(x)) > tol) {
        x = x - f(x) / fPrime(x);
    }

    return x;
};
