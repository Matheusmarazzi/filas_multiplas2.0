
var processo = [];
processo[0] = {nome: 'a', T_entrada: '0', T_execucao:'5', prioridade:'1'};
processo[1] = {nome: 'b',T_entrada: '2', T_execucao:'5', prioridade:'0'};
processo[2] = {nome: 'c',T_entrada: '5', T_execucao:'6', prioridade:'0'};
processo[3] = {nome: 'd',T_entrada: '6', T_execucao:'9', prioridade:'1'};


fatia = 2;
var fila = [];

var tem_max=25;
var tem_atual= 0;
//------------------------------------------declaração de variaveis-------------------------

while(tem_max > tem_atual){
    for(i=0; i<processo.length;i++){
        if(tem_atual == processo[i].T_entrada){
            if(processo[i].prioridade == 0){
                for(j=0; j<=0; j++){
                    $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
                    $("#execucao").append("<ul class='exe'>"+processo[i].nome+"</ul>");
                }
            }else{
                
            }
        }        
    }



}
        
        
        






// ------------------------------------------------round robin
// function rodar(){
//     while(tem_max > tem_atual){//inicio comparando os tempos
//         for(i=0; i<processo.length;i++){
//             if(tem_atual >= processo[i].T_entrada && processo[i].prioridade == 0 && processo[i].T_execucao > 0){// verificando se a prioridade é 0
//                    listarAltaprio();
//                 }else if(tem_atual >= processo[i].T_entrada && processo[i].prioridade == 1 ){//verificando se a prioridade é 1
//                     listarBaixaprio();
//                 }
//         }
//     }
// // } 
//         function listarAltaprio(){
//             for(j=0;j<processo[i].T_execucao;j++){
//                 $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
//                 $("#execucao").append("<ul class='exe'>"+processo[i].nome+"</ul>");
//                 tem_atual++;
                                
//             } processo[i].T_execucao = 0;
//         }
//         function listarBaixaprio(){
//             for(j=0;j<fatia;j++){
//                 if(processo[i].T_execucao > 0){
//                     $("#tempo").append("<ul class='tem'>"+tem_atual+"</ul>");
//                     $("#execucao").append("<ul class='exe'>"+processo[i].nome+"</ul>");
//                     processo[i].T_execucao--;
                    
                    
//                     tem_atual++;
//                 }
//         }
//     }

































// console.log(espera)

// processos[0] = {nome: 'a', T_entrada: '0', T_execucao:'7', prioridade:'1'};
// processos[1] = {nome: 'b',T_entrada: '2', T_execucao:'5', prioridade:'0'};
// processos[2] = {nome: 'c',T_entrada: '5', T_execucao:'6', prioridade:'0'};
// processos[3] = {nome: 'd',T_entrada: '6', T_execucao:'9', prioridade:'1'};

// const n_Processos = processo.length;

// while(tem_atual < tem_max ){
//     for(i=0; i<n_Processos;i++){
//             if(processo[i].T_entrada == tem_atual && processo[i].prioridade == 0){
//                 for(j=0;j<processo[i].T_execucao;j++){
//                     $("#execucao").append("<p>"+processo[i].nome+"</p>");
//                     tem_atual++;
                    
//                 }
//                 processo[i].T_execucao = 0;

//             }else if(processo[i].T_entrada == tem_atual && processo[i].prioridade == 1 && processo[i].T_execucao != 0){
                // for(j=0;j<fatia;j++){
                //     $("#execucao").append("<p>"+processo[i].nome+"</p>");
                //     processo[i].T_execucao--;
                     
                //     tem_atual++;
//                 }if(processo[i].T_execucao != 0){
//                     espera.push({id:i});
//                     console.log(espera)
//                 }
//             }else if(tem_atual >= processo[i].T_entrada && processo[i].T_execucao == processos[i].T_execucao && processo[i].prioridade == 0 && processo[i].T_execucao != 0){
//                 for(j=0;j<processo[i].T_execucao;j++){
//                     $("#execucao").append("<p>"+processo[i].nome+"</p>");
//                     tem_atual++;
                    
//                 }
//             }else if(tem_atual >= processo[i].T_entrada && processo[i].T_execucao == processos[i].T_execucao && processo[i].prioridade == 1 && processo[i].T_execucao != 0){
//                 espera.push({id:i});
//                 console.log(espera)
//             }else{
//                let indice =  espera[0].id;
//                for(j=0;j<fatia;j++){
//                         $("#execucao").append("<p>"+processo[i].nome+"</p>");
//                         processo[i].T_execucao--;
//                         if(processo[i].T_execucao != 0){
//                             espera.push({id:i});
//                             espera.shift(0);
//                             console.log(espera)
//                         }
                        
//                         tem_atual++;
//                     }
//                 if(processo[indice].T_execucao ==0){
//                          espera.shift();
//                 }
//                 tem_atual++;
//             }
        



//     }
// }
// console.log(espera)
// // $("#execucao").append("<p>Test</p>");
