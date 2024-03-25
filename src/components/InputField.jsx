/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import ShortLink from "./ShortLink";

export default function InputField() {
  const [linkInput, setLinkInput] = useState("");
  const [linksArray, setLinksArray] = useState(() => {
    const storedLinks = localStorage.getItem("links");
    return storedLinks ? JSON.parse(storedLinks) : [];
  });
  const [linkUIError, setLinkUIError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit() {
    if (linkInput === "") {
      setLinkUIError(true);
      setErrorMessage("Please add a link");
    } else {
      setLinkUIError(false);
      setErrorMessage("");
      shortenLink();
    }
  }

  async function shortenLink() {
    const response = await fetch("https://smolurl.com/api/links", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: linkInput,
      }),
    });

    const data = await response.json();
    if (response.status === 201) {
      setLinkUIError(false);
      setErrorMessage("");
      setLinksArray((prevArr) => [
        ...prevArr,
        {
          longLink: linkInput,
          shortLink: data.data.short_url,
        },
      ]);
    } else {
      setLinkUIError(true);
      setErrorMessage("Invalid link entered");
    }
  }

  function renderLinks() {
    return linksArray.map((link) => (
      <ShortLink longLink={link.longLink} shortLink={link.shortLink} />
    ));
  }

  useEffect(() => {
    localStorage.setItem(`links`, JSON.stringify(linksArray));
  }, [linksArray]);

  function resetLinks() {
    setLinksArray([]);
  }

  return (
    <>
      <div className="input-field">
        <div className="input-sub">
          <input
            type="text"
            className={linkUIError ? "link-input error-input" : "link-input"}
            placeholder="Shorten a link here..."
            name="link-input"
            onChange={(e) => setLinkInput(e.target.value)}
          />
          <button className="shorten-link" type="submit" onClick={handleSubmit}>
            Shorten It!
          </button>
        </div>
        {linkUIError && (
          <div className="error">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      <div className="link-results">
        {linksArray.length > 0 && renderLinks()}
        {linksArray.length > 0 && (
          <button className="clear-btn" onClick={resetLinks}>
            Clear links
          </button>
        )}
      </div>
    </>
  );
}
