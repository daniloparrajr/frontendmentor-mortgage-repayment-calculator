import Input from '@/components/Input';

export default function NumberInput({label, prefix = '', suffix = '', attributes }) {
  const inputAttributes = {'type': 'number', ...attributes};

  return (
    <Input
      label={label}
      prefix={prefix}
      suffix={suffix}
      attributes={inputAttributes}
    />
  )
}