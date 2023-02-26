





function showTime() {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    document.querySelector("#time").textContent = currentTime;

    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    document.querySelector("#date").textContent = currentDate;
    console.log(currentDate);
    
}
showDate();


 function showGreeting() {
  function getTimeOfDay(){
   const hours = new Date().getHours();
 
 let greetingText = "";

//  if (hours < 12) {

  if ( 6 <= hours && hours < 12) {
  greetingText = "Good morning"; 
} else if (hours < 18) {
  greetingText = "Good afternoon"; 
} else if (hours < 24) {
  greetingText = "Good evening"; 
} else {
    greetingText = "Good night"; 
}
 document.querySelector(".welcome").textContent = greetingText;
  }
  getTimeOfDay();

const name = document.querySelector(".name");
//console.log(name);
//console.log(name.value);

 function setName(event) {
    if (event.code === 'Enter') {
        name.blur();
    }
 }
 name.addEventListener('keypress', setName); 


 function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);  

} 

showGreeting();



 /* Slider  */

 const body = document.querySelector("body");
 body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
 console.log(body.style)

 function getrandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
 }




 

