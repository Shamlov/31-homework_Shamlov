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

showPurchases2(purchases)
showPurchases(purchases)


// Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую.

