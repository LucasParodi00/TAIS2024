

export const validaciones = {
    nombre: {
      required: {
        value: true,
        message: "El nombre es requerido."
      },
      minLength: {
        value: 3,
        message: 'Debe contener al menos 3 caracteres'
      },
      maxLength: {
        value: 60,
        message: 'Maximo 60 caracteres'
      }
    },
    dni: {
      required: {
        value: true,
        message: "El DNI es requerido."
      },
      minLength: {
        value: 8,
        message: "Ingrese un DNI valido"
      },
      maxLength: {
        value: 8,
        message: "Ingrese un DNI valido"
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "El DNI solo puede contener números."
      }
    },
    marca: {
      required: {
        value: true,
        message: "La marca es requerida."
      }
    },
    modelo: {
      required: {
        value: true,
        message: "El modelo es requerido."
      },
      minLength: {
        value: 2,
        message: 'Debe contener al menos 2 caracteres'
      },
      maxLength: {
        value: 60,
        message: 'Maximo 60 caracteres'
      }
    },
    
    observacion: {
      required: {
        value: true,
        message: "La observacion es requerida."
      },
      minLength: {
        value: 5,
        message: 'Debe contener al menos 5 caracteres'
      },
      maxLength: {
        value: 300,
        message: 'Maximo 300 caracteres'
      }
    },
    celular: {
      required: {
        value: true,
        message: "El celular es requerido."
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "El DNI solo puede contener números."
      },
      min: {
        value: 10,
        message: "El celular debe tener al menos 10 dígitos."
      }
    }
  }