import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistsDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
