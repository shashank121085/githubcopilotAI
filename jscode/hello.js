function fibonacciSeries(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let series = [0, 1];
    let i = 2;

    while (i < n) {
        series[i] = series[i - 1] + series[i - 2];
        i++;
    }

    return series;
}

const n = 5;
const result = fibonacciSeries(n);
console.log(result);
