browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl: "https://wiki.nixos.org" + new URL(details.url).pathname
    };
  },
  {
    urls: ["*://wiki.nixos.org/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);
