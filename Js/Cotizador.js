/*DECLARO VARIABLES*/ 
const selectColor = document.getElementById('select-color');


/*CAMBIO FOTO CON SU RESPECTIVA DESCRIPCION*/
    function Cambiaso(){
        let descripcion_producto = document.getElementById("strDescrip-Prod");
        let productImage = document.getElementById("productimage");
    switch (selectColor.value) {
        /*HICE UN SWITCH PARA ELEGIR CADA OPCION CON LOS DATOS*/
        case "azul":
            productImage.src = "Img/azul.jpg";
            descripcion_producto.innerHTML = "<h2>Auriculares Gamer Pc Ps4 Luz Led Gaming Micrófono Headset Azul</h2> Descripción:<br> Es un auricular profesional para aficionados a los juegos. Las luces LED hacen que se vea genial por la noche y agrega otro nivel de entretenimiento al jugar videojuegos. Los cables son compatibles con casi todos los dispositivos que puedas imaginar. Cojín ligero y suave, te traerá una experiencia agradable. <br>Las almohadillas para los oídos están hechas de cuero de PU con un tamaño grande que proporciona un buen rendimiento de reducción de ruido. El diseño liviano es más cómodo para usar durante mucho tiempo. <br>Con un conector de 3,5 mm, es adecuado para PC, computadora portátil. Y con un cable adaptador adicional en el paquete, también se puede aplicar en PS4, Xbox One, PSP, teléfono, iPad, tableta, etc.<br>Este auricular NO es un auricular USB, la interfaz USB solo se usa para la fuente de alimentación para Luz LED.</p> <br>Descripción: <br> <ul><li>Micrófono de alta definición</li><li>Sonido estéreo envolvente de 360 grados</li><li>Micrófono retráctil de 130°</li><li>Diadema cómoda<li>Contrabajo</li><li>Control del volumen</li><li>Luz Led</li><li>Diseño espléndido</li></ul><br> <br>Especificaciones:  <br><ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia:20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe:Enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>"
            break;
        case "rojo":
            productImage.src = "Img/rojo.jpg";
            descripcion_producto.innerHTML = "<h2>Auriculares Gamer Microfono Con Luz Led Para Ps4 Rojo</h2> <br> Descripción: <br>¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Huterspider AU408 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.<br><br>El formato perfecto para vos.<br><br>El diseño head-set brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.<br><br><br>Especificaciones:<br><ul><li>Diámetro del altavoz: 40 mm</li><li>Impedancia: 32 ohmios</li><li>Sensibilidad: 102dB +/-3dB</li><li>Respuesta de frecuencia: 20Hz-20KHZ</li><li>Dimensión del micrófono: 6,0*5,0mm</li><li>Directividad del micrófono: Omnidireccional</li><li>Enchufe: enchufes de 3,5 mm para micrófono y auriculares</li><li>Longitud del cable: aprox. 2,2 metros</li><li>Voltaje de funcionamiento del LED: DC5V 25%</li><li>Interfaz de trabajo: USB + estéreo de 3,5 mm</li><li>Unidad de controlador de 40 mm</li></ul>"
            break;
        case "naranja":
            productImage.src = "Img/naranja.jpg";
            descripcion_producto.innerHTML = "<h2>Auriculares Gamer Microfono Con Luz Led Para Ps4 Rojo</h2> <br>Descripción: <br><ul><li>Marca: Level Up</li><li>Modelo: Copperhead</li><li>Tipo de auricular: Pc / Juegos</li><li>Formato de uso: On Ear</li><li>Micrófono incorporado: Si</li></ul><br>Especificaciones<br><ul><li>Auricular para PS4 y PC</li><li>Con micrófono incorporado</li><li>Conector 3.5mm</li><li>Largo de cable: 2.1 M±0.15</li></ul>"
            break;
        case "verde":
            productImage.src = "Img/verde.jpg";
            descripcion_producto.innerHTML = "<h3> Auricular Gamer Constrictor AUC-3050RG</h3><br>Descripción<br>Auricular vincha gamer. Parlante 50mm. Frecuencia de respuesta 20Hz - 20KHz. Impendancia 16 +-10%. Sensibilidad 112dB+-3dB. Luz RGB. Vincha 100% adaptable. Control de volumen. Microfono flexible 4,0 x 1,5mm. Plug 3.5mm + USB. Largo del cable 2.2m. Dimensiones 195 x 117 x 225mm. Peso 366g. Incluye Adaptador de PC (con salida para microfono y otra para audio) + Bag de guardado impermeable. <br><br>Especificaciones<br><ul><li>Auricular para PS4 y PC</li><li>Con micrófono incorporado</li><li>Conector 3.5mm</li><li>Largo de cable: 2.1 M±0.15</li></ul>"
            break;
        default:
            break;
    }
} 
/*FUNCION PARA CALCULAR PERO NO PUDE TERMINAR DE DESARROLLARLA*/
function calculatePrice(event){
event.preventDefault();
let cable = document.getElementById("select-capacidad");
let cantidad = document.getElementById("cantidad");
let resultado = document.getElementById("result");
let lista = document.getElementById("lista");

let descuento = document.getElementById("descuento");
let cotizado = document.getElementById("cotizado");
let formControlCotizador = document.getElementsByClassName('cotizar');
    if(cable.value == "" || cantidad.value == ""){
    resultado.style.display="block";
    resultado.className = "error";
    resultado.innerText="error"
        
    }
       
        else{
        let total = 0;
        let descuento = 0;
        let total_final = 0;
        total=cable.value;
        resultado.style.display="block";
        resultado.className = "cotizado";
        if(cantidad.value > 6){
      
            descuento = total * 0.3;
            total_final = total - descuento;

            resultado.innerText = "Total: ${total.toFixed(2)}"

            lista.innerText = "Total: ${total.toFixed(2)}";
            descuento.innerText = "Descuento: ${descuento.toFixed(2)} (30% off)";
            final.innerText = "Total final: ${total_final.toFixed(2)}";
        }
        else if(cantidad.value > 3){

            descuento = total * 0.2;
            total_final = total - descuento;

            
            lista.innerText = "Total: ${total.toFixed(2)}";
            descuento.innerText = "Descuento: ${descuento.toFixed(2)} (20% off)";
            final.innerText = "Total final: ${total_final.toFixed(2)}";
        }
            
    }
}



/*VALIDO EMAIL*/

function validateselectHeadset(Headset) {
    return Headset !== "";
}
let formButton;

let emailElem = document.getElementById('email');
emailElem.addEventListener('change', function(event) {
    formButton = event.target.value;
});
function onClickBtnEntry() {
    console.log("Email: " + formButton);}