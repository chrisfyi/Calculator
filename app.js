let heldValue = null;
let heldOperation = null;
let nextValue = null;


function pinkNumbers(){
    console.log('pinkNumbers');
    
    const myNum= $(this).text();

    console.log(myNum);

}
$('.digits button').click(function() {
    null === nextValue && (nextValue = "0"),
    nextValue += $(this).text(),
    null !== heldValue && null == heldOperation && (heldValue = null),
    updateDisplay()

});

function updateDisplay() {
    showValue(".held-value", heldValue),
    showValue(".next-value", nextValue)
}

function add(x, y){
    return Number(x) + Number(y)
} 

$('.operations .add').click(function() {
    setHeldOperation(add),
    $(".next-operation").text("+"),
    updateDisplay()
});

function subtract(x, y){
    return Number(x) - Number(y)
} 

$('.operations .subtract').click(function() {
    setHeldOperation(subtract),
    $(".next-operation").text("-"),
    updateDisplay()
});

function multiply(x, y) {
    return Number(x) * Number(y)
    
};

$('.operations .multiply').click(function() {
    setHeldOperation(multiply),
    $(".next-operation").html("&times;"),
    updateDisplay()
});

function divide(x, y){
    return Number(x) / Number(y)
} 

$('.operations .divide').click(function(){

    setHeldOperation(divide),
    $(".next-operation").text("/"),
    updateDisplay()
});



$('.operations .equals').click(function(){
    setHeldOperation(null),
    $(".next-operation").text(""),
    updateDisplay()
});


function clearAll(){
    heldValue= null;
    heldOperation= null;
    nextValue= null

}

$('.memory .clear-all ').click(function(){
    clearAll(),
    $(".next-operation").text(""),
    updateDisplay()

});


function clearEntry(){
    nextValue= null;

}

$('.clear-entry').click(function(){
    clearEntry(),
    updateDisplay()
});




function showValue(x, y) {
    null === y ? $(x).text("") : $(x).text(Number(y))
}

function setHeldOperation(x) {
    null !== heldOperation ? heldValue = heldOperation(heldValue, nextValue) : null !== nextValue && (heldValue = nextValue),
    nextValue = null,
    heldOperation = x; 
}
