const db = require('../models');
const User = db.user;
exports.home = async (req, res) => {
    res.status(400).json({
        msg: 'You have successfully reached TradeHub Users home page'
    })
}

//create user
const createUser = async (req, res) => {
  try {
    if (!req.body.fullName) {
      return res.status(400).json({
          msg: "Please provide user fullName"
      })
    };
    if (!req.body.email) {
      return res.status(400).json({
          msg: "Please provide user email"
      })
    };
    let duplicateEmail = await User.findAll({where: {email: req.body.email }});
    if (duplicateEmail.length) {
          return res.status(409).json({
              msg: "Email already exists",
          })
    };
    if (!req.body.username) {
      return res.status(400).json({
          msg: "Please provide user username"
      })
    };
    let duplicateUsername = await User.findAll({where: {username: req.body.username }})
      if (duplicateUsername.length) {
          return res.status(409).json({
              msg: "Username already exists",
          })
    };
    if (!req.body.password) {
      return res.status(400).json({
          msg: "Please provide user password"
      })
    };
  
    const user = await User.create({
      fullName: req.body.fullName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  
    });
    res.status(201).json({
        data: user
      });
  } catch (error) {
    console.log(error.message);
    res.status(400).send('Server Error!')
    
  }
  




}
//edit user
//delete user

//getAllUsers
//getOneUser

//editOneUser


const getUsers = ((req, res) => {
  // User.findAll().then((data) => {
  //   users = [];
  //   data.forEach((user) => {
  //     users.push(user.toJSON());
  //   })
  //   res.status(200).json(users);
  // }).catch((err) => {
  //   console.error(err);
  //   res.status(500).json({ error: 'Internal server error'});
  // })
});


const getUser = ((req, res) => {
//   const userId = Number(req.params.userId);
//   User.findOne({where: {id: userId}}).then((user) => {
//     if (!user) {
//       return res.status(404).json({error: 'Not found'});
//     }
//     res.status(200).json(user);
//   }).catch((err) => {
//     console.error(err);
//   });
// }).catch( error => {
//   res.status(400).json({
//     msg: error.message
//   })
})


module.exports = { createUser, getUsers, getUser };
