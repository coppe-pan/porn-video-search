const Video = require("./base/video");

module.exports = class Tube8 extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "tube8",
      name: "TUBE8",
      urls: {
        logo: "https://cdn1-s-hw-e1.xtube.com/v3_img/logo_xtube.png?cb=346",
        api: "https://api.tube8.com/api.php?action=",
        www: "https://www.tube8.com"
      },
      api: [
          "searchVideos",
          "getVideoById",
          "getVideoEmbedCode",
          "isVideoActive",
          "getDeletedVideos",
          "getTagsList",
          "getCategoriesList"
      ],
      parameters: {
        searchVideos: [
          "search",
          "thumbsize",
          "page",
          "ordering",
          "output",
          "orientation"
        ],
        getVideoById: ["video_id", "output", "thumbsize"],
        getVideoEmbedCode: ["video_id", "output"],
        isVideoActive: ["video_id", "output"],
        getDeletedVideos: ["page", "output"],
        getTagsList: ["output"],
        getCategoriesList: ["output"],
      }
    });
  }
}
