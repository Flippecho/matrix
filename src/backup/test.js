// 辗转相除法求最大公约数
function getGCD(a, b) {
    return b ? getGCD(b, a % b) : a;
}

// 负数始终体现在分子上
function adjustNegative(fraction) {
    const numerator = fraction.numerator;
    const denominator = fraction.denominator;
    
    if (numerator < 0 && denominator < 0) {
        return {
            numerator: Math.abs(numerator),
            denominator: Math.abs(denominator),
        };
    } else if (numerator < 0 || denominator < 0) {
        return {
            numerator: -Math.abs(numerator),
            denominator: Math.abs(denominator),
        };
    }

    return fraction;
}

// 化简成标准形式
function adjustFraction(fraction) {
    const numerator = fraction.numerator;
    const denominator = fraction.denominator;

    return adjustNegative(
        {
            numerator: numerator / getGCD(numerator, denominator),
            denominator: denominator / getGCD(numerator, denominator)
        }
    )
}

// 加法运算
function fractionAddition(fractionA, fractionB) {
    const numeratorA = fractionA.numerator;
    const denominatorA = fractionA.denominator;
    const numeratorB = fractionB.numerator;
    const denominatorB = fractionB.denominator;

    return adjustFraction(
        {
            numerator: numeratorA * denominatorB + numeratorB * denominatorA,
            denominator: denominatorA * denominatorB
        }
    )
}

// 减法运算
function fractionSubtraction(fractionA, fractionB) {
    const numeratorA = fractionA.numerator;
    const denominatorA = fractionA.denominator;
    const numeratorB = fractionB.numerator;
    const denominatorB = fractionB.denominator;

    return adjustFraction(
        {
            numerator: numeratorA * denominatorB - numeratorB * denominatorA,
            denominator: denominatorA * denominatorB
        }
    )
}

// 乘法运算
function fractionMultiplication(fractionA, fractionB) {
    const numeratorA = fractionA.numerator;
    const denominatorA = fractionA.denominator;
    const numeratorB = fractionB.numerator;
    const denominatorB = fractionB.denominator;

    return adjustFraction({
        numerator: numeratorA * numeratorB,
        denominator: denominatorA * denominatorB
    })
}

// 除法运算
function fractionDivision(fractionA, fractionB) {
    const numeratorA = fractionA.numerator;
    const denominatorA = fractionA.denominator;
    const numeratorB = fractionB.numerator;
    const denominatorB = fractionB.denominator;

    return adjustFraction(
        {
            numerator: numeratorA * denominatorB,
            denominator: denominatorA * numeratorB
        }
    )
}

//分数转小数并保留三位
function fractionToDecimal(fraction) {
    const numerator = fraction.numerator;
    const denominator = fraction.denominator;

    return Math.round(numerator / denominator * 1000) / 1000
}

let fractionA = {
    numerator: 15,
    denominator: 4
}, fractionB = {
    numerator: 7,
    denominator: 3
};

console.log(fractionToDecimal((fractionAddition(fractionA, fractionB))));
console.log(fractionToDecimal((fractionSubtraction(fractionA,fractionB))));
console.log(fractionToDecimal(fractionMultiplication(fractionA, fractionB)));
console.log(fractionToDecimal(fractionDivision(fractionA, fractionB)));