function Search_bar() {
    let input;
    let Ulcontainer;
    let listElements;
    let a;
    let i;

    //get tags
    //Search bar input
    input = document.getElementById("myInput").value;

    //Grab elements from the html
    Ulcontainer = document.getElementsByClassName("row_skills");
    listElements = Ulcontainer.getElementsByTagName("li");

    //traverse collection TAGS
    for (i = 0; i < listElements.length; ++i) {
        a = listElements[i].getElementsByTagName("a")[0];
        if (a.innerHTML.includes(input)) {
            listElements[i].toUpperCase.style.display = "list-item";
        } else {
            listElements[i].style.display = "none";
        }
    }
}
