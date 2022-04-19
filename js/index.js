let contador = document.querySelectorAll('.bi-star');
let qualify = document.querySelector("#qualify");
let stars= document.querySelector(".stars");

contador.forEach((cont,index) => {
    //let sw = true;
    //let count = 0;
    cont.addEventListener('click',()=>{
        this.clearStar();
        if(index < contador.length){
            for(let i=0;i<=index;i++){
                contador[i].classList.remove("bi-star")
                contador[i].classList.add("bi-star-fill")
                contador[i].classList.add("text-warning")    
            }
        }
        /*if(sw){
            console.log(e.target);
            cont.classList.remove("bi-star")
            cont.classList.add("bi-star-fill")
            cont.classList.add("text-warning")

        }else{
            cont.classList.remove("bi-star-fill")
            cont.classList.add("bi-star")
            cont.classList.remove("text-warning")
        }
        sw=!sw;
        */
    })
});

function clearStar(){
    for(let i=0;i<contador.length;i++){
        contador[i].classList.remove("bi-star-fill")
        contador[i].classList.add("bi-star")
        contador[i].classList.remove("text-warning")    
    }
}


function paintStar(){
    
    let stars = document.querySelectorAll(".bi-star-fill")
    let tagStar = '';
    stars.forEach(star=>{
        tagStar=star.outerHTML+ tagStar
    })
    return tagStar;
}


qualify.addEventListener("click",()=>{

    if(this.paintStar().length > 0){
        Swal.fire({
            position: 'center',
            icon: 'success',
            html:this.paintStar(),
            title: 'Muchas gracias',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            html:"<span>😔</span>",
            title: 'Muchas gracias',
            showConfirmButton: false,
            timer: 1500
        })
    }

})


