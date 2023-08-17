(function() {
    actualizarReloj = function(){

    let fecha = new Date();
    let hora = fecha.getHours();
    let mins = fecha.getMinutes();
    let seconds = fecha.getSeconds();
    let dia = fecha.getDate();
    let diaS = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    let ampm;
    let Phoras = document.getElementById('hora');
    let Pmins = document.getElementById('minutos');
    let Psecs = document.getElementById('segundos');
    let Pdiasemana = document.getElementById('diaSemana');
    let Pdia = document.getElementById('dia');
    let Pmes = document.getElementById('mes');
    let Panio = document.getElementById('anio');
    let Pampm = document.getElementById('ampm');
    let semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    Pdiasemana.textContent = semana[diaS];
    Pdia.textContent = dia;
    Pmes.textContent = meses[mes];
    Panio.textContent = anio;
    
    if(hora >= 12 ){
        hora = hora - 12;
        ampm = 'PM';
    }else { ampm = 'AM'}

    if(mins<10){
        mins = '0' + mins;
    }
    
    if(hora ==0){
        hora = 12;
    }
    
    if(seconds<10){
    seconds = '0' + seconds;}

    Phoras.textContent = hora;
    Pampm.textContent = ampm;
    Pmins.textContent = mins;
    Psecs.textContent = seconds;
};

actualizarReloj();
var intervalo = setInterval(actualizarReloj,1000);

}())

let dyn = true;
function diaynoche(){

    var elemento = document.getElementById('contenedor');

    var boton = document.getElementById('bt-change');

    if(dyn == true){
    
    elemento.classList.toggle('noche');

    document.body.style.backgroundImage = "url('cudilleron.jpg')";

    boton.innerText = 'Día';

    dyn=false;

    
    }

    else{
    
    elemento.classList.toggle('noche');

    boton.innerText = 'Noche';

    document.body.style.backgroundImage = "url('cudillero.jpg')";
    
    dyn=true;

    }

}

