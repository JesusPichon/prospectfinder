import { useMemo } from "react";

export interface Place {
  title: string;
  rating: string;
  reviewCount: number;
  category: string;
  phoneNumber: string;
}

export interface FilterValues {
  category?: string;
  searchTerm?: string;
  name?: string;
  numReview?: number;
  numStars?: number;
}

export const useFilteredPlaces = (places: Place[], filters: FilterValues) => {
  const filtered = useMemo(() => {
    return places.filter((place) => {
      const { name } = filters;
      const tempName = place.title + place.phoneNumber.replace(/\s+/g, "");

      const titleMatch = name
        ? tempName.toLowerCase().includes(name.toLowerCase())
        : true;

      return titleMatch;
    });
  }, [places, filters]);

  return filtered;
};
