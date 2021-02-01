// default value
document.getElementById('generateBox').value = null;
document.getElementById('type_box').value = null;

// for generator
document.getElementById('generator').addEventListener('click', function () {
    let value = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('generateBox').value = value;
});

// for input
document.getElementById('my_numbers').addEventListener('click', function (event) {
    const digit = event.target.innerText;

    if (isNaN(digit)) {
        if (digit == "C") {
            document.getElementById('type_box').value = "";
        }
        if (digit == "<") {
            const backspaceValue = document.getElementById('type_box').value;
            const updatedDigit = backspaceValue.slice(0, -1);
            document.getElementById('type_box').value = updatedDigit;
        }
    } else {
        const typedDigit = document.getElementById('type_box').value;
        const newDigit = typedDigit + digit;

        document.getElementById('type_box').value = newDigit;
    }
})


document.getElementById('submit_btn').addEventListener('click', function () {
    const inputValue = document.getElementById('type_box').value;
    const inputNumber = parseInt(inputValue);
    const generateValue = document.getElementById('generateBox').value;

    if (inputNumber == generateValue) {
        notify('success');
        hide('fail');

    } else {
        notify('fail');
        hide('success');
    }

});

function notify(element) {
    document.getElementById('notify_' + element).style.display = 'block';
}

function hide(element) {
    document.getElementById('notify_' + element).style.display = 'none';
}