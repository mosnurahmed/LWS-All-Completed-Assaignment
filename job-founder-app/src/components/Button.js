import React from "react";

function Button({editMode}) {
  return (
    <div className="text-right">
      <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
        {editMode? "Edit":"Add"}
      </button>
    </div>
  );
}

export default Button;
