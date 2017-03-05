/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).split('');
    y = y.toString(2).split('');
    console.log(x,y);
    // LeetCode must haven't console.log()
    if (x.length - y.length>=0) {
    	if(x.length - y.length!==0){
    		while(y.unshift('0')!==x.length){}
    	}
    }else{
    	while(x.unshift('0')!==y.length);
    }
    for(var i=0,n=0;i<x.length;i++){
    	if(x[i]!==y[i]){
    		n++;
    	}
    	console.log(x,y);
    }
    return n;
};
// 开始思路使用parseInt转换为数字然后余数对比，没想到这货太坑，转为数组对比