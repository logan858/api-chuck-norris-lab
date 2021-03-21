const fetch = require("node-fetch")
BASE_URL = "https://api.chucknorris.io/jokes/random?";


module.exports = {
    show,
}

async function show(req, res) {
    let category = req.query.category;
    if(category) {
        let jokes = await fetch(BASE_URL + "category=" + category)
        let newObj = await jokes.json()
        res.render("index", {
            jokes: newObj.value,
            category: category,
        })
    } else {
        let jokes = await fetch(BASE_URL)
        let newObj = await jokes.json()
        res.render("index", {
            jokes: newObj.value,
            category: null,
        })
    }
    
}