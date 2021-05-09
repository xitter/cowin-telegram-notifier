const nrc = require('node-run-cmd');
const config = require('./config');

const runCypress = (cb = runCypress) => {
    console.log("------Finding slot on cowin------" + new Date());
    nrc.run('npx cypress run', {
        onDone: () => {
            console.log("Done!!" + new Date());
            setTimeout(cb, 10000);
        }
    });
};

runCypress();
