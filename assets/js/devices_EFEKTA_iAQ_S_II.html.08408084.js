"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40633],{98686:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>c});var i=o(6254);const a={},n=(0,o(32860).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"efekta-efekta-iaq-s-ii",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-iaq-s-ii"},[(0,i.Lk)("span",null,"EFEKTA EFEKTA_iAQ_S_II")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"EFEKTA_iAQ_S_II")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=EFEKTA"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"CO2 and atmospheric pressure мonitor with TFT Display, outdoor temperature and humidity")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"co2, temperature, humidity, pressure, illuminance, auto_brightness, night_onoff_backlight, night_on_backlight, night_off_backlight, long_chart_period, long_chart_period2, temperature_offset, humidity_offset, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_gas, invert_logic_gas, high_gas, low_gas")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ_S_II.png",alt:"EFEKTA EFEKTA_iAQ_S_II"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-1-endpoint"><span>Temperature (numeric, 1 endpoint)</span></a></h3><p>Measured value of the built-in temperature sensor. Value can be found in the published state on the <code>temperature_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-2-endpoint"><span>Temperature (numeric, 2 endpoint)</span></a></h3><p>Measured value of the external temperature sensor. Value can be found in the published state on the <code>temperature_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-1-endpoint"><span>Humidity (numeric, 1 endpoint)</span></a></h3><p>Measured value of the built-in humidity sensor. Value can be found in the published state on the <code>humidity_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="humidity-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-2-endpoint"><span>Humidity (numeric, 2 endpoint)</span></a></h3><p>Measured value of the external humidity sensor. Value can be found in the published state on the <code>humidity_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="auto-brightness-binary" tabindex="-1"><a class="header-anchor" href="#auto-brightness-binary"><span>Auto brightness (binary)</span></a></h3><p>Enable or Disable Auto Brightness of the Display. Value can be found in the published state on the <code>auto_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_brightness&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto brightness is ON, if <code>OFF</code> OFF.</p><h3 id="night-onoff-backlight-binary" tabindex="-1"><a class="header-anchor" href="#night-onoff-backlight-binary"><span>Night onoff backlight (binary)</span></a></h3><p>Complete shutdown of the backlight at night mode. Value can be found in the published state on the <code>night_onoff_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_onoff_backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night onoff backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-backlight-numeric"><span>Night on backlight (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_on_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-backlight-numeric"><span>Night off backlight (numeric)</span></a></h3><p>Night mode deactivation time. Value can be found in the published state on the <code>night_off_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="long-chart-period-enum" tabindex="-1"><a class="header-anchor" href="#long-chart-period-enum"><span>Long chart period (enum)</span></a></h3><p>The period of plotting the CO2 level(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period&quot;: NEW_VALUE}</code>. The possible values are: <code>1H</code>, <code>24H</code>.</p><h3 id="long-chart-period2-enum" tabindex="-1"><a class="header-anchor" href="#long-chart-period2-enum"><span>Long chart period2 (enum)</span></a></h3><p>The period of plotting the рressure level(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period2&quot;: NEW_VALUE}</code>. The possible values are: <code>1H</code>, <code>24H</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary"><span>Forced recalibration (binary)</span></a></h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary"><span>Factory reset co2 (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset co2 is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric"><span>Manual forced recalibration (numeric)</span></a></h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-gas-binary" tabindex="-1"><a class="header-anchor" href="#enable-gas-binary"><span>Enable gas (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable gas is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-gas-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-gas-binary"><span>Invert logic gas (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic gas is ON, if <code>OFF</code> OFF.</p><h3 id="high-gas-numeric" tabindex="-1"><a class="header-anchor" href="#high-gas-numeric"><span>High gas (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-gas-numeric" tabindex="-1"><a class="header-anchor" href="#low-gas-numeric"><span>Low gas (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p>',46))])}]]),c=JSON.parse('{"path":"/devices/EFEKTA_iAQ_S_II.html","title":"EFEKTA EFEKTA_iAQ_S_II control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_iAQ_S_II control via MQTT","description":"Integrate your EFEKTA EFEKTA_iAQ_S_II via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Temperature (numeric, 1 endpoint)","slug":"temperature-numeric-1-endpoint","link":"#temperature-numeric-1-endpoint","children":[]},{"level":3,"title":"Temperature (numeric, 2 endpoint)","slug":"temperature-numeric-2-endpoint","link":"#temperature-numeric-2-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, 1 endpoint)","slug":"humidity-numeric-1-endpoint","link":"#humidity-numeric-1-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, 2 endpoint)","slug":"humidity-numeric-2-endpoint","link":"#humidity-numeric-2-endpoint","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Auto brightness (binary)","slug":"auto-brightness-binary","link":"#auto-brightness-binary","children":[]},{"level":3,"title":"Night onoff backlight (binary)","slug":"night-onoff-backlight-binary","link":"#night-onoff-backlight-binary","children":[]},{"level":3,"title":"Night on backlight (numeric)","slug":"night-on-backlight-numeric","link":"#night-on-backlight-numeric","children":[]},{"level":3,"title":"Night off backlight (numeric)","slug":"night-off-backlight-numeric","link":"#night-off-backlight-numeric","children":[]},{"level":3,"title":"Long chart period (enum)","slug":"long-chart-period-enum","link":"#long-chart-period-enum","children":[]},{"level":3,"title":"Long chart period2 (enum)","slug":"long-chart-period2-enum","link":"#long-chart-period2-enum","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Forced recalibration (binary)","slug":"forced-recalibration-binary","link":"#forced-recalibration-binary","children":[]},{"level":3,"title":"Factory reset co2 (binary)","slug":"factory-reset-co2-binary","link":"#factory-reset-co2-binary","children":[]},{"level":3,"title":"Manual forced recalibration (numeric)","slug":"manual-forced-recalibration-numeric","link":"#manual-forced-recalibration-numeric","children":[]},{"level":3,"title":"Enable gas (binary)","slug":"enable-gas-binary","link":"#enable-gas-binary","children":[]},{"level":3,"title":"Invert logic gas (binary)","slug":"invert-logic-gas-binary","link":"#invert-logic-gas-binary","children":[]},{"level":3,"title":"High gas (numeric)","slug":"high-gas-numeric","link":"#high-gas-numeric","children":[]},{"level":3,"title":"Low gas (numeric)","slug":"low-gas-numeric","link":"#low-gas-numeric","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/EFEKTA_iAQ_S_II.md"}')}}]);