var Userdb = require('../model/model')


// create and save new user

exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.state(400).send({message: "Content can not be empty"})
        return
    }

    // new user
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in the database
    user
    .save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occured while creating a create operation"
        })
    })
}

//retrive and return all users/retrive and return a single user

exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({messgae: err.message || "Error Occured while retriving user information"})
    })
}

//Update a new identified user by user id

exports.update = (req,res) => {

}

//Delete a new identified user by user id

exports.delete = (req,res) => {
    
}