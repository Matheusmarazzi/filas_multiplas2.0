
var processo = [];
// processo[0] = {id: 0, nome: 'a', T_entrada: '0', T_execucao:'5', prioridade:'1'};
// processo[1] = {id: 1, nome: 'b',T_entrada: '2', T_execucao:'5', prioridade:'0'};
// processo[2] = {id: 2, nome: 'c',T_entrada: '5', T_execucao:'6', prioridade:'0'};
// processo[3] = {id: 3, nome: 'd',T_entrada: '6', T_execucao:'5', prioridade:'1'};
var filas = [];
var reset = [];
var total = 0;
var espera = 0;

var id = 0;
var indice = 0;
var pri = 0;
var fila1 = [];
var fila0 = []

var tem_max=25;
var tem_atual= 0;
//------------------------------------------declaração de variaveis-------------------------



function rodar(){
    reset = processo;
    while(tem_max > tem_atual){
        for(i=0; i<processo.length;i++){
            verificar();
        }
        tem_atual++
    }
    tem_atual=0;
    for(i=0; i<10; i++){
        listar0();
        listar1();
        tem_atual++     
    }
    listarFila0();
    listarFila1();
    listarDados();
}








function verificar(){
    if(tem_atual == processo[i].T_entrada && processo[i].prioridade == 0){
        fila0.push(processo[i]);
    }else if(tem_atual == processo[i].T_entrada && processo[i].prioridade == 1){
        fila1.push(processo[i]);
    }
}


function listar1(){
    fila1.forEach((p) => {
        if (tem_atual >= p.T_entrada && p.T_execucao > 0 /*&& pri == p.id*/) {
            $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
            $("#execucao").append("<ul class='exe'>"+p.nome+"</ul>");
            p.T_execucao--;
            total++;
            if(p.T_execucao == 0 && indice+1 < fila1.length){
                pri = fila1[indice+1].id;
            }
        }
    });

}
function listar0(){
    fila0.forEach((p) => {
        if (tem_atual >= p.T_entrada ) {
            while(p.T_execucao > 0){
                $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
                $("#execucao").append("<ul class='exe'>"+p.nome+"</ul>");
                total++;
                tem_atual++;
                p.T_execucao--;
                
                
            }
        }
    });
}

function adicionar(){
let nome, t_entrada, t_execucao, prio;
    nome = $("#nom").val();
    t_entrada = $("#T_che").val();
    t_execucao = $("#T_ex").val();
    prio = $("#prior").val();
    processo.push({id: id, nome: nome, T_entrada: t_entrada, T_execucao: t_execucao, prioridade:prio, espera: 0});
    filas.push({id: id, nome: nome, T_entrada: t_entrada, T_execucao: t_execucao, prioridade:prio, espera: 0});
    id++;
    reset = {};
    backup();
    $("#nom").val("");
    $("#T_che").val("");
    $("#T_ex").val("");
    $("#prior").val("");


    
    
    
}    
function backup(){

    reset = processo;
}        


function listarFila0(){
    $(".filas0").append("<ul class='tem'>fila 0</ul>");
    for(i=0;i<fila0.length;i++){
        $(".filas0").append("<ul class='exe'>"+fila0[i].nome+"</ul>");
    }$(".filas0").append("<br>");
}
function listarFila1(){
    $(".filas1").append("<ul class='tem'>fila 1</ul>");
    for(i=0;i<fila1.length;i++){
        $(".filas1").append("<ul class='exe'>"+fila1[i].nome+"</ul>");
    }
}


function listarDados(){
    let medio = tempoMedioEspera(filas);
    let medioTotal = tempoMedioTotal(filas);
    $(".dados").append("<h2>Tempo total de execução: "+total+"</h2>");
    $(".dados").append("<h2>Tempo medio de espera: "+medio+"</h2>");
    $(".dados").append("<h2>Tempo medio Total: "+medioTotal+"</h2>");
    

} 



  
  
  
  function tempoMedioEspera(fila) {
    let n = fila.length;
    let tempoAtual = 0;
    let tempoTotal = 0;
    let tempoEsperaTotal=0;

    for(i=0;i<fila.length;i++){
        tempoTotal += Number(fila[i].T_execucao);
    }
    

    while(tempoAtual<tempoTotal){
        for(j=0; j<fila.length;j++){
            if(tempoAtual > fila[j].T_entrada){            
                espera = tempoAtual - Number(fila[j].T_entrada);
                filas[j].espera = espera;
                

            }
            tempoAtual += Number(fila[j].T_execucao);
        }
        
        console.log(tempoAtual);
    }
    for(i=0;i<fila.length;i++){
        tempoEsperaTotal += Number(fila[i].espera);
    }
    
    let tempoMedio = tempoEsperaTotal / n;
    tempoMedio = tempoMedio.toFixed(2);
    
    return tempoMedio;
  }





  function tempoMedioTotal(fila) {
    let n = fila.length;
    let tempoTotal= 0;

    for(i=0;i<fila.length;i++){
        tempoTotal += Number(fila[i].T_execucao) + Number(fila[i].espera);
    }
    
    let tempoMedioTotal = tempoTotal / n;
    tempoMedioTotal = tempoMedioTotal.toFixed(2);
  
    return tempoMedioTotal;
  }
  
  
  
  
    
    
