const functions = require("../functions");

const { deepExtend } = functions; 

class Video {
  describe() {
    return {
      id: undefined,
      name: undefined,
      has: {
        searchVideos: true,
        getVideoById: true,
        getVideoEmbedCode: true,
        getDeletedVideo: true,
        isVideoActive: true,
        getCategoriesList: true,
        getTagsList: true,
        getStarList: false,
        getStarDetailedList: false,
        getAmateurList: false,
        getAmateurDetailedList: false
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

const instance = new Video();
