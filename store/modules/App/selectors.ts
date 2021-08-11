import { RootStoreType } from '../../../models/types';
import { createSelector } from 'reselect';

export const getIsThisArchitecturePerfect= createSelector(
  [(state: RootStoreType) => state.app.isThisArchitecturePerfect],
  isThisArchitecturePerfect => isThisArchitecturePerfect
);
