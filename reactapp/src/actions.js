export const ActionTypes = {

	SET_APP_MODE: 'SET_APP_MODE',
	SET_DIRECTORY_SEARCH_MODE: 'SET_DIRECTORY_SEARCH_MODE',
	SET_DIRECTORY_SEARCH_TEXT: 'SET_DIRECTORY_SEARCH_TEXT',
	SET_DIRECTORY_SEARCH_TAG: 'SET_DIRECTORY_SEARCH_TAG'
}

export function setAppMode(mode) {
	return { type: ActionTypes.SET_APP_MODE, mode }
} 

export function setDirectorySearchMode(mode) {
	return { type: ActionTypes.SET_DIRECTORY_SEARCH_MODE, mode }
} 

export function setDirectorySearchTag(tag) {
	return { type: ActionTypes.SET_DIRECTORY_SEARCH_TAG, tag }
}

export function setDirectorySearchText(text) {
	return { type: ActionTypes.SET_DIRECTORY_SEARCH_TEXT, text }
}