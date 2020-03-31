import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    RAISINS: {
        displayName: "raisins",
        nutrition: {    quantity: 30, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 420,   macro: macros.ENERGY},
                            {amount: 99,    macro: macros.CALORIES},
                            {amount: 0.3,   macro: macros.FATS},
                            {amount: 0.1,   macro: macros.SATURATES},
                            {amount: 18.7,  macro: macros.SUGARS},
                            {amount: 0.1,   macro: macros.SALT}
                        ]
                    }
    }
}