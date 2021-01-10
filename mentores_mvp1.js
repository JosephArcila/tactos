function Search_bar() {
    let input;
    let Ulcontainer;
    let UIContactContainer

    //get tags
    //Search bar input
    input = document.getElementById("myInput").value;
    input = input.toLowerCase();

    //Grab elements from the html
    Ulcontainer = document.getElementsByClassName("row_skills");
    UIContactContainer = document.getElementsByClassName("contact");


    //traverse collection TAGS
    for (let i = 0; i < Ulcontainer.length; ++i) {
        if (Ulcontainer[i].innerHTML.toLowerCase().includes(input)) {
            UIContactContainer[i].style.display = "list-item";
        } else {
            UIContactContainer[i].style.display = "none";
        }
    }
}
