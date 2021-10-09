const fs = require('fs');

if(process.argv.length < 3)
{
    console.error("Parameter not provided >:(");
    process.exit(1);
}

const dir = process.argv[2];
if(!(fs.existsSync(dir) && fs.statSync(dir).isDirectory()))
{
    console.error(`Error with parameter: ${dir}`);
    process.exit(1);
}

fs.readdir(dir, (err, files) => {
    if (err)
    {
        throw err;
    }

    files.forEach(e => {
        const sh = `${dir}\\${e}`;

        fs.watch(`${sh}`, {
            recursive: true,
            persistent: true
        },
        () => {
            console.log(fs.readFileSync(`${sh}`, "utf8"));
        })
    })
});