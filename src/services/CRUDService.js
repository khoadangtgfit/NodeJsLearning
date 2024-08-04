const connection = require('../config/database');
const getAllUser = async()=>{
    let [results, fields] = await connection.query('Select * from Users');
    return results;
}

const createUser = async(email, name, city)=>{
    connection.query(
        `INSERT INTO Users(email, name, city) values(?,?,?)`, [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('create user success');
        }
      );
}

const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ?
            WHERE id = ?`, [email, name, city, id],
    );
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE from Users WHERE id = ?`, [id],
    );
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}