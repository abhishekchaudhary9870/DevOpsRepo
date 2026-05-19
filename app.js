const express = require('express');
const app = express();

app.get('/', (res, rep) => {
    res.send('DevOps project is running');

});

app.get('/health', (res,rep) => {
    res.json({status:'OK'});
});

const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`);
});
