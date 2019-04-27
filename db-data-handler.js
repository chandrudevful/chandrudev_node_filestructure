const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const config = require('../../config/config');


/**
 * Connect Mongo Driver to MongoDB.
 */
let DB;
MongoClient.connect("mongodb://"+config.mongoUserName+":"+config.mongoPassword+"@"+config.mongoHost+":"+config.mongoPort+"/?authMechanism="+config.mongoAuthMechanism+"&authSource="+config.mongoAuthSource, { useNewUrlParser: true }, (_err, _client) => {
  
  if (_err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running. ', _err);
    process.exit(1);
  }
  DB = _client.db(config.dbName);
});
/**
 * Insert document to MongoDB.
 */

const insertDocument = (_collectionName,_record, _callback)=>{

  DB.collection(_collectionName).insertMany([ _record ], function(err, result) {
    if(!err)
    {
      _callback(null,result);
    }
    else
    {
       _callback(err,null);
    }      
  });  
  
};

const getAllComments=(_collectionName, _query, _callback)=>{
      DB.collection(_collectionName).find(_query).sort({"modifieddate": -1}).toArray(function(err, docs)
      {
        if(!err)
        {    
            _callback(null,docs)
        } 
        else
        {
            _callback(err,null);
        }   
      });  
};



module.exports= {
  insertDocument,
  getAllComments
};