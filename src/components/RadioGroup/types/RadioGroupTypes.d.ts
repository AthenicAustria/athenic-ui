export type RadioGroupOption = {
  value: string;
  label: string;
  id: string;
};

export type RadioGroupOptions = {
  options: RadioGroupOption[];
  form?: string;
  name: string;
};
