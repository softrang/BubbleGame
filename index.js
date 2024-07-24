var Clutter ='';
for( var i=1; i<=84; i++){
    Clutter += `<div class="bobul"></div>`
}
document.querySelector('#page3').innerHTML= Clutter;
let Bobul = document.querySelectorAll('.bobul')
let Hit= document.getElementById('hit');
function oasim(){
Bobul.forEach(
    (slide)=>{
        let oas = Math.floor( Math.random()*10);
        slide.innerText= oas; 
    }
)

}
oasim()
function oasim2(){
    let oa = Math.floor( Math.random()*10);
    Hit.innerText= oa
}
oasim2()
Bobul.forEach(
   (con)=>{
      con.addEventListener('click',()=>{
        let Hit= document.getElementById('hit');
        let Score= document.getElementById('score');
        let OA= document.getElementById('oa');
        if (Hit.innerText=== con.innerText){
           
            OA.innerText += '+'+ con.innerText;

            let ka = eval(OA.innerText)
            Score.innerText= ka
                 oasim()
                 oasim2()
        }
        else{
            alert('Sorry your choice is wrong. Please try again.')
            oasim()
            oasim2()
        }
           
        })
   }
)

