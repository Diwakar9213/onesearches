const photoshopbrushgallery = require('../model/photoshopbrushesmodel')


exports.create = (req, res) => {
    // add fonts API

if(!req.body){
    res.status(400).send({message: "Contents cannot be empty"})
    return;
}

// Add new items
const onesearche = new photoshopbrushgallery({
    brushname : req.body.brushname,
    brushimage : req.files.brushimage[0].path,
    brushfile : req.files.brushfile[0].path
})


onesearche.save(onesearche)
.then(data => {
    res.redirect('/photoshop-brushes')
})
.catch(err => {
    res.status(500).send({message: err.message || 'Some errors are occured'})
})

}


exports.find = (req, res) => {
    
    if(req.query.id){
        const id = req.query.id

        photoshopbrushgallery.findById(id).then(data => {
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
        photoshopbrushgallery.find()
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
    photoshopbrushgallery.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
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

    photoshopbrushgallery.findByIdAndDelete(id)
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