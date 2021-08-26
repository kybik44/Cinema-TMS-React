import * as React from "react";
import { useState } from "react";
import { ISortSettings } from "../../../types";
import "./index.css";

interface ISortButton {
  onClickFilterButton: any;
  sortSettings: ISortSettings;
}
export const SortButton = ({
  onClickFilterButton,
  sortSettings,
}: ISortButton) => {
  const handlerFilterButton = (field: string, isClicked: boolean) => {
    onClickFilterButton(field, !isClicked);
  };
  return (
    <button
      className={sortSettings.active ? "sort-button" : "sort-button active"}
      onClick={() => {
        handlerFilterButton(sortSettings.field, sortSettings.active);
      }}
    >
      {sortSettings.fieldName}
    </button>
  );
};
