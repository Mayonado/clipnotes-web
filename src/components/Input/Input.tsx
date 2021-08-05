import { Input, Form } from 'antd';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  rules: object;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  rules,
  ...props
}) => {
  return (
    // <FormControl isInvalid={!!error}>
    //     <FormLabel htmlFor={field.name}>{label}</FormLabel>
    //     <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
    //     { error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    // </FormControl>
    <Form.Item name={props.name} label={label} rules={[rules]}>
      <Input
        // prefix={<LockOutlined className="site-form-item-icon" />}
        {...props}
        placeholder={label}
        size="large"
      />
    </Form.Item>
  );
};
export default InputField;
