"use client";

import React from "react";
import useSWR from "swr";
import Select from "react-select";
import { useTheme } from "next-themes";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModal } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="mt-2">
      <Select
        className="mt-2 text-black"
        options={models}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => `bg-[#434654] border-[#434654 text-black`,
        }}
        onChange={(e: any) => setModal(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
