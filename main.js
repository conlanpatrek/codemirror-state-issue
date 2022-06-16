import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'

const initialDocContent = `-----------------------------------------------------------------------------
#### Description 1 - sliceString ####
Steps to reproduce:

1. Make a change to this doc.
2. Press the "Show Content" button to alert editorState.doc.sliceString(0).

Expected:
The alert outputs the complete current state of the editor

Actual:
The alert doesn't include any changes. It shows only the initial state. 

-----------------------------------------------------------------------------

#### Description 2 - setState ####
Steps to reproduce:

1. Make a change to this doc.
2. Press the "Reattach State" to call editorView.setState(editorState).

Expected:
The content of the editor should not change, because its the same state object

Acutal:
The content of the editor resets to the initial state.

-----------------------------------------------------------------------------
`

// Create the editor
const editorView = new EditorView()
const editorState = EditorState.create({
    doc: initialDocContent
})

// Wire everything up
document.getElementById('editor').append(editorView.dom)
editorView.setState(editorState)

// Dead simple output
document.getElementById('alert').addEventListener('click', () => {
    alert(editorState.doc.sliceString(0))
})

// Dead simple re-attach
document.getElementById('setstate').addEventListener('click', () => {
    editorView.setState(editorState)
})
