import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

export interface FilterValues {
  category?: string;
  searchTerm?: string;
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
      <FormControl fullWidth>
        <InputLabel id="category-label">Categoría</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={filters.category || ""}
          onChange={handleChange}
          label="Categoría"
        >
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Término de búsqueda"
        name="searchTerm"
        value={filters.searchTerm || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterFieldsDahBoard;
