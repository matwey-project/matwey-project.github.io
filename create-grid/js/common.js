var summColumn,
nameColumn,
gridResult,
resultHtml,
parametrGrid,
addParametr,
buttonAdd,
countColumn = 5;

addParametr = document.querySelector('.main-parametrs');
buttonAdd = document.querySelector('.add');

buttonAdd.addEventListener("click", function(){
	createNewGrid();
	column();
});

function start() {
	createNewGrid();
	column();
}
start();


function createNewGrid(){
	if(document.querySelectorAll(".add-parametrs").length <= countColumn - 1){
		let createDiv = document.createElement('div');
		createDiv.className = "add-parametrs";
		addParametr.appendChild(createDiv);

		let createNameCol = document.createElement('input');
		createNameCol.setAttribute("name","name-col");
		createNameCol.setAttribute("value","name-colum");
		createNameCol.setAttribute("oninput","column()");
		createDiv.appendChild(createNameCol);

		let createCounter = document.createElement('input');
		createCounter.setAttribute("name","name-caunter");
		createCounter.setAttribute("type","number");
		createCounter.setAttribute("min","1");
		createCounter.setAttribute("max","20");
		createCounter.setAttribute("value","12");
		createCounter.setAttribute("oninput","column()");
		createDiv.appendChild(createCounter);

		let createGridWidth = document.createElement('input');
		createGridWidth.setAttribute("name","grid-width");
		createGridWidth.setAttribute("placholder","@media-min-width");
		createGridWidth.setAttribute("value","992");
		createGridWidth.setAttribute("oninput","column()");
		createDiv.appendChild(createGridWidth);

		let createTextarea = document.createElement('textarea');
		createTextarea.setAttribute("name","grid-ressult");
		createTextarea.setAttribute("type","number");
		//createTextarea.setAttribute("id","grit-ressult");
		createDiv.appendChild(createTextarea);
	}
}

// function columnNew() {
// 	var parametrBlock = document.querySelectorAll(".add-parametrs");
// 	//console.log(parametrBlock.length);

// 	for (var k = 1; k <= parametrBlock.length; k++) {
// 		console.log(k);
// 	}


// 	gridResult = document.querySelector("textarea[name=grid-ressult]");
// 	gridResult.innerHTML = "";

// 	nameColumn = document.querySelector("input[name=name-col]").value;
// 	nameCaunter = document.querySelector("input[name=name-caunter]").value;
// 	nameCaunter = Number(nameCaunter);

// 	addGridItem();
// }


function column() {

	var parametrBlock = document.querySelectorAll(".add-parametrs");
	//console.log(parametrBlock.length);

	// gridResult = document.querySelector("textarea[name=grid-ressult]");
	// gridResult.innerHTML = "";

	// nameColumn = document.querySelector("input[name=name-col]").value;
	// nameCaunter = document.querySelector("input[name=name-caunter]").value;
	// nameCaunter = Number(nameCaunter);

	for (let k = 0; k < parametrBlock.length; k++) {
		let textareaName = parametrBlock[k];
		console.log(textareaName);
		nameColumn = textareaName.childNodes[0].value;
		nameCaunter = textareaName.childNodes[1].value;
		nameCaunter = Number(nameCaunter);
		nameGridWidth = textareaName.childNodes[2].value;
		//nameGridWidth = textareaName.childNodes[2].getAttribute("placholder");
		gridResult = textareaName.childNodes[3];
		gridResult.innerHTML = "";
console.log(nameGridWidth);
		addGridItem();
	}

}

// function column() {



// 	gridResult = document.querySelector("textarea[name=grid-ressult]");
// 	gridResult.innerHTML = "";

// 	// [].forEach.call(
// 	// 	document.querySelector("textarea[name=grid-ressult]"),
// 	// 	function (el) {
// 	// 		console.log(el);
// 	// 	}
// 	// );

// 	// 	console.log(gridResult);
// 	// for (var i = 0; i <= gridResult.length; i++) {
// 	// 	console.log(i);
// 	// }

// 	nameColumn = document.querySelector("input[name=name-col]").value;
// 	nameCaunter = document.querySelector("input[name=name-caunter]").value;
// 	nameCaunter = Number(nameCaunter);

// 	//console.log(nameCaunter);


// 	addGridItem();

// }

function addGridItem(){
	resultHtml = '@media only screen and (min-width : ' + nameGridWidth + 'px) {';
	gridResult.innerHTML = resultHtml + '\n';
	for (let i = 1; i <= nameCaunter; i++) {

		let columnStart = i * (100 / nameCaunter);
		let nameParse = nameColumn + '-' + i;
		resultHtml = '	.'+nameParse + ' {'+'width'+':' + columnStart + '%'+'}';
		//resultHtml = '@media only screen and (min-width : ' + nameGridWidth + 'px) {'+'}';
		
		gridResult.innerHTML += resultHtml + '\n';
		//gridResult.innerHTML += resultHtml;
			//console.log(gridResult);
			//console.log(resultHtml);
		}
		resultHtml = '}';
		gridResult.innerHTML += resultHtml;
	}
	
// for (let i = 1; i <= nameCaunter; i++) {

// 	let columnStart = i * (100 / nameCaunter);
// 	let nameParse = nameColumn + '-' + i;
// 	resultHtml = '.'+nameParse + ' {'+'width'+':' + columnStart + '%'+'}';

// 	gridResult.innerHTML += resultHtml + '\n';
// 	console.log(gridResult);
// 	//console.log(resultHtml);
// }

// parametrGrid = document.getElementById('parametr-grid').innerHTML;
// gridResult.innerHTML = "";
// gridResult.innerHTML = parametrGrid+'\n';


/*window.onload = function() {
//column();
}*/
