const obtenerDiaDeLaSemana = (fecha) => {
    
    const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const [year, month, day] = fecha.split('-');
    const date = new Date(year, month - 1, day); // Crear la fecha ajustada
    const diaDeLaSemana = date.getDay();
    return diasDeLaSemana[diaDeLaSemana];
};

export default obtenerDiaDeLaSemana;
