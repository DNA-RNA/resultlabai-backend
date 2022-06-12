const express= require('express');
const morgan = require('morgan');
const cors= require('cors');
const  fileUpload = require('express-fileupload');
const history= require('connect-history-api-fallback');
const path =require('path');



const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

// Routes
app.use('/auth/admin', require('./routes/auth.routes'));
app.use('/user', require('./routes/user.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/doctor',require('./routes/doctor.routes'));


// Middlewares for Vue
// app.use(history());
// app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});