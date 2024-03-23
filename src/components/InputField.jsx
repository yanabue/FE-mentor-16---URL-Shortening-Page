import { useState } from "react"


export default function InputField(){

    const [linkInput, setLinkInput] = useState('')

    async function shortenLink() {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer c1eef6ca942ade353d0b45b71723f2b489b1a796`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          long_url: linkInput
        })
      });
      
      const data = await response.json();
      console.log(data.link);
      return data;
    }


    return (
        <div className="input-field">
                <input type="text" 
                className="link-input"  
                placeholder="Shorten a link here..." 
                value={linkInput}
                name='link-input'
                onChange={e => setLinkInput(e.target.value)}
                />
           <button 
           className="shorten-link" 
           type="submit"
           onClick={shortenLink}
           >Shorten It!</button>
        </div>
    )
}