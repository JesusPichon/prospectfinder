import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchBarProps {
  value: string;
  handleValue: (value: string) => void;
  handleSearch: (value: string) => void;
  isDisable?: boolean;
  label?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleValue,
  handleSearch,
  isDisable = false,
  label = "Buscar",
}) => {
  const handleClear = () => {
    handleValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValue(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch(value);
  };

  return (
    <div className="flex flex-column flex-1">
      <TextField
        fullWidth
        variant="outlined"
        value={value}
        onChange={handleChange}
        disabled={isDisable}
        label={label}
        size="medium"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <div className="flex justify-content-center items-center bg-blue-400 pr-2 pl-2">
        <IconButton onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
