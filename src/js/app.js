{
    function calculateSum(items) { // имена аргументов придумываю сам
        // undefined
        let sum = 0;
        // loop: -> forof
        for (const item of items) {
            sum = sum + item; // sum += items;
        }
        // если вам не нужны индексы - то не используйте
        // for (let index = 0; index < items.length; index++) {
        //     const element = items[index];
        //     sum = sum + element;
        // }
        return sum;
    }

    const sales = [1000, 2000, 500, 5000];
    const result = calculateSum(sales);
    console.log(result);
}

{
    function calculateSum(items) { // имена аргументов придумываю сам
        // undefined
        let sum = 0;
        // loop: -> forof
        for (const item of items) {
            sum = sum + item; // sum += items;
        }
        // если вам не нужны индексы - то не используйте
        // for (let index = 0; index < items.length; index++) {
        //     const element = items[index];
        //     sum = sum + element;
        // }
        return sum;
    }

    function calculateAvg(items) { // имена аргументов придумываю сам
        const sum = calculateSum(items); // композиция
        const avg = sum / items.length; // items.length - количество элементов в массиве
        return avg;
        // return calculateSum(items) / items.length;
    }

    const scores = [8, 7, 4, 2, 10];
    const result = calculateAvg(scores);
    console.log(result);
}

{
    // scores - массив
    // max, index:
    // const result = {
    //     max: 0,
    //     index: 0,
    // }
    function findMaxValueAndIndex(items) {
        // max, index
        let max = items[0];
        let maxIndex = 0;
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            if (max < item) {
                max = item;
                maxIndex = index;
            }
        }
        // если бы только значение
        // for (const item of items) {
        //     if (max < item) {
        //         max = item;
        //     }
        // }
        const result = {
            max: max,
            index: maxIndex,
        };
        return result;
    }
    const scores = [8, 7, 4, 2, 10];
    const result = findMaxValueAndIndex(scores);
    console.log(result);
}
