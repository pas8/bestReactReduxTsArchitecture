import { $Values } from 'utility-types';
import { TypeNames } from './enums';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE]: {
    isThisArchitecturePerfect: boolean;
  };
};

export type ActionsValueTypes = {
  toChangeSphereCursorTitle: {
    type: typeof TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE];
  };
};
export type AppActionTypes = $Values<ActionsValueTypes>;

export type AppInitialStateType = {
  isThisArchitecturePerfect: boolean;
};




