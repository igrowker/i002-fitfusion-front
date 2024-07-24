import { toast } from "react-toastify";


type toastCreationProps = {
    message : string
    onClose? : () => void 
}

export const createErrorToast = ({ message , onClose } : toastCreationProps) => {
    return () => toast.error( message ,
    {position: "bottom-center",
    onClose: onClose
    });
}
export const createSuccessToast = ({ message , onClose } : toastCreationProps) => {
    return () => toast.success( message ,
    {position: "bottom-center",
    onClose: onClose
    });
}