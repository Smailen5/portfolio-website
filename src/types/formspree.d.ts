declare module "@formspree/react" {
  export interface FormspreeState {
    submitting: boolean;
    succeeded: boolean;
    errors: any[];
  }

  export function useForm(
    formKey: string,
  ): [FormspreeState, (data: any) => Promise<any>];
}
