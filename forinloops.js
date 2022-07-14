// for (key in object) {
//     statement;
// }

const object = {
    name: 'bridgette',
    age: 20,
    inClass: true,
};

for (const key in object) {
    console.log(key);
}

for (const key in object) {
    console.log(object[key]);
}