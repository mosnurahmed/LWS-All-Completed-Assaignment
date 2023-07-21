import React from "react";

function Button({ editMode, isLoading, editIsLoading }) {
  return (
    <button disabled={isLoading || editIsLoading} type="submit" className="submit" id="lws-submit">
      {editMode ? " Edit Book" : " Add Book"}
    </button>
  );
}

export default Button;
