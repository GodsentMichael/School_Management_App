
const isLoggedIn = (req, res, next) => {
    const isLogin = req.userAuth
    console.log(req.userAuth);
    if(isLogin){
        next()
    }else{
        res.status(401).json({
            message: 'You are not logged in',
        });
    // if (req.session.isLoggedIn) {
    //     next();
    // } else {
    //     res.status(401).json({
    //         message: 'You are not logged in',
    //     });
    // }
}
};

module.exports = isLoggedIn;