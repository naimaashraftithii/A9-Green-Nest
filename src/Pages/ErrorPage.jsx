import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorState from "../components/ErrorState";

export default function ErrorPage() {
  const err = useRouteError();
  const msg =
    (err && (err.statusText || err.message)) ||
    "We couldn’t load the page right now. Please try again.";
  return <ErrorState title="Page Error" message={msg} onRetry={() => location.reload()} />;
}
