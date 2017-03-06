/**
 * @param {number} n
 * @return {string[]}
 */
 // Output a array
 // 思路：输出所有字符到数组，对三的倍数进行修改，对5的倍数进行修改如果不是数字就变FizzBuzz
var fizzBuzz = function(n) {
    var arr = [];
    for(var i=1;i<=n;i++){
    	arr.push(i.toString());
    }
    for(var i=2;i<n;i+=3){
    	arr[i] = 'Fizz';
    }
    for(var i=4;i<n;i+=5){
    	// typeof arr[i].parseInt() !== 'number'
    	// 方便嘛，也没副作用吧，待考证
    	if(arr[i]-1){
    		arr[i] = 'Buzz';
    	}else{
    		arr[i] = 'FizzBuzz';
    	}
    }
    return arr;
};