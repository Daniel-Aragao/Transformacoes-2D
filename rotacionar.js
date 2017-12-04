
var rotMatriz = [
    [1,1,0],
    [1,1,0],
    [0,0,1],
]

function Rotacionar(x, pol, local){
    x = x*Math.PI/180;
    rotMatriz[0][0] = Math.cos(Number(x));
    rotMatriz[0][1] = -Math.sin(Number(x));
    rotMatriz[1][0] = Math.sin(Number(x));
    rotMatriz[1][1] = Math.cos(Number(x));
    
    if(local){
        transladar(-pol.Pontos[0].x, -pol.Pontos[0].y,pol)
    }
    for(let i = 0; i < pol.Pontos.length; i++){
        let p = pol.Pontos[i];
        let result = multiplicarMatrizes(rotMatriz, [[p.x], [p.y], [1]]);
        pol.Pontos[i] = new Ponto(result[0], result[1]);
    }
    if(local){
        transladarUndo();
    }

    limpar();
    pol.Desenhar();
}
function transladarUndo(){
    if(transHistory.length){
        let p = transHistory.pop();
        transladar(-p[0], -p[1], p[2], true);
    }
}