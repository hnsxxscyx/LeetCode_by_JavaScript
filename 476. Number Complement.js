/**
 * @param {number} num
 * @return {number}
 */
 // 初始思路
 // 把值转为二进制字符串然后转为数组
 // 然后反转再转为字符串转数字
var findComplement = function(num) {
    var arr = num.toString(2).split('');
    for(var i in arr){
    	if(arr[i]==='0'){
    		arr[i]='1';
    	}else{
    		arr[i]='0';
    	}
    }
    num = arr.join('').toString();
    num = parseInt(num,2);
    return num;
};