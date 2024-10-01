export const validaciones = {
    "nombre": {
      "required": {
        "value": true,
        "message": "El nombre es requerido."
      }
    },
    "dni": {
      "required": {
        "value": true,
        "message": "El DNI es requerido."
      },
      "min": {
        "value": 7,
        "message": "El DNI debe tener al menos 7 dígitos."
      }
    },
    "marca": {
      "required": {
        "value": true,
        "message": "La marca es requerida."
      }
    },
    "modelo": {
      "required": {
        "value": true,
        "message": "El modelo es requerido."
      }
    },
    "observacion": {
      "required": {
        "value": true,
        "message": "El modelo es requerido."
      }
    },
    "celular": {
      "required": {
        "value": true,
        "message": "El celular es requerido."
      },
      "min": {
        "value": 10,
        "message": "El celular debe tener al menos 10 dígitos."
      }
    }
  }