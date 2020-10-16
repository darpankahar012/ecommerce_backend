const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require('express-validator');
require("dotenv").config();

const authRoutes = require("./routes/auth_routes");
const userRoutes = require("./routes/user_routes");
const categoryRoutes = require("./routes/category_routes");
const productRoutes = require("./routes/product_routes");
const braintreeRoutes = require("./routes/braintree_routes");
const orderRoutes = require("./routes/order_routes");

const app = express();
// Database
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('!.............................[ Database Connected ].............................!'));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


//Routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log((`Server is running on Port ${port}`))
});
