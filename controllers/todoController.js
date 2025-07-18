const db=require('../db');

exports.createtodo=async (req,res)=>{

    const {task}=req.body;

       if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }
    try{

        const [result]=await db.query('INSERT INTO todos (task) VALUES(?) ',[task]);
        res.status(201).json({
            id:result.insertId,task
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err.message,

        });

    }

};


exports.gettodos= async(req,res)=>{


    try{






        const[rows]= await db.query('SELECT * FROM todos');
        res.status(200).json(rows);

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.faq= ((req,res)=>{

    try{
        const question=[];
        const answer =[];


        res.status(200).json({
            "success":true,
            "data":[
                   {
            "id": 10,
            "question": "What is EstuAds?",
            "answer": "<p>EstuAds is our advertising platform that allows businesses and brands to create and promote events or deals targeting college students in the U.S. Businesses can also sponsor these promotions to get priority placement within our app.</p>",
            "type": "business",
            "priority": 10,
            "createdAt": "2025-05-03T11:05:18.000Z"
        },
        {
            "id":11,

            "question":"How to create a event ",
            "answer":"Created a new event"

        }
            ]
           
        })
    }catch(err){
        res.status(500).json({
            err:err
        })
    }
})





exports.updateTodo= async (req,res)=>{

    const {id}= req.params;
    const {task,completed }= req.body;
    try{


        if (task === undefined || completed === undefined) {
  return res.status(400).json({ message: "Both 'task' and 'completed' are required" });
}

        const [result]= await db.execute('UPDATE todos SET task =?,completed=? Where id=?',[task,completed,id]);
        res.status(201).json({
            updated:result.affectedRows
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err.message
        })
    }
}


exports.deleteTodo= async(req,res)=>{
const {id}=req.params;
try{
    const[result]= await db.execute('DELETE FROM todos Where id =?',[id]);
    res.status(200).json({
        deleted:result.affectedRows
    })
}catch(err){
    res.status(500).json({
        err:err.message
    })
}

}