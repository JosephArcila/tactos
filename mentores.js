function Search_bar() {
    let input = document.getElementById("myInput").value;
    let Ulcontainer = document.getElementsByClassName("row_skills");
    let UIContactContainer = document.getElementsByClassName("contact");

    for (let i = 0; i < Ulcontainer.length; ++i) {
        var result = searchValue(input, Ulcontainer[i].innerHTML);
        var displayType = result ? "" : "none";
        UIContactContainer[i].style.display = displayType;
    }
}

const searchValue = (input, hability) => {
    var result = false;
    var listHabilities = getHabilities(hability);
    var inputFinal = validateValue(input);
    for (let i = 0; i < listHabilities.length; i++) {
        var habilityFinal = validateValue(listHabilities[i]);
        if (habilityFinal.includes(inputFinal)) {
            result = true;
        }
    }

    return result;
}

const getHabilities = (hability) => {
    return hability.replace(/<li>/gi, "")
        .replace(/<\/li>/gi, "")
        .replace(/<a>/gi, "")
        .replace(/<\/a>/gi, "")
        .replace(/ /gi, "")
        .replace(/(?:\r\n|\r|\n)/g, "")
        .split(",");
}

const validateValue = (value) => {
    var valueToClear = value.toLowerCase();
    valueToClear = removeAccents(valueToClear);
    valueToClear = valueToClear.trim();
    return valueToClear.replace(/ /gi, "");
}


const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

