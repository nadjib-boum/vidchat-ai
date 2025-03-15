import VideosDataTable from "@/components/VideosDataTable";
import videoService from "@/services/video";

export default async function () {

  const videos = await videoService.getVideos ();

  return (
    <div className="flex flex-col items-center gap-4 mt-10 w-1/2 m-auto">
      <div className="text-2xl font-bold">Latest Videos</div>
      <VideosDataTable data={videos} />
    </div>
  );

}