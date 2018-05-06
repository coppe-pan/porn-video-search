const functions = require("../functions");

const { deepExtend, isObject, isDictionary } = functions;

module.exports = class Video {
  describe() {
    return {
      id: undefined,
      name: undefined,
      has: {
        searchVideos: true,
        fetchVideoById: true,
        fetchVideoEmbedCode: true,
        fetchDeletedVideo: true,
        isVideoActive: true,
        fetchCategoriesList: true,
        fetchTagsList: true,
        fetchStarList: false,
        fetchStarDetailedList: false,
        fetchAmateurList: false,
        fetchAmateurDetailedList: false
      },
      urls: {
        logo: undefined,
        api: undefined,
        www: undefined
      }
    };
  }

  constructor() {
    Object.assign(this, functions, {
      encode: string => string,
      decode: string => string
    });

    const config = this.describe();
    for (const [property, value] of Object.entries(config)) {
      this[property] = deepExtend(this[property], value)
    }
    this.defineRestApi(this.api, "request")
  }

  defineRestApi(paths, methodName) {
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i].trim()
      let splitPath = path.split("_")
      let camelcaseMethod =this.uncapitalize(splitPath.map(path => this.capitalize(path)).join(""))
      let partial = async params => this[methodName](path, params || {})
      this[camelcaseMethod] = partial
    }
  }
};
