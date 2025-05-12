---
layout: page
---

<script setup>
    import { withBase } from 'vitepress';
    function injectStyleToShadowRoot(selector, css) {
    // Wait until the element is in the DOM
    const interval = setInterval(() => {
        const el = document.querySelector(selector);
        if (el && el.shadowRoot) {
        clearInterval(interval);

        // Create a <style> element
        const style = document.createElement('style');
        style.textContent = css;

        // Append it to the shadow root
        el.shadowRoot.appendChild(style);
        }
    }, 100); // Check every 100ms
    }

    // Example usage:
    injectStyleToShadowRoot('eox-chart', `
    input {
        float: left !important;
        padding: 0px !important;
        margin: 0px !important;
        border: none;
    }
    `);
</script>
<style>
eo-dash a[href="https://eox.at"] img{
   display: unset;
   height: 9px;
}
eo-dash .eodash-overlay p {
   bottom: -18px !important;
   left: 70px !important;
}

eox-chart input {
      width: 100% !important;
  height: 100% !important;
  padding: 0px !important;
  margin: 0px !important;

}
</style>

<eo-dash style="height:calc(100dvh - 126px); display: flex; width: 100%" :config="withBase('/configs/firstconfig.js')"/>