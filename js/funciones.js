function consultar(){

    nombre= $("#id").val(),
    apellido= $("#id2").val(),

    $.ajax({    
            url : 'https://g6c335b483ca254-bdgastosg16.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/notas/retos/'+nombre+"."+apellido+".mt@correo.usa.edu.co",
        //  data : { id : 123 },
            type : 'GET',
            dataType : 'json',
            
            error : function(xhr, status) {
                alert('ha sucedido un problema, '+xhr.status);
            },
            complete : function(xhr, status) {
                alert('Petición realizada, '+xhr.status);
            },
            success : function(json) {
                $("#resultado").empty();
                tabla = "<center><table border='1'><tr><th>Nombre<th>frontend_reto2<th>frontend_reto3<th>frontend_reto4<th>frontend_reto5<th>mensaje_r2<th>mensaje_r3<th>mensaje_r4<th>mensaje_r5"
                total = 0;
                filas = ""
                for(i = 0;  i < json.items.length; i++){
                   filas += "<tr>"
                   filas +="<td>"+json.items[i].nombre  
                   filas +="<td>"+json.items[i].frontend_reto2
                   filas +="<td>"+json.items[i].frontend_reto3
                   filas +="<td>"+json.items[i].frontend_reto4
                   filas +="<td>"+json.items[i].frontend_reto5
                   filas +="<td>"+json.items[i].mensaje_r2
                   filas +="<td>"+json.items[i].mensaje_r3
                   filas +="<td>"+json.items[i].mensaje_r4
                   filas +="<td>"+json.items[i].mensaje_r5

                   total += json.items[i].promedio
                  
                }
                $("#resultado").append(tabla + filas+"<tr><th colspan='2'>Promedio:<td>"+total +"</center>")
                console.log(json)
                console.log("porongaS")
                console.log(json.items[0].nombre)

                tablo =`<table class="table">
            <thead>
             <tr> 
             
             <b>`+json.items[0].nombre+`</b>
             
             </tr>
              <tr class="table-dark">
                <th scope="col">Nombre Nota</th>
                <th scope="col">Resultado</th>
                
              </tr>
            </thead>
            <tbody>
              
            <tr class="table-light">
            <th scope="row">Frontend_reto2</th>
            <td>`+json.items[0].frontend_reto2+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Frontend_reto3</th>
            <td>`+json.items[0].frontend_reto3+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Frontend_reto4</th>
            <td>`+json.items[0].frontend_reto4+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Frontend_retu5</th>
            <td>`+json.items[0].frontend_reto5+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Mensaje_r2</th>
            <td>`+json.items[0].mensaje_r2+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Mensaje_r3</th>
            <td>`+json.items[0].mensaje_r3+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Mensaje_r4</th>
            <td>`+json.items[0].mensaje_r4+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Mensaje_r5</th>
            <td>`+json.items[0].mensaje_r5+`</td>
            
            </tr>

            <tr class="table-light">
            <th scope="row">Promedio</th>
            <td>`+json.items[0].promedio+`</td>
            
            </tr>
                
                
            </tbody>
          </table>



                `
                $("#table").append(tablo)
            }
        });
}
