const {Router} = require('express') 
const {createPost, getAPost, getPosts, getPostbyCat, getUserPost, editPost,deletPost} = require('../controllers/postControllers');
const authMiddleware= require('../middleware/authMiddleware')

const router=Router() 


router.post('/',authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getAPost)
router.get('/categories/:category', getPostbyCat)
router.get('/users/:id', getUserPost)
router.patch('/:id',authMiddleware, editPost)
router.delete('/:id',authMiddleware, deletPost)


module.exports=router


//Router - guides requests to different destinations in your application or handling requests
//Route -  defines how your server responds to a specific request 