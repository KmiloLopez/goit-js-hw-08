/* import throttle = require("lodash.throttle") */
import throttle from 'lodash.throttle'
console.log("conectado")

 const validateForm = document.getElementsByClassName('feedback-form') 

const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="message"]')
form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput() {
    const email = emailEl.value;
    const message = messageEl.value;
    const formData = {
        email,
        message,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
/* let passAndEmail =localStorage.getItem('feedback-form-state').split(" ") */
/* const neww=JASON.parse(localStorage.getItem('feedback-form-state')) */
const getItemfromLocal=localStorage.getItem('feedback-form-state')
const parseofItem = JSON.parse(getItemfromLocal)
/* console.log("aca imprimo emailEL",emailEl)
console.log("aca imprimo emailEL",messageEl)
console.log("aca imprimo emailEL",emailEl.value) */

/* console.log("aca imprimo getItemfromLocal",getItemfromLocal) */

/* console.log(parseofItem) */
/* console.log(parseofItem.email) */
/* console.log(parseofItem.message) */
/* console.log("neww es:", JASON.parse(neww)) */
emailEl.value=parseofItem.email
messageEl.value=parseofItem.message
validateForm[0].addEventListener("submit", (e)=>{
    e.preventDefault() 
    const getItemfromLocal=localStorage.getItem('feedback-form-state')
    const parseofItem = JSON.parse(getItemfromLocal)
    emailEl.value=parseofItem.email
    messageEl.value=parseofItem.message
    console.log(parseofItem.email)
    console.log(parseofItem.message)
//esto para que no me saliera error al recargar la pg
    const email = "";
    const message = "";
    const formData = {
        email,
        message,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    /* localStorage.setItem('feedback-form-state', undefined) */
    validateForm[0].reset()
    
})
/* validateForm[0].email.value= passAndEmail[0]
validateForm[0].message.value= passAndEmail[1] */


/*valido a aca para abajo 
validateForm[0].addEventListener("submit", (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    console.log("Email:",email.value)
    console.log("Message:",message.value)

    validateForm[0].email.value= null
    validateForm[0].message.value= null
    localStorage.setItem('feedback-form-state', email.value+" "+message.value)
    
    
    validateForm[0].reset()
    
})


validateForm[0].addEventListener('input', (e)=>{
    e.preventDefault()
    const {email, message} = e.currentTarget 
    function functttion(){localStorage.setItem('feedback-form-state', email.value+" "+message.value)}

   functttion()

    
})


 console.log(localStorage.getItem('feedback-form-state'))
let passAndEmail =localStorage.getItem('feedback-form-state').split(" ")

validateForm[0].email.value= passAndEmail[0]
validateForm[0].message.value= passAndEmail[1]
 */