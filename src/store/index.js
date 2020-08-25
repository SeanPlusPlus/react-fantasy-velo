import React from "react";
import useGlobalHook from "../utils/useGlobalHook";
import * as actions from "../actions";

const initialState = {
  managers: [
    {
      name: 'Washington',
      teams: [],
      active: true,
    },
    {
      name: 'Jefferson',
      teams: [],
    },
    {
      name: 'Lincoln',
      teams: [],
    },
  ],
  teams: [
    {
      name: 'Chargers',
      members: [],
    },
    {
      name: 'Eagles',
      members: [],
    },
    {
      name: 'Jets',
      members: [],
    },
    {
      name: 'Jaguars',
      members: [],
    },
    {
      name: 'Panthers',
      members: [],
    },
    {
      name: 'Patriots',
      members: [],
    },
    {
      name: 'Seahawks',
      members: [],
    },
  ]
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;