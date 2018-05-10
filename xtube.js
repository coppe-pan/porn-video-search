const Video = require("./base/video");

class Xtube extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "xtube",
      name: "xtube",
      urls: {
        logo: "https://cdn1-s-hw-e1.xtube.com/v3_img/logo_xtube.png?cb=346",
        api: "https://www.xtube.com/webmaster/api.php?action=",
        www: "https://www.xtube.com/"
      },
      has: {
        fetchAmateurList: true,
        fetchAmateurListDetailed: true
      },
      api: [
          "getVideosBySearchParams",
          "getVideoById",
          "getVideoEmbedCode",
          "isVideoActive",
          "getDeletedVideos",
          "getTagList",
          "getCategoryList",
          "getAmateurList",
          "getAmateurListDetailed"
      ],
      parameters: {
        getVideosBySearchParams: [
          "category",
          "search",
          "tags",
          "period",
          "user",
          "ordering"
        ],
        getVideoById: ["video_id"],
        getVideoEmbedCode: ["video_id"],
        deleted_video: [],
        isVideoActive: ["video_id"],
        getTagList: ["segment", "output"],
        getCategoryList: ["segment",],
        getAmateurList: [],
        getAmateurListDetailed: []
      }
    });
  }
}
