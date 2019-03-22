import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import common from './common';

export default combineReducers({ form: form, auth, common })
