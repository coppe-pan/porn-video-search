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

  async isVideoActive() {
    const response = await this.apiIsVideoActive()
    return response
  }
}
