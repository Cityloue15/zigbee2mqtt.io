"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24825],{77309:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>r,data:()=>n});var o=i(6254);const a={},r=(0,i(32860).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"efekta-efekta-eth102z",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-eth102z"},[(0,o.Lk)("span",null,"EFEKTA EFEKTA_eTH102z")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EFEKTA_eTH102z")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Temperature and humidity sensor with e-ink1.02, date, termostat, hygrostat")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"temperature, humidity, battery, voltage, battery_low, reading_interval, config_report_enable, comparison_previous_data, enable_temperature, invert_logic_temperature, invert, high_temperature, low_temperature, enable_humidity, invert_logic_humidity, high_humidity, low_humidity")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_eTH102z.png",alt:"EFEKTA EFEKTA_eTH102z"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Empty battery indicator. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="reading-interval-numeric" tabindex="-1"><a class="header-anchor" href="#reading-interval-numeric"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval in seconds, by default 30 seconds. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="config-report-enable-binary" tabindex="-1"><a class="header-anchor" href="#config-report-enable-binary"><span>Config report enable (binary)</span></a></h3><p>Enable reporting based on reporting configuration. Value can be found in the published state on the <code>config_report_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_report_enable&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> config report enable is ON, if <code>OFF</code> OFF.</p><h3 id="comparison-previous-data-binary" tabindex="-1"><a class="header-anchor" href="#comparison-previous-data-binary"><span>Comparison previous data (binary)</span></a></h3><p>Enable сontrol of comparison with previous data. Value can be found in the published state on the <code>comparison_previous_data</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comparison_previous_data&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> comparison previous data is ON, if <code>OFF</code> OFF.</p><h3 id="enable-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-temperature-binary"><span>Enable temperature (binary)</span></a></h3><p>Enable Temperature Control. Value can be found in the published state on the <code>enable_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable temperature is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-temperature-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-temperature-binary"><span>Invert logic temperature (binary)</span></a></h3><p>Invert Logic Temperature Control. Value can be found in the published state on the <code>invert_logic_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic temperature is ON, if <code>OFF</code> OFF.</p><h3 id="invert-enum" tabindex="-1"><a class="header-anchor" href="#invert-enum"><span>Invert (enum)</span></a></h3><p>Invert display color. Value can be found in the published state on the <code>invert</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert&quot;: NEW_VALUE}</code>. The possible values are: <code>BW</code>, <code>WB</code>.</p><h3 id="high-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-numeric"><span>High temperature (numeric)</span></a></h3><p>Setting High Temperature Border. Value can be found in the published state on the <code>high_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="low-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-numeric"><span>Low temperature (numeric)</span></a></h3><p>Setting Low Temperature Border. Value can be found in the published state on the <code>low_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="enable-humidity-binary" tabindex="-1"><a class="header-anchor" href="#enable-humidity-binary"><span>Enable humidity (binary)</span></a></h3><p>Enable Humidity Control. Value can be found in the published state on the <code>enable_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable humidity is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-humidity-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-humidity-binary"><span>Invert logic humidity (binary)</span></a></h3><p>Invert Logic Humidity Control. Value can be found in the published state on the <code>invert_logic_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic humidity is ON, if <code>OFF</code> OFF.</p><h3 id="high-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#high-humidity-numeric"><span>High humidity (numeric)</span></a></h3><p>Setting High Humidity Border. Value can be found in the published state on the <code>high_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p><h3 id="low-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#low-humidity-numeric"><span>Low humidity (numeric)</span></a></h3><p>Setting Low Humidity Border. Value can be found in the published state on the <code>low_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p>',36))])}]]),n=JSON.parse('{"path":"/devices/EFEKTA_eTH102z.html","title":"EFEKTA EFEKTA_eTH102z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_eTH102z control via MQTT","description":"Integrate your EFEKTA EFEKTA_eTH102z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Reading interval (numeric)","slug":"reading-interval-numeric","link":"#reading-interval-numeric","children":[]},{"level":3,"title":"Config report enable (binary)","slug":"config-report-enable-binary","link":"#config-report-enable-binary","children":[]},{"level":3,"title":"Comparison previous data (binary)","slug":"comparison-previous-data-binary","link":"#comparison-previous-data-binary","children":[]},{"level":3,"title":"Enable temperature (binary)","slug":"enable-temperature-binary","link":"#enable-temperature-binary","children":[]},{"level":3,"title":"Invert logic temperature (binary)","slug":"invert-logic-temperature-binary","link":"#invert-logic-temperature-binary","children":[]},{"level":3,"title":"Invert (enum)","slug":"invert-enum","link":"#invert-enum","children":[]},{"level":3,"title":"High temperature (numeric)","slug":"high-temperature-numeric","link":"#high-temperature-numeric","children":[]},{"level":3,"title":"Low temperature (numeric)","slug":"low-temperature-numeric","link":"#low-temperature-numeric","children":[]},{"level":3,"title":"Enable humidity (binary)","slug":"enable-humidity-binary","link":"#enable-humidity-binary","children":[]},{"level":3,"title":"Invert logic humidity (binary)","slug":"invert-logic-humidity-binary","link":"#invert-logic-humidity-binary","children":[]},{"level":3,"title":"High humidity (numeric)","slug":"high-humidity-numeric","link":"#high-humidity-numeric","children":[]},{"level":3,"title":"Low humidity (numeric)","slug":"low-humidity-numeric","link":"#low-humidity-numeric","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/EFEKTA_eTH102z.md"}')}}]);