

type VideoPreviewProps = {
  url: string;
}


const VideoPreview = ({ url }: VideoPreviewProps) => {

  return (
    <div className="flex flex-col justify-center items-center w-[50%]">
      <video width="500" controls>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  )

}

export default VideoPreview;