import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    PLAIN_FLOUR: {
        displayName: "plain flour",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 1511,  macro: macros.ENERGY},
                            {amount: 357,   macro: macros.CALORIES},
                            {amount: 1.7,   macro: macros.FATS},
                            {amount: 0.3,   macro: macros.SATURATES},
                            {amount: 0.1,   macro: macros.SALT}
                        ]
                    }
    }
}