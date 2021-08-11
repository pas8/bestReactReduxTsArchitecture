import { TypeNames } from './enums';
import { AppActionTypes, PayloadTypes } from './types';

export const toChangeStatusOfExample = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE,
  payload,
});

export const toChangeTitleOfExample = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_TITLE_OF_EXAMPLE,
  payload,
});
