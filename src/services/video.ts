class VideoService {

  async getVideos () {

    const videos = [
      {
        "id": 1,
        "name": "My Video Title",
        "date": new Date ().toLocaleString("en-US")
      },
      {
        "id": 2,
        "name": "My Video Title",
        "date": new Date ().toLocaleString("en-US")
      },
      {
        "id": 3,
        "name": "My Video Title",
        "date": new Date ().toLocaleString("en-US")
      },
    ];

    return videos;

  }

  async deleteVideo (id: number) {

    console.log (`Video ${id} Deleted`);

    return {
      status: "success"
    }

  }

}

const videoService = new VideoService ();

export default videoService;