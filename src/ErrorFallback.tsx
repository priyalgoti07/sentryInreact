import React from 'react';
import * as Sentry from "@sentry/react";

type ErrorFallbackProps = {
  error: Error;
  resetError: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const handleReportIssue = () => {
    Sentry.captureException(error); // Manually capture the error
    alert("The error has been reported. We'll look into it!");
  };

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong. 😢</h1>
      <p>{error.message}</p>
      <div className="button-group">
        <button onClick={resetError}>🔄 Retry</button>
        <button onClick={handleReportIssue}>📤 Report Issue</button>
      </div>
    </div>
  );
};

export default ErrorFallback;
