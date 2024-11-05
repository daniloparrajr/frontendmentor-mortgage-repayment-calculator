import Input from '@/components/Input';

export default function NumberInput({label, id, name, value, onChange, required, pattern, prefix = '', suffix = '' }) {
  return (
    <Input
    id={id}
    label={label}
    value={value}
    name={name}
    type="number"
    onChange={onChange}
    required={required}
    prefix={prefix}
    suffix={suffix}
    pattern={pattern}
    />
  )
}