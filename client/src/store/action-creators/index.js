import * as UserActionCreator from './user';
import * as NotesActionCreator from './notes'

const ActionCreators = {
    ...UserActionCreator,
    ...NotesActionCreator
};

export default ActionCreators;
