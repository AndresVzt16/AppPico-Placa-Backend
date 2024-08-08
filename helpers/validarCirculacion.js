const restricciones = {
    Lunes: {
      digitos: ["1", "2"],
      horas: {
        mañana: ["06:00", "09:30"],
        tarde: ["16:00", "21:00"],
      },
    },
    Martes: {
      digitos: ["3", "4"],
      horas: {
        mañana: ["06:00", "09:30"],
        tarde: ["16:00", "21:00"],
      },
    },
    Miércoles: {
      digitos: ["5", "6"],
      horas: {
        mañana: ["06:00", "09:30"],
        tarde: ["16:00", "21:00"],
      },
    },
    Jueves: {
      digitos: ["7", "8"],
      horas: {
        mañana: ["06:00", "09:30"],
        tarde: ["16:00", "21:00"],
      },
    },
    Viernes: {
      digitos: ["9", "0"],
      horas: {
        mañana: ["06:00", "09:30"],
        tarde: ["16:00", "21:00"],
      },
    },
  };
  
  const restriccion = (dia, digito, hora) => {
    const [horaIngresada, minutosIngresados] = hora.split(":").map(Number);
  
    if (restricciones[dia].digitos.includes(digito)) {
      const horasRestringidas = restricciones[dia].horas;
      
      const [horaInicioMañana, minutoInicioMañana] = horasRestringidas.mañana[0].split(":").map(Number);
      const [horaFinMañana, minutoFinMañana] = horasRestringidas.mañana[1].split(":").map(Number);
      const [horaInicioTarde, minutoInicioTarde] = horasRestringidas.tarde[0].split(":").map(Number);
      const [horaFinTarde, minutoFinTarde] = horasRestringidas.tarde[1].split(":").map(Number);
  
      // Comprobar horario de la mañana
      const restringidoMañana =
        (horaIngresada > horaInicioMañana || (horaIngresada === horaInicioMañana && minutosIngresados >= minutoInicioMañana)) &&
        (horaIngresada < horaFinMañana || (horaIngresada === horaFinMañana && minutosIngresados <= minutoFinMañana));
  
      // Comprobar horario de la tarde
      const restringidoTarde =
        (horaIngresada > horaInicioTarde || (horaIngresada === horaInicioTarde && minutosIngresados >= minutoInicioTarde)) &&
        (horaIngresada < horaFinTarde || (horaIngresada === horaFinTarde && minutosIngresados <= minutoFinTarde));
  
      if (restringidoMañana || restringidoTarde) {
        return true; // El vehículo NO puede circular
      } else {
        return false; // El vehículo puede circular
      }
    } else {
      return false; // No tiene Pico y Placa
    }
  };
  
  export default restriccion;
  