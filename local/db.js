import mysql from "mysql2/promise"

export default async function query({query, values=[]}) {

  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "shoppinglist",
    port: "3306",
    user: "root",
    password: "password",
  })
  try{
   
    const [result] = await dbconnection.execute(query, values);
    dbconnection.end();
    return result
  }
  catch(error){
   throw Error(error)
  }
  
  
}

