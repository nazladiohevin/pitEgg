interface Value {
  id: number;
  name: string;
}

interface SelectProps {
  label: string;
  values: Value[];
  onChangeValue: any;
  defaultValue?: string;
}

export default function Select({
  label,
  defaultValue,
  onChangeValue,
  values,
}: SelectProps) {
  return (
    <div className="flex justify-start flex-col gap-y-2">
      <label htmlFor="">{label}</label>
      <select
        className="select select-bordered select-sm w-full max-w-35"
        onChange={onChangeValue}
      >
        {defaultValue && (
          <option disabled selected>
            {defaultValue}
          </option>
        )}
        {values.map((value, index) => {
          return (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
