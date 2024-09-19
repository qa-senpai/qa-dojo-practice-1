// функція  `

function foo(name, lastName){
    return console.log(`привіт мене звати ${name} ${lastName}`)
}

foo("Павло", "Safonov");

function bannerSelector(bannerId){
    console.log(bannerId);
    return `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${bannerId}']`;
};




// ключове слово function
// назва функції - що робить ця функція??? 
// ( ) - параметри функції  назва параметруʼ
// { } - блок коду який потрібно виконати 
// return - ключове слово яке вказує що результат виконання функації треба повернути 

let bannerSelector1 = bannerSelector(1215);

console.log(bannerSelector1);