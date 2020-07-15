let startScore = 0
const max = 100




// const category = document.querySelectorAll('.category');
// category.forEach(category => {
//     category.addEventListener('click', handleClickCat )
// })
    
// function handleClickCat(event) {
//     fetch('http://www.jservice.io/api/categories?count=100')
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((res) => {
// //////////////////////////Randomized the categories///////////////////////
//   /////////////////////////dont know how to print out in boxes/////////
            
//                 let userinput = 6
                
//                 for (let i=0; i<userinput; i++){
//                     // console.log(res[Math.floor(Math.random()*Math.floor(max))])
//                     category.innerText = res[Math.floor(Math.random()*Math.floor(max))];
//                 }
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
    
// };
/////////////////////////////////////////////////////////////////



// function createBtns() {

// 	let yesBtn = document.createElement('button');
//     let noBtn = document.createElement('button');
//     yesBtn.className = 'choices'
//     noBtn.className = 'choices'
// 	yesBtn.appendChild(document.createTextNode('Yes!'));
//     noBtn.appendChild(document.createTextNode('No...'));
//     let page = document.querySelector('.square');
   
// 	page.appendChild(yesBtn);
//     page.appendChild(noBtn);
//     // let x = document.querySelector('choices').addEventListener('click', myfunc)
// 	// function myfunc(){
//     //     if (x.style.display === 'none'){
//     //         x.style.display = 'block'
//     //     }else {
//     //         x.style.display = 'none'
//     //     }
//     // }
// }
// createBtns()


 





//////////////////randomized questions for each value///////////////////


const square = document.querySelectorAll('.squ1');

square.forEach((square) => {
	square.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=100`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {

                let quest = res[Math.floor(Math.random() * Math.floor(max))].question
                square.innerText = quest
               console.log(quest)
			})
			.catch((error) => {
				console.log(error);
			});
    
};
handleClickQues()




//////////////////////////////////////////////////////////////
                
                // let noBtn = document.createElement('button');
                // button.className = "options"
                // // noBtn.className = "options"
                // button.innerText = "YES"
                // // noBtn.innerText = "NO"
                // square.appendChild(button)
                // document.body.appendChild(square)
				// const increment = parseInt(event.target.dataset.increment);
				// if (event.target.classList.contains('squ1')){
                    
                //     score+= increment;
                //    if (score ){

                //    }
                // }