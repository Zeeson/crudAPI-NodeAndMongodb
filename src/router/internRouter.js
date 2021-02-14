const express = require('express')
const router = express.Router()
const {
  getInterns, postIntern, showIntern, updateIntern, deleteIntern
} = require('../controller/internController')

router.get('/', getInterns)
router.post('/post-intern', postIntern)
router.get('/:id', showIntern)
router.put('/update/:id', updateIntern)
router.delete('/delete/:id', deleteIntern)

module.exports = router
