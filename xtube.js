const Video = require("./base/video");

module.exports = class Xtube extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "xtube",
      name: "xtube",
      urls: {
        logo: "https://cdn1-s-hw-e1.xtube.com/v3_img/logo_xtube.png?cb=346",
        api: "https://www.xtube.com/webmaster/api.php",
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
  async fetchVideos(params) {
    params = Object.assign({ action: "getVideosBySearchParams" }, params);
    const response = await this.apiGetVideosBySearchParams(params);
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
    params = Object.assign({ action: "getDeletedVideos", output: "json" }, params);
    const response = await this.apiGetDeletedVideos(params);
    return response;
  }

  async fetchTagsList(params) {
    params = Object.assign({ action: "getTagList", output: "json" }, params);
    const response = await this.apiGetTagList(params);
    return response;
  }

  async fetchCategoriesList(params) {
    params = Object.assign({ action: "getCategoryList", output: "json"}, params)
    const response = await this.apiGetCategoryList(params)
    return response
  }

  async isVideoActive(params) {
    params = this.assignParams("isVideoActive", params);
    const response = await this.apiIsVideoActive(params);
    return response;
  }
  
  async fetchAmateurList() {
    const response = await this.apiGetAmateurList()
    const stars = this.dicToArray(response.stars)
    return stars
  }

  async fetchAmateurDetailedList() {
    const response = await this.apiGetAmateurListDetailed() 
    return response
  }

  assignParams(action, params) {
    params = this.isDictionary(params) ? params : { video_id: params }
    return params = Object.assign({ action: action, output: "json" }, params)
  }
}
