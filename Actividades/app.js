document.getElementById('formTask').addEventListener('submit',guardarTarea )

function guardarTarea(e){//Guardo o creo una nueva tarea

    let tituloTarea = document.getElementById('title').value;
    let descripcionTarea = document.getElementById('descripcion').value;
    let fechaTarea = new Date().toLocaleDateString('es-AR', { weekday:"long", year:"numeric", month:"short", day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});
    const tarea = {
        tituloTarea,//Se hace un bind directo a las variables de local scope de esta forma
        descripcionTarea,
        fechaTarea
    };

    if(localStorage.getItem('tasks') === null){//Si las tareas no existen las creo
        let tasks = [];
        tasks.push(tarea);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));//Obtengo las que estan almacenadas en el local storage
        tasks.push(tarea);
        localStorage.setItem('tasks',JSON.stringify(tasks));

    }
    obtenerTareas();
    document.getElementById('form-Task').reset();
    e.preventDefault();
    //localStorage.setItem('tareas',JSON.stringify(tarea));//de esta forma almaceno en local storage
    //console.log(JSON.parse(localStorage.getItem('tareas')));//paso a objeto el string
    ;}
function obtenerTareas(e){//Obtengo las tareas guardadas en el localstorage

let tareas = JSON.parse(localStorage.getItem('tasks'));
let vistaTareas = document.getElementById('tareas');

vistaTareas.innerHTML = '';

for(let i = 0; i < tareas.length; i++){

    let title = tareas[i].tituloTarea;
    let descripcion = tareas[i].descripcionTarea;
    let fecha = tareas[i].fechaTarea;

    vistaTareas.innerHTML += `<div class="card mb-4">
    <div class="card-body" style="background-color:#1f6743ef">
    <p style="font-size:30px;color:#e8df06; font-weight: bold">${title} </p>
    <p style="font-size:17px;color:#ffffff;font-weight: bold">${descripcion} </p>
    <p style="font-size:13px;text-align:right">Creado: ${fecha}</p>
    <a class="btn btn-danger" onclick="borrarTareas('${title}')" >Borrar</a>
    </div>
    </div>`
    }
}
obtenerTareas();

function borrarTareas(titulo){//borro tareas del menu
let tareas = JSON.parse(localStorage.getItem('tasks'));
for(let i=0;i<tareas.length;i++){
    if(tareas[i].tituloTarea === titulo){
        tareas.splice(i,1);
    }
}
localStorage.setItem('tasks', JSON.stringify(tareas));
obtenerTareas();
}