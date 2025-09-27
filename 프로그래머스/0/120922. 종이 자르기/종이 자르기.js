function solution(M, N) {
    var answer = 0;
    var num1 = M -1;
    var num2 = N - 1;
    if(num2 == 1){
        num2 = 1;
    }else if(num2 > 1){
        num2 = num2 * M;
    }
    answer = num1 + num2;
    return answer;
}