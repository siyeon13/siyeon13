function solution(numbers) {
    var answer = 0;
    var max1 = 0; 
    var max2 = 0; 
    
    max1=Math.max(...numbers);
    let idx = numbers.indexOf(max1);
    numbers.splice(idx, 1);
    
    max2=Math.max(...numbers);
    //idx = numbers.indexOf(max2)
    answer = max1 * max2 ;
    return answer;
}