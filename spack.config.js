const { config } = require("@swc/core/spack");

module.exports = config({
    entry: __dirname + "/src/server.ts",
    output: {
        path: __dirname + "/build",
    },
    module: {},
    workingDir: "./src",
    externalModules: ["express", "dotenv", "cors"],
    mode: "production",
    target: "node"
});

// import { config } from '@swc/core/spack';

// export default config({
//     //  name: 'web',
//     // entry: "",
//     output: {
//         path: __dirname + "/lib"
//     },
//     workingDir: "./src"
// });