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
            <button type="submit">Shorten</button>
          </form>

          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th>Full URL</th>
                <th>Short URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="<%= shortUrl.full %>">https://www.google.com</a>
                </td>
                <td>
                  <a href="<%= shortUrl.short %>">https://www.google.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
