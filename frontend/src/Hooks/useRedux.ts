import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppState, AppDispatch } from '../Store';

export const useStateDispatch = () => useDispatch<AppDispatch>();
export const useStateSelector: TypedUseSelectorHook<AppState> = useSelector;
