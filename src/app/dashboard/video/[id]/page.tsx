import Chat from "@/components/Chat";
import VideoPreview from "@/components/VideoPreview";
import videoService from "@/services/video";

export default async function Page({ params }: {params: Promise<{ id: string }> }) {

  const { id } = await params;

  const video = await videoService.getVideo (+id);
  
  return (
    <div className="flex justify-between items-stretch overflow-auto flex-1 w-[80%] h-full p-5">
      <VideoPreview url={video.url} />
      <Chat />
    </div>
  );

}