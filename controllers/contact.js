exports.cont = (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'contact.html'))
    }