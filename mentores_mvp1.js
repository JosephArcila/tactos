function myFunction() {
    var input, filter, container, contact, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    container = document.getElementById("myUL");
    contact = container.getElementsByClass("contact");
    for (i = 0; i < contact.length; i++) {
        a = contact[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            contact[i].style.display = "";
        } else {
            contact[i].style.display = "none";
        }
    }
}
