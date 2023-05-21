function left() {
    let positionLeft = true
    let position = document.getElementById("box")
    if (positionLeft == true) {
        position.style.transform = "tranlateX(1000px)";
        positionLeft = false;
    }
}

function right() {
    let positionRight = true
    let position1 = document.getElementById("box")
    if (positionRight == true) {
        position1.style.transform = "tranlateX(10000px)";
        positionRight = false;
    }
}

function moveBlock() {
    const myButton = document.getElementById('myBlock');
    const distanceToMove = 50;
    myButton.style.transform = `translateX(${distanceToMove}px)`;

    }

    const myButton = document.getElementById('myButton');
    const distanceToMove = 50;
    myButton.style.transform = `translateX(-${distanceToMove}px)`;

    let positionLeft = true;
        function move() {
            let position = document.getElementById('block');
            if (positionLeft == true) {
                position.style.transform = 'translateX(1000px) rotate(0)';
                positionLeft = false;
            }
            else {
                position.style.transform = 'translateX(0px) rotate(4turn)';
                positionLeft = true;
            }
        }
