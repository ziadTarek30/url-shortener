const Url = require("../models/Url");

const mainController = async (req, res) => {
    // await Url.collection.drop();
    // await Url.syncIndexes();
    // res.send("yes");
    // res.set("Cache-Control", "no-store");
    const url = decodeURI(req.query.url);
    const urls = await Url.find();
    // res.render("home", {urls});
    if (URL.canParse(url) || req.query.url === undefined) {
        if (req.query.url !== undefined)
            await Url.create({longUrl: url});
        const urls = await Url.find();
        res.render("home", {urls, correctUrl: true});
    } else
        res.render("home", {urls, correctUrl: false});
}

const useShortUrl = async (req, res) => {
    const url = await Url.findOne({shortUrl: req.params.shortUrl});
    if (url) {
        await Url.findOneAndUpdate({shortUrl: url.shortUrl}, {count: url.count += 1})
        res.redirect(url.longUrl);
    }
    else
        res.json({msg: "incorrect short URL"});
    
}

const deleteUrl = async (req, res) => {
    await Url.findOneAndDelete({shortUrl: req.params.shortUrl})
    res.redirect("/");
}


module.exports = {mainController, useShortUrl, deleteUrl};