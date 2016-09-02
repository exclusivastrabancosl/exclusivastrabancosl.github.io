// JavaScript Document
// URL del servicio web, ruta a un recurso de nuestra "mini API" creada para el curso
    var urlBase = "https://dl.dropboxusercontent.com/u/6324007/blog/"
    var urlCatalogos = urlBase + "json/catalogos.json";	
		

        $(document).ready(
        	// Cuando el documento esté listo, inmediatamente cargamos el contenido del servicio web
            getCatalogos()                    
        );

  
    // Método que hace la llamada AJAX al servicio web
		function getCatalogos(){
			// Realizamos la llamada AJAX, en este caso se trata de un GET y esperamos contenido JSONP por el tema del CORS
			// Asociamos los dos métodos que pueden ser llamados en caso de éxito (showFeeds) y en caso de error (showError)
			$.ajax(
                {
                  url: urlCatalogos,
                  success: showCatalogos,
                  failure : showError,
                  dataType: 'json'
                }
            );
		}

	

		// Método para mostrar las noticias
		function showCatalogos(data){
			$("#catalogos").html("");
			$("#catalogos").listview();

			// Iteramos por la información en JSON que nos proporciona el servicio web
		    for(var row in data){

		    	// Cada una de las propiedades que extraemos de cada línea del JSON
		      //	var publicationDate = new Date(data[row]['pubdate']);
		    	//publicationDate = publicationDate.getDate() + '-' + (publicationDate.getMonth() + 1) + '-' + publicationDate.getFullYear();

		    	var link = data[row]['link'];
		    	var title = data[row]['title'];
		    	var description = data[row]['description'];
		    	var images = data[row]['imagen'];	  
		    	  	
          if (link == "") {
        
          	$("#catalogos").append(
          	   '<li><div >'+
          	   '<h2 style= "white-space: normal;overflow: visible;">'+ title +'</h2>'+
               '<p style= "white-space: normal;overflow: visible;">' + description +'</p>'+
              	'</div></li>'
          	) ;
          }
          else {
          	
          	//añadimos dicha información a nuestro listado y refrescamos dicho listado
         
            $("#catalogos").append(
		    		'<li >' + 
		    			"<a href=\"" + link +  "\">" +
		    			'<img src="'+images+'" >' +
		    			'<h2 style= "white-space: normal;overflow: visible;">' + title + "</h2>" + 
		    			'<p style= "white-space: normal;overflow: visible;">' + description + "</p>" + 
		    			"</a>" +
		    		"</li>" 
		       	);      	
		    	
		      }
		    }
              
		    // Finalmente refrescamos el listado para actualizar los cambios
		    $("#catalogos").listview('refresh');
		 
		}

			// Método en caso de error
		function showError(){
            alert("No se ha podido cargar el contenido");
        }
        
  	function mirasiInstala() {
		  var standalone = window.navigator.standalone ;
		  var userAgent = window.navigator.userAgent.toLowerCase() ;
		  var safari = /safari/.test( userAgent ), ios = /iphone|ipod|ipad/.test( userAgent );
		  
      var isSafari = navigator.userAgent.match(/Safari/i) != null;
      
      var isIpad = (navigator.userAgent.match(/iPad/i) != null);
      var isIphone = (navigator.userAgent.match(/iPhone/i) != null);
      
		  if (ios) {
			  if ( !standalone && safari ) {
				
				
			//	  setTimeout(function() { alerta() }, 600);
		//		  setTimeout(function() {cierraalerta()}, 4000); 
		
		 if(isIphone){
            $('.bubble').addClass('iphone');
        }else if(isIpad){
            $('.bubble').addClass('ipad');
        }
        
		  $('.bubble').show();
       $('.bubble-close').click(function(){
                $('.bubble').hide();
                   }  );
		
	  	setTimeout(function() {$('.bubble').hide()}, 4000); 
		
			  }
		  }
		
	}
	

	