import FLOUR from "./flour";
import BREAD from "./BREAD";
import DRIED_FRUIT from "./DRIED_FRUIT";
import DAIRY from './DAIRY';
import OTHER from "./OTHER";
import FRUIT from "./FRUIT";
import LIQUID from "./LIQUID";
import SPICES from "./SPICES";
import CHOCOLATE from "./CHOCOLATE";
import NUTS from "./NUTS";
import FLAVOURING from "./FLAVOURING";

export default {
        ...BREAD,
        ...DAIRY,
        ...DRIED_FRUIT,
        ...OTHER,
        ...FLOUR,
        ...FRUIT,
        ...LIQUID,
        ...SPICES,
        ...CHOCOLATE,
        ...NUTS,
        ...FLAVOURING
}