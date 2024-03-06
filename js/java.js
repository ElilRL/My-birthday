const buttons = document.querySelectorAll(".radio-wrapper");

buttons.forEach(button => {
    button.addEventListener('click', function () {
        updateContent(button.id);
    })
});

function updateContent(date) {
console.log(date);
    switch (date) {
        case "1894":
            // Change Text
            // Change Picture
            console.log("it worked");
            break;
            
        default:
            alert("something went wrong");
    }

}
