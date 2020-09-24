import React from 'react';

var d = new Date();
var n = d.getFullYear();

function Footer(){
    return(
        <footer>
             <p>Copyright ⓒ {n}</p>
        </footer>
       
    )
}

export default Footer;