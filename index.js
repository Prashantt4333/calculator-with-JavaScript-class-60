var isOperatorButtonClicked = false;


let r = document.querySelector('.myresult')
var leftValue;
var rightValue;
var operator = ' ';


function clicked(element){

   console.log(element.innerHTML)

   

    switch(element.innerHTML) {
        case '*':
             isOperatorButtonClicked = true;
            // code block
            leftValue = r.innerHTML
            operator = '*';
            
          
            
            break;
        case '+':
            // code block
            isOperatorButtonClicked = true;
            leftValue = r.innerHTML
            operator = '+';
          
            break;
        case '-':
            isOperatorButtonClicked = true;
            // code block
            leftValue = r.innerHTML
            operator = '-';
          
            break;
        case '/':
            isOperatorButtonClicked = true;
            // code block
            leftValue = r.innerHTML
            operator = '/';
          
            break;
        case '=':
            // code block
            isOperatorButtonClicked = false;
           switch(operator){
                case"*":
                    leftValue = parseFloat(leftValue);
                    rightValue = parseFloat(rightValue);
                    r.innerHTML = leftValue*rightValue
                break;
                case"+":
                    leftValue = parseFloat(leftValue);
                    rightValue = parseFloat(rightValue);
                    r.innerHTML = leftValue+rightValue
                break;
                case"-":
                    leftValue = parseFloat(leftValue);
                    rightValue = parseFloat(rightValue);
                    r.innerHTML = leftValue-rightValue
                break;
                case"/":
                    leftValue = parseFloat(leftValue);
                    rightValue = parseFloat(rightValue);
                    r.innerHTML = leftValue/rightValue
                break;
        
                default:
           }

            break;
          
        default:
          // code block
      }



      if(isOperatorButtonClicked === true){
                rightValue = element.innerHTML
        }
        r.innerHTML = r.innerHTML + element.innerHTML


   
}
