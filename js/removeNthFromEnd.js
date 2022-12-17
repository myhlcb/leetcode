function removeNthFromEnd(head, n) {
  head.splice(n, 1);
  return head;
}
console.log(removeNthFromEnd([1,2,3,4,5], 2));
