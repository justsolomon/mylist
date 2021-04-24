export interface InputProps {
  /** Label for the input */
  label: string;

  /** Name of the input */
  name?: string;

  /** Type of the input */
  type?: string;

  /** Id of the input */
  id: string;

  /** Boolean to determine whether to show forgot password link */
  forgotPassword?: boolean;
}
