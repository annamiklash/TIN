let fs = require('fs');
let path = "test_dir/";

function printFileContent(path) {
    fs.watch(path, (event, fileName) => {
        if (event === 'change') {
            fs.readFile(
                path + fileName, (errors, content) => {
                    if (errors) {
                        console.log("error encountered " + errors);
                    } else {
                        console.log("the file " + fileName + " was changed");
                        console.log("the content of the file: " + content);
                    }

                });
        }
    })
}

printFileContent(path);
