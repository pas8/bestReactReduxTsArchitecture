import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootStoreType } from '../../../models/types';
import { toChangeTitleOfExample } from './actions';
import { AppActionTypes } from './types';

export const operatoToSetExampleTitle: ActionCreator<ThunkAction<Promise<Action>, RootStoreType, void, any>> =
  () =>
  async (dispatch: Dispatch<AppActionTypes>): Promise<Action> => {
    const result = await fetch('/api/example', { method: 'GET' });
    const {title} = await result.json();
    return dispatch(toChangeTitleOfExample({ title }));
  };
