const someArr: Array<number> = [1, 2, 3, -1, -2, -3];

function collectPositiveNumbers(arr: Array<number>) {
    const positiveNumbers: Array<number> = [];

    if (arr.length === 0)
        return void console.log("Your initial array is empty");

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > 0) positiveNumbers.push(arr[i]);
    }

    if (positiveNumbers.length === 0) return null;

    return positiveNumbers;
}

collectPositiveNumbers(someArr);
