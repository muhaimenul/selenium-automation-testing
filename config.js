/*
    dotenv setup to read .env 
*/
const dotenv = require('dotenv');
dotenv.config();

// manual approach forn config
module.exports = {
    username: process.env.LT_USERNAME,
    accessToken: process.env.LT_ACCESS_TOKEN,
    gridHost: process.env.GRID_HOST
};

// automatic and dynamic approach using dotenv
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;