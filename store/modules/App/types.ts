import { $Values } from 'utility-types';
import { TypeNames } from './enums';
import { ApiExampleResType } from './../../../models/types';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE]: {
    isThisArchitecturePerfect: boolean;
  };
  [TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE]: ApiExampleResType;
};

export type ActionsValueTypes = {
  toChangeStatusOfExample: {
    type: typeof TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE];
  };
  toChangeTitleOfExample: {
    type: typeof TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE];
  };
};
export type AppActionTypes = $Values<ActionsValueTypes>;

export type AppInitialStateType = {
  isThisArchitecturePerfect: boolean;
} & ApiExampleResType;
