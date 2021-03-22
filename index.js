let SIZE = 698;
const sumHashMap = {};
const matrix = new Array(SIZE);

function calculateRobotQuaterArea(){
    console.log("size is ",SIZE)
    console.time("calculateRobotArea")
    let count = 0;
    
    for(let rowId=0; rowId<matrix.length; rowId++){
        matrix[rowId] = new Array(SIZE).fill(0)
    }
    for(let r=0; r<SIZE; r++){
        for(let c=0; c<SIZE; c++){
            if(getDigitsSum(r) + getDigitsSum(c+1) < 24){
                matrix[r][c]=1;
            }
    
        }   
    }
    let stack = [[0,0]]
    while(stack.length){
        let cell = stack.pop();
        // console.log("cell ",cell)
        const [row,col] = cell;
    
        count++;
        matrix[row][col] = 2;

        if(matrix[row][col]!==0){
            if(matrix[row+1] && matrix[row+1][col] && matrix[row+1][col]==1){
                matrix[row+1][col] = 2;
                stack.push([row+1, col])
            }
            if(matrix[row] && matrix[row][col+1] && matrix[row][col+1]==1){
                matrix[row][col+1] = 2;
                stack.push([row, col+1])
            }
            if(matrix[row-1] && matrix[row-1][col] && matrix[row-1][col]==1){
                matrix[row-1][col] = 2;
                stack.push([row-1, col])
            }
            if(matrix[row] && matrix[row][col-1] && matrix[row][col-1]==1){
                matrix[row][col-1] = 2;
                stack.push([row, col-1])
            }
        }
    }
    console.timeEnd("calculateRobotArea")
    return count
}


function getDigitsSum(num){
    //Using a hashMap to cache results which improves performance by ~15%, but adds memory usage
    if(sumHashMap[num]){
        return sumHashMap[num]
    }

    num = Math.abs(num);
    let sum = 0;
    let number = 0+num;

    while(number>=10){
        sum += number%10
        number = Math.floor(number/10);
    }
    sum += number;

    sumHashMap[num] = sum;
    //Tested also this one, it's slower
    // sum = (""+num).split("").reduce((s,n)=>{
        // return Number(s) + Number(n);
    // })
    return sum

}
function calculaterRobotArea(){
    let quaterWithSideAndZeroSize = calculateRobotQuaterArea()
    let sideSize = 0;
    for(let i=0; i<SIZE; i++){
        if(matrix[0][i]==2){
            sideSize++;
        }
    }
    let result = (quaterWithSideAndZeroSize-sideSize)*4+1;
    return result
}
console.log(calculaterRobotArea());
