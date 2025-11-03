function solution(array, height) {
    var answer = 0;
    var num = 0;
    array.sort((a,b) => a-b);
    for(let i=0; i< array.length; i++){
        if(array[i] > height){
            num++;
        }
    }
    answer = num;
    return answer;
}