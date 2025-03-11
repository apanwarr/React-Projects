import React from "react";

function Card({username, btnText="visit me"}){
    console.log(username);
        
    return(
        <div className="w-60 h-60 rounded-xl relative border border-black mt-5 left-5 overflow-hidden">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="w-full h-full rounded-xl"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xl px-2 py-1 rounded text-left w-full">
          {username} Bro!
          <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-1 bottom-1 bg-blue-50 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
        >
          {btnText}


          {/* {btnText || "visit me"} */}
          {/* agr upar btnText nahi mila toh Visit ME show hoga default */}
        </a>
        </div>
      </div>
    )
}

export default Card