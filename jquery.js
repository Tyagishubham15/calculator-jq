$(document).ready(function(){
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);
    
    $('.button').on('click',function(evt){
        var buttonpressed = $(this).html();
        console.log(buttonpressed);

        if(buttonpressed ==="C"){
            currentEntry ='0';
        } else if(buttonpressed === "CE"){
            currentEntry = '0';
        } else if(buttonpressed === "back"){
            currentEntry = currentEntry.substring(0,currentEntry.length-1);
        } else if(buttonpressed === "+/-"){
            currentEntry*= -1
        }  else if(buttonpressed === '.'){
            currentEntry+= '.';
        } 
        else if(buttonpressed === '+'){
            currentEntry += '+';
        } 
        else if(isNumber(buttonpressed)){
            if(currentEntry === '0') 
                currentEntry = buttonpressed;
            else currentEntry = currentEntry+buttonpressed;
        } else if(isOperator(buttonpressed)){
            prevEntry = parseFloat(currentEntry);
            operation = buttonpressed;
            currentEntry = '';
        } else if(buttonpressed === "%")
        {
            currentEntry = currentEntry/100;
        } else if(buttonpressed === "sqrt")
        {
            currentEntry = Math.sqrt(currentEntry);
        } else if(buttonpressed === "1/x")
        {
            currentEntry = 1/currentEntry;
        } else if(buttonpressed === "pi")
        {
            currentEntry = Math.PI;
        } else if(buttonpressed === "="){
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null
        }
        updateScreen(currentEntry);
    });
});

    updateScreen = function(displayValue){
        var displayValue = displayValue.toString();
        $('.screen').html(displayValue.substring(0, 10));
    };
    isNumber = function(value){
        return !isNaN(value);
    }
    isOperator = function(value){
        return value === '/'|| value === '*'|| value === '+'|| value === '-';
    };
    operate = function(a,b,operation){
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a,b,operation);
        if(operation === '+') return a+b;
        if(operation === '-') return a-b; 
        if(operation === '*') return a*b;
        if(operation === '/') return a/b;
    }