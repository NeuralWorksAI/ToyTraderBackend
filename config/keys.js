const dotenv = requires("dotenv")
dotenv.config();
const DB_PASS = process.env.DB_PASS;
module.exports = {
    mongoURI: `mongodb+srv://dbUser:${DB_PASS}@toytrader.cqqqn.mongodb.net/toytrader?retryWrites=true&w=majority`,
    secretOrKey: "secret"
    
  };