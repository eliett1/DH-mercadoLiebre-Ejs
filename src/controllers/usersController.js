module.exports = {
    main: function(req, res, next) {
       if (req.params.id == 'login') {
           res.render('./users/login');
       } else if (req.params.id == 'register') {
           res.render('./users/register');
       } else {
           res.send('Not Found');
       }
    }
}
