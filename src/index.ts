import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-theme-mynt extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-mynt',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-theme-mynt is activated!');
    const style = 'jupyterlab-theme-mynt/index.css';

    manager.register({
      name: 'Mynt Light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
