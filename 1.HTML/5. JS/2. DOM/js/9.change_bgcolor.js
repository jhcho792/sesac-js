function changeBGColor() {

    if (document.body.style.backgroundColor == 'red') {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'red';
    }
}

function changeBGColor_cycle() {
    const colors = ["red", "blue", "green"];


    if (document.body.style.backgroundColor == colors[0]) {
        document.body.style.backgroundColor = colors[1];
    } else if (document.body.style.backgroundColor == colors[1]) {
        document.body.style.backgroundColor = colors[2];
    } else if (document.body.style.backgroundColor == colors[2]) {
        document.body.style.backgroundColor = colors[0];
    } else {
        document.body.style.backgroundColor = colors[0];
    }


}


let currentIndex = 0;
function changeBGColor_cycle2() {
    const colors = ["red", "blue", "green"];

    console.log("현재 인덱스: ", currentIndex);
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex += 1;
    if (currentIndex > 2) {
        currentIndex = 0;
    }
}

function changeBGColor_cycle3() {
    const colors = ["red", "blue", "green"];
    console.log("현재 인덱스: ", currentIndex);

    document.body.style.backgroundColor = colors[currentIndex++];
    if (currentIndex > 2) {
        currentIndex = 0;
    }
}

function changeBGColor_cycle4() {
    const colors = ["red", "blue", "green", "purple", "orange"];
    console.log("현재 인덱스: ", currentIndex);

    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

