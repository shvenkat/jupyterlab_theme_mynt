# A Minimal Theme For Jupyter Lab

Removes most syntax highlighting. Normal text and background colors are similar
to solarized light.


## Requirements

* JupyterLab >= 3.0


## Install

```bash
pip install jupyterlab_theme_mint
```


## Minimal "editable" install

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -e .
python3 -m pip uninstall 'jupyterlab_theme_mynt'
```

This leaves you with the `jupyterlab-theme-mynt` directory in
`.venv/share/jupyter/labextensions`. You can move or copy this directory
elsewhere for version control, and symlink it at the same location in any other
virtual environment with JupyterLab 3+. The theme is now available in running
Jupyter servers; just reload Jupyter in your browser and select 'Settings >
Theme > Mynt Light'. Any changes to `index.css` in the `jupyterlab-theme-mynt`
directory can be applied with a simple reload; no rebuilding or reinstallation
is needed.

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_theme_mint directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Uninstall

```bash
pip uninstall jupyterlab_theme_mint
jupyter labextension uninstall jupyterlab-theme-mint
```
