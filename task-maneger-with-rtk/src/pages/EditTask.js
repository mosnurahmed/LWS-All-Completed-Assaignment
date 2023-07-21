import React from "react";
import Form from "../components/Form";

function EditTask() {
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Create Task for Your Team</h1>
        <Form editing />
      </main>
    </div>
  );
}

export default EditTask;
