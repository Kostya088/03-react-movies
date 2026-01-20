import toast from "react-hot-toast";

export default function notify(message: string) {
  toast.error(message, {
    duration: 1500,
  });
}
