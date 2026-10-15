//setting Game name
let game="Guess The Word";
document.title=gameName;
document.querySelector("h1").innerHTML=gameName;
document.querySelector("footer").innerHTML=`${gameName}
Game Created By Wesam Abdlazize`;
//setting Game options
let numbersOfTries=6;
let numbersOfLetters=6;
let currentTry=1;
//Mange words
let wordToGuess="";
const words=["create","Update","Delete","Master","Branch","mainly","school"];
wordToGuess=words[Math.floor(Math.random()*words.length)].toLowerCase();
const guessButton=document.querySelector(".check");
guessButton.addEventListener("click",handleGuess);
let messageArea=document.querySelector(".message");
//manage hints
function generateInput(){
    const inputContainer=document.querySelector(".inputs");
}
document.querySelector(".hintSpan").innerHTML=numberOfHints;
getHintButton.addEventListener("click",gitHint);

function handleGuesses(){
    let successGuess=true;
    console.log(wordToGuess);
    for(let i=1;i<=numbersOfLetters;i++){
        const inputField=document.querySelector('#guess-${currentTry}-letter-${i}');
        const letter=inputField.value.toLowerCase();
        const actualLetter=wordToGuess[i-1];
        //Game logic
        if(letter===actualLetter){
            //letter Is correct And in place
            inputField.classList.add("yes-in-place");
        }
        else if(wordToGuess.includes(letter)&&letter!==""){
            //letter is correct and not in place
            inputField.classList.add("not-in-place");
            successGuess=false;
        }
        else{
            inputField.classList.add("no");
            successGuess=false;
        }
    }
}
//create main Try Div
for(let i;i<=numbersOfTries;i++){
    const tryDiv=document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML=`<span>Try${i}</span>`
}
if(i!==1)tryDiv.classList.add("disabled-input");
//create Inputs
for(let j=1;j<=numbersOfLetters;j++){
    const input=document.createElement("input");
    input.type="text";
    input.id=`guess-${i}-Letter-${i}`;
    input.setAttribute("maxLength","1");
    tryDiv.appendChild(input);
    inputsContainer.appendChild(tryDiv);
}
//focus on first input in first try element
inputsContainer.childern[0].childern[1].focus();
//Disabled All inputs except first one
const inputsInDisabledDiv=document.querySelectorAll(".disabled-inputs input") ;
inputsInDisabledDiv.forEach((input)=>(input.disabled=true));
const inputs=document.querySelectorAll("input");
inputs.forEach((input,index)=>{
    //convert Input to Uppercase
    input.addEventListener("input",function(){
        this.value=this.value.toUppercase();
        //console.log(index);
        const nextInput=inputs[index+1];
        if(nextInput)nextInput.focus();
    });
    input.addEventListener("keydown",function(event){
        //console.log(event);
        const currentIndex=Array.from(inputs).indexOf(event.target);//or this
        //console.log(currentIndex);
        if(event.key==="ArrowRight"){
            const nextInput=currentIndex+1;
            if(nextInput<=inputs.length)input[nextInput].focus();
        }
        if(event.key==="ArrowLeft"){
            const prevInput=currentIndex-1;
            if(prevInput>=0)inputs[prevInput].focus();
        }
    })
})
//check If User win or lose
if(successGuess){
    messageArea.innerHTML='you win the word Is<span>${wordTOGuess}</span>';
    //Add Disabled class on All TryDivs
    let allTries=document.querySelectorAll(".inputs>div");
    allTries.forEach((tryDiv)=>tryDivClassList.add("disabled.inputs"));
    //disable Guess Button
    guessButton.disabled=true;
    gitHintButton.disabled=true;
}
    if(numberOfHints===2){
    messageArea.innerHTML=`<p>congratz you Didn't use Hints</p>';
    }
else{
    document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
    const currentTryInputs=document.querySelectorAll(`.try-${currentTry}input`)
    currentTryInputs.forEach((input)=>(input.disabled=true));
    currentTry++;
    const nextTryInputs=document.querySelectorAll(`.try-${currentTry}`);
    if(el){
        document.querySelectorAll(`.try-${currentTry}`).classList.remove("disabled.inputs");
        el.childern[1].focus();
    }
    else{
        //disabled Guess Button
        guessButton.disabled=true;
        getHint.disabled=true;
        messageArea.innerHTML='you Lose The Word Is<span>${word TO Guess}</span>';
    }
}
function getHint(){
    if(numberOfHints>0){
        numberOfHints--;
        document.querySelector(".hint span").innerHTML=numberOfHints;
    }
    if(numberOfHints===0){
        getHintButton.disabled=true;
    }
    const enabledInputs=documents.querySelectorAll("input:not([disabled])");
    //console.log(enabledInputs);
    const emptyEnabledInputs=Array.from(enabledInputs)
    .filter((input)=>input.value==="");
    //console.log(emptyEnabledInputs);
    if(emptyEnabledInputs.length>0){
        const randomIndex=Math.floor(Math.random()*emptyEnabledInputs.length);
        const radomInput=emptyEnabledInputs[randomIndex];
        const indexToFill=Array.from(enabledInputs).indexOf(randomInput);
        //console.log(randomIndex);
        //console.log(randomInput);
        //console.log(indexToFill);
        if(indexToFill!==-1){
        randomInput.value=wordToGuess[indexToFill].toUpperCase();}
    }
}
function handleBackSpace(event){
    if(event.key==="Backspace"){
        const inputs=document.querySelectorAll("input:not([disabled])");
        const currentIndex=Array.from(inputs).indexOf(document.activeElement);
        //console.log(currentIndex);
        if(currentIndex>0){
            const currentInput=inputs[currentIndex];
            const prevInput=inputs[currentIndex-1];
            currentInput.value="";
            prevInput.value="";
            prevInput.focus();
        }
    }
}
document.addEventListener("keydown",handleBackSpace);
window.onload=function(){
    generateInput();
};