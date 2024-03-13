function sprawdz() {
    var a = document.getElementById("a").checked;
    var b = document.getElementById("b").checked;
    var c = document.getElementById("c").checked;

    console.log(a, b, c);

    if(a == false && b == false && c == false) {
        document.getElementById("wynik").innerHTML = "Zaznacz odpowiedź";
        wynik.style.color = "orange";
    }
    else {
        if(a == true) {
            document.getElementById("wynik").innerHTML = "TAK";
            wynik.style.color = "green";
        }
        else {
            document.getElementById("wynik").innerHTML = "NIE";
            wynik.style.color = "red";
        }
    }
}
