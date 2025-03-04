import {databases, ID} from '@/utils/appwrite'

export async function addNote(content: string):Promise<Note>{
    const newNote = {content:content}

    const response = await databases.createDocument(
        'notesNinja',
        'notes',
        ID.unique(),
        newNote
    )

    const note = {
        $id: response.$id,
        $createdAt: response.$createdAt,
        content: response.content
    }

    return note
}

export async function getNotes(): Promise<Note[]> {
    const response = await databases.listDocuments(
        'notesNinja',
        'notes',
    )
    console.log(response.documents)

    const notes: Note[] = response.documents.map(document=>({
        $id: document.$id,
        $createdAt: document.$createdAt,
        content: document.content
    }))
    return notes
}

export async function deleteNote(noteId: string) {
    await databases.deleteDocument(
        'notesNinja',
        'notes',
        noteId
    )
}