

type VideoPreviewProps = {
  url: string;
}


const VideoPreview = ({ url }: VideoPreviewProps) => {

  return (
    <video width="500" controls>
      <source src={url} type="video/mp4" />
    </video>
  )

}

export default VideoPreview;