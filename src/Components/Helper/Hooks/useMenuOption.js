import React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { menuOptionAction } from "../../../_Actions/menuAction";

export default function useMenuOption() {
  const dispatch = useDispatch();

  const SetTitleRoute = useCallback((titile) => {
    const limpiarState = () => dispatch(menuOptionAction(titile));
    limpiarState();
  }, []);

  return {
    SetTitleRoute,
  };
}
