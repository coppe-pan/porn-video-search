const Video = require("./base/video");

module.exports = class Redtube extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "redtube",
      name: "redtube",
      urls: {
        logo:
          "https://thumbs-cdn.redtube.com/www-static/cdn_files/redtube/images/pc/logo/redtube_logo.png?v=f8b34a69302af5caf8e004aa03ddc83fd0641215",
        api: "https://api.redtube.com/",
        www: "https://www.redtube.com/"
      },
      api: [
        "searchVideos",
        "getVideoById",
        "getVideoEmbedCode",
        "isVideoActive",
        "getDeletedVideos",
        "getCategoriesList",
        "getTagList"
      ],
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
    params = Object.assign({ data: "redtube.Videos.searchVideos" }, params);
    const response = await this.apiSearchVideos(params);
    return response;
  }

  async fetchVideoById(id) {
    const params = { data: "redtube.Videos.getVideoById", video_id: id };
    const response = await this.apiGetVideoById(params);
    return response;
  }

  async fetchVideoEmbedCode(id) {
    const params = { data: "redtube.Videos.getVideoEmbedCode", video_id: id };
    const response = await this.apiGetVideoEmbedCode(params);
    return response;
  }

  async fetchDeletedVideos(params) {
    params = Object.assign({ data: "redtube.Videos.getDeletedVideos" }, params);
    const response = await this.apiGetDeletedVideos(params);
    return response;
  }

  async fetchTagsList(params) {
    params = Object.assign({ data: "redtube.Tags.getTagList" }, params);
    const response = await this.apiGetTagList(params);
    const tags = this.dicToArray(response);
    return tags;
  }

  async isVideoActive(id) {
    const params = { data: "redtube.Videos.isVideoActive", video_id: id };
    const response = await this.apiIsVideoActive(params);
    return response;
  }
};
