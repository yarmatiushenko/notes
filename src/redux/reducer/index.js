import produce from "immer"
import uniqid from 'uniqid'

// types
const CREATE_FOLDER = '/movies/CREATE_FOLDER'
const EDIT_ITEM = '/movies/EDIT_ITEM'
const DELETE_ITEM = '/movies/DELETE_ITEM'
const RENAME_ITEM = '/movies/RENAME_ITEM'
const SET_ACTIVE_ITEM = '/movies/SET_ACTIVE_ITEM'

// initial state
const initialState = {
  activeFolder: '',
  activeNote: '',
  folders: {
    byId: {},
    allIds: []
  }
}

export const weather = produce((draft, action) => {
  switch (action.type) {
    case CREATE_FOLDER:
      draft.folders.byId[action.id] = action.payload
      draft.folders.allIds.push(action.id)
      break
    case SET_ACTIVE_ITEM:
      draft[action.entity] = action.id
      break
    case EDIT_ITEM:
      const {byId} = draft[action.entity]
      byId[action.id].isEdit = !byId[action.id].isEdit
      return draft

    case RENAME_ITEM:
      draft[action.entity].byId[action.id].name = action.value
      break

    case DELETE_ITEM:
      const index = draft[action.entity].allIds.findIndex(item => item === action.id)

      const {notes} = draft[action.entity].byId[action.id]

      // delete notes from folder
      notes.map(item => {
        delete draft.notes.byId[item]
        return draft.notes.allIds.filter(el => el !== item)
      })

      // delete folder
      draft[action.entity].allIds.splice(index, 1)
      delete draft[action.entity].byId[action.id]

      break
    default:
      return draft
  }
}, initialState)

export const createFolder = () => {
  const newFolder = {
    id: uniqid(),
    isEdit: false,
    name: 'New Folder'
  }

  return {
    type: CREATE_FOLDER,
    id: newFolder.id,
    payload: newFolder
  }
}

export const editItem = (id, entity) => {
  return {
    type: EDIT_ITEM,
    id,
    entity
  }
}

export const renameItem = (id, value, entity = 'folders') => {
  return {
    type: RENAME_ITEM,
    id,
    value,
    entity
  }
}

export const deleteItem = (id, entity) => {
  return {
    type:DELETE_ITEM,
    id,
    entity,
  }
}

export const setActiveItem = (id, entity) => {
  return {
    type: SET_ACTIVE_ITEM,
    id,
    entity,
  }
}
