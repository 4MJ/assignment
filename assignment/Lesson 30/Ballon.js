function getSizeValue(value, unit) {
	return parseInt(value.split(unit)[0]);
}

function balloon(event) {
	switch (event.keyCode) {
		case 40:
			changeSize('.balloon', 1.1, 'down');
			break;
		case 38:
			changeSize('.balloon', 1.1);
			break;
		default:
			return; 
	}
}

function changeSize(el, amount, direction) {
	el = document.querySelector(el);
	let elSize = window.getComputedStyle(el).fontSize;
    let elSizeValue = getSizeValue(elSize, 'px');
    amount=10;
    
    // window.addEventListener("keydown", event=>{
    //     if(event.key=="ArrowUp"){
    //         elementSizeValue *= amount;
    //     }else if(event.key=="ArrowDown"){
    //         elementSizeValue /= amount;
    //     }else{
    //         elementSize;
    //     }
    // });

	if (direction === undefined) {
		elSizeValue += amount;
	} else elSizeValue -= amount;

	if (elSizeValue <= 150) {
		console.log(elSize);
		elSize = Math.ceil(elSizeValue) + 'px';
		el.style.fontSize = elSize;
	} else boom(el);
}

function boom(el) {
	el.firstChild.nodeValue = '💥';
	document.removeEventListener('keydown', balloon, true);
}
document.addEventListener('keydown', balloon, true);