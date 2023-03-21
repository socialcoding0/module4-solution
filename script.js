
HelloAndGoodbye();


function HelloAndGoodbye() {
    let names = [
        "john",
        "jane",
        "carol",
        "smith",
        "Janna",
        "allisha",
        "camille",
    ]


    for (let name of names) {
        let firstLetter = name.substring(0, 1).toLowerCase();


        if (firstLetter == "j" || firstLetter == "J") {
            console.log("goodbye " + name);
        }
        else {
            console.log("hello " + name);
        }
    }


}



