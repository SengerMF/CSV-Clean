function gerar(){

    var selected = document.getElementById('selected').value;
    selected = selected.split('\n');



   var csv = document.getElementById('select').value;

    var table = csv.split('\n');
          console.log(table);
          console.log(table.length);


    var newTable = [];
    try {
      for (var i = 0; i<table.length; i++){
        for(var y = 0; y<selected.length; y++){
          var aux = table[i].split(',');

          var aux_coluna = document.getElementById('coluna').value
          if(aux[aux_coluna-1].includes(selected[y])){
        newTable.push(table[i]);
      }
        }
      

    }var texto = newTable.join('\n');
    
 
    var titulo = 'TableFile';
      
    var blob = new Blob([texto], 
        { type: "text/plain;charset=utf-8" 
    });
    
    saveAs(blob, titulo + ".csv");
    }catch{
alert('Não retornou Resultado')
    }
    

    
     
}