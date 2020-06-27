import knex from 'knex';


const connection = knex({
  client:'pg',
  connection:{
    database: "ecoleta",
    user:"gmowfwbqtlbyon",
    password: "1b4c0b9f95ba164c54deebf5a97355e02371816a8dacc354c748cfe86fc09cc1"
   
  },
  useNullAsDefault:true,
});

export default connection;