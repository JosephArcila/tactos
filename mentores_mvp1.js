/*
* @author : Mentore_DevTeam
*  Date: 11-JAN-2021
*  Version: 0.1
*
*
*  Notes
*  
*
*
*/

function Search_bar() {
    let input;
    let Ulcontainer;
    let UIContactContainer;

    //get tags
    //Search bar input
    input = document.getElementById("myInput").value;
    input = input.toLowerCase();

    //Grab elements <<div>> from the html
    Ulcontainer = document.getElementsByClassName("row_skills");
    UIContactContainer = document.getElementsByClassName("contact");

    //Lists <<li>>
    getList = document.getElementsByTagName("li");

    //traverse collection TAGS
    for (let i = 0; i < UIContactContainer.length; ++i) {

        //Look for spaces and trim them
        //let fixString = Ulcontainer[i].innerHTML.indexOf(",");
        getList[i] = getList[i].innerHTML.trim();
        //getList = Ulcontainer[i].innerHTML.trim

        //Seach condition
        if (UIContactContainer[i].innerHTML.toLowerCase().includes(input)) {
            //show the division
            UIContactContainer[i].style.display = "";
        } else {
            //Hide the division
            UIContactContainer[i].style.display = "none";
        }
    }
}
