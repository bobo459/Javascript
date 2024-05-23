let fruits = ["사과","바나나","배","딸기","메론","망고","키위"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// splice (스플라이스)
// 삭제, splice(시작인데스, 갯수, 새로추가하는 아이템)
// 원본을 수정함!! 사용에 주의해야함.
const 삭제아이템 = fruits.splice(3,2, "구아바");
console.log(fruits);  //원본수정됨
console.log(삭제아이템);

// slice
// 선택담기, slice(시작인덱스, 끝인덱스)
//원본 보존!!
let colors = ["red","blue","yellow","green","white","pink"];
const newColors = colors.slice(1,4);
console.log(colors);
console.log(newColors);

// indexOf
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); //없을때는 -1 리턴

// includes
//true/ false 보여줌
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));

// forEach
// 배열에 사용하는 반복문
// forEach(아이템, 인덱스, 원본배열)
// 배열 안에서만 사용할수 있다 주의!
colors.forEach((color,index, array)=>{
  console.log("첫번째 매개변수", color);
  console.log("두번째 매개변수", index);
  console.log("세번째 매개변수", array);
})


//객체의 배열
const persons=[
  {name: "Michael", age : 19, gender: "male", jop : "student"},
  {name: "John", age : 28, gender: "male", jop : "engineer"},
  {name: "Ellen", age : 22, gender: "female", jop : "programmer"},
  {name: "sarah", age : 27, gender: "female", jop : "lawyer"}  //제이슨을 사용하지 않을경우 키는 ""을 사용하지 않는다. 그래서 name은 ""을 사용안함.
]
console.log(persons[0].name);
console.log(persons[1].jop)
