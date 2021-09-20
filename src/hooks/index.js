import { useEffect, useState } from "react";
import useMultiState from "./useMultiState";
import usePrevious from "./usePrevious";
import useDidUpdate from "./useDidUpdate";
import useDidMount from "./useDidMount";
import useDidUnmount from "./useDidUnmount";

const hooks = {
  useEffect,
  useState,
  useMultiState,
  useDidMount,
  useDidUnmount,
  usePrevious,
  useDidUpdate,
};
export default hooks;
