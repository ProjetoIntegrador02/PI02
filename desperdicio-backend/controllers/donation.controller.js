const express = require('express'),
    router = express.Router()

const service = require('../services/donation.service')

//http://localhost:3001/api/donations/
router.get('/', async (req, res) => {
    const donations = await service.getAllDonations()
    res.send(donations)
})

router.get('/ajude', async (req, res) => {
    const donations = await service.getAllDonationsHelp()
    res.send(donations)
})

router.get('/:id', async (req, res) => {
    const donation = await service.getDonationById(req.params.id)
    if (donation == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(donation)
})

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteDonation(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

router.post('/', async (req, res) => {
    const affectedRows = await service.createDonation(req.body)
    res.status(201).send('Enviado com sucesso.')
})

router.put('/:id', async (req, res) => {
    const affectedRows = await service.updateDonation(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})



module.exports = router;