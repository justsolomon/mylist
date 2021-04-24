export interface FormRequestProps {
  /** Boolean showing the loading state of the request */
  loading: boolean;

  /** Boolean showing whether the request succeeded */
  success: boolean;

  /** Error message gotten if the request fails */
  error: string;
}
