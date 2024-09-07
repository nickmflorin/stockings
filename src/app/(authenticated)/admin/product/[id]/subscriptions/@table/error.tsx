"use client";
import { ErrorView } from "~/components/errors/ErrorView";

export default function Error() {
  return (
    <ErrorView>There was an error loading the subscriptions. Do not worry, we are on it.</ErrorView>
  );
}