
(async function (){
    const Redtube = require("./redtube")
    const Pornhub = require("./pornhub")
    const tube8 = require("./tube8")
    const Txxx = require("./txxx")
    const Xtube = require("./xtube")
    const Spankwire = require("./spankwire")
    const Youporn = require("./youporn")
    const Keezmovies = require("./keezmovies")
    const functions = require("./functions/index"); 
    
    const redtube = new Redtube()
    const keyword = {search: ["japanese", "mature"]}
    const res = await redtube.fetchVideos(keyword)
    // const res = await pornhub.fetchVideoById("ph5a87122fc04f7")
    // const res = await pornhub.fetchVideoEmbedCode("ph5a87122fc04f7")
    // const res = await pornhub.fetchDeletedVideos()
    // const res = await pornhub.fetchTagsList({list: "z"})
    // const res = await pornhub.fetchStarList()
    // const res = await pornhub.fetchStarDetailedList()

    console.log(res);
})()
