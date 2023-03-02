{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-f3d3129b39f956248ec8.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-91d1e95a.css" media="screen" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "https://assets.gumroad.com/packs/css/design-9e824641.css";
}
