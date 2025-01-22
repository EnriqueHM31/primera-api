import tareas from './tareas.json' with { type: "json" };

export const getTareas = () => tareas

export const getTareasSinPrioridad = () => {
    return tareas.map(tarea => {
        return (
            {
            "id": tarea.id,
            "nombre":tarea.nombre,
            "tarea":tarea.descripcion,
            "fecha":tarea.fecha  }
    )
    
    })
}

export const postTareas = (Tarea) => {
    null
}
