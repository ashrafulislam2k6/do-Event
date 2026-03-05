//   // step -1: button টা কে নিয়ে আসো , এবং event handler যোগ কর :

//         document.getElementById('post-comment').addEventListener('click', function(){

//             //    step: 2 -- inputfilld কে নিয়ে আসো এবং processing কর : 
//               const inputFilld =document.getElementById('text-comment-box');
//               const inputValue= inputFilld.value;
            
//             // step: 3  -- input টাকে parent e পাঠাতে হবে।
//             const getCommentContainer= document.getElementById('comment-container');
//            // step :4 -- create a comment tag :
//              const createP= document.createElement('p');
//               createP.classList.add('comment-box')
//               createP.innerText=inputValue;

            
                   
             
//             // step:5-- comment-container er vetore createp ke pathate hobe.

//            const appendComment= getCommentContainer.appendChild(createP);
            
//             // step: 6 -- clean the text :
//             inputFilld .value='';
        
              
//         })
