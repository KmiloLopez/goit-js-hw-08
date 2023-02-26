
console.log("conectado")

const validateForm = document.getElementsByClassName('feedback-form')

const submitButton = document.querySelector('button')
console.log(validateForm)

validateForm[0].addEventListener("submit", (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    console.log("Email:",email.value)
    console.log("Message:",message.value)

    /* const Play = ({seconds})=>{ */
    localStorage.setItem('feedback-form-state', email.value+" "+message.value);
    validateForm[0].reset()
})
validateForm[0].addEventListener('input', (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    localStorage.setItem('feedback-form-state', email.value+" "+message.value);


    let inputt = e.target.value
    console.log(inputt)
    /* console.log(e.message.value)
    console.log(e.email.value) */
    /* spanText.textContent = e.target.value */
    /*  if (e.target.value === undefined){
        spanText.textContent ="ANONININI"
    } */
    /* if (e.target.value === ""){
        spanText.textContent ="Anonymous"} */
    
    
})

console.log(localStorage.getItem('feedback-form-state'))
let passAndEmail =localStorage.getItem('feedback-form-state').split(" ")
console.log(passAndEmail)
console.log("PASSWOERRRRRRRDD:",passAndEmail[0])

/* console.log(validateForm[0].firstChild)
validateForm[0].firstchild.textContent= passAndEmail[0] */
let EMAILTEXT = document.querySelector('input')
console.log("ESTO QUE ES",EMAILTEXT)
EMAILTEXT.innerHTML=passAndEmail[0]
EMAILTEXT.innerText=passAndEmail[0]
EMAILTEXT.textContent=passAndEmail[0]
EMAILTEXT.setText= passAndEmail[0]

validateForm.innerHTML=passAndEmail[0]
validateForm.innerText=passAndEmail[0]
validateForm.textContent=passAndEmail[0]
validateForm.setText= passAndEmail[0]



/* let emailtextLocal = validateForm[0].children */

 /* validateForm[0].textContent=passAndEmail[0] */
/* validateForm[1].textContent=passAndEmail[1]  */