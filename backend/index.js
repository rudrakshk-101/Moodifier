const express = require('express');
const app = express();
const cors= require('cors');
const port =  5897;















app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})