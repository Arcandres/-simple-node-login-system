// SET PORT
process.env.PORT = process.env.PORT || 8080;

// SET ENVIROMENT
process.env.NODE_ENV = process.env.NODE_ENV || true;

// SET DATABASE
process.env.DB = process.env.NODE_ENV ? 'mongodb://localhost:27017/cafe' : process.env.MONGO_URI;