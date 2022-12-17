// const _ = require('lodash')
function generateParenthesis(n){
    if (n == 0) return [];

    let data = new Map();
    data.set(0, ['']);
  
    for (let i = 1; i <= n; i++) {
        const result = []
        for (let j = 0; j < i; j++) {
            const ej = data.get(j)
            const el = data.get(i-1-j)
            for (let k = 0; k < ej.length; k++) {
                for (let l = 0; l < el.length; l++) {
                    result.push([`(${ej[k]})${el[l]}`])   
                }              
            }  
        }
        
        data.set(i,result)
    }
    // return data.get(n);
    const final = [] 
    data.get(n).forEach(([i]) => {
        final.push(i)
    });
    return final

}
console.log(generateParenthesis(3))