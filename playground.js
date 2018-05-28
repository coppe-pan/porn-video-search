
(async function (){
    // const Redtube = require("./redtube")
    // const Pornhub = require("./pornhub")
    // const Tube8 = require("./tube8")
    // const Txxx = require("./txxx")
    // const Xtube = require("./xtube")
    const Spankwire = require("./spankwire")
    // const Youporn = require("./youporn")
    // const Keezmovies = require("./keezmovies")
    // const functions = require("./functions/index"); 
    
    const spankwire = new Spankwire();
    // const keezmovies = new Keezmovies()
    const keyword = {search: ["japanese", "mature"], output: "json", page: 2}
    // const res = await spankwire.fetchVideos(keyword)
    const res = await spankwire.fetchVideoById(478101)
    // const res = await spankwire.fetchVideoEmbedCode()
    // const res = await spankwire.fetchDeletedVideos({page: 3, output: "xml"})
    // const res = await spankwire.fetchTagsList()
    // const res = await spankwire.fetchCategoriesList()
    // const res = await spankwire.isVideoActive({video_id: 786259})
    // const res = await pornhub.fetchStarList()
    // const res = await pornhub.fetchStarDetailedList()
    console.log(res);
})()
