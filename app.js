const fs= require('fs');
const generatePage= require('./src/page-template')
const profileDataArgs = process.argv.slice(2);
 const [name, github]= profileDataArgs;
// console.log(profileDataArgs);

// const printProfileData= profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
    
// };

// printProfileData(profileDataArgs);

/////////////////////////////////////////////////////////////////////////////////////////////////////////


fs.writeFile('index.html',generatePage(name, github), err => {
    if (err) throw err;
    console.log("Portfolio complete! Checkout index.html to see the output!")
});

