import "./App.css";
import AttendConference from "./AttendConference";
import { AttendeesList } from "./AttendeesList";
import ConferenceForm from "./ConferenceForm";
import LocationForm from "./LocationForm";
import PresentationForm from "./PresentationForm";
import { Nav } from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <div className="container">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="locations">
              <Route path="new" element={<LocationForm />} />
            </Route>
            <Route path="conferences">
              <Route path="new" element={<ConferenceForm />} />
            </Route>
            <Route path="attendees">
              <Route
                path=""
                element={<AttendeesList />}
                attendees={props.attendees}
              />
              <Route path="new" element={<AttendConference />} />
            </Route>
            <Route path="presentations">
              <Route path="new" element={<PresentationForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
