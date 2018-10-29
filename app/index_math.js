import * as math from './math';
import { addToDom as atd} from './helpers';
console.log('Math:', math);

atd( 'h1',`23 + 67 = ${ math.add(23, 67) }` );
atd( 'h1', `56 - 14 = ${math.suptract(56, 14)}`);
atd('h1', `3 x 4 = ${math.multiply(3, 4)}`);
atd('h1', `32 / 4 = ${math.divide(32, 4)}`)
