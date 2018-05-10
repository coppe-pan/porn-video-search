const Video = require("./base/video");

class SpankWire extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "spankwire",
      name: "spankwire",
      urls: {
        logo: "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397196549/f7b5fa1c57cbf50fa8b28ed21f442283.gif",
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
