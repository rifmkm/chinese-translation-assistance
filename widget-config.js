/* widget-config.js */
(function() {
    // 1. New Encoded ID (elfsight-app-6ee31183-88fc-4c62-a37a-ac2435795729)
    const _id = "ZWxmc2lnaHQtYXBwLTZlZTMxMTgzLTg4ZmMtNGM2Mi1hMzdhLWFjMjQzNTc5NTcyOQ=="; 
    
    // 2. Create the Widget Container
    const w = document.createElement('div');
    w.className = atob(_id); // Decodes to the new ID
    w.setAttribute('data-elfsight-app-lazy', '');
    
    // NOTE: I removed the "Stealth Mode" (display: none) styles here.
    // Standard Elfsight widgets need to be visible to load and calculate their size.
    // If you genuinely need it hidden (e.g., for background tracking), 
    // you can re-add the style block here.

    document.body.appendChild(w);

    // 3. Inject the Script
    const s = document.createElement('script');
    s.src = "https://elfsightcdn.com/platform.js";
    s.async = true;
    document.head.appendChild(s);
})();