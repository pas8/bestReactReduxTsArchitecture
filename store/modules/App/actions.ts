import { TypeNames } from './enums';
import { AppActionTypes, PayloadTypes } from './types';

export const toChangeThemePropertyies = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_STATUS_OF_EXAMPLE,
  payload
});


