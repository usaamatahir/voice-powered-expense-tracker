export type StateProps = {
  id?: string;
  type?: string;
  category?: string;
  amount?: number;
  date?: any;
};

export type SnackProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
