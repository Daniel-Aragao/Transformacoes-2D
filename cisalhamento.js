
var cisalhamentoMatriz = [
    [1,0,0],
    [0,1,0],
    [0,0,1],
]

function Cisalhamento(x,y, pol, local){
    cisalhamentoMatriz[0][1] = Number(x);
    cisalhamentoMatriz[1][0] = Number(y);
    if(local){
        transladar(-pol.Pontos[0].x, -pol.Pontos[0].y,pol)
    }
    for(let i = 0; i < pol.Pontos.length; i++){
        let p = pol.Pontos[i];
        let result = multiplicarMatrizes(cisalhamentoMatriz, [[p.x], [p.y], [1]]);
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