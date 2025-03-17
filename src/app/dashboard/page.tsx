import VideosDataTable from "@/components/tables/VideosDataTable";
import UploadButton from "@/components/buttons/UploadButton";
import videoService from "@/services/video";

export default async function () {

  const videos = await videoService.getVideos ();

  return (
    <div className="flex flex-col items-center gap-4 mt-10 w-[60%] m-auto">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-bold">Latest Videos</div>
        <UploadButton />
      </div>
      <VideosDataTable data={videos.map ((v) => ({ ...v, date: v.date.toLocaleString("en-us") }))} />
    </div>
  );

}