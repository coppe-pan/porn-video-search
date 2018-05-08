const fetch= require("node-fetch");

const functions = require("../functions");

const { deepExtend, isObject, isDictionary } = functions;

const { NotSupported } = require("./errors")

module.exports = class Video {
  describe() {
    return {
      id: undefined,
      name: undefined,
      has: {
        fetchVideos: true,
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
      let camelcaseMethod =
        "api" + splitPath.map(path => this.capitalize(path)).join("")
      let partial = async params => this[methodName](path, params || {})
      this[camelcaseMethod] = partial
    }
  }

  request(path, params) {
    let url = this.sign(path, params)
    return fetch(url, { method: 'GET'})
                    .catch (e => {
                        throw e
                    })
                    .then (response => this.handleRestResponse (response, url))
  }
  
  handleRestResponse(response, url, method = 'GET') {  
    return response.text().then(responseBody => {
       const json = JSON.parse(responseBody)
       return json
    })
  }

  sign(path, params) {
    let url = this.urls.api
    if(isDictionary(params)) {
       url += path
       Object.keys(params).forEach(key => {
        const encodedParams = encodeURIComponent(params[key]); 
        url +=  `?${key}=${encodedParams}`
       });
    } else {
        url += `${path}?id=${params}`
    }
    return url
  }

  fetchStarList () {
    throw new NotSupported (this.id + ' fetchAmateurList not supported yet');
  }

  fetchStarDetailedList () {
    throw new NotSupported (this.id + ' fetchAmateurDetailedList not supported yet');
  }

  fetchAmateurList () {
    throw new NotSupported (this.id + ' fetchAmateurList not supported yet');
  }

  fetchAmateurDetailedList () {
    throw new NotSupported (this.id + ' fetchAmateurDetailedList not supported yet');
  }
};
