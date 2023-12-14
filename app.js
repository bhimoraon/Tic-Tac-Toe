let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset");
let turnO =true;

let winList= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]






boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
        box.innerText ="O";
        turnO =false; 
    }
    else{
        box.innerText ="X"
        turnO =true;
      
    }
    box.disabled =true
    box.classList.add("noTrans")
       checkWinner();
    
    })
})


function checkWinner(){
     winList.forEach((e)=>{
    let p1 = boxes[e[0]].innerText;
    let p2 = boxes[e[1]].innerText;
    let p3 = boxes[e[2]].innerText;
     
     if(p1!=''  && p2 !="" && p3 !="")
     if(p1==p2 && p2 ==p3){
      disableBoxes();
      board.innerText = `Congratulations\nPlayer ${p1} is The Winner`
      board.style.visibility="visible" 
      
     }
     })
    }

    function disableBoxes(){
        for(let box of boxes ){
        box.disabled=true;
        box.classList.add("noTrans")

         }
    }
    function enableBoxes(){
        for(let box of boxes ){
            box.innerText =""
            box.classList.remove("noTrans")
            box.disabled=false;
             }turnO = true;
             board.style.visibility="hidden"
             

    }
    reset.addEventListener('click',enableBoxes)