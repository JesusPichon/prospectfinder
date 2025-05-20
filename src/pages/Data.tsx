import { useState } from "react";
import CustomCard from "../components/customCard/CustomCard";
import { useSearchData } from "../hooks/useSearchData";
import SearchInput from "../components/common/CustomInputs/SearchInput";
import Preloader from "../components/common/Preloader/Preloader";

function Data() {
  const [value, setValue] = useState(0);
  const { arrayContent, arraySearchs, error, loading } = useSearchData({
    agent: value,
  });

  if (error) return <div>error</div>;

  return (
    <>
      <Preloader loading={loading} />
      {!loading && (
        <main className="flex flex-col gap-10">
          <div className="flex gap-10 justify-around">
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
            <div>
              <SearchInput />
            </div>
          </div>
          <div className="flex flex-wrap gap-16 items-center justify-center">
            {arrayContent.map((search, index) => (
              <CustomCard key={index} info={search} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Data;
