function threeSum(array){
    const arr = []
    for (let i = 0; i < array.length; i++) {
        const ei = array[i];
        for (let j = i+1; j < array.length; j++) {
            const ej = array[j];
            for (let k = i+2; k < array.length; k++) {
                const ek = array[k];
                if (ei+ej+ek===0) {
                    console.log(ei,ej,ek)
                    arr.push([ei,ej,ek].sort())
                }
                
            }
        }
    }
    return arr
}
console.log(threeSum([-1,0,1,2,-1,-4]))