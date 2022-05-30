const { app } = require("../config/servidor")

module.exports = (app)=>{
    //rota do tipo render
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
}