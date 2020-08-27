import reducer from './reducer';

export type IReducer = ReturnType<typeof reducer>;
export default reducer;
export { createGrid, selectBlock } from './actions';
