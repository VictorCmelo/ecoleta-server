import path from 'path';

module.exports = {
  client:'pg',
  connection: process.env.DATABASE_URL,
  
  // {
  //   database: "ecoleta",
  //   user:"postgres",
  //   password: "docker"
  // },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  
  useNullAsDefault:true,
};