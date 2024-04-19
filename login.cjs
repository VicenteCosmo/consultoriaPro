
const mysql=require("mysql")
 const express=require("express")


//body-parser: serve para pegar as imfo´s do formulário
const bodyParser= require("body-parser")
const  encoder= bodyParser.urlencoded()

const app=express()
const port=process.env.PORT ||  4000

app.use(express.static('assets'))

const conection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:'3306',
    password: 'cosmo',
    database: 'cadastro'

})

conection.connect(function(error){
    if(error){
       console.log(error)
    }
    else{
        console.log("Conectado conectado com sucesso!")
    }


})

app.get("/", (req, res, results)=>{
   res.sendFile(__dirname+ "/consultoria.html")
})

app.get("/cadastro_empresas", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/cadastro_empresas",encoder, (req, res)=>{
    const nome = req.body.nome
    const email=req.body.email
    const numero= req.body.numero
    const descricao=req.body.descricao
     
     conection.query("INSERT INTO `cadastro`.`cadastro_empresa` (`nome`, `email`, `numero`, `descricao`) VALUES (?,?,?,? );", [nome, email, numero, descricao] ,(error, results, fields)=>{
 
          if(error){
             res.status(400).send(error)
          }  
          else{
             res.status(200).send("Cadastro bem-sucedido!")
          } 
 
         /*if(results.length>0){
             res.redirect("/welcome")
         }
         else{
             res.redirect("/")
         }
         res.end()*/
     })
 
 
 })

 app.get("/cadastro_formandos", (req, res)=>{
    res.sendFile(__dirname + "/cadastro_formando.html")
 })

 app.post("/cadastro_formandos",encoder, (req, res)=>{
    const nome = req.body.nome
    const email=req.body.email
    const telefone= req.body.telefone
    const empresa_em_que_trabalha=req.body.empresa_em_que_trabalha
    const nivel_academico=req.body.nivel_academico
    const formacao=req.body.formacao_que_pretende
    const tipo_de_entidade=req.body.tipo_de_entidade
   
     
     conection.query("INSERT INTO `cadastro`.`cadastro_formandos` (`nome`, `email`, `telefone`, `empresa_em_que_trabalha`, `nivel_academico`, `tipo_de_entidade`, `formacao_que_pretende`) VALUES (?, ?, ?, ?, ?, ?, ? );", [nome, email, telefone, empresa_em_que_trabalha,nivel_academico, tipo_de_entidade, formacao] ,function(error, results, field){
 
          if(error){
             res.status(400).send(error)
          }  
          else{
             res.status(200).send("Cadastro feito!")
          } 
     })
 
 
 })

 //definir a porta para abrir:
app.listen(port, ()=>{
    console.log(`App conectada na porta: ${port}`)
})

