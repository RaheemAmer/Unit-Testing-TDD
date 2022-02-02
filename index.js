
function sum(values) {
    let sum = 0;

    values.forEach((val) => {
        sum += val;
    });

    return sum;
}

function positive(values) {
    return values.filter((x) => {
        return x > 0;
    });
}

module.exports = { sum, positive };