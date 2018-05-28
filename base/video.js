const fetch= require("node-fetch");

const functions = require("../functions");

const { deepExtend, isObject, isDictionary } = functions;

const { NotSupported } = require("./errors")

module.exports = class Video {
  describe() {
    return {
      id: undefined,
      name: undefined,
      rest: false,
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
      let path = paths[i].trim();
      let splitPath = path.split("_")
      let camelcaseMethod =
        "api" + splitPath.map(path => this.capitalize(path)).join("")
      let httpPath = this.rest ? path : ""
      let partial = async params => this[methodName](httpPath, params || {})
      this[camelcaseMethod] = partial
    }
  }

  request(path, params) {
    let url = encodeURI(this.sign(path, params))
    console.log(url)
    return fetch(url, { method: 'GET'})
                    .catch (e => {
                        throw e
                    })
                    .then (response => this.handleRestResponse (response, url, params["output"]))
  }
  
  handleRestResponse(response, url, output, method = 'GET') {  
    return response.text().then(responseBody => { 
      const res = output === "xml" ? responseBody : JSON.parse(responseBody)
       return res
    })
  }

  sign(path, params) {
    let url = this.urls.api
    if(isDictionary(params)) {
      url += path
      let keys = Object.keys(params)
      for(let i = 0; i < keys.length; i++) {
        let key = keys[i]
        url += i === 0 ? `?${key}=${params[key]}` : `&${key}=${params[key]}`
      }
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
