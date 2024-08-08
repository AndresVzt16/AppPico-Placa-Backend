const obtenerDigito = (numero) => {
    const numeracion = numero.split('-')[1]
    const digitoValidar = numeracion[numeracion.length - 1]
    return digitoValidar
}

export default obtenerDigito