import Note from "../models/Note";

const getNotesFromDb = async () => {

    const data = await Note.query()
    return data;

};

const addNoteToDb = async (props) => {
    try {
        const note = new Note({ ...props });

        const saved = await note.save();
        return saved;
    } catch (ex) {
        console.warn("ex", ex);
    }

}

export { getNotesFromDb, addNoteToDb };
