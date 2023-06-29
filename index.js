var button=document.getElementsByClassName('button');
console.log("total button are :",button.length);
var display=document.getElementById('text');
console.log(display);

var operator1 = 0;
var operator2 = null;
var operator = null;




for(let i=0;i<button.length;i++){
    
    button[i].addEventListener('click',function(){

        var value=this.getAttribute('data-value');
        if(value == '+'){

              operator1=parseFloat(display.textContent);
              operator='+';
              display.innerText =" ";
              
         }

        else if(value == '-'){

            operator1=parseFloat(display.textContent);
            operator='-';
            display.innerText ="";
         }

         else if(value == '*'){

            operator1=parseFloat(display.textContent);
            operator='*';
            display.innerText ="";
        } 

        else if(value == '/'){

            operator1=parseFloat(display.textContent);
            operator='/';
            display.innerText ="";
        }

        else if(value == '%'){

            operator1=parseFloat(display.textContent);
            operator='%';
            display.innerText ="";
      }

        else if(value == '='){
            operator2 = parseFloat(display.textContent);
            console.log(operator2);

            //getting result

            let result;
           switch (operator) {
           case '+':
                result = operator1 + operator2;
                break;
           case '-':
                result = operator1 - operator2;
                break;
           case '*':
                 result = operator1 * operator2;
                 break;
           case '/':
                result = operator1 / operator2;
                break;
           case '%':
                result = operator1 % operator2;
                break;
            default:
                break;
            }
        
             console.log("the result is :",result);
             display.innerText =result;
        
        }

        else if(value == 'AC'){
             display.innerText="";
             operator='';
             operator1=0;
             operator2=0;
        }

        else{
             
             display.innerText +=value;
        }
        
    });
}


document.addEventListener("keydown",function(e){

    console.log("key are pressed",e.key);
   
    var key = e.key;


    if(key == '+'){

        operator1=parseFloat(display.textContent);
        operator='+';
        display.innerText =" ";
        
   }

  else if(key == '-'){

      operator1=parseFloat(display.textContent);
      operator='-';
      display.innerText ="";
   }

   else if(key == '*'){

      operator1=parseFloat(display.textContent);
      operator='*';
      display.innerText ="";
  } 

  else if(key == '/'){

      operator1=parseFloat(display.textContent);
      operator='/';
      display.innerText ="";
  }

  else if(key == '%'){

      operator1=parseFloat(display.textContent);
      operator='%';
      display.innerText ="";
}

  else if(key == '='){
      operator2 = parseFloat(display.textContent);
      console.log(operator2);

      //getting result

      let result;
     switch (operator) {
     case '+':
          result = operator1 + operator2;
          break;
     case '-':
          result = operator1 - operator2;
          break;
     case '*':
           result = operator1 * operator2;
           break;
     case '/':
          result = operator1 / operator2;
          break;
     case '%':
          result = operator1 % operator2;
          break;
      default:
          break;
      }
  
       console.log("the result is :",result);
       display.innerText =result;
  
  }

  else if(key == 'AC'){
       display.innerText="";
       operator='';
       operator1=0;
       operator2=0;
  }

  else{
       
       display.innerText +=key;
  }
  

});


