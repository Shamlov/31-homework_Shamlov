/*Создать массив «Список покупок». Каждый элемент массива 
является объектом, который содержит название продукта, необходимое количество и куплен или нет.
Написать несколько функций для работы с таким массиво*/


const purchases = [
    {
        productName: 'cheese',
        quantity: 2,
        purchased: false,
    },
    {
        productName: 'milk',
        quantity: 7,
        purchased: true,
    },
    {
        productName: 'bread',
        quantity: 4,
        purchased: true,
    },
    {
        productName: 'meat',
        quantity: 5,
        purchased: false,
    }
]

// Вывод всего списка на экран таким образом, чтобы сначала 
// шли некупленные продукты, а потом – купленные

function showPurchases(arr) {
    arr.forEach(function(elem) {
        if(elem.purchased == false) {
            console.log(elem.productName)
        }
    }
    )
    arr.forEach(function(elem) {
        if(elem.purchased == true) {
            console.log(elem.productName)
        }
    }
    )
}

// варианнт 2


function showPurchases2(arr) {
    arrRez = []
    arr.forEach(function(elem) {
        if(elem.purchased == true) {
            arrRez.push(elem.productName)
        } else {
            arrRez.unshift(elem.productName)
        }
    }
    )
    console.log(arrRez)
}

// showPurchases2(purchases)
// showPurchases(purchases)


// Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую.




class newProdCon  {
    constructor(n, q = 1) {
        this.productName = n
        this.quantity = q
        this.purchased = true
    }
}

let prd = 'milk'                           // введите какой продукт добавить
let newProd = new newProdCon(prd)
// console.log(newProd)                        // объект есть в переменной 
purchases.push({})          // не могу добавить сваойства объекта в массив      

// for(let key in newProd) {
//     key, newProd[key]
// }      // добавим в массив созданный объект
// console.log(newProd) 

// не удалось решить


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*cоздать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за 
единицу товара. Написать следующие функции. */

let cashReceipt = [
    {   
        nameProd: 'milk',
        quantity: 2,
        price: 58,
    },
    {   
        nameProd: 'carrots',
        quantity: 2,
        price: 654,
    },
    {   
        nameProd: 'orange',
        quantity: 2,
        price: 5,
    },
    {   
        nameProd: 'water',
        quantity: 2,
        price: 35,
    },
    {   
        nameProd: 'cheese',
        quantity: 2,
        price: 30,
    }
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Распечатка чека на экран 
function printReceipt(arr) {
    arr.forEach((elem) => console.log(`аименование: ${elem.nameProd} / колличество: ${elem.quantity} / цена: ${elem.price}`) )
}
// printReceipt(cashReceipt)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Подсчет общей суммы покупки
function productPrice(arr) {
    let sum = 0
    arr.forEach( (elem) => sum += elem.price )
    console.log(sum)
    return sum
}
// productPrice(cashReceipt)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Получение самой дорогой покупки в чеке.

function maxPrice(arr) {
    let rez = arr[0].price
    arr.forEach(
        function(el) {
            if(el.price > rez) {
                rez = el.price
            }
        }
    )
    console.log(rez)
    return rez
} 

// maxPrice(cashReceipt)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Подсчет средней стоимости одного товара в чеке. 

function arithmeticAverageCost (array) {
    let sum = 0
    array.forEach(
        function(el) {
            sum += el.price 
        }
    )
    rez = sum / (array.length + 1)
    console.log(rez)
    return rez
}

// arithmeticAverageCost (cashReceipt)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// оздать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т.д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и 
// текст, и выводит этот текст с помощью document.write() в тегах 
// <p></p>, добавив в открывающий тег атр

// ХЗ

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
названия факультета, для которого она предназначена. */

let classrooms  =  [
    {
        name: 'chemistry',
        quantity: 14,
        facultyName:  'chemistryFac'
    },
    {
        name: 'physics',
        quantity: 18,
        facultyName:  'physicsFac'
    },
    {
        name: 'biology',
        quantity: 11,
        facultyName:  'historyFac'
    },
    {
        name: 'history',
        quantity: 16,
        facultyName:  'biologyFac'
    }
]

// Вывод на экран всех аудиторий
function classroomsName(arr) {
    let rez = ''
    arr.forEach(
    function(elem) {
        rez += elem.name + ' '
    }    
    )
    console.log(rez)
}
// classroomsName(classrooms)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Вывод на экран аудиторий для указанного факультета.

function whatAudience(arr, f) {
    arr.forEach(
        function(el) {
            if(el.facultyName == f) {
                console.log(el.name )
            }
        }
    )
}
// whatAudience(classrooms, 'historyFac')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// . Вывод на экран только тех аудиторий, которые подходят для 
// переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета
let group = {
    name: 'chemistry',
    quantity: 18,
    facultyName:  'chemistryFac'
}
function checkGroup (arr, stdArr) {


}
 

// ХЗ. по заданию 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// вот такие я не знаю как сделать
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту)