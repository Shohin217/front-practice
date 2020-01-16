# Задачи

## Задача 1.

Задача: в массиве хранятся данные о продажах. Написать функцию, которая вычисляет сумму всех продаж

```js
const sales = [1000, 2000, 500, 5000];
```

## Задача 2

```js
const scores = [8, 7, 4, 2, 10];
```

В массиве scores хранятся оценки, выставленные пользователями оператору колл-центра. 

Необходимо написать функцию, которая вычисляет среднюю оценку.

## Задача 3

```js
const scores = [8, 7, 4, 2, 10];
```

В массиве scores хранятся средние оценки разных менеджеров, найдите: максимальную оценку и индекс менеджера (нужно написать функцию).

Подсказка: функция должна возвращать объект (сами его создайте)

## Задача 4

```js
const scores = [8, 7, 4, 2, 10];
```

В массиве scores хранятся средние оценки разных менеджеров, найдите: минимальную оценку и индекс менеджера (нужно написать функцию).

Подсказка: функция должна возвращать объект (сами его создайте)

## Задача 5

Задача: в массиве хранятся данные о продажах. Написать функцию, которая вычисляет сумму всех продаж

```js
const sales = [
    {id: 1, amount: 1000},
    {id: 2, amount: 2000},
    {id: 3, amount: 500},
    {id: 4, amount: 5000},
];
```

## Задача 6

```js
const scores = [
    {id: 1, name: 'Petya', score: 8},
    {id: 2, name: 'Masha', score: 6},
    {id: 3, name: 'Dasha', score: 3},
    {id: 4, name: 'Vasya', score: 7},
];
```

В массиве scores хранятся средние оценки разных менеджеров, найдите: имя и id менеджера с максимальной оценкой 

## Задача 7

```js
const purchases = [
    {date: '01.01.2020', values: [1000, 2000, 1000, 100]},
    {date: '02.01.2020', values: [100, 200, 1000, 100]},
    {date: '03.01.2020', values: [100, 200, 1000, 10000]},
    {date: '04.01.2020', values: [1000, 2000, 1000, 10000]},
];
```

В массиве purchases хранятся покупки по дням. Напишите функцию, которая возвращает сумму всех покупок (не за каждый день, а сумму всех).

## Задача 8

```js
const purchases = [
    {date: '01.01.2020', values: [1000, 2000, 1000, 100]},
    {date: '02.01.2020', values: [100, 200, 1000, 100]},
    {date: '03.01.2020', values: [100, 200, 1000, 10000]},
    {date: '04.01.2020', values: [1000, 2000, 1000, 10000]},
];
```

В массиве purchases хранятся покупки по дням. Напишите функцию, которая возвращает дату, когда было совершено максимальное количество покупок.

## Задача 9

```js
const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];
```

В массиве purchases хранятся покупки по дням.

Напишите функции:
1. Находят дату, в которую совершено максимальное количество покупок (количество, а не стоимость) - подсказку см. ниже
2. Находят дату, в которую совершено максимальное количество покупок (по суммарной стоимости)
3. Найти самую дорогую покупку
4. Найти категорию, в которой совершено максимальное количество покупок по сумме
5. Найти среднюю стоимость трат в день
6. Подготовить статистику в разрезе (сумма трат в день):
```js
const stats = [
    {date: '01.01.2020', amount: 5300},
    {date: '03.01.2020', amount: 33000},
    {date: '04.01.2020', amount: 3000},
];
```

Продвинутая часть (не обязательно)

7. Подготовить статистику в разрезе (сумма трат по категориям):
```js
const stats = [
    {category: 'auto': amount: 5000},
    {category: 'food', amount: 6000},
    {category: 'beauty', amount: 300},
    {category: 'travel', amount: 30000},
];
```
8. Выбрать только покупки по определённой категории (в функцию передаётся категория и массив):
```js
const purchases = [
    {id: 1, date: '01.01.2020', amount: 2000, category: 'auto'},
    {id: 2, date: '01.01.2020', amount: 3000, category: 'food'},
    {id: 3, date: '01.01.2020', amount: 300, category: 'beauty'},
    {id: 4, date: '03.01.2020', amount: 3000, category: 'auto'},
    {id: 5, date: '03.01.2020', amount: 30000, category: 'travel'},
    {id: 6, date: '04.01.2020', amount: 3000, category: 'food'},
];

const result = filterByCategory(purchases, 'auto');

// В result должно быть:
result = [
    {id: 1, date: '01.01.2020', amount: 2000, category: 'auto'},
    {id: 4, date: '03.01.2020', amount: 3000, category: 'auto'},
];
```

---- 

Подсказки:
```js
{
    const purchases = [
        {id: 1, date: '01.01.2020', amount: 2000, category: 'auto'},
        {id: 2, date: '01.01.2020', amount: 3000, category: 'food'},
        {id: 3, date: '01.01.2020', amount: 300, category: 'beauty'},
        {id: 4, date: '03.01.2020', amount: 3000, category: 'auto'},
        {id: 5, date: '03.01.2020', amount: 30000, category: 'travel'},
        {id: 6, date: '04.01.2020', amount: 3000, category: 'food'},
    ];

    // acc - []
    // acc - [{date: 01.01.2020, amount: 2000}]
    const result = purchases.reduce((acc, curr) => {
        // find - возвращает объект, если есть
        // если нет - undefined
        const exists = acc.find(o => o.date === curr.date);
        if (exists === undefined) {
            acc.push({
                date: curr.date,
                amount: curr.amount,
            });
        } else {
            exists.amount += curr.amount;
        }
        return acc;
    }, []);
    console.log(result);
}
```

Для 9.4:

Основная идея - храним в `acc` массив, в который добавляем (либо увеличиваем) сумму по категориям
```js
// [] - find -> undefined
const mapped = purchases.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const existent = acc.find(o => o.category === curr.category);
        if (existent === undefined) {
            acc.push({
                category: curr.category,
                amount: curr.amount,
            });
        } else {
            existent.amount += curr.amount;
        }
        return acc;
    }, [])
    // TODO: дальше ищете max
;
console.log(mapped);
```
