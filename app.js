

const square = document.querySelectorAll('.square');


// square.forEach(square =>{
//     square.addEventListener('click', handleClick);


// });
        //   let button = document.createElement('button');
        //     let moneybtn = document.querySelectorAll('.square');
        //     console.log(moneybtn);
        //     moneybtn.appendChild(button);
        //     document.body.appendChild(button);
        //     button.innerHTML = 'hello';



// filter out categories for the top/////////////////////////

// function handleClick(event) {
//     fetch('http://www.jservice.io/api/clues?categories?count=100')
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((res) => {
//                 console.log(res[0].category.ti);

//             let button = document.createElement('button');
            
//             let moneybtn = document.querySelector('.square');
//             console.log(moneybtn);
//             moneybtn.appendChild(button);
//             document.body.appendChild(button);

//             button.innerHTML = 'hello';

// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
    
// };
////////////////////////////////////////////////////////////



const category = document.querySelectorAll('.category');
category.forEach(category => {
    category.addEventListener('click', handleClickCat )
})
    

function handleClickCat(event) {
    fetch('http://www.jservice.io/api/categories?count=100')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
                ////////////Randomized the categories/////////////
                ////////////dont know how to print out in boxes/////////
                const max = 100
                let userinput = 6
                
                for (let i=0; i<userinput; i++){
                    // console.log(res[Math.floor(Math.random()*Math.floor(max))])
                    category.innerText = res[Math.floor(Math.random()*Math.floor(max))];
                }

			})
			.catch((error) => {
				console.log(error);
			});
    
};


// randomizing the output is good but repeating the numbers is a problem. /////

// function handleClick(event) {
//     fetch('http://www.jservice.io/api/clues?categories?count=100')
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((res) => {
//                 console.log(res[Math.floor(Math.random()*Math.floor(max))].category);

// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
    
// };


//////////////////////////////////////////////////////////////



    




// category.forEach(category => {
//     category.addEventListener('click', )
// })