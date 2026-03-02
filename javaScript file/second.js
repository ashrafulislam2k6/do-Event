console.log('add onclick handler ');



// 2nd option onClick event handle ing : এইটা আমরা প্রায়ই use করব।

function makeYellow(){
            document.body.style.backgroundColor='blue';
          }

function makeRed(){
         document.body.style.backgroundColor='red';
      }



// option 3: get element by id and than set onclick ,একই লাইনেই function লিখা হয়েছে। 

const btnMakeGreen= document.getElementById('btn-make-blue');
          btnMakeGreen.onclick=function makeGreen(){
            document.body.style.backgroundColor='green';
          }


// option 3: second step: আমরা অন্য জায়গাথেকে function তৈরি করে এরপর link বসিয়ে  দিবো .
 const option3= document.getElementById('btn-make-purple');
      //   console.log(option3);
      
      option3.onclick=makePurple;

      function makePurple(){
         document.body.style.backgroundColor='purple';
      }
          






    