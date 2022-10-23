export function removeById(list, id) {
  // Returns a new list with all the elements from the original except the ones matching by Id
  let newList = [];
  for (let index in list) {
    if (id !== list[index]['id']) {
      newList.push(list[index]);
    }
  }
  return newList;
}