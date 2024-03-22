import { useState } from "react"


export default function InputField(){

    const [linkInput, setLinkInput] = useState('')

    function shortenLink(){
        fetch('https://cleanuri.com/api/v1/shorten',  {
            method: 'POST',
            headers: {
              'Content-Type': 'applicaition/json', 
            },
            body: JSON.stringify({ url: linkInput }) 
          })
        .then(res => res.json())
        .then(data => console.log(data))
        
        
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