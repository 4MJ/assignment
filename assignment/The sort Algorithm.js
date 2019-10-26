//How to sort numbers in an ascending or descending order without the use of the sort method
//Ascending order
function ascending(values){
    if(values.length <=1){
        return values;
    }else{
        let leftarray=[];
        let rightarray=[]
        let pivot=values.pop();
        let ascend=[];
        let x=values.length;
        for(let i=0; i<x; i++){
            if(values[i]<=pivot){
                leftarray.push(values[i]);
            }else{
                rightarray.push(values[i]);
            }
        }
        return ascend.concat(ascending(leftarray),pivot,ascending(rightarray));
    }
}
let content=[1, 6, 9, 0, 5,4, 13, 7.0, 8.9, 0.02, 0.2, 0.1];//This also works for alphabets.
console.log(`The original array is: ${content}`);
let arranged=ascending(content);
console.log(`The array in ascending order is: ${arranged}`);

//Descending order
function decending(value){
    if(value.length <=1){
        return value;
    }else{
        let leftside=[];
        let rightside=[]
        let pivotvalue=value.pop();
        let decend=[];
        let y=value.length;
        for(let j=0; j<y; j++){
            if(value[i]<=pivotvalue){
                rightside.push(value[i]);
            }else{
                leftside.push(value[i]);
            }
        }
        return decend.concat(decending(leftside),pivot,decending(rightside));
    }
}
let contents=[1, 6, 9, 0, 5,4, 13, 7.0, 8.9, 0.02, 0.2, 0.1];//This also works for alphabets.
console.log(`The original array is: ${contents}`);
let ordered=ascending(contents);
console.log(`The array in decending order is: ${aordered}`);

//Both sortings where done using the quick sort method which is a divide and conquer method.