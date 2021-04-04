import produce from 'immer'
import uniqid from 'uniqid'

// types
const CREATE_FOLDER = 'CREATE_FOLDER'
const CREATE_NOTE = 'CREATE_NOTE'
const DELETE_FOLDER = 'DELETE_FOLDER'
const RENAME_ITEM = 'RENAME_ITEM'
const DELETE_NOTE = 'DELETE_NOTE'
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION'
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM'

// initial state
const initialState = {
  activeFolder: '',
  activeNote: '',
  folders: {
    byId: {},
    allIds: []
  },
  notes: {
    byId: {},
    allIds: []
  }
}

export const notes = produce((draft, action) => {
  switch (action.type) {
    case CREATE_FOLDER:
      draft.folders.byId[action.id] = action.payload
      draft.folders.allIds.push(action.id)
      break
    case CREATE_NOTE:
      draft.notes.byId[action.id] = action.payload
      draft.notes.allIds.push(action.id)
      draft.folders.byId[action.folderId].notes.push(action.id)
      break
    case SET_ACTIVE_ITEM:
      draft[action.entity] = action.id
      break
    case DELETE_NOTE:
      if (action.id === draft.activeNote) {
        draft.activeNote = ''
      }
      draft.folders.byId[action.folderId].notes.splice(action.folderNoteIndex, 1)
      delete draft.notes.byId[action.id]
      return draft
    case RENAME_ITEM:
      draft[action.entity].byId[action.id].name = action.value
      return draft
    case DELETE_FOLDER:
      const index = draft.folders.allIds.findIndex(item => item === action.id)
      const { notes } = draft.folders.byId[action.id]

      if (action.id === draft.activeFolder) {
        draft.activeFolder = ''
        draft.activeNote = ''
      }
      // delete notes from folder
      notes.forEach(item => {
        delete draft.notes.byId[item]
        return draft.notes.allIds.filter(el => el !== item)
      })

      // delete folder
      draft.folders.allIds.splice(index, 1)
      delete draft.folders.byId[action.id]

      return draft

    case CHANGE_DESCRIPTION:
      draft.notes.byId[action.id].description = action.value
      return draft
    default:
      return draft
  }
}, initialState)

export const createFolder = () => {
  const newFolder = {
    id: uniqid(),
    name: 'New Folder',
    notes: []
  }

  return {
    type: CREATE_FOLDER,
    id: newFolder.id,
    payload: newFolder
  }
}

export const createNote = (folderId) => {
  const newNote = {
    id: uniqid(),
    description: '',
    name: 'New Note',
    date: new Date().toLocaleString(),
  }
  return {
    type: CREATE_NOTE,
    folderId,
    id: newNote.id,
    payload: newNote
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

export const deleteItem = (id) => {
  return {
    type: DELETE_FOLDER,
    id
  }
}

export const changeDescription = (id, value) => {
  return {
    type: CHANGE_DESCRIPTION,
    id,
    value,
  }
}

export const deleteNote = (id, folderId, folderNoteIndex) => {
  return {
    type: DELETE_NOTE,
    id,
    folderId,
    folderNoteIndex
  }
}

export const setActiveItem = (id, entity) => {
  return {
    type: SET_ACTIVE_ITEM,
    id,
    entity,
  }
}
