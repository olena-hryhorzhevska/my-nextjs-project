// app/notes/action/create/page.tsx

import NoteForm from '@/components/NoteForm/NoteForm';
import { getCategories } from '@/lib/api';

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <>
    <NoteForm categories={categories}/>
    </>
  )
};

export default CreateNote;
