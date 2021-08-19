import React, { Fragment } from "react";
import { PageTitle } from "../components/atoms/PageTitle";
import { FilterCard } from "../components/molecules/FilterCard";

export const ErrorPage = () => (
  <Fragment>
    <PageTitle title="Ошибка! Такой страницы нет(" />
    <FilterCard />
  </Fragment>
);
