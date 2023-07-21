import Header from "./component/Header";
import Booking from "./component/Booking";
import Booked from "./component/Booked";
import { useSelector } from "react-redux";

function App() {
  const booking = useSelector((state) => state.booking);


  let content = null;

  if (booking.length > 0) {
    content = <Booked />;
  }

  return (
    <body>
      <Header />
      <section>
        <Booking />
        {content}
      </section>
    </body>
  );
}

export default App;
