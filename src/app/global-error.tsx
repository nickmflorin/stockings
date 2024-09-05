"use client"; // Error boundaries must be Client Components
import { ErrorView } from "~/components/errors/ErrorView";
import "~/styles/globals/index.scss"; // Import this last.

import { HtmlRoot } from "./HtmlRoot";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <HtmlRoot>
      <ErrorView>There was an error.</ErrorView>
    </HtmlRoot>
  );
}
