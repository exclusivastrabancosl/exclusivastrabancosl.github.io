// JavaScript Document
// URL del servicio web, ruta a un recurso de nuestra "mini API" creada para el curso
   // var urlBase = "https://dl.dropboxusercontent.com/u/6324007/blog/"
    var urlBase = "./" 
    var urlService = urlBase + "json/noticias.json";	
		var urlEnlaces = urlBase + "json/enlaces.json";	
		
		//	var urlService = "json/noticias.json";	

        $(document).ready(
        	// Cuando el documento esté listo, inmediatamente cargamos el contenido del servicio web
            getDatos()                      
        );

    function getDatos(){
    	 getFeeds() ;
       getEnlaces();       
    }


    // Método que hace la llamada AJAX al servicio web
		function getFeeds(){
			// Realizamos la llamada AJAX, en este caso se trata de un GET y esperamos contenido JSONP por el tema del CORS
			// Asociamos los dos métodos que pueden ser llamados en caso de éxito (showFeeds) y en caso de error (showError)
			$.ajax(
                {
                  url: urlService,
                  success: showFeeds,
                  failure : showError,
                  dataType: 'json'
                }
            );
		}

	function getEnlaces(){
			// Realizamos la llamada AJAX, en este caso se trata de un GET y esperamos contenido JSONP por el tema del CORS
			// Asociamos los dos métodos que pueden ser llamados en caso de éxito (showFeeds) y en caso de error (showError)
			$.ajax(
                {
                  url: urlEnlaces,
                  success: showEnlaces,
                  failure : showError,
                  dataType: 'json'
                }
            );
		}


		// Método para mostrar las noticias
		function showFeeds(data){
			$("#feeds").html("");
			$("#feeds").listview();

			// Iteramos por la información en JSON que nos proporciona el servicio web
		    for(var row in data){

		    	// Cada una de las propiedades que extraemos de cada línea del JSON
		    	var publicationDate = new Date(data[row]['pubdate']);
		    	publicationDate = publicationDate.getDate() + '-' + (publicationDate.getMonth() + 1) + '-' + publicationDate.getFullYear();

		    	var link = data[row]['link'];
		    	var title = data[row]['title'];
		    	var description = data[row]['description'];
		    		    	
          if (link == "") {
        
          	$("#feeds").append(
          	   '<li><div >'+
          	   "<span style=\"font-size:x-small;color:grey;\">Publicado el " + publicationDate + "</span>" +
               '<h2 style= "white-space: normal;overflow: visible;">'+ title +'</h2>'+
                '<p style= "white-space: normal;overflow: visible;">' + description +'</p>'+
               	'</div></li>'
          	) ;
          }
          else {
		    	// Añadimos dicha información a nuestro listado y refrescamos dicho listado
		    	$("#feeds").append(
		    		'<li >' + 
		    			"<a name=\"" + title + "\" href=\"" + link +  "\">" +
		    			"<span style=\"font-size:x-small;color:grey;\">Publicado el " + publicationDate + "</span>" +
		    			'<h2 style= "white-space: normal;overflow: visible;">' + title + "</h2>" + 
		    			'<p style= "white-space: normal;overflow: visible;">' + description + "</p>" + 
		    			"</a>" +
		    		"</li>" 
		    	);
		      }
		    }

              
		    // Finalmente refrescamos el listado para actualizar los cambios
		    $("#feeds").listview('refresh');
		 //   $('#feeds').find('li[data-role=collapsible]').collapsible({refresh:true});
		}

	// Método para mostrar las noticias
		function showEnlaces(data){
			$("#enlaces").html("");
			$("#enlaces").listview();

			// Iteramos por la información en JSON que nos proporciona el servicio web
		    for(var row in data){

		    	// Cada una de las propiedades que extraemos de cada línea del JSON
		    
		    	var link = data[row]['link'];
		    	var title = data[row]['title'];
		    	var description = data[row]['description'];
		    	var images = data[row]['imagen'];
		   
		   /* 		    	
          if (link == "") {
        
          	$("#enlaces").append(
          	   '<li><div >'+
          	   '<img src="'+images+'" >' +
               '<h2 style= "white-space: normal;overflow: visible;">'+ title +'</h2>'+
                '<p style= "white-space: normal;overflow: visible;">' + description +'</p>'+
               	'</div></li>'
          	) ;
          }
          else {
          	*/
          	          	
		    	// Añadimos dicha información a nuestro listado y refrescamos dicho listado
		    	$("#enlaces").append(
		    		'<li >' + 
		    			"<a href=\"" + link +  "\">" +
		    			'<img src="'+images+'" >' +
		    			'<h2 style= "white-space: normal;overflow: visible;">' + title + "</h2>" + 
		    			'<p style= "white-space: normal;overflow: visible;">' + description + "</p>" + 
		    			"</a>" +
		    		"</li>" 
		    	);
		    	
		    //  }
		    }

              
		    // Finalmente refrescamos el listado para actualizar los cambios
		    $("#enlaces").listview('refresh');		
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
	
	 function alerta() {
		$("#myPopupDialog").popup('open');
		}
		
	function cierraalerta(){
		$("#myPopupDialog").popup('close');
		}  
	
function pasapass() { 
  var nombre = $("#nombre").val();
 // var path = "https://dl.dropboxusercontent.com/u/6324007/blog/" ;
   var path = "./" ;
  var opcion = $("input[name=radio2]:checked").val();
  
  if ( opcion == "1")
  {
  	var cUrl = path + "listado/LISTADO.pdf" ;
  	var cTarget = "_blank" ; 	  	
  	
  }
  else
  {
  	  if ( opcion == "2")
      {
  	    	path = ""	
        	var cUrl = "#Catalogos" ;
          var cTarget = "_self" ;
      }    
     else  
    {
    	var cUrl =  path + "listado/ofertas.pdf" ;
      	var cTarget = "_blank" ; 	  	
    	//  var cUrl = "arti.html" ;
  	//  var cTarget = "_self" ; 	   	
    }
  }	
                 
	if  ( hex_md5(nombre) == "097cd32c2bf9361bac722a9454f58cf9" ) {  
						// alert("entra");
		     	var a = document.createElement('a');
		     	    a.setAttribute("href", path+cUrl);
		     	    a.setAttribute("target", cTarget );
              
       var standalone = window.navigator.standalone ;      
       
       if (standalone ) {
       	      var dispatch = document.createEvent("HTMLEvents");
             dispatch.initEvent("click", true, true);
             a.dispatchEvent(dispatch);
          }
          
			else
				 {
				 	window.open(cUrl, cTarget, 'location=no') ;					
	    		}
           // alert("nombre: " + nombre );
			}
			else
				{
					  alert("Password erroneo intentelo de nuevo" );
					  
					}
				
    }
   
    	
      

/*

$(document).on('pageshow', '#info',function(e,data){
				$('#map_canvas').gmap('refresh');
			});



$(document).on('pageinit', '#info',function(e,data){  
       var poi = "43.525601, -5.704139",
            poimg = "images/logo2.png";
            
				$('#map_canvas').gmap({'zoom': 15 ,'center': poi }).bind('init', function(evt, map) {

				$('#map_canvas').gmap('addMarker', {'position': map.getCenter(), 'animation': google.maps.Animation.DROP }).click(function() { 
                    content = '<img src="' + poimg + '" style="float:left;margin-right:5px"><div>Exclusivas Trabanco S.L.<div style="font-weight:normal;font-size:x-small">Nuestras cordenadas 43.525601, -5.704139 </div></div>';
           			$('#map_canvas').gmap('openInfoWindow', { 'content': content}, this);

					});

				});

			});
	*/		
	
	
