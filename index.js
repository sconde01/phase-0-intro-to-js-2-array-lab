// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = name =>
  cats.push(name);

const destructivelyPrependCat = name =>
cats.unshift(name);

const destructivelyRemoveLastCat = name =>
cats.pop(name);

const destructivelyRemoveFirstCat = name =>
cats.shift(name);

const appendCat = name => {
  return [...cats, name ]}

const prependCat = name => {
  return [name, ...cats]}


  const removeFirstCat = () => {
    return cats.slice(1)}
  
  const removeLastCat = () => {
    return cats.slice(0, cats.length - 1)
  }
//   const removeLastCat = () => {
//   const copyOfCats = cats.slice(1);
//   return copyOfCats;
// }

// // const removeFirstCat = name => {
// //   return cats.slice(0, cats.length - 1)}


