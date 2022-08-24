import { createAction, props } from '@ngrx/store';

export const next = createAction('[Navigation Component] next', props<{ url: string }>());

export const prev = createAction('[Navigation Component] prev');
