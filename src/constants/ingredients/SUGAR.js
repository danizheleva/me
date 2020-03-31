import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    SUGAR_BROWN: {
        displayName: "brown sugar",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 1670,   macro: macros.ENERGY},
                            {amount: 393,    macro: macros.CALORIES},
                            {amount: 97.7,  macro: macros.CARBS},
                            {amount: 0.1,   macro: macros.PROTEIN},
                            {amount: 0.2,   macro: macros.FATS},
                            {amount: 0.1,     macro: macros.SATURATES},
                            {amount: 97.7,  macro: macros.SUGARS},
                            {amount: 0.1,     macro: macros.SALT},
                            {amount: 0.2,   macro: macros.FIBRE}
                        ]
                    }
    }
}