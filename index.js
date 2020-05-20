/**
 * Created by: Pablo David Gago Ballester
 * Twitter: @pedegago
 */

const getIframe = gtmId => {
    return `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
};

const loadComponents = (editor, options) => {
    const domc = editor.DomComponents;

    domc.addType("gtm-block", {
        model: {
            defaults: {
                tagName: "noscript",
                name: "GTM",
                draggable: "#wrapper",
                droppable: false,
                stylable: false,
                copyable: false,
                gtmId: options.gtmId,
                traits: [
                    {
                        name: "gtmId",
                        label: "GTM Id",
                        placeholder: "GTM-xxxxxxx",
                        changeProp: 1
                    }
                ],
                content: getIframe(options.gtmId),
                script: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','{[ gtmId ]}');`
            },
            init() {
                this.on("change:gtmId", this.handleGtmIdChange);

                editor.select(this);

                const tm = editor.Panels.getButton('views', "open-tm");
                tm.set('active', 1);
            },
            handleGtmIdChange(model, value) {
                this.set("content", getIframe(value));
            }
        }
    });
};

const loadBlocks = (editor, options) => {
    const bm = editor.BlockManager;

    bm.add("gtm-block", {
        label: "GTM",
        attributes: { class: "fa fa-tags" },
        category: "Extra",
        content: { type: "gtm-block" }
    });
};

export default (editor, opts = {}) => {
    const options = {
        gtmId: "",
        ...opts
    };

    loadComponents(editor, options);

    loadBlocks(editor, options);
};
