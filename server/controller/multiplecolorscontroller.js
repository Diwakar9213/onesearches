const multiplecolorsgallery = require('../model/multipleColorsModel')


exports.create = (req, res) => {
    // add fonts API

if(!req.body){
    res.status(400).send({message: "Contents cannot be empty"})
    return;
}

// Add new items
const onesearche = new multiplecolorsgallery({
    colorscode1 : req.body.colorscode1,
    colorscode2 : req.body.colorscode2,
    colorscode3 : req.body.colorscode3,
    colorscode4 : req.body.colorscode4,
    colorscode5 : req.body.colorscode5,
    colorscode6 : req.body.colorscode6
})


onesearche.save(onesearche)
.then(data => {
    res.redirect('/webmultiplecolor')
})
.catch(err => {
    res.status(500).send({message: err.message || 'Some errors are occured'})
})

}


exports.find = (req, res) => {
    
    if(req.query.id){
        
        const id = req.query.id

        multiplecolorsgallery.findById(id).then(data => {
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
        multiplecolorsgallery.find()
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
    multiplecolorsgallery.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
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

    multiplecolorsgallery.findByIdAndDelete(id)
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