import { useMemo, useState } from "react";

import { type DialogContext } from "~/components/dialogs/types";
import { useFloating, type UseFloatingConfig } from "~/components/floating/hooks";

export interface DialogConfig
  extends Omit<UseFloatingConfig, "triggers" | "autoUpdate" | "placement" | "middleware"> {}

export function useDialog(config: DialogConfig): DialogContext {
  // Used for aria-controls.
  const [titleId, setTitleId] = useState<string | undefined>();
  // Used for aria-controls.
  const [contentId, setContentId] = useState<string | undefined>();

  const floating = useFloating({
    ...config,
    debug: true,
    triggers: ["click", "role", { type: "dismiss", options: { outsidePressEvent: "mousedown" } }],
  });

  return useMemo(
    () => ({
      ...floating,
      titleId,
      contentId,
      setTitleId,
      setContentId,
    }),
    [titleId, contentId, floating],
  );
}
