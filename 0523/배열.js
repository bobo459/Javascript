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
// 원본 보존!!
let colors = ["red","blue","yellow","green","white","pink"];
const newColors = colors.slice(1,4);
console.log(colors);
console.log(newColors);

// indexOf
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); //없을때는 -1 리턴

// includes
// true/ false 보여줌
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


// 객체의 배열
const persons=[
  {name: "Michael", age : 19, gender: "male", job : "student"},
  {name: "John", age : 28, gender: "male", job : "engineer"},
  {name: "Ellen", age : 22, gender: "female", job : "programmer"},
  {name: "sarah", age : 27, gender: "female", job : "lawyer"}  //제이슨을 사용하지 않을경우 키는 ""을 사용하지 않는다. 그래서 name은 ""을 사용안함.
]
console.log(persons[0].name);
console.log(persons[1].jop);

// Destructuring 구조분해할당  !!~자주사용하니 알아두기~!!
// 배열 또는 객체의 내부아이템을 분해해서 새로운 변수에 할당하는 간편한 방법
const [마이클, 존, 엘렌, 사라] = persons; //배열의 경우[]대괄호 //한글로 쓸수 있는건 구조가 정해져 있지 않다는 의미,a,b,c를 써도 무관.!!대신 순서가 중요하니 순서대로 사용해야한다!!
console.log(마이클);
//const {name,age,gender,jop} = 마이클;  //객체일 경우 {}중괄호. 객체여서 순서가 중요하지 않고 이름이 중요하다.
//const {x,age,jop,gender} = 마이클;  //name을 x로 이름을 변경할 경우, 이름을 찾을 수 없어서 결과가 나오지 않는다.
const {name,age,job,gender} = 마이클;
console.log(name,age,gender,job);

const nums = [1,2,3,4,5,6,7,8,9];
// filter
// 조건에 맞는 데이터만 새로운 배열에 담는다.
// 특징 : 데이터는 그대로, 새로운 배열의 lenght 는 달라질 수 있음.
const array1 = nums.filter((num)=>num>5);
console.log(array1);

// map
// 데이터를 조작하여 새로운 배열에 담는다.
// 특징 : 데이터는 변경, 새로운 배열의 length는 반드시 동일
const array2 = nums.map((num)=>num*10);  //num*10 <- 이부분에 조건이 잇으면 안됨. 원본과 다른 데이터를 가진다.
console.log(array2);

//응용
const jobArray = persons.map((p)=>p.jop); // p는 객체
console.log(jobArray);

const femaleJobs = persons.filter((p)=>p.gender=="female").map((p)=>p.job);
console.log(femaleJobs);