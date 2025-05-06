import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const ResumeCorrections = () => {
  return (
    <Alert variant="destructive" className="mb-6 max-w-3xl mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Resume Image Correction Needed</AlertTitle>
      <AlertDescription>
        <p className="mt-2">
          The resume image contains two spelling errors in the Achievements section:
        </p>
        <ul className="list-disc list-inside mt-2 mb-2">
          <li>Change "Secured 1st <strong>price</strong>" to "Secured 1st <strong>prize</strong>" (2 occurrences)</li>
        </ul>
        <p>
          Please download the current resume image, make these corrections, and upload the corrected version to replace
          the file at <code>client/src/assets/resume.jpg</code>.
        </p>
      </AlertDescription>
    </Alert>
  );
};