// SET PORT
process.env.PORT = process.env.PORT || 8080;

// SET DATABASE
process.env.DB = process.env.MONGO_URI || 'mongodb://localhost:27017/user';