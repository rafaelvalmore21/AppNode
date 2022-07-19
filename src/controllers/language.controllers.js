import {getConnection} from "./../database/database"

const response = {
    error: false,
    code: 200,
    message: 'OK',
   };

const getLanguages = async (req, res) => {
    try{
        //const connection = await getConnection();
        //const result = await connection.query("SELECT id, name, programmers FROM language");
        console.log(res.send("Servicio rest disponible"));
        //res.json(result);           
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const notification = async (req, res) => {
    try{
        console.log("**********Headers************");
        console.log(req.headers);
        console.log("************Body**************");
        console.log(req.body);
        //const connection = await getConnection();       
        res.send(response);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};
export const methods={
    getLanguages,
    notification
};
