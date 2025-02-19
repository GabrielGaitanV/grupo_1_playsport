function authMiddleware(req, res, next) {

    if (!req.session.userLogged) {
        return res.redirect('/auth/login');
    }
    next();
}

module.exports = authMiddleware;