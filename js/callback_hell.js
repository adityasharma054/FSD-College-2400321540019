function test1(cb) {
    setTimeout(() => {
        console.log("Test 1 completed");
        cb();
    }, 4000);
}

function test2(cb) {
    setTimeout(() => {
        console.log("Test 2 completed");
        cb();
    }, 2000);
}

function test3(cb) {
    setTimeout(() => {
        console.log("Test 3 completed");
        cb();
    }, 1000);
}

test1(() => {
    test2(() => {
        test3(() => {
            console.log("All tests completed");
        });
    });
});