function solution(n, k) {
    var answer = 0;
    
    var ser = Math.floor(n / 10);
    
    answer = (n * 12000) + (k * 2000) - (ser * 2000);
    
    return answer;
}