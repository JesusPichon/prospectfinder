import { useState } from "react";
import CustomCard from "../components/customCard/CustomCard";
import { useSearchData } from "../hooks/useSearchData";
import SearchInput from "../components/common/CustomInputs/SearchInput";
import Preloader from "../components/common/Preloader/Preloader";
import { IconButton } from "@mui/material";
import { FilterList } from "@mui/icons-material";
import CustomDialog from "../components/common/CustomDialog/CustomDialog";
import FilterFieldsDahBoard from "../components/Filter/FilterFieldsDashBoard";
import { useFilteredPlaces } from "../hooks/useFilteredPlaces";

function Data() {
  const [value, setValue] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    numReview: 0,
    numStars: 0,
  });
  const { arrayContent, arraySearchs, error, loading } = useSearchData({
    agent: value,
  });
  const filteredPlaces = useFilteredPlaces(arrayContent, filters);

  if (error) return <div>error</div>;

  return (
    <>
      <Preloader loading={loading} />
      {!loading && (
        <main className="flex flex-col gap-10">
          <div className="flex flex-col justify-around position-fixed gap-10">
            <select
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="border rounded p-2"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {arraySearchs.map((opt, idx) => (
                <option key={idx} value={idx}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="flex gap-25">
              <SearchInput />
              <IconButton onClick={() => setDialog(true)}>
                <FilterList />
              </IconButton>
            </div>

            <CustomDialog
              open={dialog}
              onClose={() => setDialog(false)}
              applyText="Filtrar"
              cancelText="Cancelar"
              title="Filtrar"
            >
              <FilterFieldsDahBoard filters={filters} onChange={setFilters} />
            </CustomDialog>
          </div>
          <div className="flex flex-wrap gap-16 items-center justify-center">
            {filteredPlaces.map((search, index) => (
              <CustomCard key={index} info={search} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Data;
