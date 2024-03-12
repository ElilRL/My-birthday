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
        case "1911":
            // Change Text
            // Change Picture
            console.log("it worked");
            break;
        case "1952":
            // Change Text
            // Change Picture
            console.log("it worked");
            break;
        case "1955":
            // Change Text
            // Change Picture
            console.log("it worked");
            break;
        case "1993":
            // Change Text
            // Change Picture
            console.log("it worked");
            break;
        default:
            console.log("something went wrong: " + date);
    }

}

