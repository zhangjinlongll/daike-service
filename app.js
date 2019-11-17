/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-14 16:02:33 
 * @Last Modified by: dragon
 * @Last Modified time: 2019-10-13 01:08:45
 * @Description: entry file
 */

const Koa = require('koa');
const config = require('./config');

// https://www.npmjs.com/package/koa2-cors
const cors = require('koa2-cors');

// https://www.npmjs.com/package/koa-bodyparser
const bodyParser = require('koa-bodyparser');

// https://github.com/Automattic/mongoose
const mongoose = require('mongoose');

const app = new Koa();
const options = {  
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
};
mongoose.connect(config.db, {useNewUrlParser:true}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});

app.use(cors());
app.use(bodyParser());

const user_router = require('./routes/api/user_router');
const course_router = require('./routes/api/course_router');
const school_router = require('./routes/api/school_router');
const example_router = require('./routes/api/example_router');

app.use(user_router.routes()).use(user_router.allowedMethods());
app.use(course_router.routes()).use(course_router.allowedMethods());
app.use(school_router.routes()).use(school_router.allowedMethods());
app.use(example_router.routes()).use(example_router.allowedMethods());

app.listen(config.port);