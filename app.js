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
