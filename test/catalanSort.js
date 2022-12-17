// function catalanSort(arr, firstLine, secondLine, i) {
//   var n = arr.length / 2;
//   if (firstLine.length == n) {
//     //搜索到叶节点，输出一个结果
//     console.log(firstLine, 777777, list);
//     list.push(firstLine);
//   } else {
//     // console.log(firstLine, 11122222222, secondLine);
//     for (var j = 0; j < 2; j++) {
//       //枚举所有可能的路径
//       if (j == 0) {
//         firstLine.push(arr[i]);
//       } else {
//         secondLine.push(arr[i]);
//       }
//       //判断是否满足约束条件
//       if (firstLine.length >= secondLine.length) {
//         //满足条件，扩展搜索空间
//         catalanSort(arr, firstLine, secondLine, i + 1);
//       }
//       //回溯前的清理工作：清除所占的状态资源
//       if (j == 0) {
//         firstLine.pop();
//       } else {
//         secondLine.pop();
//       }
//     }
//   }
// }
// catalanSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [], [], 0);

function test(arr, firstLine, secondLine, i, list) {
  // let list = [];
  function catalanSort(arr, firstLine, secondLine, i, list) {
    var n = arr.length / 2;
    if (firstLine.length == n) {
      //搜索到叶节点，输出一个结果
      // console.log(list, 1111111111, n);
      let cc = [...firstLine];
      list.push(cc);
    } else {
      // console.log(firstLine, 11122222222, secondLine);
      for (var j = 0; j < 2; j++) {
        //枚举所有可能的路径
        if (j == 0) {
          firstLine.push(arr[i]);
        } else {
          secondLine.push(arr[i]);
        }
        //判断是否满足约束条件
        if (firstLine.length >= secondLine.length) {
          //满足条件，扩展搜索空间
          catalanSort(arr, firstLine, secondLine, i + 1, list);
        }
        //回溯前的清理工作：清除所占的状态资源
        if (j == 0) {
          firstLine.pop();
        } else {
          secondLine.pop();
        }
      }
    }
  }
  catalanSort(arr, firstLine, secondLine, i, list);
  console.log(list, 1111111);
  return list;
}

test([1, 2, 3, 4, 5, 6], [], [], 0, []);
