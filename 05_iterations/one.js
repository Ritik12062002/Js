//for
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i=0;i<=10;i++){
    const ele =i;
    if(ele==5){
        // console.log("5 is best number");
    }
    // console.log(ele);
}


for(let i=1;i<=10;i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
    // console.log(`Inner loop value ${j} and inner loop ${i}`);

    // console.log(i+ '*' + j + "=" + i*j);
    }
}

const myArray =['a','b','s']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}