let startScore = 0
const max = 100 
const page = document.querySelector('div');
page.addEventListener('click', createBtns)

let scoreEle = document.querySelectorAll('.score')
scoreEle.textContent = startScore

//////////////////cant add a button to each div///////////////////

function createBtns() {
    
	let yesBtn = document.createElement('button');
    let noBtn = document.createElement('button');
    yesBtn.className = 'choices'
    noBtn.className = 'choices'
    // yesBtn.style='display:none;'
    // noBtn.style='display:none;'
	yesBtn.appendChild(document.createTextNode('Yes!'));
    noBtn.appendChild(document.createTextNode('No...'));
		page.appendChild(yesBtn);
            page.appendChild(noBtn);	
            scoreEle.textContent = ++startScore
//    for(let i=0; i<page;i++){
//         console.log(page[i])
//        list = updatediv(page[i].innerHTML);
//        page[i].innerHTML = list
//     }   
}    

createBtns()
/******////////////randomized questions for each value////////////////****** */
const square1 = document.querySelectorAll('.squ1'); 
square1.forEach((square1) => {
	square1.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=100`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
////////////////////////cant figure out how to target answer//////////
////////////////////and print out in boxes////////////////
             console.log(res[Math.floor(Math.random()* Math.floor(max))].question) 
			})
			.catch((error) => {
				console.log(error);
			}); 
};
///////////////////////////////////////////////////////////////////////////////
const square2 = document.querySelectorAll('.squ2'); 
square2.forEach((square2) => {
	square2.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=200`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
             console.log(res[Math.floor(Math.random()* Math.floor(max))].question) 
			})
			.catch((error) => {
				console.log(error);
			});
};
///////////////////////////////////////////////////////////////////////////////
const square3 = document.querySelectorAll('.squ3'); 
square3.forEach((square3) => {
	square3.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=300`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
             console.log(res[Math.floor(Math.random()* Math.floor(max))].question)           
			})
			.catch((error) => {
				console.log(error);
			});
};
//////////////////////////////////////////////////////////////////////////////
const square4 = document.querySelectorAll('.squ4'); 
square4.forEach((square4) => {
	square4.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=400`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
             console.log(res[Math.floor(Math.random()* Math.floor(max))].question) 
			})
			.catch((error) => {
				console.log(error);
			});
};
////////////////////////////////////////////////////////////////////////////
const square5 = document.querySelectorAll('.squ5'); 
square5.forEach((square5) => {
	square5.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
    fetch(`http://www.jservice.io/api/clues?value=500`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
             console.log(res[Math.floor(Math.random()* Math.floor(max))].question) 
			})
			.catch((error) => {
				console.log(error);
			});
};