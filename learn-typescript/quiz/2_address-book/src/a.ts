// function fetchItems() {
//   var items = ['a', 'b', 'c'];
//   return items;
// }
// var result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
  var items: string[] = ['a', 'b', 'c'];
  return new Promise(function(resolve) {
    resolve(items);
  });
}
fetchItems();
