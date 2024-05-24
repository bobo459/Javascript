const container = document.querySelector(".container")  // document = 돔
            // document.querySelector : 가장먼저 발견한 하나만 찾는다
//console.log(container)
const divArray = document.querySelectorAll("div");
            // document.querySelectorAll : 찾는 모든것을 찾아온다.
//divArray.forEach((div)=>console.log(div));
const cardArray = document.querySelectorAll(".namecard");
cardArray.forEach((card)=>{
  card.addEventListener("click", ()=>{
    console.log(card);
  });
});
