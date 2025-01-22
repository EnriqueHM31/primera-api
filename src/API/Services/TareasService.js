import tareas from './tareas.json' with { type: "json" };

export const getTareas = () => tareas

export const getTareasSinPrioridad = () => {
    return tareas.map(tarea => {
        return (
            {
            "id": tarea.id,
            "nombre":tarea.nombre,
            "descripcion":tarea.descripcion,
            "fecha":tarea.fecha  }
    )
    
    })
}

export const getTareasID = (id) => {
    return tareas.find(tarea => tarea.id === id)
}

export const postTareas = (data ) => {

    const { nombre, descripcion, prioridad, fecha } = data
    const newTarea ={
        id: tareas.length + 1,
        nombre,
        descripcion,
        prioridad,
        fecha
    }

    tareas.push(newTarea)
    return newTarea
}
