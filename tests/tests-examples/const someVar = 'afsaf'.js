const someVar = 'afsaf'

//цикл While  

let num = 0

while(num < 10){
    ++num;
    console.log(num);
};


do{
    ++num;
    console.log(num);
} while(num < 10);


for(let i = 0; i < 15; i++ ){
    if(i % 2 == 0){
        continue;
    };

    console.log(i);
}

for(const i of [1, 2,3,4]){
    console.log(i);
}

for(const i in {x: 1, y: 2}){
    console.log(i);
}

