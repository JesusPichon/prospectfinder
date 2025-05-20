import { useEffect, useState } from "react";
import { configureKEY, previousSearchs, searchByID } from "phantom/utils";

export function useSearchData({ agent }: { agent: number }) {
  const [arraySearchs, setArraySearchs] = useState<string[]>([]);
  const [arrayContent, setArrayContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    configureKEY(import.meta.env.VITE_API_KEY);

    const fetchAll = async () => {
      try {
        const data = await previousSearchs();
        console.log({ data });
        setArraySearchs(data);

        if (data.length > 0) {
          const result = await searchByID(data[agent]);
          console.log({ result });
          setArrayContent(result);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchAll();
  }, [agent]);

  return {
    arraySearchs,
    arrayContent,
    loading,
    error,
  };
}
