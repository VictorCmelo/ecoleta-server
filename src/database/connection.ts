import knex from 'knex';


const connection = knex({
  client:'pg',
  connection: process.env.DATABASE_URL,
  
  // {
  //   database: "ecoleta",
  //   user:"postgres",
  //   password: "docker"
   
  // },
  useNullAsDefault:true,
});

export default connection;