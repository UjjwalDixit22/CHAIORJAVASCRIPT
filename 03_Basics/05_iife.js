
// IIFE (Immediately Invoked Function Expression)
(function chai() { //named iife
    console.log("This is an IIFE!");
})();

((name)=>{ //unnamed iife with parameter
    console.log(`This is IIFE 2! ${name}`);
})('Ujjwal Dixit');