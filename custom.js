var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

(function(){
    this.reset = (function(){
        this.pol = new Poligono();
        pol.Pontos = [
            new Ponto(100, 200),
            new Ponto(200, 200),
            new Ponto(200, 300),
            new Ponto(100, 300),
        ]
        limpar();
        pol.Desenhar();
    });
    reset();
})();



function multiplicarMatrizes(m1, m2){
    if(m1[0].length != m2.length) throw "m != n";

    let result = [];

    for(let i = 0; i < m1.length; i++){
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;    
            for (let t = 0; t < m1[i].length; t++) {
                sum += m1[i][t] * m2[t][j];
                
            }
            if(!result[i]) result[i] = [];
            result[i][j] = sum;
        }
    }
    return result;
}

function Poligono(){
    this.Pontos = []
    this.boundColor = "black";
    this.fillColor = "blue"
    this.Desenhar = function(){
        for(let i = 0; i < this.Pontos.length;){
            let esse = i;
            let prox = ++i;
            if(prox == this.Pontos.length) prox = 0;
            lineToJS(new Reta(this.Pontos[esse], this.Pontos[prox]));
            if(!prox) break;
        }
    }
}

function Reta(p1, p2){
    this.pInicial = p1;
    this.pFinal = p2;
}

function Ponto(x,y){
    this.x = x;
    this.y = y;
}
function limpar(){
    ctx.clearRect(0,0, 8000, 6000)
}
function lineToJS(reta){
    ctx.beginPath();
    // ctx.strokeStyle = reta.cor;	
    oX = Number(origemX.value);
    oY = Number(origemY.value);
    ctx.moveTo(oX + reta.pInicial.x, oY + reta.pInicial.y);
    ctx.lineTo(oX + reta.pFinal.x, oY + reta.pFinal.y);
    ctx.stroke();
}