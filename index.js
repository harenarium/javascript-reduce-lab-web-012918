const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

const totalBatteries = batteryBatches.reduce((agg, el) => {return agg + el},0)



let wordCountMap = monologueLines.reduce((agg, el, i, col)=>{
  let em = el.split(" ").length.toString()
  return Object.assign(agg,(agg[em] ? agg[em] += 1 : agg[em] = 1))
},{})
  // [...agg, el.split(" ").length]
// [7, 7, 9, 11, 15, 15, 1, 6, 15, 6, 4, 14, 1, 6]

// const wordCountMap = wordCountArr.reduce((agg, el, i, col)=>{
//   return Object.assign(agg,(agg[el] ? agg[el] += 1 : agg[el] = 1))
// },{})
//
//s
//
// let wordCountArr = monologueLines.reduce((agg, el, i, col)=>{return [...agg, el.split(" ").length]},[])
// // [7, 7, 9, 11, 15, 15, 1, 6, 15, 6, 4, 14, 1, 6]
//
// const wordCountMap = wordCountArr.reduce((agg, el, i, col)=>{
//   return Object.assign(agg,(agg[el] ? agg[el] += 1 : agg[el] = 1))
// },{})
//
//







// monologueLines.reduce((agg, el, i , col)=>{
//   size = el.split(" ").length
//   return Object.assign({}, agg, {size: agg[size]? agg[size]++ : 1})
// },{})
//
// obj[meal.id] ? obj[meal.id] += 1 : obj[meal.id] = 1

// const wordCountMap = monologueLines.reduce()
//
// monologueLines.reduce((agg, el, i, col)=>{
//   size = el.split(" ").length
//   return Object.assign({}, agg, {size: agg[size]? agg[size]++ : 1})
// },{})

// monologueLines.reduce((agg, el, i, col)=>{return [...agg, el.split(" ").length]},[])
// [7, 7, 9, 11, 15, 15, 1, 6, 15, 6, 4, 14, 1, 6]

//
// mealTotals() {
//   let arr = []
//   for (let delivs of this.deliveries()) {
//     for(let meal of store.meals) {
//       if (meal.id === delivs.mealId) {
//         arr.push(meal)
//       }
//     }
//   }
//   let obj = {}
//   for(let meal of arr) {
//     if(obj[meal.id]) {
//       obj[meal.id] += 1;
//     } else {
//       obj[meal.id] = 1
//     }
//   }
//   return obj;
// }
