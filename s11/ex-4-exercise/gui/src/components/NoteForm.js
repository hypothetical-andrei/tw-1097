import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addNote } from "../actions/actions"


function NoteForm () {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
      <input type='text' onChange={(evt) => setContent(evt.target.value)} />
      <input type='button' value='add' onClick={() => dispatch(addNote(content))} />
    </div>
  )
}

export default NoteForm