import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    BUTTER_UNSALTED: {
        displayName: "unsalted butter",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 3062,  macro: macros.ENERGY},
                            {amount: 745,   macro: macros.CALORIES},
                            {amount: 0.6,   macro: macros.CARBS},
                            {amount: 0.6,   macro: macros.PROTEIN},
                            {amount: 82.2,  macro: macros.FATS},
                            {amount: 52.1,  macro: macros.SATURATES},
                            {amount: 0.6,   macro: macros.SUGARS},
                            {amount: 0.1,   macro: macros.SALT},
                            {amount: 0.0,   macro: macros.FIBRE}
                        ]
                    }
    }
}