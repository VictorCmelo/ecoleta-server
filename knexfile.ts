import path from 'path';

module.exports = {
  client:'pg',
  connection:{
    database: "ecoleta",
    user:"gmowfwbqtlbyon",
    password: "1b4c0b9f95ba164c54deebf5a97355e02371816a8dacc354c748cfe86fc09cc1"
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  
  useNullAsDefault:true,
};