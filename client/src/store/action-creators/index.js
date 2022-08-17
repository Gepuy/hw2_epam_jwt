import * as UserActionCreator from './user';
import * as NotesActionCreator from './notes'

export default {
    ...UserActionCreator,
    ...NotesActionCreator
}
