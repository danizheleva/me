import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    EGG: {
        displayName: "egg",
        nutrition: {    quantity: 1, 
                        measurement: measurements.IETM, 
                        macronutrients: [
                            {amount: 648,   macro: macros.ENERGY},
                            {amount: 154,   macro: macros.CALORIES},
                            {amount: 0.5,   macro: macros.CARBS},
                            {amount: 15,    macro: macros.PROTEIN},
                            {amount: 10.6,  macro: macros.FATS},
                            {amount: 3.0,   macro: macros.SATURATES},
                            {amount: 0.0,    macro: macros.SUGARS},
                            {amount: 0.46,  macro: macros.SALT},
                            {amount: 0.0,   macro: macros.FIBRE}
                        ]
                    }
    }
}