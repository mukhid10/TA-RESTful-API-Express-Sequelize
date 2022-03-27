const express = require('express')
const router = express.Router()
const {hewan} = require('../models/index.js')

router.route('/hewan')
    .get(async(req, res)=>{
        let dataHewan = await hewan.findAll()
        res.json({
            data: dataHewan
        })
    })
    .post(async(req, res)=>{
        res.send('post')
    })
    .put((req, res)=>{
        res.send('put')
    })
    .delete((req, res)=>{
        res.send('del')
    })

module.exports = router