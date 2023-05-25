var formu = document.querySelector('form');

formu.onsubmit = function(){
   if(!document.querySelector("input[type='text']").value){
      alert("preencha o campo!");
      return false;
   }
 alert("Em Breve Nossa Equipe entrará em contato com Você!");
 


}
