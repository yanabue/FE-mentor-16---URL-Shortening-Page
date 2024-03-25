import { useState } from "react";
import copy from "copy-to-clipboard";

export default function ShortLink(props) {
  const [copiedState, setCopiedState] = useState(false);

  function copyLink() {
    copy(props.shortLink);
    setCopiedState(true);
  }

  return (
    <div className="link-result slide-fwd-bottom">
      <div className="long-link">
        <p className="long-link-text">{props.longLink}</p>
      </div>
      <div className="shortened-link">
        <a className="short-link" href={props.shortLink}>
          {props.shortLink}
        </a>
        <button
          className="copy-btn"
          onClick={copyLink}
          style={{
            backgroundColor: copiedState
              ? "hsl(260, 8%, 14%)"
              : "hsl(180, 66%, 49%)",
          }}
        >
          {copiedState ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
