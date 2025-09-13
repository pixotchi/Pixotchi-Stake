import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/Alert/Alert';
import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from '@radix-ui/react-icons';

interface AlertComponentProps {
  error: string | null;
  successMessage: string | null;
}

export const AlertComponent: React.FC<AlertComponentProps> = ({
  error,
  successMessage,
}) => {
  if (!error && !successMessage) return null;

  return (
    <div className="mb-4 w-full lg:max-w-[900px] mx-auto">
      {error && (
        <Alert variant="destructive" side="right">
          {/* <ExclamationTriangleIcon className="h-4 w-4" />*/}
          {/*  <AlertTitle>Error</AlertTitle> */}
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {successMessage && (
        <Alert>
          {/* <AlertTitle>
            <CheckCircledIcon className="h-4 w-4" />
            Success
          </AlertTitle> */}
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};
