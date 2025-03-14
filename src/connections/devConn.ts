import { DataSource} from "typeorm";

export const DevDataSource = new DataSource({
  type: "postgres",
  host: "localhost",    //endereço do servidor do banco de dados
  port: 5432,   //porta padrão do postgres
  username: "postgres",   //usuário padrão do postgres       
  password: "postgres",   //senha do usuário
  database: "devweb",   //nome do banco de dados
    //entities
    
})
