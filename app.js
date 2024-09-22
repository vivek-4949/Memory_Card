let boxes = document.querySelectorAll(".box-image");
let imgs = document.querySelectorAll("img");
let turn0 = true;

let choice1 = "";
let choice2 = "";


const checkWinner =()=> {
    if(choice1 !="" && choice2 !=""){
        if(choice1 == choice2){
            
            console.log("match");
        } else {
            
            console.log("try Again");
        }
    } else {
        console.log("select Second One")
    }
}


boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turn0 == true){  
            turn0 = false;
            console.log("click first time");
            choice1 = box.getAttribute("id");
            console.log(choice1);
            

        } else {
            turn0 = true;
            console.log("click Second time");
            choice2 = box.getAttribute("id");
            console.log(choice2);
        }
        checkWinner(box);
        box.disabled = true;

        
    })
    
});

