import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";

function Books() {
  const [searchKey, setSearchKey] = useState("");
  const [status, setStatus] = useState("all");
  const [featured, setFeatured] = useState(false);
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const filter = useSelector((state) => state.filter);

  const handleFilter = (book) => {
    if (book.featured === !featured) {
      return book.featured;
    } else {
      return book;
    }
  };

  useEffect(() => {
    setSearchKey(filter.search);
  }, [filter]);

  const handleSearch = (book) => {
    if (searchKey !== undefined) {
     
      return book.name.includes(searchKey) || book.name.toLowerCase().includes(searchKey);
    }
  };

  let content = null;

  if (isLoading) {
    content = <div> Loading........!!!</div>;
  }
  if (!isLoading && isError) {
    content = <div> 404 not Found !!!</div>;
  }
  if (!isLoading && !isError && books.length === 0) {
    content = <div>No books Found </div>;
  }

  if (!isLoading && !isError && books.length > 0) {
    content = books
      .filter(handleSearch)
      .filter(handleFilter)
      .map((book) => <Book book={book} key={book.id} />);
  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              value={status}
              onClick={() => {
                setStatus("all");
                setFeatured(false);
              }}
              className={`lws-filter-btn ${status === "all" && "active-filter"} `}
            >
              All
            </button>

            <button
              className={`lws-filter-btn ${status === "featured" && "active-filter"}`}
              value={status}
              onClick={() => {
                setStatus("featured");
                setFeatured(true);
              }}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">{content}</div>
      </div>
    </main>
  );
}

export default Books;
