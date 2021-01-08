function myFunction() {
    let input;
    let filter;
    let Ulcontainer;
    let listElements;
    let a;
    let i;
    let txtValue;
    let contactContainer;

    //get tags
    //Search bar input
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    //Grab elements from the html
    Ulcontainer = document.getElementsByClass("row_skills");
    listElements = Ulcontainer.getElementsByTagName("li");

    //traverse collection TAGS
    for (i = 0; i < listElements.length; ++i) {
        a = listElements[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
            listElements[i].toUpperCase.style.display = "";
        } else {
            listElements[i].style.display = "none";
        }
    }

}
