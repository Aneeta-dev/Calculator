function display(n) {/// n is argument 
    inputBox.value+=n
    
}
function Allclear() 
{
    inputBox.value=""    
}
function evaluateExpression() {
   inputBox.value=eval(inputBox.value)
    
}
function backSpace() {
   s= inputBox.value
   inputBox.value=s.slice(0,-1)
    
}