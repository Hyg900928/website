const exress = require('express');

const app = exress()

app.get('/', function(req, res, next){
    res.end('hello world,hahhahhhh \n')
    next()
})

app.listen(3000, function() {
    console.log('server is running at port 3000')
})