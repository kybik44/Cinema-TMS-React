import React, { Fragment } from "react";
import { PageTitle } from "../components/atoms/PageTitle";
import { FilterCard } from "../components/molecules/FilterCard";
import { Testik } from "../components/molecules/Testik";

export const ErrorPage = () => (
  <Fragment>
    <PageTitle title="Ошибка! Такой страницы нет(" />
    <Testik />
  </Fragment>
);
