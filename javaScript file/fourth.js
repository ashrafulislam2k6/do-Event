// আমরা যেটা করবো , button এ click করলে title ta change হবে। 

 document.getElementById('text').addEventListener('click',function(){
             const changeText= document.getElementById('title');
            //  console.log(changeText);
            changeText.innerText='আপনি update করতে সফল হয়েছেন ';
        })

//  আমরা বাটনে ক্লিক করলে হেডিং চেঞ্জ হবে.
        document.getElementById('log').addEventListener('click', function(){
               const logInChange=document.getElementById('log-heading');
               logInChange.innerText='Log in process complete'
        })


            //    এই বার আমরা দেখবো যে কিভাবে, একটা dynamic টাইটেল কে চেঞ্জ করা যায়  -->
                 // 1st stape:  get event 
        document.getElementById('update').addEventListener('click',function (){
                    // 2nd stape: find the input 
            const getInput= document.getElementById('input')
             const name=getInput.value;
             console.log('my name is : ',name);

            //    3nd stape: set the input value in click:
            const title= document.getElementById('dynamic-Text');
            title.innerText=name;
           
           
        })
            //    এই বার আমরা দেখবো যে কিভাবে, একটা dynamic টাইটেল কে চেঞ্জ করা যায়  -->

             // stape no 1: 
        document.getElementById('name-update').addEventListener('click', function(){

            // stape no : 2 
            const inputName =  document.getElementById('input-filled');
                const personName=inputName.value;
                


            // stape: 3 set korbo title e 

             let sethobe= document.getElementById('family-name');
             sethobe.innerText =personName;

            
             
        })
        
