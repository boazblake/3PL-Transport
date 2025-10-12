{
  description = "re-frame map demo (ClojureScript) + F# backend for macOS aarch64";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
    clj-nix.url = "github:jlesquembre/clj-nix";
  };

  outputs = { self, nixpkgs, flake-utils, clj-nix, ... }:
    flake-utils.lib.eachSystem [ "aarch64-darwin" ] (system:
      let
        pkgs = import nixpkgs { inherit system; };
        dotnet = pkgs.dotnet-sdk_8;
        node = pkgs.nodejs_20;
        jdk = pkgs.openjdk17;
        neovim = pkgs.neovim;
      in {
        devShells.default = pkgs.mkShell {
          name = "map-shell";
          buildInputs = [
            dotnet
            node
            jdk
            neovim
            pkgs.git
            pkgs.curl
          ];

          shellHook = ''
            export DOTNET_ROOT=${dotnet}
            export JAVA_HOME=${jdk}
            export PATH=$PATH:${node}/bin
            echo "re-frame + F# dev shell ready (macOS aarch64)"
          '';
        };

        packages.frontend = (clj-nix.lib.mkCljBin {
          projectSrc = ./frontend;
          name = "map-frontend";
          main-ns = "map.core";
        });

        packages.backend = pkgs.stdenv.mkDerivation {
          pname = "map-backend";
          version = "0.1.0";
          src = ./backend;
          nativeBuildInputs = [ dotnet ];
          buildPhase = ''
            cd ${./backend}
            dotnet publish -c Release -o $out
          '';
          installPhase = ''
            mkdir -p $out/bin
            cp -r * $out/bin/
          '';
        };
      });
}
