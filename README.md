# DESIDE Dashboard - Dashboard configuration

This repository holds the dashboard configuration for the [DESIDE Dashboard](https://deside.eox.at/).

DISCLAIMER: The content of this repository has been developed until September 2025 with funding from the [DestinE programme](https://destination-earth.eu/). We wish to thank the [European Union](https://european-union.europa.eu/) and the [European Space Agency (ESA)](https://www.esa.int) for the provided support.

# Steps run for the Components Cyber Report DESIDE

## Antivirus check

```
docker run -it --rm -v ./:/deside-client/ -p 127.0.0.1:5173:5173 node:20 bash
cd deside-client/
npm install
npm run docs:build --
<exit>
clamscan . -r > clamscan
```

Copy content of newly created file `clamscan` into the report.

## Vulnerability Check

```
docker run -v ./:/deside-client/ aquasec/trivy fs /deside-client/
```
