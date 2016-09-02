// JavaScript Document
// URL del servicio web, ruta a un recurso de nuestra "mini API" creada para el curso
    var urlBase = "https://dl.dropboxusercontent.com/u/6324007/blog/"
    var urlService = urlBase + "json/artjon.json";	
		
	
        $(document).ready(
        	// Cuando el documento esté listo, inmediatamente cargamos el contenido del servicio web
            getDatos()                      
        );

    function getDatos(){
    	 getArti() ;
      }




       
    // Método que hace la llamada AJAX al servicio web
		function getArti(){
			// Realizamos la llamada AJAX, en este caso se trata de un GET y esperamos contenido JSONP por el tema del CORS
			// Asociamos los dos métodos que pueden ser llamados en caso de éxito (showFeeds) y en caso de error (showError)
			
	   
		
			$.ajax(
                {
                  url: urlService,
                  success: showArtis,
                  failure : showError,
                  dataType: 'json'
                }
            );
		}

		// Método para mostrar las noticias
		function showArtis(data){
			$("#artis").html("");
			$("#artis").listview();

			   for(var row in data){

		    	// Cada una de las propiedades que extraemos de cada línea del JSON
		    //	var publicationDate = new Date(data[row]['pubdate']);
		    //	publicationDate = publicationDate.getDate() + '-' + (publicationDate.getMonth() + 1) + '-' + publicationDate.getFullYear();

		   // 	var link = data[row]['link'];
		    	var title = data[row]['descrip'];
		    	var description = data[row]['codigo'];
		    	var link = "" ;	    	
		    	var pvp = data[row]['pvp'];
		    	var pvt = data[row]['pvt'];
		    		
          if (link == "") {
        
          	$("#artis").append(
          	   '<li><div>'+
          	   '<h2 style= "white-space: normal;overflow: visible;">'+ title +'</h2>'+
               '<p style= "white-space: normal;overflow: visible;">' + 'Codigo : '+ description +
               '</p>'+
               '<table><tbody><tr><th scope="row"><b>P.V.P.</b></th>'+
               '<td>'+pvp+'</td></tr><tr><th scope="row"><b>P.V.T</b></th>'+
        	     '<td>'+pvt+'</td></tr></tbody></table>'+ 
               '</div></li>'
          	) ;
          }
          else {
		    	// Añadimos dicha información a nuestro listado y refrescamos dicho listado
		    	$("#artis").append(
		    		'<li >' + 
		    			"<a name=\"" + title + "\" href=\"" + link +  "\">" +
		    			'<h2 style= "white-space: normal;overflow: visible;">' + title + "</h2>" + 
		    			'<p style= "white-space: normal;overflow: visible;">' + description + "</p>" + 
		    			"</a>" +
		    		"</li>" 
		    	);
		      }
		    }

              
		    // Finalmente refrescamos el listado para actualizar los cambios
		    $("#artis").listview('refresh');
		   		    
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
  var path = "https://dl.dropboxusercontent.com/u/6324007/blog/" ;
            
	if  ( hex_md5(nombre) == "097cd32c2bf9361bac722a9454f58cf9" ) {  
						// alert("entra");
		     	var a = document.createElement('a');
              a.setAttribute("href", path+"listado/LISTADO.pdf");
              a.setAttribute("target", "_blank");
       
       
       var standalone = window.navigator.standalone ;      
       
       if (standalone ) {
          var dispatch = document.createEvent("HTMLEvents");
             dispatch.initEvent("click", true, true);
             a.dispatchEvent(dispatch);
      }
			else
				 {
					 window.open("listado/listado.pdf",'_blank', 'location=no')
			}
           // alert("nombre: " + nombre );
			}
			else
				{
					  alert("Password erroneo intentelo de nuevo" );
					  
					}
				
    }


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
			
	
	
	