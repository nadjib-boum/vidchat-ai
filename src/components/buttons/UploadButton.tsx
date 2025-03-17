"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Dropzone from 'react-dropzone'
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProgressCircle from "@/components/ProgressCircle";
import { useUploadThing } from "@/hooks/use-upload-thing";
import { addVideo } from "@/actions";

const UploadDialog = () => {

  const [ open, setOpen ] = useState<boolean>();
  const [ isLoading, setIsloading ] = useState<boolean>(false);
  const { startUpload } = useUploadThing ("imageUploader");
  const router = useRouter ();
  const session = useSession ();

  const handleDrop = async (files: File[]) => {

    try {

      setIsloading (true);

      if (!files || files.length < 1) {
        throw new Error ("UPLOAD_ERROR");
      }

      const file = files[0];

      const upload = await startUpload ([file]);

      if (!upload || upload.length < 1) {
        throw new Error ("UPLOAD_ERROR");
      }

      const userId = session.data?.user.id;  

      if (!userId) {
        throw new Error ("AUTH_ERROR");
      }

      const res = await addVideo ({
        name: file.name,
        url: upload[0].ufsUrl,
        userId: +userId,
      });

      if (res.status != "success" || !res.data) {
        throw new Error ("VIDEO_ADD_ERROR");
      }

      router.push (`/dashboard/video/${res.data.video.id}`);

    }
    catch (err: any) {

      toast.error("Something Went Wrong", {
        description: "Video Upload Failed",
      })

    }

  }

  return (
    <Dialog open={open} defaultOpen={false} onOpenChange={(openState) => setOpen (openState)}>
      <DialogTrigger asChild>
        <Button>Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogTitle className="hidden"></DialogTitle>
        <Dropzone multiple={false} onDrop={handleDrop} >
          {
            ({ getInputProps, getRootProps }) => (
              <div className="h-[250px] flex justify-center items-center cursor-pointer" {...getRootProps ()}>
                {
                  isLoading ?
                    <ProgressCircle percentage={95} />
                  :
                    <>
                      <div className="flex flex-col items-center gap-3">
                        <Upload size={28} />
                        <span className="text-sm">Drop Your Video Here</span>
                      </div>
                      <input
                        type="file"
                        id="dropzone-file"
                        className="hidden"
                        {...getInputProps()}
                      />
                    </>
                }
              </div>
            )
          }
        </Dropzone>
      </DialogContent>
    </Dialog>
  );

}

export default UploadDialog;