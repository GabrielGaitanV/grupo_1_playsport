const bcrypt = require('bcryptjs');
const session = require("express-session");
const db = require("../../database/models");
const UserModel = require("../../models/UserModel.js");

const controller={

    list: (req, res) =>{

      let users = db.user.findAll({attributes:['user_id', 'first_name', 'last_name', 'user_email', 'detail']})
            .then(users =>{
              return res.status(200).json({
                count: users.length,
                users: users,
                status: 200
              })
            })
      },
    
      detail: (req, res)=>{
        db.user
          .findByPk(req.params.id, {
            attributes:['user_id', 'first_name', 'last_name', 'user_email', 'user_image','image']
          })
            .then(user =>{
              return res.status(200).json({
                data: user,
                status: 200
              })
            })
      }
      
}

module.exports = controller;