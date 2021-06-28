// pseudo-code
// goal: clicks a button AND generates a new div with new color

// 1. get the the button
const btnGen = document.querySelector('#btn-generate');
let userTailwindColor;
let userContent;

// 2. be able to click the button
// 3. After button click, generate div
btnGen.addEventListener('click', function () {

    // collectInput()
    // checkInput()
    // createDiv()

    collectInput(); //string

    //@TODO: Refactor this block to simplify this EventListner
    const userTailwindColor = window.prompt('What TW Color?'); //string
    const userContent = window.prompt('What Text?'); // string

    // 1. check that the input is valid
    // 2. if it's not valid, give feedback

    collectInput()//string

    checkInput(); //true
    // 3. if not OK stop
    // return ;

    // 4. if OK
    createNewDiv(userTailwindColor, userContent);

});

function collectInput(color, content){
    //@TODO: collect user input
    userTailwindColor = window.prompt('What TW Color?'); //string
    userContent = window.prompt('What Text?'); // strin
}

function checkInput(color, content) {
    // @TODO: check if input is valid
    if ( userTailwindColor === "bg-yellow-700" && userContent === "text-8xl") {
        alert("Your input is valid");
        return true;
    }
    else {
        alert("Please choose a proper Tailwind Color and a bigger text" );
        return false;
    }
}

// [D]ry [R]epeat [Y]ourself
function createNewDiv(tailwindBgColor, content) {
    const div = document.createElement('div');
    div.innerHTML = `<h3 class="text-9xl ${tailwindBgColor} p-3">${content}</h3>`; // string interpolation
    if (checkInput === true) {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="text-9xl ${userTailwindColor} p-3">${content}</h3>`; // string interpolation

        //  document.body.appendChild(div);
        document.body.appendChild(div);
        window.alert('Your div was created');
    } else {
        window.alert('Your div has just been created =)')
    }
}






