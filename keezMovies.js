const Video = require("./base/video");

module.exports = class KeesMovies extends Video {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "keezmovies",
      name: "KeezMoovies",
      rest: true,
      urls: {
        logo:
          "https://tubeace.com/wp-content/themes/tubeace2sales/images/keezmovies-logo.png",
        api: "http://www.keezmovies.com/wapi/",
        www: "https://www.keezmovies.com/"
      },
      api: [
        "searchVideos",
        "getVideoById",
        "getVideoEmbedCode",
        "isVideoActive",
        "getDeletedVideos",
        "getCategoriesList",
        "getTagsList"
      ],
      parameters: {
        search: [
          "output",
          "category",
          "page",
          "star",
          "tags",
          "query",
          "ordering",
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
    const response = await this.apiSearchVideos(params);
    return response;
  }

  async fetchVideoById(params) {
    const response = await this.apiGetVideoById(params);
    return response;
  }

  async fetchVideoEmbedCode(params) {
    const response = await this.apiGetVideoEmbedCode(params);
    return response;
  }

  async fetchDeletedVideos(params) {
    const response = await this.apiGetDeletedVideos(params);
    return response;
  }

  async fetchTagsList(params) {
    const response = await this.apiGetTagsList(params);
    const tags = this.dicToArray(response);
    return tags;
  }

  async fetchCategoriesList(params) {
    const response = await this.apiGetCategoriesList(params);
    return response;
  }

  async isVideoActive(params) {
    const response = await this.apiIsVideoActive(params);
    return response;
  }
};
