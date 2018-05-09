const Video = require("./base/video");

class Redtube extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "redtube",
      name: "redtube",
      urls: {
        logo:
          "https://thumbs-cdn.redtube.com/www-static/cdn_files/redtube/images/pc/logo/redtube_logo.png?v=f8b34a69302af5caf8e004aa03ddc83fd0641215",
        api: "https://api.redtube.com/?data=redtube",
        www: "https://www.redtube.com/"
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
          "category",
          "page",
          "search",
          "stars",
          "tags",
          "period",
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
