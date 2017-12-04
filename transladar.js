
var transMatriz = [
    [1,0,0],
    [0,1,0],
    [0,0,1],
]
var transHistory = []
function transladar(x,y, pol, undo){
    if(!undo)transHistory.push([Number(x),Number(y), pol]);
    transMatriz[0][2] = Number(x);
    transMatriz[1][2] = Number(y);
    
    for(let i = 0; i < pol.Pontos.length; i++){
        let p = pol.Pontos[i];
        let result = multiplicarMatrizes(transMatriz, [[p.x], [p.y], [1]]);
        pol.Pontos[i] = new Ponto(result[0], result[1]);
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