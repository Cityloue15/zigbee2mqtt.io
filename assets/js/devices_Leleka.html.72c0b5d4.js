"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96496],{39918:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>d});var i=t(6254);const a={},c=(0,t(32860).A)(a,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[11]||(o[11]=(0,i.Lk)("h1",{id:"mindy-leleka",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#mindy-leleka"},[(0,i.Lk)("span",null,"MindY Leleka")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"Leleka")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=MindY"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("MindY")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Advanced Environmental Monitoring Device")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"last_boot, wifi, ip_address, temperature, humidity, pressure, co2, illuminance, light (state, brightness), identify, read_interval, night_mode, night_on_time, night_off_time, co2_control, co2_invert, co2_level_high, co2_level_low, co2_auto_calibration, co2_forced_recalibration, co2_factory_reset, lux_control, lux_invert, lux_level_high, lux_level_low, offset_illuminance, temperature_sensor, offset_temperature, offset_humidity, offset_pressure")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/Leleka.png",alt:"MindY Leleka"})])],-1))])]),o[12]||(o[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[o[8]||(o[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,i.eW)("."))]),o[13]||(o[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[10]||(o[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,i.Fv)('<ul><li><p><code>last_boot_update</code>: Interval for request boot datetime from device. (default 60 seconds). The value must be a number with a minimum value of <code>10</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="last-boot-text" tabindex="-1"><a class="header-anchor" href="#last-boot-text"><span>Last boot (text)</span></a></h3><p>Device boot date and time. Value can be found in the published state on the <code>last_boot</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;last_boot&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="wifi-binary" tabindex="-1"><a class="header-anchor" href="#wifi-binary"><span>Wifi (binary)</span></a></h3><p>Device WiFi state. Value can be found in the published state on the <code>wifi</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;wifi&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;wifi&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> wifi is ON, if <code>OFF</code> OFF.</p><h3 id="ip-address-text" tabindex="-1"><a class="header-anchor" href="#ip-address-text"><span>Ip address (text)</span></a></h3><p>Device IP address. Value can be found in the published state on the <code>ip_address</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pressure&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="read-interval-numeric" tabindex="-1"><a class="header-anchor" href="#read-interval-numeric"><span>Read interval (numeric)</span></a></h3><p>Read interval of sensors. Default 30. Value can be found in the published state on the <code>read_interval</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;read_interval&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;read_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>600</code>. The unit of this value is <code>seconds</code>.</p><h3 id="night-mode-binary" tabindex="-1"><a class="header-anchor" href="#night-mode-binary"><span>Night mode (binary)</span></a></h3><p>Turn OFF LED at night. Value can be found in the published state on the <code>night_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night mode is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-time-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-time-numeric"><span>Night on time (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_on_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_on_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-time-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-time-numeric"><span>Night off time (numeric)</span></a></h3><p>Night mode deactivation time. Value can be found in the published state on the <code>night_off_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_off_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="co2-control-binary" tabindex="-1"><a class="header-anchor" href="#co2-control-binary"><span>Co2 control (binary)</span></a></h3><p>Enable CO2 bind-control. Value can be found in the published state on the <code>co2_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_control&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> co2 control is ON, if <code>OFF</code> OFF.</p><h3 id="co2-invert-binary" tabindex="-1"><a class="header-anchor" href="#co2-invert-binary"><span>Co2 invert (binary)</span></a></h3><p>Invert CO2 control logic. Value can be found in the published state on the <code>co2_invert</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_invert&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_invert&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> co2 invert is ON, if <code>OFF</code> OFF.</p><h3 id="co2-level-high-numeric" tabindex="-1"><a class="header-anchor" href="#co2-level-high-numeric"><span>Co2 level high (numeric)</span></a></h3><p>High CO2 threshold. Value can be found in the published state on the <code>co2_level_high</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_level_high&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_level_high&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>2000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="co2-level-low-numeric" tabindex="-1"><a class="header-anchor" href="#co2-level-low-numeric"><span>Co2 level low (numeric)</span></a></h3><p>Low CO2 threshold. Value can be found in the published state on the <code>co2_level_low</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_level_low&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_level_low&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>2000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="co2-auto-calibration-binary" tabindex="-1"><a class="header-anchor" href="#co2-auto-calibration-binary"><span>Co2 auto calibration (binary)</span></a></h3><p>Automatic self calibration. Value can be found in the published state on the <code>co2_auto_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_auto_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_auto_calibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> co2 auto calibration is ON, if <code>OFF</code> OFF.</p><h3 id="co2-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#co2-forced-recalibration-numeric"><span>Co2 forced recalibration (numeric)</span></a></h3><p>Start FRC by setting the value. Value can be found in the published state on the <code>co2_forced_recalibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_forced_recalibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="co2-factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#co2-factory-reset-binary"><span>Co2 factory reset (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>co2_factory_reset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_factory_reset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> co2 factory reset is ON, if <code>OFF</code> OFF.</p><h3 id="lux-control-binary" tabindex="-1"><a class="header-anchor" href="#lux-control-binary"><span>Lux control (binary)</span></a></h3><p>Enable illuminance bind-control. Value can be found in the published state on the <code>lux_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lux_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lux_control&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> lux control is ON, if <code>OFF</code> OFF.</p><h3 id="lux-invert-binary" tabindex="-1"><a class="header-anchor" href="#lux-invert-binary"><span>Lux invert (binary)</span></a></h3><p>Invert illuminance control logic. Value can be found in the published state on the <code>lux_invert</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lux_invert&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lux_invert&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> lux invert is ON, if <code>OFF</code> OFF.</p><h3 id="lux-level-high-numeric" tabindex="-1"><a class="header-anchor" href="#lux-level-high-numeric"><span>Lux level high (numeric)</span></a></h3><p>High illuminance threshold. Value can be found in the published state on the <code>lux_level_high</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lux_level_high&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lux_level_high&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>10000</code>. The unit of this value is <code>lx</code>.</p><h3 id="lux-level-low-numeric" tabindex="-1"><a class="header-anchor" href="#lux-level-low-numeric"><span>Lux level low (numeric)</span></a></h3><p>Low illuminance threshold. Value can be found in the published state on the <code>lux_level_low</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lux_level_low&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lux_level_low&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>10000</code>. The unit of this value is <code>lx</code>.</p><h3 id="offset-illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#offset-illuminance-numeric"><span>Offset illuminance (numeric)</span></a></h3><p>Adjust illuminance. Value can be found in the published state on the <code>offset_illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;offset_illuminance&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;offset_illuminance&quot;: NEW_VALUE}</code>. The minimal value is <code>-500</code> and the maximum value is <code>500</code>. The unit of this value is <code>lx</code>.</p><h3 id="temperature-sensor-enum" tabindex="-1"><a class="header-anchor" href="#temperature-sensor-enum"><span>Temperature sensor (enum)</span></a></h3><p>Active temperature sensor. Value can be found in the published state on the <code>temperature_sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>CPU</code>, <code>SCD4X</code>, <code>BMP280</code>.</p><h3 id="offset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#offset-temperature-numeric"><span>Offset temperature (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>offset_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;offset_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;offset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="offset-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#offset-humidity-numeric"><span>Offset humidity (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>offset_humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;offset_humidity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;offset_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="offset-pressure-numeric" tabindex="-1"><a class="header-anchor" href="#offset-pressure-numeric"><span>Offset pressure (numeric)</span></a></h3><p>Adjust pressure. Value can be found in the published state on the <code>offset_pressure</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;offset_pressure&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;offset_pressure&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>kPa</code>.</p>',73))])}]]),d=JSON.parse('{"path":"/devices/Leleka.html","title":"MindY Leleka control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"MindY Leleka control via MQTT","description":"Integrate your MindY Leleka via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Last boot (text)","slug":"last-boot-text","link":"#last-boot-text","children":[]},{"level":3,"title":"Wifi (binary)","slug":"wifi-binary","link":"#wifi-binary","children":[]},{"level":3,"title":"Ip address (text)","slug":"ip-address-text","link":"#ip-address-text","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Read interval (numeric)","slug":"read-interval-numeric","link":"#read-interval-numeric","children":[]},{"level":3,"title":"Night mode (binary)","slug":"night-mode-binary","link":"#night-mode-binary","children":[]},{"level":3,"title":"Night on time (numeric)","slug":"night-on-time-numeric","link":"#night-on-time-numeric","children":[]},{"level":3,"title":"Night off time (numeric)","slug":"night-off-time-numeric","link":"#night-off-time-numeric","children":[]},{"level":3,"title":"Co2 control (binary)","slug":"co2-control-binary","link":"#co2-control-binary","children":[]},{"level":3,"title":"Co2 invert (binary)","slug":"co2-invert-binary","link":"#co2-invert-binary","children":[]},{"level":3,"title":"Co2 level high (numeric)","slug":"co2-level-high-numeric","link":"#co2-level-high-numeric","children":[]},{"level":3,"title":"Co2 level low (numeric)","slug":"co2-level-low-numeric","link":"#co2-level-low-numeric","children":[]},{"level":3,"title":"Co2 auto calibration (binary)","slug":"co2-auto-calibration-binary","link":"#co2-auto-calibration-binary","children":[]},{"level":3,"title":"Co2 forced recalibration (numeric)","slug":"co2-forced-recalibration-numeric","link":"#co2-forced-recalibration-numeric","children":[]},{"level":3,"title":"Co2 factory reset (binary)","slug":"co2-factory-reset-binary","link":"#co2-factory-reset-binary","children":[]},{"level":3,"title":"Lux control (binary)","slug":"lux-control-binary","link":"#lux-control-binary","children":[]},{"level":3,"title":"Lux invert (binary)","slug":"lux-invert-binary","link":"#lux-invert-binary","children":[]},{"level":3,"title":"Lux level high (numeric)","slug":"lux-level-high-numeric","link":"#lux-level-high-numeric","children":[]},{"level":3,"title":"Lux level low (numeric)","slug":"lux-level-low-numeric","link":"#lux-level-low-numeric","children":[]},{"level":3,"title":"Offset illuminance (numeric)","slug":"offset-illuminance-numeric","link":"#offset-illuminance-numeric","children":[]},{"level":3,"title":"Temperature sensor (enum)","slug":"temperature-sensor-enum","link":"#temperature-sensor-enum","children":[]},{"level":3,"title":"Offset temperature (numeric)","slug":"offset-temperature-numeric","link":"#offset-temperature-numeric","children":[]},{"level":3,"title":"Offset humidity (numeric)","slug":"offset-humidity-numeric","link":"#offset-humidity-numeric","children":[]},{"level":3,"title":"Offset pressure (numeric)","slug":"offset-pressure-numeric","link":"#offset-pressure-numeric","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/Leleka.md"}')}}]);