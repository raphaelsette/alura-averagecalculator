function calculoMedia() {
    var nomeAluno = document.getElementById("nomeAluno").value;
    var notaPrimeiroBimestre = parseInt(document.getElementById("notaPrimeiroBimestre").value);
    var notaSegundoBimestre = parseInt(document.getElementById("notaSegundoBimestre").value);
    var notaTerceiroBimestre = parseInt(document.getElementById("notaTerceiroBimestre").value);
    var notaQuartoBimestre = parseInt(document.getElementById("notaQuartoBimestre").value);

    var mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

    var calculoMedia = document.getElementById("calculoMedia");
    calculoMedia.innerHTML = nomeAluno + " a sua média é " + mediaFinal.toFixed(1);

    if (mediaFinal >= 6) {
        var statusMedia = document.getElementById("statusMedia");
        statusMedia.innerHTML = "Você está APROVADO!";
    } else {
        var statusMedia = document.getElementById("statusMedia");
        statusMedia.innerHTML = "Você está REPROVADO!";
    }
}