import server from './src/server.js'

server.listen(process.env.PORT || 3001, () => {
  console.log("Calculator live on localhost:3000");
});
