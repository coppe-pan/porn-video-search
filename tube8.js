const Video = require("./base/video");

module.exports = class Tube8 extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "tube8",
      name: "TUBE8",
      urls: {
        logo: "https://cdn1-s-hw-e1.xtube.com/v3_img/logo_xtube.png?cb=346",
        api: "https://api.tube8.com/api.php",
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
  async fetchVideos(params) {
    params = Object.assign({ action: "searchVideos" }, params);
    const response = await this.apiSearchVideos(params);
    return response;
  }

  async fetchVideoById(params) {
    params = this.assignParams("getvideobyid", params)
    const response = await this.apiGetVideoById(params);
    return response;
  }

  async fetchVideoEmbedCode(params) {
    params = this.assignParams("getvideoembedcode", params)
    const response = await this.apiGetVideoEmbedCode(params);
    return response;
  }

  async fetchDeletedVideos(params) {
    params = Object.assign({ action: "getdeletedvideos", output: "json" }, params);
    console.log(params)
    const response = await this.apiGetDeletedVideos(params);
    return response;
  }

  async fetchTagsList(params) {
    params = Object.assign({ action: "gettaglist", output: "json" }, params);
    const response = await this.apiGetTagsList(params);
    const tags = this.dicToArray(response);
    return tags;
  }

  async fetchCategoriesList(params) {
    params = Object.assign({ action: "getcategorieslist", output: "json"}, params)
    const response = await this.apiGetCategoriesList(params)
    return response
  }

  async isVideoActive(params) {
    params = this.assignParams("isvideoactive", params);
    console.log(params)
    const response = await this.apiIsVideoActive(params);
    return response;
  }
  
  assignParams(action, params) {
    params = this.isDictionary(params) ? params : { video_id: params }
    return params = Object.assign({ action: action, output: "json" }, params)
  }
}
