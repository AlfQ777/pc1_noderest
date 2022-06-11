const {Router} = require('express');
const router = Router();
const {userGetController, 
       userPostController, 
       userPutController,
       userDeleteController,
       getObjController
    } = require('../controllers/users')

router.get('/api', userGetController);

router.post('/api', userPostController); 

router.put('/api:id', userPutController);

router.delete('/api', userDeleteController);

router.get('/obj', getObjController); 

module.exports = router;
