import Rooter from './rooter';
import squarer from './squarer';

var add = require('lodash.add');


const five = 5;

//This is a comment!
const doubler = (num) => {
    return num*2;
}

var rooter = new Rooter();

console.log(`[Doubeling ${five}]`, doubler(five));
console.log(`[Squaring ${five}]`, squarer(five));
console.log(`[Adding 9 to ${five}]`, add(five, 9));
console.log(`[Taking the square root of 9]`,rooter.root(9));

/* Dont think this works in Node, but should work otherwise : https://webpack.js.org/guides/code-splitting/
setTimeout( () => {
    import('lodash').then(_ => {
        console.log('Loaded');
    })
}, 3000);

*/