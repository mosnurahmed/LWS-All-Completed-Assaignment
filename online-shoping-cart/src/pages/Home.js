import React from "react";

import Products from "../component/Products";
import Form from "../component/Form";

function Home() {
  return (
    <body>
      <main className="py-16">
        <div className="productWrapper">
          <Products />
          <Form />
        </div>
      </main>
    </body>
  );
}

export default Home;
