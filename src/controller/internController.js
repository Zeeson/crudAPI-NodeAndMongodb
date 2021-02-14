const Intern = require('../model/internModel')

const getInterns = (req, res, next) => {
  // get all interns
  Intern.find()
  .then(interns => res.status(200).json(interns))
  .catch(err => res.status(400).json("Error getting Interns"))
}

const postIntern = (req, res, next) => {
  // destructuring intern inernModel
  const {
    firstName, lastName, email, phone, about
  } = req.body

  const intern = {
    firstName, lastName, email, phone, about
  }
  Intern.create(intern)
  .then(() => res.status(200).json({message: "Intern created successfully"}))
  .catch(err => res.status(400).json({message: "Error creating an Intern"}))
}

// show one fleet
const showIntern = (req, res, next) => {
    Intern.findById(req.params.id)
      .then(intern => res.status(200).json(intern))
      .catch(err => res.status(400).json('Error getting the Intern'));
  }
  const updateIntern = (req, res, next) => {
    Intern.findById(req.params.id)
    .then(intern => {
      intern.firstName = req.body.firstName
      intern.lastName = req.body.lastName
      intern.email = req.body.email
      intern.phone = req.body.phone
      intern.about = req.body.about
      intern.save()
      .then(() => res.status(200).json('Intern Updated'))
      .catch(err => res.status(400).json('Error updating Intern'))
    })
    .catch(err => res.status(400).json('Error Getting Intern' + err))
  }
// delete
const deleteIntern = (req, res, next) => {
  Intern.findOneAndRemove(req.params.id)
  .then(() => {
    res.status(200).json('Intern Deleted')
  })
  .catch(err => res.status(400).json('Error deleting Intern' + err))
}

module.exports = {
  getInterns,
  postIntern,
  showIntern,
  updateIntern,
  deleteIntern
}
