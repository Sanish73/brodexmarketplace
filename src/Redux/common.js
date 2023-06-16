const data = [1,2,3,4,5];

const op = data.reduce((sum , currentValue)=>{
        return sum + currentValue;
});

console.log(op);