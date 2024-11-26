// DOCUMENT OBJECT MODEL(DOM)
const button = document.getElementById('button');
 button.addEventListener('click', ()=>{
    alert("you just clicked on click me button")
});

const button1 = document.getElementById('demo2');
button1.addEventListener('click', ()=>{
    changeText()
});

// assignment
function changeText(){
    document.getElementById("demo").innerHTML = "the text is changed";
}

const button2 = document.getElementById('demo3');
button2.addEventListener("click", ()=>{
    resetText()
})
function resetText(){
    document.getElementById("demo").innerHTML = "this is a paragraph";
}

