
export function add(a, b){
    return a + b
}

export function subtract(a, b){
    return a - b
}

export function multiply(a, b){
    return a * b
}

export function divide(a, b){
    if(b === 0){
        throw new Error("Division by zero is not allowed.")
    }
    return a / b
}


export function square(x){
    return x * x
}


export function squareRoot(x){
    if(x < 0){
        throw new Error("Cannot calculate the sqaure root of a negative number.")
    }
    return Math.sqrt(x)
}