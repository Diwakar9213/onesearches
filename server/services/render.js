const axios = require('axios')

// Webfonts
exports.mainfontsRouter = (req, res) => {
    res.render('webfonts')
}

// Colors
exports.colorsRouter = (req, res) => {
    // res.render('colors')
    axios.get('http://localhost:8080/api/colorsgallery')
    .then(function(response){
            res.render('colors', {colorslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
}

// Backend File Render
exports.dashboardRouter = (req, res) => {
    res.render('superadmin/dashboard')
}

exports.loginRouter = (req, res) => {
    res.render('login')
}

exports.fontsRouter = (req, res) => {
    // res.render('superadmin/fonts')

    axios.get('http://localhost:8080/api/fontsgallery')
    .then(function(response){
            res.render('superadmin/fonts', {fontslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
    
}

exports.addfontsRouter = (req, res) => {
    res.render('superadmin/addfonts')
}

exports.updatefontsRouter = (req, res) => {
    // res.render('superadmin/updatefonts')
    axios.get('http://localhost:8080/api/fontsgallery', {params: {id: req.query.id}})
        .then(function(fontdata){
                res.render('superadmin/updatefonts', {fontlist: fontdata.data})
        })
        .catch(err=>{
                res.send(err)
        })
}

exports.updateMultipleColorsRouter = (req, res) => {
        // res.render('superadmin/updatefonts')
        axios.get('http://localhost:8080/api/multiplecolorsgallery', {params: {id: req.query.id}})
            .then(function(multiplecolorsdata){
                    res.render('superadmin/updateMultipleColors', {multiplecolorslist: multiplecolorsdata.data})
            })
            .catch(err=>{
                    res.send(err)
            })
    }

    exports.updateColorsRouter = (req, res) => {
        // res.render('superadmin/updatefonts')
        axios.get('http://localhost:8080/api/colorsgallery', {params: {id: req.query.id}})
            .then(function(response){
                    res.render('superadmin/updateColors', {colorslist: response.data})
            })
            .catch(err=>{
                    res.send(err)
            })
    }

exports.photoshopBrushes = (req, res) => {
    // res.render('superadmin/photoshopBrushes')
    axios.get('http://localhost:8080/api/photoshopbrushgallery')
    .then(function(response){
            res.render('superadmin/photoshopBrushes', {brusheslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
}

exports.addphotoshopBrushes = (req, res) => {
    res.render('superadmin/addPhotoshopBrushes')
}


// FrontSite Pages

exports.homeRouter = (req, res) => {
    res.render('home')
}

// Webfonts
exports.mainfontsRouter = (req, res) => {
    // res.render('webfonts')
    axios.get('http://localhost:8080/api/fontsgallery')
    .then(function(response){
            res.render('webfonts', {fontslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
}

exports.mainBrushesRouter = (req, res) => {
    // res.render('main-brushes')
    axios.get('http://localhost:8080/api/photoshopbrushgallery')
    .then(function(response){
            res.render('main-brushes', {brusheslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
}

exports.privacyRouter = (req, res) => {
        res.render('privacy')
}

exports.termsRouter = (req, res) => {
        res.render('terms-and-conditions')
}

// Add On Page

exports.colorsRouter = (req, res) => {
        // res.render('superadmin/colors')
        axios.get('http://localhost:8080/api/colorsgallery')
        .then(function(response){
                res.render('superadmin/colors', {colorslist: response.data})
        })
        .catch(err => {
                res.send(err)
        })
    }
    
    exports.addColors = (req, res) => {
        res.render('superadmin/addColors')
    }
    
exports.mainColorsRouter = (req, res) => {
    // res.render('maincolors')
    axios.get('http://localhost:8080/api/colorsgallery')
    .then(function(response){
            res.render('maincolors', {colorslist: response.data})
    })
    .catch(err => {
            res.send(err)
    })
}

exports.multiplecolorsRouter = (req, res) => {
        // res.render('superadmin/colors')
        axios.get('http://localhost:8080/api/multiplecolorsgallery')
        .then(function(response){
                res.render('superadmin/multiplecolors', {multiplecolorslist: response.data})
        })
        .catch(err => {
                res.send(err)
        })
    }


    exports.addMultipleColors = (req, res) => {
        res.render('superadmin/addMultipleColors')
    }

    exports.mainMultipleColorsRouter = (req, res) => {
        // res.render('maincolors')
        axios.get('http://localhost:8080/api/multiplecolorsgallery')
        .then(function(response){
                res.render('mainmultiplecolors', {multiplecolorslist: response.data})
        })
        .catch(err => {
                res.send(err)
        })
    }