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
        api: "https://www.pornhub.com/webmasters/",
        www: "https://jp.pornhub.com"
      },
      api: [
        "search",
        "video_by_id",
        "video_embed_code",
        "deleted_videos",
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

  async fetchVideos(params) {
    const response = await this.apiSearch(params)
    return response
  }

  async fetchVideoById(id)  {
    const response  = await this.apiVideoById(id)
    return response
  }

  async fetchVideoEmbedCode(id) {
    const response = await this.apiVideoEmbedCode(id)
    return response 
  }  

  async fetchDeletedVideos(params) {
    const response = await this.apiDeletedVideos(params)
    return response
  }

  async fetchTagsList(params) {
    const response = await this.apiTags(params)
    const tags = []
    Object.values(response.tags).forEach(tag => {
        tags.concat(tag.tag.tag_name)
    })
    return tags
  }

  async fetchStarList() {
    const response = await this.apiStars()
    return response
  }

  async fetchStarDetailedList() {
    const response = await this.apiStarsDetailed() 
    return response
  }

  async isVideoActive() {
    const response = await this.apiIsVideoActive()
    return response
  }
}
