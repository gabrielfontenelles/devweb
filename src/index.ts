import express = require ("express")
import cors = require ("cors")
import { DevDataSource } from  "./connections/devConn"


DevDataSource.initialize().then()
    console.log("Conexão com o banco de dados estabelecida")
//inicia o servidor express
const app = express()
//cofigura o servidor para a leitura de requisições em formato json
app.use(express.json())
//usa o cors middleware para permitir requisições de outros domínios
app.use(cors(
    {
        origin: "http://localhost:3000" // aceita apenas requisições locais
    }
))
// coloca o serivdor para ouvir requisicções na porta 3333
app.listen(3333, () => console.log("Server is running on port 3333"))