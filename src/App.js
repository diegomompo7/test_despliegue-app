import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hola amigos!</h1>

      <HashRouter>
        <div className="links">
          <Link to="/">HomePage</Link>
          <br />
          <Link to="/notes">NotesPage</Link>
          <br />
          <Link to="/toggles">TogglablePage</Link>
          <br />
        </div>

        <Routes>
          <Route path="/notes" element={<HomePage></HomePage>}></Route>
          <Route path="/toggles" element={<Togglable></Togglable>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
