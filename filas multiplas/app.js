
var processo = [];
processo[0] = {id: 0, nome: 'a', T_entrada: '0', T_execucao:'5', prioridade:'1'};
processo[1] = {id: 1, nome: 'b',T_entrada: '2', T_execucao:'5', prioridade:'0'};
processo[2] = {id: 2, nome: 'c',T_entrada: '5', T_execucao:'6', prioridade:'0'};
processo[3] = {id: 3, nome: 'd',T_entrada: '6', T_execucao:'5', prioridade:'1'};


var indice = 0;
var pri = 0;
var fila1 = [];
var fila0 = []

var tem_max=25;
var tem_atual= 0;
//------------------------------------------declaração de variaveis-------------------------
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








function verificar(){
    if(tem_atual == processo[i].T_entrada && processo[i].prioridade == 0){
        fila0.push(processo[i]);
    }else if(tem_atual == processo[i].T_entrada && processo[i].prioridade == 1){
        fila1.push(processo[i]);
    }
}


function listar1(){
    fila1.forEach((p) => {
        if (tem_atual >= p.T_entrada && p.T_execucao > 0 && pri == p.id) {
            $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
            $("#execucao").append("<ul class='exe'>"+p.nome+"</ul>");
            p.T_execucao--;
            if(p.T_execucao == 0){
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
                tem_atual++;
                p.T_execucao--;
                
            }
        }
    });
}

    
        
        


