import "./styles.css";

export default function App() {
  return (
    <>
      <div className="Border">
        <div className="Background">
          <h1>Shorten Your Links</h1>
          <form>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Make your links shorter"
            />
            <input type="submit" value="Shorten" />
          </form>
        </div>
      </div>
    </>
  );
}
