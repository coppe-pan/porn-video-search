const Video = require("./base/video");

class SpankWrite extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "spankwrite",
      name: "spankwrite",
      urls: {
        logo: "https://thumbs-cdn.redtube.com/www-static/cdn_files/redtube/images/pc/logo/redtube_logo.png?v=f8b34a69302af5caf8e004aa03ddc83fd0641215",
        api: "http://www.spankwire.com/api/HubTrafficApiCall?data=",
        www: "https://www.spankwire.com/"
      },
      api: [
          "searchVideos",
          "getVideoById",
          "getVideoEmbedCode",
          "isVideoActive",
          "getDeletedVideos",
          "getCategoriesList",
          "getTagsList",
          "getStarList"
      ],
      parameters: {
        search: [
          "category",
          "page",
          "search",
          "stars",
          "tags",
          "period",
          "thumbsize",
          "segment",
          "output",
          "status",
          "count",
          "ordering"
        ],
        video_by_id: ["video_id", "thumbsize", "output"],
        video_embed_code: ["video_id", "output"],
        deleted_video: ["page", "output"],
        is_video_active: ["video_id", "output"],
        tags: ["segment", "output"],
        categories: ["segment", "output"]
      }
    });
  }
}
