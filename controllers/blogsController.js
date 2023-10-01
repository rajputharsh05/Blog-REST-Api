const axios = require("axios");
const { Search } = require("../utils/Search");
const _ = require("lodash");  
const NodeCache = require("node-cache");
const myCache = new NodeCache();
require("dotenv").config();


const name = process.env.ADMIN_NAME;
const key = process.env.ADMIN_KEY;



// var sum = _.memoize(function (n) { 
//     return n < 1 ? n : n + sum(n - 1); 
// }); 

exports.getBlogs = async (req, res) => {
  try {
    const result = myCache.get("key");
    if (result) res.json(result);
    else {
      const response = await axios.get(process.env.REQUEST_URL, {
        headers: {
          [name]: key,
        },
      });

      const userData = _.memoize((a,b)=>Search(a, b));

      const UserData = userData(req.query, response);
    data = myCache.set("key", UserData, 20000);

      res.status(200).json(UserData);
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};
