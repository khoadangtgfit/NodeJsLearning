const getHomepage = (req, res)=>{
    res.send('Hello world vs Khoa Dang Fit')
}

const getABcPage = (req, res)=>{
    res.render('sample.ejs')  
}

module.exports = {
    getHomepage,
    getABcPage
}