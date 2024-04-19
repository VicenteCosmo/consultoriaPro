
const trabalhoCard= document.querySelectorAll('.trabalho-card')
let counter=0

function prev(){
    if(counter==0){
        counter==trabalhoCard.length-1
    }
    else{
        counter--
    }

    if(counter==trabalhoCard.length-1){
        counter==0
    }
    else{
        counter++
    }
    
    counter--
    scroll()
}
function next(){
    if(counter==trabalhoCard.length-1){
        counter==0
    }
    else{
        counter++
    }

    scroll()
}

function scroll(){
    trabalhoCard.forEach(function (item)  {
        item.style.transform =`translateX(-${counter*1200}px)`

        
    })
}


//menu hambuger

const menu=document.getElementById('menu')
const btn=document.getElementById('button-menu')

const bar1=document.getElementById('bar1')
const bar2=document.getElementById('bar2')
const bar3=document.getElementById('bar3')


btn.addEventListener('click', function(){

   
    if(menu.style.display=='none'){

        bar1.style.transform= "translateY(5px) rotate(-45deg)"
        bar2.style.transform='translateY(1.5px) rotate(45deg)'
        bar3.style.visibility='hidden'

        menu.style.display='block'
    }
    else{
        menu.style.display="none"

        bar1.style.transform="rotate(0deg)"
        bar2.style.transform="rotate(0deg)"
        bar3.style.visibility="visible"

    }
})