const http = require('http');
const app = require('./app/app');
require('./configs/dbConnect')


const PORT = process.env.PORT || 3030;

//Get My Server Running
const server = http.createServer(app) 
server.listen(PORT, () => {
    console.log(`Bad Ass⚡ Server is running on PORT: ${PORT}`);
})