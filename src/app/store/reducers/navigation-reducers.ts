import { createFeature, createReducer, on } from '@ngrx/store';
import { next, prev } from '../actions/navigation-actions';

export interface State {
  navigationHistory: string[];
}

export const initialState: State = { navigationHistory: [] };
export const navigationFeature = createFeature({
  name: 'navigationHistory',
  reducer: createReducer(
    initialState,
    on(next, (state, { url }) => {
      const currentList: Array<string> = new Array<string>();
      for (let i = 0; i < state.navigationHistory.length; i++) {
        currentList.push(state.navigationHistory[i].toString());
      }
      currentList.push(url);
      return { ...state, navigationHistory: currentList };
    }),
    on(prev, (state) => {
      const currentList: Array<string> = new Array<string>();
      for (let i = 0; i < state.navigationHistory.length - 1; i++) {
        currentList.push(state.navigationHistory[i].toString());
      }
      return { ...state, navigationHistory: currentList };
    }),
  ),
});
