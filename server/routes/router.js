const express = require('express')


const route = express.Router()
const services = require('../services/render')

// All Controller
const fontscontroller = require('../controller/fontscontroller')
const colorscontroller = require('../controller/colorscontroller')
const multipleColorsController = require('../controller/multiplecolorscontroller')
const brushescontroller = require('../controller/photoshopbrushescontroller')

const uploadMultiple = require('../middleware/fontsfileupload')

const brushfilesupload = require('../middleware/brushesupload')

// Frontend Page URL
route.get('/', services.homeRouter)

// Backend Page URL
route.get('/dashboard', services.dashboardRouter)
route.get('/login', services.loginRouter)
route.get('/updatewebfonts', services.updatefontsRouter)
// Dashboard webfonts list
route.get('/webfonts', services.fontsRouter)
// Dashboard Add Webfonts
route.get('/addwebfonts', services.addfontsRouter)
// Dashboard Web Colors
route.get('/webcolor', services.colorsRouter)
// Dashboard Web Multiple Colors
route.get('/webmultiplecolor', services.multiplecolorsRouter)
// Dashboard Add Web Colors
route.get('/add-color', services.addColors)
// Dashboard Add Multiple Web Colors
route.get('/add-multiplecolor', services.addMultipleColors)
// Dashboard Photoshop Brushes
route.get('/photoshop-brushes', services.photoshopBrushes)
// Dashboard Add Photoshop Brushes
route.get('/add-photoshop-brushes', services.addphotoshopBrushes)


// Main Front Page
route.get('/fonts', services.mainfontsRouter)
route.get('/colors', services.mainColorsRouter)
route.get('/multiple-colors', services.mainMultipleColorsRouter)
route.get('/update-colors', services.updateColorsRouter)
route.get('/update-multiple-colors', services.updateMultipleColorsRouter)
route.get('/p-brushes', services.mainBrushesRouter)
route.get('/privacy-policy', services.privacyRouter)
route.get('/terms-and-conditions', services.termsRouter)


// FONTS REST API

route.post('/api/fontsgallery', uploadMultiple, fontscontroller.create)
route.get('/api/fontsgallery', fontscontroller.find)
route.put('/api/fontsgallery/:id', fontscontroller.update)
route.delete('/api/fontsgallery/:id', fontscontroller.delete)


// COLORS REST API
route.post('/api/colorsgallery', colorscontroller.create)
route.get('/api/colorsgallery', colorscontroller.find)
route.put('/api/colorsgallery/:id', colorscontroller.update)
route.delete('/api/colorsgallery/:id', colorscontroller.delete)

// MULTIPLE COLORS REST API
route.post('/api/multiplecolorsgallery', multipleColorsController.create)
route.get('/api/multiplecolorsgallery', multipleColorsController.find)
route.put('/api/multiplecolorsgallery/:id', multipleColorsController.update)
route.delete('/api/multiplecolorsgallery/:id', multipleColorsController.delete)

// PHOTOSHOP BRUSHES REST API
route.post('/api/photoshopbrushgallery', brushfilesupload, brushescontroller.create)
route.get('/api/photoshopbrushgallery', brushescontroller.find)
route.put('/api/photoshopbrushgallery/:id', brushescontroller.update)
route.delete('/api/photoshopbrushgallery/:id', brushescontroller.delete)



module.exports = route
