const dbDataHandler = require('../db-layer/db-data-handler');

const getComment=(req,res)=>{
    var query = {"id":req.params.id};
    const collection = 'Comment';
    dbDataHandler.getAllComments(collection,query,(err,result)=>{
         if(err)
         {
              res.status(500).json({ message: err,success:0 });
         }
         else
         {
             if(result.length>0)
             {
                res.status(200).json({ message: "Comments retrieved successfully",success:1,data:result,totalcount:result.length });
             }  
             else
             {
                 res.status(200).json({ message: "No records found",success:1,data:[] });
             }    
             
         }      
    }); 

 };

module.exports = getComment;

