const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://matheussilvadasdores_db_user:<db_password>@projeto9.inoaqcg.mongodb.net/?appName=projeto9";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


let url = "mongodb://localhost:27017/p9db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("p9db");
  dbo.createCollection("postagens", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("p8db");
  let myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("postagens").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});




const app = express();  
const PORT = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const posts = [];


app.get("/", (req, res) => {
  res.redirect("/cadastra");
});


app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Cadastro.html"));
});


app.post("/cadastra", (req, res) => {
  const { titulo, resumo, conteudo } = req.body;

  posts.push({ titulo, resumo, conteudo });

  res.render("resposta", { mensagem: "Post enviado com sucesso!", posts });
});


app.get("/blog", (req, res) => {
  res.render("resposta", { mensagem: "", posts });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

  app.post("/cadastra", function(req, resp) {
    var data = { db_titulo: req.body.titulo, db_resumo: req.body.conteudo, db_senha: req.body.conteudo };

    usuarios.insertOne(data, function (err) {
      console.log(err)
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
   
  });

