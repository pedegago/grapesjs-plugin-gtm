# grapesjs-plugin-gtm

A GrapesJs plugin for including GTM scripts in template.

## How to use it

### Download the plugin

1. Download the index.js file, rename it (eg: grapesjs-gtm.js) an place it in your project, for example your plugins folder.

### Include the plugin in Grapesjs

2. At initialization, specify `allowScripts` attribute to `true`.
3. Include the plugin in the configuration:

```javascript
import pluginGtm from "../plugins/grapesjs-gtm";

const editor = grapesjs.init({
    container: "#gjs",
    allowScripts: true,
    plugins: [
        pluginGtm
    ]
});
```

### Usage

4. Go to blocks tab and see at Extra category, drag & drop the GTM block into the canvas.
5. Automatically the plugin will open the Traits tab in order to include the GTM id of your choice.
6. As best practice, sort the element from the Layout tab to be the first child of body (This will be solved automatically soon).

### Thanks for using this plugin!

You can contact me as @pedegago on Twitter.
Also, It is welcome any issue or PR on this repo.
