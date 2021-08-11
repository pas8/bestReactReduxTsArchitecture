import { TypeNames } from './enums';
import { AppActionTypes, AppInitialStateType } from './types';

const initialState: AppInitialStateType = {
  isThisArchitecturePerfect: true,
  title: 'Nothing',
};

export const appReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE:
    case TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
