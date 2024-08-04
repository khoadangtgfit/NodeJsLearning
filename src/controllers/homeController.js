const { render } = require('ejs');
const connection = require('../config/database');
const {getAllUser} = require('../services/CRUDService');
const {createUser} = require('../services/CRUDService');
const {updateUser} = require('../services/CRUDService');
const {deleteUser} = require('../services/CRUDService');
const getHomepage = async (req, res)=>{
    let results = await getAllUser();
    return res.render('home.ejs', {listUsers: results});
}

const getABcPage = (req, res)=>{
    res.render('sample.ejs')  
}

const getCreatePage = (req, res)=>{
    res.render('create.ejs')
}

const getEditPage = async (req, res)=>{
    let userId = req.params.id;
    let user = await getUser(userId);
    res.render('edit.ejs', {user : user});
}

const getUser = async (id)=>{
    let [results, fields] = await connection.query("Select * from Users where id = ?", id);
    return results.length > 0 ? results[0] : {};
}

const postCreateUser = (req, res)=>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    createUser(email, name, city);
    return res.redirect('/');
}


const postEditUser = async (req, res)=>{
    let id =  req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    await updateUser(email, name, city, id);
    return res.redirect('/');
}

const postDeleteUser = async(req, res)=>{
    let id =  req.params.id;
    await deleteUser(id);
    return res.redirect('/');
}


module.exports = {
    getHomepage,
    getABcPage,
    postCreateUser,
    getCreatePage,
    getEditPage,
    postEditUser,
    postDeleteUser,
}