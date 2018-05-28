const Video = require("./base/video");

module.exports = class SpankWire extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "spankwire",
      name: "spankwire",
      urls: {
        logo: "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397196549/f7b5fa1c57cbf50fa8b28ed21f442283.gif",
        api: "http://www.spankwire.com/api/HubTrafficApiCall",
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

  async fetchVideos(params) {
    params = Object.assign({ data: "searchVideos" }, params, {search: params["search"].join("+")})
    const response = await this.apiSearchVideos(params);
    return response;
  }

  async fetchVideoById(params) {
    params = this.assignParams("getVideoById", params)
    const response = await this.apiGetVideoById(params);
    return response;
  }

  async fetchVideoEmbedCode(params) {
    params = this.assignParams("getVideoEmbedCode", params)
    const response = await this.apiGetVideoEmbedCode(params);
    return response;
  }

  async fetchDeletedVideos(params) {
    params = Object.assign({ data: "getDeletedVideos", output: "json" }, params);
    const response = await this.apiGetDeletedVideos(params);
    return response;
  }

  async fetchTagsList(params) {
    params = Object.assign({ data: "getTagsList", output: "json" }, params);
    const response = await this.apiGetTagsList(params);
    return response;
  }

  async fetchCategoriesList(params) {
    params = Object.assign({ data: "getCategoriesList", output: "json"}, params)
    const response = await this.apiGetCategoriesList(params)
    return response
  }

  async isVideoActive(params) {
    params = this.assignParams("isVideoActive", params);
    const response = await this.apiIsVideoActive(params);
    return response;
  }
  
  async fetchStarList(params) {
    params = Object.assign({ data: "getStarList", output: "json"}, params)
    const response = await this.apiGetStarList(params)
    return response
  }

  assignParams(data, params) {
    params = this.isDictionary(params) ? params : { video_id: params }
    return params = Object.assign({ data: data, output: "json" }, params)
  }
}
