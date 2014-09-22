var i = prompt('Please enter a number').value;

function checkInput(i) {
    if (isNaN(i)) { 
        alert('You must enter a number!');
        return false;
    } else {
        fizzBuzz();
    }
}
checkInput();




var fizzBuzz = function () {
    for (i; i >= 1; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('body').append("<p>Fizz Buzz</p>");
            console.log("Fizz Buzz");
        } else if (i % 3 === 0) {
            $('body').append("<p>Fizz</p>");
            console.log("Fizz");
        } else if (i % 5 === 0) {
            $('body').append("<p>Buzz</p>");
            console.log("Buzz");
        } else {
            $('body').append('<p>' + i + '</p>');
            console.log(i);
        }
    }
};