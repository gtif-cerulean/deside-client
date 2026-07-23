export default {
  id: "demo",
  stacEndpoint: "https://gtif-cerulean.github.io/deside-catalog/deside/catalog.json",
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
        id: "EodashMap",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: false,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: {
                itemFilterConfig: {
                  resultType: "list",
                  enableHighlighting: false,
                  filterProperties: [
                    {
                      keys: ["title", "themes"],
                      title: "Search",
                      type: "text",
                      expanded : true
                    },
                    {
                      key: "themes",
                      title: "Theme Filter",
                      type: "select",
                      expanded : true
                    },
                  ],
                  subTitleProperty: "subtitle",
                  aggregateResults: "collection_group",
                  style: {
                    "--form-flex-direction": "row",
                  },
                },
              },
              enableSearch: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 2, h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
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
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
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
                        "sci:doi",
                        "sci:citation",
                        "sci:publication",
                      ],
                      body: [
                        "satellite",
                        "sensor",
                        "otherSources",
                        "insituSources",
                        "agency",
                        "extent",
                      ],
                      footer: [],
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
                  layout: { x: 4, y: 6, w: 4, h: 6 },
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
          defineWidget: (selectedSTAC) => {
            return selectedSTAC ? {
              id: "LayerControl",
              type: "internal",
              title: "Layer Control",
              layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
              widget: {
                name: "EodashLayerControl",
              }
            } : null;
          }
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 12, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
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
        id: "EodashMapCompare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: false,
            btns: {
              enableZoom: true,
              enableExportMap: false,
              enableChangeProjection: false,
              enableCompareIndicators: {
                fallbackTemplate: "light",
              },
              enableBackToPOIs: false,
              enableSearch: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            }
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          layout: { x: 0, y: 0, w: 2, h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                // resultType: "cards",
                enableHighlighting: false,
                subTitleProperty: "subtitle",
                aggregateResults: "collection_group",
                style: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: "CompareTools",
          type: "internal",
          title: "Tools",
          layout: { x: 9, y: 0, w: 3, h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select indicator to compare",
              itemFilterConfig: {
                enableCompare: true,
                resultType: "list",
                filtersTitle: "Select indicator to compare",
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Theme Filter",
                    type: "select",
                    expanded : true
                  },
                ],
                aggregateResults: "collection_group",
                enableHighlighting: false,
                cssVars: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          id: "Layers",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          id: "ComparisonLayers",
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              properties: {
                cssVars: {
                  "--list-padding": "1rem"
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 2, w: 4, h: 9 },
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
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC) && {
              id: "Process",
              type: "internal",
              title: "Processes",
              layout: { x: 0, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
              },
            },
        },
        {
          defineWidget: (_, updatedCompareStac) =>
            window.eodashStore.actions.includesProcess(updatedCompareStac, true) && {
              id: "CompareMapProcess",
              type: "internal",
              title: "Processes",
              layout: { x: 9, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget(true) && {
              id: "ProcessResultChartCompare",
              type: "internal",
              title: "Compare Chart",
              layout: { x: 6, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
      ],
    },
  },
};
