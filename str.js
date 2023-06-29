// 常见的数组和字符串的8种剪切
// 1.数组的
// join()   功能：使用您选择的分隔符将一个数组合并为一个字符串
var myList = new Array('jpg', 'bmp', 'gif', 'ico', 'png');
var portableList = myList.join('|');
// 2.slice() 它仅能够截取数组中指定区段的元素，
// 并返回这个子数组。该方法包含两个参数，分别指定截取子数组的起始和结束位置的下标。
var a = [1, 2, 3, 4, 5];  //定义数组
var b = a.slice(2, 5);  //截取第三个元素到第六个元素前的所有元素
console.log(b, '===arr的slice');  //返回[3,4,5]
//3.splice() 方法的参数是可选的。如果不给它传递参数，
// 则该方法不执行任何操作。如果给它传递一个参数，则该方法仅执行删除操作，参数值指定删除元素的起始下标，（包含该下标元素），
// splice(从哪开始  ， 几个 ，插入) 方法将删除后面所有元素。
// 如果指定两个参数，则第 2 个参数值表示要删除元素的个数。
// 如果指定三个或多个参数，则第 3 个以及后面所有参数都被视为插入的元素。
// 如果不执行删除操作，第 2 个参数值应该设置为 0，但是不能够空缺，否则该方法无效。 
var c = [1, 2, 3, 4, 5];  //定义数组
var d = a.splice(2);  //从第三个元素开始执行删除
console.log(d, '===删除的部分');  //被删除的子数组是[1,2]
// 3.concat() 功能：将两个数组连接在一起；
arr1 = [1, 2, 3, 4]
arr2 = [5, 6, 7, 8]
console.log(arr1.concat(arr2), '==========', 'concat')
let newArr = [...arr1, ...arr2]
// Array.prototype.push.apply(arr1,arr2)
// arr1.push(...arr2)

// 下面都是str相关的
// 1.split()  功能：使用一个指定的分隔符把一个字符串分割存储到数组

str = 'jpg|bmp|gif|ico|png';
arr = str.split('|');

// 2.charAt() 功能：返回指定位置的字符。字符串中第一个字符的下标是 0。
// 如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。                
var str = 'a,g,i,d,o,v,w,d,k,p'
console.log(str.charAt(2), '==========', 'charAt') // g 
// charCodeAt() 功能：返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。

var str1 = 'a,g,i,d,o,v,w,d,k,p'
// console.log(str.charCodeAt(2),'==========','charCodeAt')
// 3.重要的方法，slice()  功能：截取子字符串 【含头不含尾】
//语法：arrayObject.slice(start,end)
//start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
//end:可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，                    
//那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是
//从数组尾部开始算起的元素。
var str = 'ahji3o3s4e6p8a0sdewqdasj'
console.log(str.slice(2, 5), '==========', 'slice')//ji3
// 4.substring()  功能：截取子字符串
//语法：stringObject.substring(start,stop)
//start 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
//stop 可选。一个非负的整数,比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
//注意事项：如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。 如果 start 或 end 为负数，那么它将被替换为 0。 如果 start 与 end 相等，那么该方法返回的就是一个空串。
var str = 'ahji3o3s4e6p8a0sdewqdasj'
console.log(str.substring(2, 5), '==========', 'substring') // ji3

// 5.substr()  功能：substr 方法用于返回一个从指定位置开始的指定长度的子字符串。
//语法 stringObject.substr(start , length)
var str = "0123456789";
console.log(str.substr(2, 5), '==========', 'substr') // 23456
