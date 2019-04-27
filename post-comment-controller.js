const dbDataHandler = require('../db-layer/db-data-handler');

const postComment=(req,res)=>{
    var record = {};
   // console.log("req***********"+JSON.parse(req.body));
    record = req.body.data.comment;
    const collection = 'Comment';
    record['createddate'] = new Date();
    record['createdbyname'] = 'Admin';
    record['modifieddate'] = new Date();
    record['modifiedbyname'] = 'Admin';
    dbDataHandler.insertDocument(collection,record,(err,result)=>{
        if(err)
        {
            return res.status(200).json({ message: "Comment insertion failed",success :0 });
        } 
        else
        {
            return res.status(200).json({ message: "Comment inserted successfully",success:1});
        }   
            
    }); 

 };


module.exports = postComment;

