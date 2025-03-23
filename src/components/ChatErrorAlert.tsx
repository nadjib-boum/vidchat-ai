import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";



const ChatErrorAlert = () => {

  return (
    <Alert variant={"destructive"}>
      <CircleAlert className="h-4 w-4" />
      <AlertTitle>Chat Error</AlertTitle>
      <AlertDescription>
        Something went wrong when streaming the answer
      </AlertDescription>
    </Alert>
  );

}

export default ChatErrorAlert;