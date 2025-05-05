export interface HeaderInputType {
    placeholder?: string;
    type?: string;
    extraStyle?: string; 
    className?: string; 
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    label?: string;
  }
  