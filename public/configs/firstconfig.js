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
    name: "DESIDE Dashboard",
    theme: {
      colors: {
        primary: "#ef2b89",
        secondary: "#fff",
        surface: "#fff",
      },
    },
    footerText: "Demo configuration of eodash client",
  },
  templates: {
    light: {
      gap: 16,
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
            enableCompare: true,
            zoomToExtent: false,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              // layoutTarget: "light",
              // layoutIcon: "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                // resultType: "cards",
                subTitleProperty: "subtitle",
                // imageProperty: "thumbnail",
                aggregateResults: "collection_group",
                style: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: 9, y: 0, w: 3, h: 4 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      showIndicatorsBtn: false,
                      showLayoutSwitcher: false,
                      featured: [
                        "description",
                        "providers",
                        "assets",
                        "sci:doi"
                      ],
                      body: [
                        "satellite",
                        "sensor",
                        "agency",
                        "extent"
                      ]
                    },
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
                  layout: { x: 5, y: 11, w: 2, h: 1 },
                  title: "Datepicker",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selected) => {
            return selected
              ? {
                  id: "ButtonsPanel",
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
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC ? {
              id: Symbol(),
              type: "internal",
              title: "Layer Control",
              layout: { x: 0, y: 1, w: 3, h: 8 },
              widget: {
                name: "EodashLayerControl",
              }
            } : null;
          }
        },
        {
          defineWidget: (selectedSTAC) =>
            selectedSTAC?.links.some((l) => l.rel === "service")
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 9, y: 4, w: 3, h: 8 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
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
            enableCompare: true,
            zoomToExtent: false,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          layout: { x: 0, y: 0, w: 3, h: 4 },
          widget: {
            name: "EodashItemFilter",
            properties: {
              filtersTitle: '',
              filterProperties: [],
              aggregateResults: 'collection_group',
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 9, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select an indicator to compare",
              itemFilterConfig: {
                enableCompare: true,
                // resultsTitle:"Select an indicator to compare",
                filtersTitle: "Select an indicator to compare",
                // filterProperties: [],
                cssVars: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 2, w: 3, h: 6 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: 9, y: 1, w: 3, h: 6 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        /*
        {
          defineWidget: (selectedSTAC) =>
            selectedSTAC?.links.some((l) => l.rel === "service")
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Processes",
                  layout: { x: 0, y: 7, w: 3, h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        */
        {
          defineWidget: (selected) => {
            return selected
              ? {
                  id: "Buttons",
                  layout: { x: 8, y: 0, w: 1, h: 2 },
                  title: "Buttons",
                  type: "internal",
                  widget: {
                    name: "EodashMapBtns",
                    properties: {
                      compareIndicators: false,
                    },
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
                  layout: { x: 5, y: 11, w: 2, h: 1 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                                toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
