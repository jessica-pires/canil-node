const Router = require('express')
const {home , dogs, cats , fishes} = require('../controllers/pagesController');
const search = require('../controllers/searchController');

const router =  Router();

router.get('/' , home);
router.get('/dogs' , dogs);
router.get('/cats' , cats);
router.get('/fishes' , fishes);

router.get('/search' , search);


module.exports = router;