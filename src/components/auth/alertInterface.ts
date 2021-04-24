export interface AlertProps {
  /** Message to be shown in Alert component */
  message: string;

  /** Status of Alert component (Error or Success) */
  status: "info" | "warning" | "success" | "error";
}
