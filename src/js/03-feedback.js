import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/03-feedback.css";

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

const formData = {};

function onFormInput (event) { 
  formData [event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log("formData", formData);
 }
 
 try {
  function onInputSave() {
    const saveInput = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
 
   if(saveInput) {
      formData.value = saveInput;
      console.log(saveInput);
     }
  }
}
catch(err) {
  console.log(err)
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }




  
 


