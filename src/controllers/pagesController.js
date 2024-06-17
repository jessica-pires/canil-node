



const home = (request , response) =>{
    response.send('Home do controller')
    //response.render('pages/page')

}



const dogs = (request , response) =>{
    //response.render('pages/page')

}

const cats = (request , response) =>{
    //response.render('pages/page')

}

const fishes = (request , response) =>{
    //response.render('pages/page')

}

module.exports = {
    home,
    dogs,
    cats,
    fishes
}