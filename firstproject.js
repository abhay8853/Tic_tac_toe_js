let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newGameBtn=document.querySelector("#new-btn")
let message=document.querySelector("#mesg")
let messageContainer=document.querySelector("#message-container")

let turnPlayer1=true

  

const winPatterns=[
   [0,1,2],
   [0,3,6],
   [2,5,8],
   [0,4,8],
   [1,4,7],
   [3,4,5],
   [2,4,6],
   [6,7,8],
]
const resetGame =()=>{
    turnPlayer1=true
enableBoxes()
    messageContainer.classList.add("hide")
}


boxes.forEach((box)=>{
box.addEventListener("click",()=>{ 
    console.log("clicked")
    if(box.innerText===""){
    


    if(turnPlayer1){
    box.innerText="O"
    turnPlayer1=false
    }else{
        box.innerText="X"
        turnPlayer1=true
    }
    box.disabled=true
    checkWinner()
    }

})
})



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}



const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const showWinner =(winner)=>{
message.innerText=`player,${winner} won the match `
messageContainer.classList.remove("hide")
disableBoxes()

}
const checkWinner=() => {
for (  let combination of winPatterns){
    const[a,b,c] = combination
    let poss1value=boxes[a].innerText
    let poss2value=boxes[b].innerText
    let poss3value=boxes[c].innerText
if(poss1value!=="" && poss2value !=="" &&poss3value!==""){


    if( poss1value===poss2value&& poss2value===poss3value){
      console.log("winner",poss1value)

      showWinner(poss1value)

}
}
}
}




newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)

