const Video = require("./base/video");

class Pornhub extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "pornhub",
      name: "Pornhub",
      urls: {
        logo:
          "https://ci.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2018050410",
        api: "https://www.pornhub.com/webmasters",
        www: "https://jp.pornhub.com"
      },
      api: [
          "search",
          "video_by_id",
          "video_embed_code",
          "deleted_video",
          "is_video_active",
          "categories",
          "tags"
        ]
    });
  }
};
