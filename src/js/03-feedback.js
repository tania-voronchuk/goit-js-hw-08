import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/03-feedback.css";

const form = document.querySelector(".feedback-form");
const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");
const STORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

onSave();

function onFormInput (event) { 
  formData [event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
 }

 function onSave() { 
  let saveInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saveInput) {
    inputEl.value = saveInput.email;
    textareaEl.value = saveInput.message; 
  }
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }

  try {
    let saveInput = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
  }
  catch(err) {
    console.log(err)
  }



  
 


