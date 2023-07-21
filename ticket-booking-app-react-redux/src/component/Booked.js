import React from "react";
import { useSelector } from "react-redux";

import Book from "./Book";

function Booked() {
  const books = useSelector((state) => state.booking);

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        {books.map((book) => (
          <Book book={book} />
        ))}
      </table>
    </div>
  );
}

export default Booked;
