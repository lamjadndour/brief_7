$(document).ready(function () {

    
    $("#SaveUpdate").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nameUpdate").val();
        var Description = $("#DescriptionUpdate").val();
        var price = $("#StatusUpdate").val();
        var img = $("#imgUpdate").val();
             $.ajax({
                url:'/UpdateTache',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,Description,price,img}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  
    $("#SaveUpdate").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nameUpdate").val();
        var Description = $("#DescriptionUpdate").val();
        var price = $("#StatusUpdate").val();
        var img = $("#imgUpdate").val();
             $.ajax({
                url:'/UpdateTache',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,Description,price,img}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  

});