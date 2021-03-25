const express = require('express')
const app = express()
var cors = require('cors')

const port = 4200

//allow access origin
app.use(cors())
//set up static files
app.use(express.static('./dist/frontend')) 

//general path
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/frontend/'});
});

app.listen(process.env.PORT || port)