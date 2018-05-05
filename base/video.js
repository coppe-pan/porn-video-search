const functions = require("../functions");

const { deepExtend } = functions; 

class Video {
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
    }
  }

  constructor() {
    const config = this.describe();
    for (const [property, value] of Object.entries (config)){
        this[property] = deepExtend (this[property], value);
    }
  }


};
