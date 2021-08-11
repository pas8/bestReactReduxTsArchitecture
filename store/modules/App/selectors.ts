import { RootStoreType } from '../../../models/types';
import { createSelector } from 'reselect';

export const getIsThisArchitecturePerfect= createSelector(
  [(state: RootStoreType) => state.app.isThisArchitecturePerfect],
  isThisArchitecturePerfect => isThisArchitecturePerfect
);

export const getTitle= createSelector(
  [(state: RootStoreType) => state.app.title],
  title => title
);
