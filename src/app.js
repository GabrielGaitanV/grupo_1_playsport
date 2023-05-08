const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookies = require ('cookie-parser');
const session = require('express-session');
const app = express();
const cors = require('cors')
const port = 3007;

const routesProduct = require('./routes/products');
const routesCart = require('./routes/cart');
const routesAuth = require('./routes/auth');
const routesMain = require('./routes/main');
const apiProductsRoutes = require('./routes/api/apiProductsRoutes');
const apiUsersRoutes = require('./routes/api/apiUsersRoutes');

//middlewares
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"))
app.use(cookies());
app.use(cors())
app.use(session({
    secret: "PlaySport2022/2023",
    resave: false,
    saveUninitialized: true,
}));

//uso middlewares
app.use(userLoggedMiddleware);

app.listen(port, () => console.log('Servidor de PlaySport funcionando'));

app.use('/', routesMain);
app.use('/products', routesProduct);
app.use('/api/products', apiProductsRoutes);
app.use('/api/users', apiUsersRoutes)
app.use('/cart', routesCart);
app.use('/auth', routesAuth);

app.use(express.static(path.join(__dirname,'/public')));
