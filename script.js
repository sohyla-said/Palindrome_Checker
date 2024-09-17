const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
let isInput = true;

const clearInput = () => {
    //regex for non-alphanumeric characters
    const regex = /[^a-zA-Z0-9]/g;
    const str = textInput.value;
    //replace all non-alphanumeric characters with empty string
    return str.replace(regex,'').toLowerCase();
};
const checkPalindrome = () => {
    const textInputValue = textInput.value;
    if(textInputValue === ''){
        alert("Please input a value.");
        isInput = false;
        return;
    }
    else{
        const clearedInputString = clearInput();
        const len = clearedInputString.length;
        for(var i=0; i < len/2; i++){
            if(clearedInputString[i] !== clearedInputString[len-1-i]){
                return false;
            }
        }
        return true;
    }
};
const displayResult = () => {
    const isPlaindrome = checkPalindrome();
    let htmlString;
    if(isInput){
        if(isPlaindrome){
            htmlString = `<p class="result-para"><strong>${textInput.value}</strong> is a palindrome</p>`;
        }
        else{
            htmlString = `<p class="result-para"><strong>${textInput.value}</strong> is not a palindrome</p>`;
        }
        resultDiv.innerHTML = htmlString;
        textInput.value = '';
    }
}
checkButton.addEventListener('click',displayResult);