exports.succ = (req, res, next) => {
    console.log('hello');
res.sendFile(path.join(__dirname,'..', 'views', 'success.html'))
}