import * as fs from 'fs';

export default function createFile(path:string, data:string) {
    fs.writeFile(path, data,  function(err) {
        if (err) {
            return console.error(err);
        }
    });
}