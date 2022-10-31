const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');



const usersRoutes = require('./routes/users');

app.use('/users',usersRoutes);

app.use((req, res) => {
	res.status(404).render('404', {pageTitle: 'Page not fouuund!'});
})

app.listen(3000);