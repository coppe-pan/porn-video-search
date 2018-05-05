module.exports = class Video {
    describe() {
        return {
            'id': undefined,
            'name': undefined,
            'has': {
                'searchVideos': true,
                
            }
        }
    }
}

const video = new Video ();

console.log(video);