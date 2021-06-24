import React from 'react';
import useGlobalHook from '../utils/useGlobalHook';
import * as actions from '../actions';
import initialState from '../data/state.json'

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;