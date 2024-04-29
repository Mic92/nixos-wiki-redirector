browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl: "https://wiki.nixos.org" + new URL(details.url).pathname
    };
  },
  {
    urls: ["*://nixos.wiki/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);
