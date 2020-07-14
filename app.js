let team1 = 'X'

const square = document.querySelectorAll('.square');


square.forEach(square =>{
    square.addEventListener('click', handleClick);


});
        //   let button = document.createElement('button');
        //     let moneybtn = document.querySelectorAll('.square');
        //     console.log(moneybtn);
        //     moneybtn.appendChild(button);
        //     document.body.appendChild(button);
        //     button.innerHTML = 'hello';
// function switchTeam(){
//     team1 = team1 === 'X' ? 'O' : 'X';
// };


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


      
// randomizing the output is good but repeating the numbers is a problem. 

function handleClick(event) {
    fetch('http://www.jservice.io/api/clues?categories?count=100')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
                console.log(res[Math.floor(Math.random()*100)].category);



            

			})
			.catch((error) => {
				console.log(error);
			});
    
};

// const category = document.querySelectorAll('.category');
// category.forEach(category => {
//     category.addEventListener('click', )
// })


    




// category.forEach(category => {
//     category.addEventListener('click', )
// })