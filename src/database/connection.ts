import knex from 'knex';


const connection = knex({
  client:'pg',
  connection:{
    database: "ecoleta",
    user:"postgres",
    password: "docker"
   
  },
  useNullAsDefault:true,
});

export default connection;