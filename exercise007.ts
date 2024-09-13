// Soal 1
let _obj1 = { a: 1 };
let _obj2 = { a: 1 };
// console.log(Object.values(_obj1));
// console.log(Object.values(_obj2));
// for (let item in _obj1) {
//     console.log(item)
// }
function checkObject(obj1, obj2) {
  return _.isEqual(obj1, obj2);
}
console.log(checkObject(_obj1, _obj2));

// Soal 2
let _objA = { a: 1, b: 2, c: 3 };
let _objB = { a: 1, c: 3 };
console.log(Object.keys(_objA));

let commonProperties = function (obj1, obj2) {
  return Object.keys(obj1).filter(function (itm) {
    return itm in obj2;
  });
};

let returnObject = function () {
  let objectContainer = {};
  for (let item of commonProperties(_objA, _objB)) {
    console.log(item);
    objectContainer[item] = _objA[item];
  }
  return objectContainer;
};

console.log(returnObject());

// Soal 3
let _arr1 = [
  { name: `Student1`, email: `student1@mail.com` },
  { name: `Student2`, email: `student2@mail.com` },
];
let _arr2 = [
  { name: `Student1`, email: `student1@mail.com` },
  { name: `Student3`, email: `student3@mail.com` },
];
function removeDuplicateObjects(arr1, arr2) {
  let _arr3 = [...arr1, ...arr2];
  console.log(_arr3);
  let _arr4 = _arr3.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.name === value.name && t.email === value.email)
  );
  return _arr4;
}
console.log(removeDuplicateObjects(_arr1, _arr2));

// Soal 4
let _arr4 = [{ name: `David`, age: 20 }];
function flipObject(arr) {
  let objContainer = {};
  for (let item of arr) {
    objContainer = item;
  }
  console.log(objContainer);
  let swapped_obj = {};
  Object.keys(objContainer).forEach((objectKey) => {
    swapped_obj[objContainer[objectKey]] = objectKey;
  });
  return [swapped_obj];
}
console.log(flipObject(_arr4));
