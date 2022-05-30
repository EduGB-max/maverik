module.exports = (app)=>{
    //abrir o arquivo login.ejs
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })


//validar usuario e senha//

app.post('/login',async(req,res)=>{

    var dados = req.body

    var database = require('../config/database')

    var usuarios = require('../models/usuarios')

 var verificar = await usuarios.findOne({
     email:dados.email
 })

 if(!verificar){
     return res.send("Email não Cadastrado")
 }

 var cript = require('bcryptjs')
 var comparar = await cript.compare(dados.senha,verificar.senha)

if(!comparar){

return res.send("Senha Inválida!")

}

res.render("atividades.ejs",{nome:verificar.nome, id:verificar._id})

}) 

}