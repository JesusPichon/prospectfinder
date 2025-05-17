import { Button, IconButton } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
} from "@mui/icons-material";
import type { FC } from "react";

interface CustomPaginationProps {
  page: number;
  numPages: number;
  handlePage: (newPage: number) => void;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  page,
  numPages,
  handlePage,
}) => {
  if (numPages <= 1) {
    return (
      <div className="flex justify-center items-center gap-2 py-4">
        <Button variant="contained" disabled>
          1
        </Button>
      </div>
    );
  }

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (numPages <= 5) {
      for (let i = 1; i <= numPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("...");
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(numPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < numPages - 2) {
        pages.push("...");
      }

      pages.push(numPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  const goBackFive = () => handlePage(Math.max(1, page - 5));
  const goForwardFive = () => handlePage(Math.min(numPages, page + 5));

  return (
    <div className="flex justify-center items-center gap-2 py-4">
      {page > 5 && (
        <IconButton onClick={goBackFive}>
          <FirstPage fontSize="small" />
        </IconButton>
      )}

      {page > 1 && (
        <IconButton onClick={() => handlePage(page - 1)}>
          <ChevronLeft />
        </IconButton>
      )}

      {pages.map((p, idx) =>
        p === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="px-2 text-gray-500 select-none"
          >
            ...
          </span>
        ) : (
          <Button
            key={`page-${p}`}
            variant={p === page ? "contained" : "outlined"}
            onClick={() => handlePage(p)}
          >
            {p}
          </Button>
        )
      )}

      {page < numPages && (
        <IconButton onClick={() => handlePage(page + 1)}>
          <ChevronRight />
        </IconButton>
      )}

      {page + 5 <= numPages && (
        <IconButton onClick={goForwardFive}>
          <LastPage fontSize="small" />
        </IconButton>
      )}
    </div>
  );
};

export default CustomPagination;
