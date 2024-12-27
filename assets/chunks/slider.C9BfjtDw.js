const t=`
button,
.button {
  /* TODO: why does this only work here and not from :root? */
  --primary-color: #004170;
  --primary-color-hover: #004170CC;
  --error-color: #FF5252;

  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
  border-width: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px;
  height: 36px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;                           
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not([disabled]):not(.icon),
.button:hover:not([disabled]):not(.icon) {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: var(--primary-color-hover);
}

button, button:active,
.button, .button:active {
  background: var(--primary-color);
}

button[disabled],
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button.block,
.button.block {
  display: block;
}

button.outline,
.button.outline {
  background: transparent;
  box-shadow: none;
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
}

button.outline:hover,
.button.outline:hover {
  background: transparent;
}

button.icon,
.button.icon {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

button.icon-text,
.button.icon-text {
  text-indent: 26px;
}

button.icon-text.block,
.button.icon-text.block {
  text-indent: 20px;
}

button.icon:before, button.icon-text:before,
.button.icon:before, .button.icon-text:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
}

button.icon-text.block:before,
.button.icon-text.block:before {
  text-indent: -54px;
}

button.icon:before,
.button.icon:before {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

button.icon-text:before,
.button.icon-text:before {
  width: 18px;
  height: 18px;
}

button.small,
.button.small {
  height: 28px;
  padding: 12.4px;
  font-size: .75rem;
}

button.smallest.icon, 
button.smallest.icon::before {
  height: 16px;
  width: 16px;
  padding: 0px;
}
`,e=`
input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}
input[type=checkbox]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=checkbox]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");

}
`,o=`
input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}

label span {
  font-size: small;
}

input[type=radio]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=radio]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");

}
`,n=`
input[type="range"] {
  -webkit-appearance: none;
  width: 90%;
  margin-left: 5%;
  height: 6px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.range-slider {
  margin: 60px 0 0 0;
}
.range-slider {
  width: 100%;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-webkit-slider-thumb {
  background: #00416F;
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
input[type="range"]::-moz-range-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-moz-range-thumb {
  background: #00416F;
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416F00;
}
.range-slider__value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: '';
}

input::-moz-focus-inner, input::-moz-focus-outer {
  border: 0;
}
`;export{t as b,e as c,o as r,n as s};
