const Video = require("./base/video");

module.exports = class Txxx extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "txxx",
      name: "Txxx",
      has: {
        fetchStarList: true
      },
      urls: {
        logo: "https://www.txxx.com/images/desktop-logo.png",
        api: "https://txxx.com/api/",
        www: "https://www.txxx.com/"
      },
      api: [
          "search",
          "video_by_id",
          "video_embed_code",
          "deleted_videos",
          "is_video_active",
          "categories",
          "tags",
          "stars"
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
        video_by_id: ["video_id", "thumbsize"],
        video_embed_code: ["video_id"],
        deleted_video: ["page"],
        is_video_active: ["video_id"],
        categories: [],
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
