var express = require('express')
var app = express ()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

var campgrounds = [
  {
    name: 'YellowStone',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/a3/bd/82/a3bd828afd25500277a316941f5a7286.jpg'
  },
  {
    name: 'Yogi Camp',
    image: 'http://www.southcarolinaparks.com/ProductPictures/27324_1_3.jpg?height=600&autocrop=1'
  },
  {
    name: 'BooBoo Camp',
    image: 'https://media.roverpass.com/pictures/images/000/022/738/full/oak-lake-family-campground-fair-oaks-in-1.jpg?1487417357'
  },
  {
    name: 'YellowStone',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/a3/bd/82/a3bd828afd25500277a316941f5a7286.jpg'
  },
  {
    name: 'Yogi Camp',
    image: 'http://www.southcarolinaparks.com/ProductPictures/27324_1_3.jpg?height=600&autocrop=1'
  },
  {
    name: 'BooBoo Camp',
    image: 'https://media.roverpass.com/pictures/images/000/022/738/full/oak-lake-family-campground-fair-oaks-in-1.jpg?1487417357'
  }
]

app.get('/', function (req, res) {
  res.render('landing')
})

app.get('/campgrounds', function (req, res) {
  res.render('campgrounds', {campgrounds: campgrounds})
})

app.post('/campgrounds', function(req, res) {
  var name = req.body.name
  var image = req.body.image
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground)
  res.redirect('/campgrounds')
})

app.get('/campgrounds/new', function (req, res) {
  res.render('new.ejs')
})

app.listen(3000, function () {
  console.log('YelpCamp Server Has Started');
})
