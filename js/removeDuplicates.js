function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,1,2]))