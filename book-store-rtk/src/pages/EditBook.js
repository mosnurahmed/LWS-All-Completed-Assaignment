import React from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import { useGetBookQuery } from "../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { removeSearching } from "../features/filter/filterSlice";

function EditBook() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  const dispatch = useDispatch();

  let content = null;

  if (isLoading) {
    dispatch(removeSearching());
    content = <div> Loading........!!!</div>;
  }
  if (!isLoading && isError) {
    content = <div> 404 not Found !!!</div>;
  }

  if (!isLoading && !isError && book?.id) {
    // console.log(book)
    content = (
      <>
        <Form book={book} isEdit />
      </>
    );
  }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
}

export default EditBook;
