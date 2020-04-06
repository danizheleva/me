import FLOUR from "./flour";
import BREAD from "./BREAD";
import DRIED_FRUIT from "./DRIED_FRUIT";
import DAIRY from './DAIRY';
import EGGS from "./EGGS";
import FRUIT from "./FRUIT";
import LIQUID from "./LIQUID";
import SPICES from "./SPICES";
import SUGAR from "./SUGAR";
import CHOCOLATE from "./CHOCOLATE";
import NUTS from "./NUTS";

export default {
        ...BREAD,
        ...DAIRY,
        ...DRIED_FRUIT,
        ...EGGS,
        ...FLOUR,
        ...FRUIT,
        ...LIQUID,
        ...SPICES,
        ...SUGAR,
        ...CHOCOLATE,
        ...NUTS
}