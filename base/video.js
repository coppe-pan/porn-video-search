module.exports = class Video {
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
    };
  }
};

