import { Suspense } from "react";
import ErrorPage from "@/components/ErrorPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPage />
    </Suspense>
  );
}
