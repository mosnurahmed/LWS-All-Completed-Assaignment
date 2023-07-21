import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation, useEditBookMutation } from "../features/api/apiSlice";

import Button from "./Button";

function Form({ book, isEdit }) {
 
  const [editMode, setEditMode] = useState(false);
  const [bookId, setBookId] = useState();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const [editBook, { isLoading: editIsLoading, isError: editIsError, isSuccess: editIsSuccess }] =
    useEditBookMutation();

  useEffect(() => {
    if (isEdit) {
      setEditMode(true);
      setBookId(book.id);
      setName(book.name);
      setAuthor(book.author);
      setThumbnail(book.thumbnail);
      setPrice(book.price);
      setRating(book.rating);
      setFeatured(book.featured);
    }
  }, [book, isEdit]);

  const handleAddBook = (e) => {
    e.preventDefault();
    addBook({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editBook({
      id: bookId,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      },
    });
  };

  useEffect(() => {
    if (isSuccess || editIsSuccess) {
      setEditMode(false);
      navigate("/");
    }
  }, [isSuccess, editIsSuccess, setEditMode, navigate]);
  return (
    <>
      <form className="book-form" onSubmit={editMode ? handleEdit : handleAddBook}>
        <div className="space-y-2">
          <label>Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label>Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label>Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            className="w-4 h-4"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label className="ml-2 text-sm"> This is a featured book </label>
        </div>

        <Button editMode={editMode} isLoading={isLoading} editIsLoading={editIsLoading} />
      </form>

      {(isError || editIsError) && <div> There was an Error</div>}
    </>
  );
}

export default Form;
