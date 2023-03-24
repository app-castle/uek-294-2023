const jsonServer = require('json-server');
const auth = require('json-server-auth');

// server erstellen
const server = jsonServer.create();

// router mit Datenquelle
const router = jsonServer.router('db.json');
server.db = router.db;

// routen schützen
const rules = auth.rewriter({
  users: 600,
  blogpost: 664,
});

// CORS middleware
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

server.use(cors);
server.use(rules);
server.use(auth);
server.use(router);
server.listen(3000, () => console.log('Server started'));
