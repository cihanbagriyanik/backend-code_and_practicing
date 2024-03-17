// $ npm i cors
// CORS
const cors=require('cors')
// app.use(cors())
//Default CORS
// app.use(cors({
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }))
app.use(cors({
    "origin": ["http://localhost:5173","http://localhost:3000"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",

}))