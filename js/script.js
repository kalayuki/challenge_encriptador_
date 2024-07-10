
//Constantes de capturas de elemrntos

const ingresoTexto=document.getElementById ("ingresoTexto");
const botonEncriptar=document.getElementById("botonEncriptar");
const botonDesencriptar =document.getElementById("botonDesencriptar");
const botonCopiar =document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco= document.getElementById("muneco");
const derechaInfo = document.getElementById("derechaInfo");
const derecha= document.getElementById("derecha");




//Se crea array con las llaves de encriptacion

let remplazar =[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

const remplace = (nuevoValor)=>{

    mensajeFinal.innerHTML = nuevoValor;

    //Modificacion de la class para la imagen del muñeo, texto de informacion y boton copiar

    muneco.classList.add("oculto")
    //Limpiar el contenedor 
    ingresoTexto.value="";


    derechaInfo.style.display="none";
    botonCopiar.style.display="block";
    //Le añadimos una clase
    derecha.classList.add("ajuste_derecha");
    mensajeFinal.classList.add("ajuste_derecha");

    


}

const reset = ()=>{
    
    mensajeFinal.innerHTML ="";
    muneco.classList.remove("oculto")
    derechaInfo.style.display="block";
    botonCopiar.style.display="none";
    //Le añadimos una clase
    derecha.classList.remove("ajuste_derecha");
    mensajeFinal.classList.remove("ajuste_derecha");
    ingresoTexto.focus();
}

//Capturamos los datos ingresados, utilizamos arrow funtion
//Tomamos el boton encriptar cuando se clickea por medio de un addEventListener("click") 
//El ingreso de datos seran tomas y convertidos siempre a minuscula (toLowerCase)
botonEncriptar.addEventListener("click", ()=>{

    const texto = ingresoTexto.value.toLowerCase();


    if(texto !=""){

   
      //Creamos funcion para encriptar
      function encriptar (newTexto){
        //Utilizamos un for para recorrer el array "remplazar"
        for(let i =0; i< remplazar.length;i++){
            //Pedimos que si el texto incluye algun dato del array "remplazar"
            if(newTexto.includes(remplazar[i][0])){

                //Entonces le pedimos que remplaze en el nuevo texto 
                newTexto= newTexto.replaceAll(remplazar[i][0], remplazar[i][1]);

            };
        };
        return newTexto
      };
    }else{
        alert("Ingrese texto");
        reset()
    };

    
      //const textoEncriptado= encriptar(texto);

     //**Modificacion de nuetro htm al precionar boton encriptar "derecho"**

     remplace(encriptar(texto))
     
    });

    //Desencriptar

    //Tomamos el boton desencriptar

    botonDesencriptar.addEventListener("click",()=>{

        const texto=ingresoTexto.value.toLowerCase();

        if(texto != ""){

        function desencriptar(newTexto){
            for(let i=0; i < remplazar.length; i++){
                if(newTexto.includes(remplazar[i][1])){
                    newTexto= newTexto.replaceAll(remplazar[i][1], remplazar[i][0]);

                };
            };
            return newTexto;
        };
         }else{

            alert("Ingresar texto")
         }
        

        remplace(desencriptar (texto));


    });



    //Boton copiar

    botonCopiar.addEventListener("click",()=>{
        let texto = mensajeFinal;
        navigator.clipboard.writeText(texto.value);
        texto.select();
        document.execCommand("copy");
        alert("copiado");
        reset()
        

    })