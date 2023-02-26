/* import throttle = require("lodash.throttle") */
import throttle from 'lodash.throttle'
console.log("conectado")

const validateForm = document.getElementsByClassName('feedback-form')

/* const submitButton = document.querySelector('button') */
/* console.log(validateForm) */

validateForm[0].addEventListener("submit", (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    console.log("Email:",email.value)
    console.log("Message:",message.value)

    validateForm[0].email.value= null
    validateForm[0].message.value= null
    function functttion(){localStorage.setItem('feedback-form-state', email.value+" "+message.value)}
    /*  throttle(functttion(),1000); */
    functttion()
    /* const Play = ({seconds})=>{ */
    /* localStorage.setItem('feedback-form-state', email.value+" "+message.value); */
    
    validateForm[0].reset()
    
})
/* const throttle = (fn, delay)=>{
    let last 0;
    return(...args)=>{
        const now = new Date().getTime();
        if(now -last <delay){
            return;
        }
        last = now;
        return fn(...args)
    }
} */

validateForm[0].addEventListener('input', (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    function functttion(){localStorage.setItem('feedback-form-state', email.value+" "+message.value)}
   /*  throttle(functttion(),1000); */
   functttion()
    /* let inputt = e.target.value
    console.log(inputt) */
    /* validateForm[0].email.value= passAndEmail[0] */
    
})
/* validateForm[0].addEventListener('input', (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    localStorage.setItem('feedback-form-state', email.value+" "+message.value);


    let inputt = e.target.value
    console.log(inputt)
    /* validateForm[0].email.value= passAndEmail[0] 
    
}) */

 console.log(localStorage.getItem('feedback-form-state'))
let passAndEmail =localStorage.getItem('feedback-form-state').split(" ")
/* console.log(passAndEmail)
console.log("PASSWOERRRRRRRDD:")  */

validateForm[0].email.value= passAndEmail[0]
validateForm[0].message.value= passAndEmail[1]
