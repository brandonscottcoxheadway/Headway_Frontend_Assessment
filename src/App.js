import "./styles.css";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const [value, setValue] = useState("");

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
                  <button>Copy</button>
                </td>
                <td>
                  <a href="<%= shortUrl.short %>">https://www.google.com</a>
                  <button>Copy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
