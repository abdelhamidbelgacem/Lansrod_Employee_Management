var jsonServer = require('json-server');
var cors = require('cors');
var bodyParser = require('body-parser');

var jwtSecret = 'JWT_SECRET';

var user = {
  email: 'abdelhamid.belgacem@lansrod.com',
  password: '$Lansrod2018$'
};

var app = jsonServer.create();

app.use(cors());
app.use(bodyParser.json());

app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({email: user.email}, jwtSecret);
  res.send({token: token, user: user});
});
});

app.get('/me', function (req, res) {
  res.send(req.user);
});

app.use(jsonServer.router(db));
app.use(jsonServer.defaults());

app.listen(3000);

function authenticate(req, res, next) {
  var body = req.body;
  console.log(body)
  if (!body.email || !body.password) {
    res.status(400).end('Must provide email and password Lansrod');
  } else if (body.email !== user.email || body.password !== user.password) {
    res.status(401).end('Email or password incorrect');
  } else {
    next();
  }
}
