//variavel altura e largura

var altura = 0

var largura = 0

function ajustatamanhopalcojogo(){
     
     altura = window.innerHeight

     largura = window.innerWidth


    console.log(altura,largura)
    
    }

    
    
    
ajustatamanhopalcojogo()

function PosicaoRandomica(){
    
    var posicaoX = Math.floor(Math.random() * largura ) - 90 

    var posicaoy = Math.floor(Math.random() * altura )  - 90

    posicaoX = posicaoX < 0 ?  0 : posicaoX
    posicaoy = posicaoy < 0 ?  0 : posicaoy
   
console.log(posicaoX,posicaoy)

 //criar mosquito 

 var mosca =  document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio ()
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoy + 'px'
mosca.style.position = 'absolute'
                document.body.appendChild(mosca)
            }

function tamanhoAleatorio(){
   
var classe = Math.floor(Math.random()*3)
switch(classe){


case 0 :
return 'mosca1'

    case 1:
return 'mosca2'

    case 2 :
                
return 'mosca3'


}



}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)





    switch(classe){
        case 0 :

        return 'ladoA'
        
        case 1:
            return 'ladoB'
            



}
}