"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";

const SearchTracks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasFocusInput, setHasFocusInput] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hasFocusInput) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push("/search");
      }
    }
  }, [searchQuery]);

  return (
    <>
      <DebounceInput
        type="text"
        placeholder="Что хочешь включить?"
        value={searchQuery}
        minLength={2}
        debounceTimeout={300}
        onChange={(e) => setSearchQuery(e.target.value)}
        searchQuery={searchQuery}
        onFocus={() => {
          setHasFocusInput(true);
          router.push("/search");
        }}
      />
    </>
  );
};

export default SearchTracks;
