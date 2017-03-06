/**
 * @param {string[]} words
 * @return {string[]}
 */
 // Output words on only one row's of keyboard
 // 本来想先转小然后判定然后输出，发现输出也是小，用个笨方法添加大写~666
 // 话说js字符编码是什么来着，可以用字符编码来代替数组，不过字母表比较少~

var findWords = function(words) {
    var arr = ['qwertyuiopQWERTYUIOP','asdfghjklASDFGHJKL','zxcvbnmZXCVBNM'];
    var result = [];
    for(var i in words){
    	words[i] = words[i].split('');
    	for(var k in arr){
			if(arr[k].indexOf(words[i][0]) !== -1){
				break;
			}
    	}
    	if(words[i].every(function(item,index,array){
    		// 提示不要在循环中新建函数，然而匿名函数也是不推荐的吗？这里不太懂，所以没有修改直接提交了
    		return (arr[k].indexOf(item) !== -1)
    	})){
    		result.push(words[i].join(''));
    		// words[i] not change
    	}
    }
    return result;
};