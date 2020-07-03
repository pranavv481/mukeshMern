const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

require('./models/wish');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public/'));
app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(port, () => {
  console.log('servr running on port ' + port);
});
