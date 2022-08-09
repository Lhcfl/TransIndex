let ejs = require('ejs');
let fs = require('fs');

kuaer = JSON.parse(fs.readFileSync('./data.json'));
ejsfile = String(fs.readFileSync("./index.ejs"))

function build() {
    fs.writeFile('index.html', ejs.render(ejsfile, {kuaer: kuaer}),  function(err) {
        if (err) {
            return console.error(err);
        }
    });
}

build();
    