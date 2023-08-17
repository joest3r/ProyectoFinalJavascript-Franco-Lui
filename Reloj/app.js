(function() {
    actualizarReloj = function(){

    var fecha = new Date();
    var hora = fecha.getHours();
    var mins = fecha.getMinutes();
    var seconds = fecha.getSeconds();
    var dia = fecha.getDate();
    var diaS = fecha.getDay();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var ampm;

    var Phoras = document.getElementById('hora');
    var Pmins = document.getElementById('minutos');
    var Psecs = document.getElementById('segundos');
    var Pdiasemana = document.getElementById('diaSemana');
    var Pdia = document.getElementById('dia');
    var Pmes = document.getElementById('mes');
    var Panio = document.getElementById('anio');
    var Pampm = document.getElementById('ampm');
    var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
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
