
function opentab(tabname){

    var tablinks = document.getElementsByClassName("tab_links");
    var tabcontents = document.getElementsByClassName("tab_content");

    for(tablink of tablinks){
        tablink.classList.remove("active_link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab");
    }

    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add("active_tab")

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz5MzqXMmZXNDqyZCreXmHSJSWJZYA1rSyik-AXj1d3XbME5mjLPF3wEu4zrr5LVUWHXA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     msg.innerHTML = "Message Submitted successfully!"
    setTimeout(function(){msg.innerHTML=""},5000)
    form.reset();
})
    .catch(error => console.error('Error!', error.message))
})

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";
}

