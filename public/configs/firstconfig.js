const store = window.eodashStore;
// choose if production catalog or PR deployment one
let stacEndpoint = "https://gtif-cerulean.github.io/deside-catalog/deside/catalog.json";
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('catalog')) {
  stacEndpoint = stacEndpoint.replace("catalog/",`catalog/pr-preview/${searchParams.get('catalog')}/`);
}

export default {
  id: "demo",
  stacEndpoint: stacEndpoint,
  brand: {
    noLayout: true,
    name: "Demo",
    theme: {
      colors: {
        primary: "#fff",
        secondary: "#fff",
        surface: "#fff",
      },
    },
    footerText: "Demo configuration of eodash client",
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          // enableCompare: true,
        },
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        layout: { x: 0, y: 0, w: 3, h: 6 },
        widget: {
          name: "EodashItemFilter",
          properties: {
            filtersTitle: '',
            // enableCompare: true,
            filterProperties: [],
            aggregateResults: 'collection_group',
          },
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 6 },
                type: "web-component",
                widget: {
                  link: "https://cdn.skypack.dev/@eox/stacinfo",
                  properties: {
                    for: store.states.currentUrl,
                    allowHtml: "true",
                    styleOverride:
                      `.single-property {columns: 1!important;}
                      h1 {margin:0px!important;font-size:16px!important;}
                      header h1:after {
                        content:' ';
                        display:block;
                        border:1px solid #d0d0d0;
                      }
                      h2 {font-size:15px}
                      h3 {font-size:14px}
                      summary {cursor: pointer;}
                      #properties li > .value { font-weight: normal !important;}
                      main {padding-bottom: 10px;}
                      .footer-container {line-height:1;}
                      .footer-container button {margin-top: -10px;}
                      .footer-container small {font-size:10px;line-height:1;}`,
                    header: '["title"]',
                    body: "description",
                  },
                  tagName: "eox-stacinfo",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Datepicker",
                type: "internal",
                layout: { x: 5, y: 8, w: 2, h: 4 },
                title: "Datepicker",
                widget: {
                  name: "EodashDatePicker",
                },
              }
            : null;
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layer Control",
        layout: { x: 0, y: 6, w: 3, h: 6 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      /*
      {
        defineWidget: (indicator) => {
          return indicator
            ? {
                id: "process",
                layout: { x: 9, y: 4, w: 3, h: 8 },
                title: "Process",
                type: "internal",
                widget: {
                  name: "EodashProcess",
                },
              }
            : null;
        },
      },
      */
      /*
      {
        defineWidget: (selectedCompareStac) => {
          return selectedCompareStac
            ? {
                id: Symbol(),
                title: "Layer Control Comparison",
                layout: { x: 9, y: 6, w: 3, h: 6 },
                type: "internal",
                widget: {
                  name: "EodashLayerControl",
                  properties: {
                    map: "second",
                  },
                },
              }
            : null;
        },
      },
      */
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: Symbol(),
                layout: { x: 8, y: 0, w: 1, h: 1 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                },
              }
            : null;
        },
      },
    ],
  },
};
