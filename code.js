
var numbers=''
let screen=document.getElementById('screen')
let screeninput=document.createElement('div')

function userinput(choice){                 //input string of number characters and operators from buttons
    if(screeninput.innerText.length<=7){    //limit screen size 
    numbers=choice
    let inputnumber=document.createTextNode(numbers)  
    screeninput.appendChild(inputnumber)    
    console.log(screeninput.innerText.length)

    return numbers}
    else{return;
    }
        }    
    
        
    screen.appendChild(screeninput)
    
    function clearinput(){
        screeninput.innerHTML='' //AC button to clear the calculator screen

        } 

    function filtering(value){
        return typeof(value)=='number'
    }


function equal(){
    let resuling;
    resuling=(screeninput.innerHTML) //equal button to give the result on screen
    let resulone;
    console.log(typeof(resuling))
    console.log(resulone)
    let resulwo;
    resulwo=resuling.split(' ')
    console.log(resulwo[0]) //2
    console.log(resulwo[1]) //*
    console.log(resulwo[2]) //6
    console.log(resulwo[3]) //*
    console.log(resulwo[4]) //9
    console.log(resulwo)
    let laststepone
    laststepone=resulwo.map((current,index,thisarray)=>{
        

        if(index<3){
        if(current=='*'){
        current=+thisarray[index-1] * +thisarray[index+1]
        console.log(thisarray[0])   
        console.log(thisarray[1])
           console.log(thisarray[2])
           console.log(thisarray[3])
           console.log(thisarray[4])
            
         return current;
         console.log(thisarray)
        }else
         if(current=='/'){
            current=+thisarray[index-1] / +thisarray[index+1]
            
            
            return current
        }else
            if(current=='+'){
               current= +thisarray[index-1] + +thisarray[index+1]
                
                
                return current
            }else
                if(current=='-'){
                    current=+thisarray[index-1] - +thisarray[index+1]
                    
                    
                    return current
                }else return current
            }return current
        }
    )
    let laststeptwo;
laststeptwo=laststepone.map((current,index,thisarray)=>{
        

        if(index==3){
        if(current=='*'){
        current=+thisarray[index-2] * +thisarray[index+1]
        console.log(thisarray[0])   
        console.log(thisarray[1])
           console.log(thisarray[2])
           console.log(thisarray[3])
           console.log(thisarray[4])
            
         return current;
         console.log(thisarray)
        }else
         if(current=='/'){
           current= +thisarray[index-2] / +thisarray[index+1]
    
            return current
            }else
            if(current=='+'){
                current= +thisarray[index-2] + +thisarray[index+1]
                
              return current  
            }else
                if(current=='-'){
                current= +thisarray[index-2] - +thisarray[index+1]
                    
                 return current   
                }else return current
            }
        }
    )

    console.log(laststepone)
    laststep=laststepone.filter(filtering)
     lastlaststep=laststeptwo.filter(filtering)   
                    console.log(lastlaststep)
                 console.log(laststep)
      
        let screenresult;
      console.log(screeninput.innerHTML)
      if(screeninput.innerHTML.split(' ').length<=3){
        screenresult= +laststep
        console.log(screenresult)
        clearinput()

        userinput(screenresult.toFixed(2));     //limit decimal places to fit screen
      }else {
        screenresult= +lastlaststep
        clearinput()
        userinput(screenresult.toFixed(2))
      }
} 
    
    
