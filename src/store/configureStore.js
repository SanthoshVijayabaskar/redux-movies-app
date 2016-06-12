if(process.env.NODE_ENV === 'production'){
	module.exports = require('./configureStore.prod.js');
}else{
	module.exports = require('./configureStore.dev.js');
}

//We use require as dynamic imports aren't suported in ES6