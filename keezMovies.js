const Video = require("./base/video");

module.exports = class KeesMovies extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "keezmovies",
      name: "KeezMoovies",
      urls: {
        logo: "https://tubeace.com/wp-content/themes/tubeace2sales/images/keezmovies-logo.png",      
        api: "http://www.keezmovies.com/wapi/",
        www: "https://www.keezmovies.com/"
      },
      api: {
        Videos: [
          "searchVideos",
          "getVideoById",
          "getVideoEmbedCode",
          "isVideoActive",
          "getDeletedVideos"
        ],
        Categories: [
          "getCategoriesList"
        ],
        Tags: [
          "getTagList"  
        ]
      },
      parameters: {
        search: [
          "output",
          "category",
          "page",
          "search",
          "star",
          "tags",
          "query",
          "ordering",
          "thumbsize"
        ],
        video_by_id: ["id", "thumbsize"],
        video_embed_code: ["id"],
        deleted_video: ["page"],
        is_video_active: ["id"],
        tags: ["list"]
      }
    });
  }
}