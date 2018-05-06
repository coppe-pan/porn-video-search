const Video = require("./base/video");

class Pornhub extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "pornhub",
      name: "Pornhub",
      has: {
        fetchStarList: true,
        fetchStarDetailedList: true
      },
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
        "tags",
        "stars",
        "stars_detailed"
      ],
      parameters: {
        search: [
          "category",
          "page",
          "search",
          "stars",
          "tags",
          "ordering",
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

  fetchVideos(params = {}) {
    if (params !== null) Object.entries(params);
  }
}
