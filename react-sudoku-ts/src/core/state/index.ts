import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from 'reducers'

const persistConfig = {
  key: 'root',
  storage,
  debounce: 100,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore() {
  const store = createStore(persistedReducer, devToolsEnhancer({}))
  const persistor = persistStore
  return { store, persistor }
}

export default configureStore
