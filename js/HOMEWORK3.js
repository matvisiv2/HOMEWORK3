// Practical task 3
'use strict';

// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву.
// Також реалізуйте завдання через while.
function task01 () {
    let arr = [2, 3, 4, 5];

    let productInForCycle = 1;
    for (let i = 0; i < arr.length; i++) {
        productInForCycle *= arr[i];
    }
    console.log(`product in for cycle = ${productInForCycle}`);

    let productInWhileCycle = 1;
    let i = 0;
    while (i < arr.length) {
        productInWhileCycle *= arr[i];
        i++;
    }
    console.log(`product in while cycle = ${productInWhileCycle}`);
}

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15.
// Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"
function task02 () {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
// Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // [399,310,232,379,40]
function randArray (k) {
    const result = [];
    for (let i = 0; i < k; i++) {
        result[i] = ((Math.random() * 1000) % 501).toFixed(0);
    }
    return result;
}

function task03 () {
    const numberOfElements = document.getElementById('numberOfElements').value;
    console.log(randArray(numberOfElements));
}

// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b.
// Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
// Sample Output:
// raiseToDegree(3, 4);  // 81
function raiseToDegree (a, b) {
    return Math.pow(a, b);
}

function task04 () {
    const number = document.getElementById('numberT04').value;
    const power = document.getElementById('powerT04').value;
    const result = raiseToDegree(number, power);

    document.getElementById('resultT04').innerHTML = result;
}

// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів
// і повертати той, який має найменше значення.
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4
function findMin () {
    console.log(arguments);
    console.log(Math.min(...arguments));
}

function task05 () {
    const numberOfElements = Math.ceil(Math.random() * 10);
    findMin(...randArray(numberOfElements));
}

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
function findUnique (arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                continue;
            }
            if (arr[j] === currentElement) {
                return false;
            }
        }
    }
    return true;
}

function task06 () {
    const numberOfElements = Math.ceil(Math.random() * 10);
    console.log(findUnique(randArray(numberOfElements)));
}

// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив,
// 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
function lastElement (arr, lastCount = 1) {
    console.log(arr);
    console.log(lastCount);
    return arr.slice(arr.length - lastCount);
}

function task07 () {
    const numberOfElements = Math.ceil(Math.random() * 10);
    const numberOfLastElements = Math.ceil(Math.random() * 10 % numberOfElements);
    console.log(lastElement(randArray(numberOfElements), numberOfLastElements));
}

// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script'
// Output string: 'I Love Java Script'
