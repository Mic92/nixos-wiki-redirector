with import <nixpkgs> {};
mkShell {
  packages = [
    bashInteractive
    nodePackages.web-ext
  ];
}
