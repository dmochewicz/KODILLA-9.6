var list = document.getElementById("list");
var addElementBtn = document.getElementById("addElem");

function addElem() {
	
	var lis = document.getElementsByTagName("li");
	
	var newLi = document.createElement("li");
	newLi.innerText = "Item "+lis.length;
	
	list.appendChild(newLi);	
}

addElementBtn.addEventListener("click" ,addElem);