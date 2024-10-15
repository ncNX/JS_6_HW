//============ Ex1 ==========

// const listOfStr = [
//   "Apa",
//   "Planeta",
//   "Oras",
//   "Popor",
//   "Traditii",
//   "Visine",
//   "Compot",
// ];

// const vocaleLetter = ["a", "i", "o", "u", "e"];

// const wordVocale = listOfStr.filter((word) => {
//   return vocaleLetter.some((vocala) => word[0].toLowerCase() === vocala);
// });

// console.log(wordVocale);

// const wordConsoane = listOfStr.filter((word) => {
// 	return !vocaleLetter.some((vocala) => word[0].toLowerCase() === vocala);
//  });

// console.log(wordConsoane)

// ============== Ex 2 =========

// const listOfStr = [
//   "Apa",
//   "Planeta",
//   "Oras",
//   "Popor",
//   "Traditii",
//   "Visine",
//   "Compot",
// ];

// const vocaleLetter = ["a", "i", "o", "u", "e"];

// const concatLists = (list1, list2, k) => {
// 	if(list2.length < k) return `number is higher them list`

// 	const copyList1 = [...list1]
// 	const copyList2 = [...list2]

// 	copyList2.forEach((item, index) => {
// 		if (index < k) copyList1.push(item)
// 	})
// 	return copyList1
// }

// console.log(concatLists(listOfStr, vocaleLetter, 5))
// console.log(concatLists(listOfStr, vocaleLetter, 4))
// console.log(concatLists(listOfStr, vocaleLetter, 6))
// console.log(concatLists(listOfStr, vocaleLetter, 1))

// ========= Ex3 =======

// const drivers = [
// 	{
// 		name: 'Ion',
// 		age: 17
// 	},
// 	{
// 		name: 'Vasile',
// 		age: 25
// 	},
// 	{
// 		name: 'Artur',
// 		age: 40
// 	},
// 	{
// 		name: 'Petru',
// 		age: 33
// 	},
// 	{
// 		name: 'Andrei',
// 		age: 39
// 	},
// 	{
// 		name: 'Vlad',
// 		age: 60
// 	},
// ]

// console.log(drivers.filter(item => item.age <= 40 && item.age >= 20))
// console.log(drivers.filter(item => item.age <= 50))

//============= Ex4 ========

// const listOfStr = [
//   "Apa",
//   "Planeta",
//   "Oras",
//   "Popor",
//   "Traditii",
//   "Visine",
//   "Compot",
// ];

// const showWords = (list, order) => {
// 	for (let i = 0; i < list.length; i++) {
// 		const index = order === 'ASC' ? i : list.length -i - 1
// 		console.log(list[index])
// 	}
// }

// showWords(listOfStr, 'ASC')
// showWords(listOfStr, 'DSC')

//=========== Ex5 ==========

// const list = [1, 2, 3, 4, 5];
// const worker = {
//   name: "Ion",
//   age: 40,
// };

// const [test, test1] = [...list];
// const { name, age } = worker;
