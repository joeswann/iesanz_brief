import { createFormHook } from "@tanstack/react-form";

import { fieldContext, formContext } from "./demo.form-context";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    // TextField,
    // Select,
    // TextArea,
  },
  formComponents: {
    // SubscribeButton,
  },
  fieldContext,
  formContext,
});
