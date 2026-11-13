import { Button, PageHeader } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function NotFound() {
  return (
    <>
      <Meta title="Not found" description="This page does not exist." />
      <div className="min-h-[80svh]">
        <PageHeader eyebrow="404" title="Lost in the build." />
        <div className="container-site mt-10">
          <Button to="/">Back home</Button>
        </div>
      </div>
    </>
  );
}
