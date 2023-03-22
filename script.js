// function myFunction() {
//     var zip = new JSZip();

//     zip.file = ("SpaceWrath.zip", "SpaceWrath\n");





//     zip.generateAsync({ type: "blob" })
//         .then(function (content) {
//             //Force down of the Zip file
//             saveAs(content, "space_wrath.zip");
//         });

// }

function myFunction() {
    var zip = new JSZip();

    // load the existing file
    JSZipUtils.getBinaryContent('./SpaceWrath.zip', function (err, data) {
        if (err) {
            throw err;
        }

        console.log('File contents:', data); // check the contents of the file

        // add the file to the zip
        zip.file('SpaceWrath.zip', data, { binary: true });

        // generate the zip asynchronously
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                // force download of the zip file
                saveAs(content, "SpaceWrath.zip");
            });
    });



}


console.log("hello");