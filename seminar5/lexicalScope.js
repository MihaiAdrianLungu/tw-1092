// global scope
const x = 1;

function parentFunction() {
    // local scope - parent

    const parentVariable = 2;

    function childFunction() {
        // local scope - child
        console.log(parentVariable);
        console.log(x);
    }

    childFunction();
}

parentFunction();