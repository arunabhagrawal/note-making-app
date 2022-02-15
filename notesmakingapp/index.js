
let submit = document.querySelector(".submit")
let value = document.querySelector(".value")


submit.addEventListener("click",()=>{
    let h2 = document.createElement("h2")
    let div = document.createElement("div")
    let button = document.createElement("button")
    let query = value.value;
    h2.innerHTML = query
    h2.classList.toggle("list")
    button.innerHTML="delete"
     document.body.appendChild(div)
    div.appendChild(h2)
    div.appendChild(button)
     button.addEventListener("click",()=>{
       div.style.display = "none"
       h2.style.display = "none"
       button.style.display = "none"
     })
     if(query = ""){
         alert("the note is empty")
          div.style.display = "none"
          h2.style.display = "none"
          button.style.display = "none"
     }
})

