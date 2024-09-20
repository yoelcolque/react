import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app')
// creo mis variables
const r = React.createElement
const f = React.Fragment

// creo mi arbol de elemento base (TRONCO)
const root = ReactDOM.createRoot(appDomElement)
// creo elemento (HOJAS)
const button = r('button', {"class":"liked", "data-id":"btn_text1"}, 'Me gusta')
const button1 = r('button', {'class':'liked','data-id':'btn_text2'}, 'Me gusta')
const button2 = r('button',{'class':'liked','data-id':'btn_text2'},'Me gusta')
// creo elemento coontenerdor (RAMA)
const div = r(f,null,[button,button1,button2])
// renderizo mi elemento base con elementos

/* jsx
<React.Fragment>
    <button data-id= "123"> Me gusta</button>
    <button data-id= "345"> Me gusta</button>
    <button data-id= "678"> Me gusta</button>
<React.Fragment> 

*/

root.render(div)

