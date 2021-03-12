module.exports = {
    // If the user is not logged in it will redirect them to the login page
    ensureAuth: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect("/");
        }
    },
    // If the user is logged in then when they try to go to the login page it'll bring them to
    // the dashboard
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect("/dashboard");
        } else {
            return next();
        }
    }
};