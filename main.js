let form = document.querySelector("form");
let input = document.querySelectorAll(`input:not(input[type="submit"])`)
let error = document.querySelectorAll(".error-img")
let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//when the user clicks the submit button on the form we will cehck each input
//if the input is empty we will display the error massage
form.addEventListener("submit",(e)=>{
    input.forEach((el)=>{
        if(el.value == ""){
            e.preventDefault()
            el.nextElementSibling.style.display = "block";
            form.style.gap = "30px"
            el.nextElementSibling.nextElementSibling.style.display = "block";
            if(el.id == "email-address"){
                el.placeholder = "email@example/com";
                el.classList.toggle("wrong")
            }else{
                el.placeholder = "";
            }
        }else if(el.id =="email-address" && !el.value.match(regx)){
            e.preventDefault()
            el.nextElementSibling.style.display = "block";
            form.style.gap = "30px"
            el.nextElementSibling.nextElementSibling.style.display = "block";
                el.classList.toggle("wrong")
        }
    })
})

// now we want the reverse to happen which is if the error massage is displayed
//and the user is going to fix the error it should disapper
input.forEach((el)=>{
    el.addEventListener("focus",()=>{
        el.nextElementSibling.style.display = "none";
        el.nextElementSibling.nextElementSibling.style.display = "none";
        el.placeholder = el.id.split("-").map((el)=>el[0].toUpperCase()+el.slice(1)).join(" ")
        if(el.classList.contains("wrong")){
            el.classList.toggle("wrong")
        }
        if(allErrorGone()){
            form.style.gap = "20px"
        }
    })
})

function allErrorGone(){
    for(let i  = 0 ; i < error.length ; i++){
        if(getComputedStyle(error[i]).display != 'none'){
            return false;
        }
    }
    return true;
}