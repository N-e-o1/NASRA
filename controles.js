function verif() {
    let age = document.getElementById("age").value;
    age=Number(age)
    if (age == 20) {
        alert("le aych bnti 21 3awed ");
    } 
    else if (age == 21) {
        alert("you just turned 21 right?");    
         window.location.href = "final.html"
    }
}
