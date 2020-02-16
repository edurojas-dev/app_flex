//AppFlex.
//Exercicio de JavaScript - Prof Jose de Assis.
//@author: Eduardo Rojas.
//Ultima modificação: 18/08/2019

var etanol
var gasolina
var msg = document.getElementById('msg')

function calcular() {
    etanol = document.getElementById('txtEtanol').value
    gasolina = document.getElementById('txtGasolina').value
    //validando campos 
    if(etanol == '' || gasolina == ''){
        $('#exampleModal').modal()
        msg.innerHTML = 'Verifique os campos em brancos!'
        msg.style.color = '#e74c3c'
    }
    
    else{
        console.log('tudo ok')
        etanol = etanol.replace(";", ".")
        gasolina = gasolina.replace(";", ".")

        etanol = parseFloat(etanol)
        gasolina = parseFloat(gasolina)

        if(etanol > 0.7 * gasolina){
            document.getElementById('statusNeutro').src="imgs/gasolina.png"
        }
        else if(etanol < 0.7 * gasolina){
            document.getElementById('statusNeutro').src="imgs/etanol.png"
        }
        else {
            document.getElementById('statusNeutro').src="imgs/neutro.png"
        }    
    }
}

function limpar(){
    document.getElementById('statusNeutro').src="imgs/neutro.png"
}

function sobreApp(){
    window.open("sobreApp.html", "Sobre App", "width=400px, height=330px" ,"channelmode=yes")
}

$('#fecharSobreApp').click(function(){
    window.close()
})

$('#modoNoturno').click(function(){
    $('body').toggleClass("modoNoturno")
    $('#modoNoturno').toggleClass("modoNoturno")
    $('i').toggleClass('fas fa-sun').toggleClass('fas fa-moon')
})