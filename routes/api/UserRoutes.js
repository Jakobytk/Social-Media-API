const router = require('express').Router();
const {
    getAllUsers, 
    getUser,
    newUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userController');

// /api/User
router.route('/').get(getAllUsers);

// /api/User/:UserId
router.route('/:UserId').get(getUser);

// /api/User/:UserId/newUser
router.route('/:UserId/newUser').post(newUser);

// /api/User/:UserId/updateUser
router.route('/:UserId/updateUser').put(updateUser);

// /api/User/:UserId/userDelete
router.route('/:UserId/userDelete').delete(deleteUser);

module.exports = router;
