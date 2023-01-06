
const soloLetras ='^[a-z !ñ]+$';
 
    function ocultar(id,visibilidad) {
    var img = document.getElementById(id);
    img.style.visibility = (visibilidad ? 'visible' : 'hidden');
    }

        function Encriptar(){
            var res = "";
            texto = document.getElementById('txt').value;
            tutu = Comprobar(texto);
            texto = tutu;
            if(texto.match(soloLetras)!=null){
                ocultar('img-area', false);
            for(var i=0; i<texto.length; i++){
                if(texto[i] != "a" && texto[i] != "e" &&
                texto[i] != "i" && texto[i] != "o" && 
                texto[i] != "u"){
                    res += texto[i];
                }
                if(texto[i] == "a"){
                    res += "ai";
                }
                if(texto[i] == "e"){
                    res += "enter";
                }
                if(texto[i] == "i"){
                    res += "imes";
                }
                if(texto[i] == "o"){
                    res += "ober";
                }
                if(texto[i] == "u"){
                    res += "ufat";
                }
            }
            document.getElementById('txt').value = null;
            document.getElementById("area").value = res;
        }else{
            alert("Ingrese palabras sin acentos ni carácteres especiales");
        }
        }

        function Desencriptar(){
            var res = "";
            texto = document.getElementById('txt').value;
            tutu = Comprobar(texto);
            texto = tutu;
            if(texto.match(soloLetras)!=null){
                ocultar('img-area', false);
            res = texto
                .replaceAll("enter","e")
                .replaceAll("ai","a")
                .replaceAll("imes","i")
                .replaceAll("ober","o")
                .replaceAll("ufat","u");
            document.getElementById('txt').value = "";
            document.getElementById("area").value = res;
        }else{
            alert("Ingrese palabras sin acentos ni carácteres especiales");
        }
        }

        function Copiar(){
            var msg= "";
            msg = document.getElementById("area").value;
            document.getElementById('area').value ="";
            navigator.clipboard.writeText(msg);
            var img = document.getElementById('img-area');
            img.style.visibility = "visible";
            //Colocartexto(msg);
        }

        function esMayuscula(letra){
        return letra === letra.toUpperCase();
        }

        function esMinuscula(letra){
        return letra === letra.toLowerCase();
        }
        
        function PasarAMinuscula(texto){
            texto = texto.toLowerCase();
            return texto;
        }

        function Comprobar(texto){
            var txt = "";
            for(var i = 0; i < texto.length; i++){
                var letraActual = texto.charAt(i);
                if(esMinuscula(letraActual) == true){
                    txt = txt + texto.charAt(i) ;
                }
                if(esMayuscula(letraActual) == true){
                    txt = txt + PasarAMinuscula(letraActual);
                }
            }
            return txt;
        }

        function Colocartexto(texto){
            document.getElementById("txt").value = texto;
        }

        function Especiales(texto){
            var caracter = "";
            for(var i in texto){

            }
        }