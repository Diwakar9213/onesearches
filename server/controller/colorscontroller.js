const colorsgallery = require('../model/colorsmodel')


exports.create = (req, res) => {
    // add fonts API

if(!req.body){
    res.status(400).send({message: "Contents cannot be empty"})
    return;
}

// Add new items
const onesearche = new colorsgallery({
    colorscode : req.body.colorscode
})


onesearche.save(onesearche)
.then(data => {
    res.redirect('/webcolor')
})
.catch(err => {
    res.status(500).send({message: err.message || 'Some errors are occured'})
})

}


exports.find = (req, res) => {
    
    if(req.query.id){
        const id = req.query.id

        colorsgallery.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: "Not Found"})
            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error"})
        })
    }
    else {
        colorsgallery.find()
        .then(data=> {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: "Internal Server Errors"})
        })
    }
}

exports.update = (req, res) => {
    // callback function
    if(!req.body){
        return res.status(400).send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    colorsgallery.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
    .then(data => {
        if(!data){
            res.status(404).send({message: `Data not found by ${id}`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: 'Internal Server Error! Please retry again or You can touch with us'})
    })
}

// Delete the data by id

exports.delete = (req, res) => {

    const id = req.params.id

    colorsgallery.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `Data not found by ${id}`})
        }
        else {
            res.send({message: "Data was deleted successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({message: 'Internal Error'})
    })

}