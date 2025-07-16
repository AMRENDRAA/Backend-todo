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


// exports.updateTodo= async(req,res)=>{

//     const [id]=req.params;
//     try{
//         (await db).query('UPDATE todos ')

//     }
// }