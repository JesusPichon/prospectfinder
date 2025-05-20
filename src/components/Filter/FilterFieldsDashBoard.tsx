import { TextField, type SelectChangeEvent } from "@mui/material";

export interface FilterValues {
  name?: string;
  numReview?: number;
  numStars?: number;
}

interface FilterFieldsProps {
  filters: FilterValues;
  onChange: (filters: FilterValues) => void;
}

const FilterFieldsDahBoard: React.FC<FilterFieldsProps> = ({
  filters,
  onChange,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-col gap-4 pt-2">
      {/* Name */}
      <TextField
        fullWidth
        label="Nombre o  numero de telefono"
        name="name"
        value={filters.name || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterFieldsDahBoard;
