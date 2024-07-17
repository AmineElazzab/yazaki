import { useCopyToClipboard as useCopy } from "react-use";
import { useNotification } from "../components/base/notification/useNotification.tsx";
import { useEffect } from "react";

type CopyToClipboardOptions = {
  showValue?: boolean;
};

export function useCopyToClipboard(props: CopyToClipboardOptions) {
  const [state, copyToClipboard] = useCopy();
  const { success } = useNotification();
  useEffect(() => {
    if (state.value && !state.error) {
      success("Text copied", props?.showValue ? state.value : "");
    }
  }, [state.value]);
  return { state, copyToClipboard };
}
