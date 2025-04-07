"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15081],{11347:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>n,data:()=>d});var a=t(6254);const s={},n=(0,t(32860).A)(s,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"yokis-mvr500e-up",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#yokis-mvr500e-up"},[(0,a.Lk)("span",null,"YOKIS MVR500E-UP")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"MVR500E-UP")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=YOKIS"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("YOKIS")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Roller shutter module 500W")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"identify, cover (state, position), power_failure_mode, reset_to_factory_settings, relaunch_ble_advert, input_mode, contact_mode, last_local_command_state, last_bp_connect_state, send_press, send_release, select_input_mode, enable_short_press, enable_long_press, long_press_duration, time_between_press, enable_R12M_long_press, enable_local_config_lock, action")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MVR500E-UP.png",alt:"YOKIS MVR500E-UP"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"https://csa-iot.org/csa_product/mvr500e-up/",target:"_blank",rel:"noopener noreferrer"},"CSA product page")])],-1)),o[10]||(o[10]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[11]||(o[11]=(0,a.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="power-failure-mode-enum" tabindex="-1"><a class="header-anchor" href="#power-failure-mode-enum"><span>Power failure mode (enum)</span></a></h3><p>Define the device behavior after power failure. Value can be found in the published state on the <code>power_failure_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_failure_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_failure_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>last_state</code>, <code>off</code>, <code>on</code>, <code>blink</code>.</p><h3 id="reset-to-factory-settings-enum" tabindex="-1"><a class="header-anchor" href="#reset-to-factory-settings-enum"><span>Reset to factory settings (enum)</span></a></h3><p>Reset setting depending on RESET ACTION value. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_to_factory_settings&quot;: NEW_VALUE}</code>. The possible values are: <code>factory_reset</code>, <code>configuration_reset</code>, <code>network_reset</code>.</p><h3 id="relaunch-ble-advert-enum" tabindex="-1"><a class="header-anchor" href="#relaunch-ble-advert-enum"><span>Relaunch ble advert (enum)</span></a></h3><p>Relaunch BLE advertising for 15 minutes. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;relaunch_ble_advert&quot;: NEW_VALUE}</code>. The possible values are: <code>relaunch_ble_advert</code>.</p><h3 id="input-mode-enum" tabindex="-1"><a class="header-anchor" href="#input-mode-enum"><span>Input mode (enum)</span></a></h3><p>Indicate how the input should be handle: - 0 -&gt; Unknow - 1 -&gt; Push button - 2 -&gt; Switch - 3 -&gt; Relay - 4 -&gt; FP_IN. Value can be found in the published state on the <code>input_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>unknown</code>, <code>push_button</code>, <code>switch</code>, <code>relay</code>, <code>fp_in</code>.</p><h3 id="contact-mode-enum" tabindex="-1"><a class="header-anchor" href="#contact-mode-enum"><span>Contact mode (enum)</span></a></h3><p>Indicate the contact nature of the entry: - 0 -&gt; NC - 1 -&gt; NO. Value can be found in the published state on the <code>contact_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;contact_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;contact_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>nc</code>, <code>no</code>.</p><h3 id="last-local-command-state-binary" tabindex="-1"><a class="header-anchor" href="#last-local-command-state-binary"><span>Last local command state (binary)</span></a></h3><p>Indicate the last known state of the local BP. Value can be found in the published state on the <code>last_local_command_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;last_local_command_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>PRESSED</code> last local command state is ON, if <code>RELEASED</code> OFF.</p><h3 id="last-bp-connect-state-binary" tabindex="-1"><a class="header-anchor" href="#last-bp-connect-state-binary"><span>Last bp connect state (binary)</span></a></h3><p>Indicate the last known state of the Bp connect. Value can be found in the published state on the <code>last_bp_connect_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;last_bp_connect_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>PRESSED</code> last bp connect state is ON, if <code>RELEASED</code> OFF.</p><h3 id="send-press-enum" tabindex="-1"><a class="header-anchor" href="#send-press-enum"><span>Send press (enum)</span></a></h3><p>Send to the server cluster a button press. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_press&quot;: NEW_VALUE}</code>. The possible values are: <code>SendPress</code>.</p><h3 id="send-release-enum" tabindex="-1"><a class="header-anchor" href="#send-release-enum"><span>Send release (enum)</span></a></h3><p>Send to the server cluster a button release. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_release&quot;: NEW_VALUE}</code>. The possible values are: <code>SendRelease</code>.</p><h3 id="select-input-mode-enum" tabindex="-1"><a class="header-anchor" href="#select-input-mode-enum"><span>Select input mode (enum)</span></a></h3><p>Change the Input mode to use switch input, wired relay or simple push button. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;select_input_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>unknown</code>, <code>push_button</code>, <code>switch</code>, <code>relay</code>, <code>fp_in</code>.</p><h3 id="enable-short-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-short-press-binary"><span>Enable short press (binary)</span></a></h3><p>Use to enable short press action. Value can be found in the published state on the <code>enable_short_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_short_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_short_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable short press is ON, if <code>OFF</code> OFF.</p><h3 id="enable-long-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-long-press-binary"><span>Enable long press (binary)</span></a></h3><p>Use to enable long press action. Value can be found in the published state on the <code>enable_long_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_long_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_long_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable long press is ON, if <code>OFF</code> OFF.</p><h3 id="long-press-duration-numeric" tabindex="-1"><a class="header-anchor" href="#long-press-duration-numeric"><span>Long press duration (numeric)</span></a></h3><p>Define long Press duration in milliseconds. Value can be found in the published state on the <code>long_press_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;long_press_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_press_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ms</code>.</p><h3 id="time-between-press-numeric" tabindex="-1"><a class="header-anchor" href="#time-between-press-numeric"><span>Time between press (numeric)</span></a></h3><p>Define the maximum time between 2 press to keep in a sequence (In milliseconds). Value can be found in the published state on the <code>time_between_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_between_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_between_press&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>600</code>. The unit of this value is <code>ms</code>.</p><h3 id="enable-r12m-long-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-r12m-long-press-binary"><span>Enable R12M long press (binary)</span></a></h3><p>Enable R12M Long Press action. Value can be found in the published state on the <code>enable_R12M_long_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_R12M_long_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_R12M_long_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable R12M long press is ON, if <code>OFF</code> OFF.</p><h3 id="enable-local-config-lock-binary" tabindex="-1"><a class="header-anchor" href="#enable-local-config-lock-binary"><span>Enable local config lock (binary)</span></a></h3><p>Disable local configuration. Value can be found in the published state on the <code>enable_local_config_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_local_config_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_local_config_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable local config lock is ON, if <code>OFF</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>close</code>, <code>stop</code>.</p>',40))])}]]),d=JSON.parse('{"path":"/devices/MVR500E-UP.html","title":"YOKIS MVR500E-UP control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"YOKIS MVR500E-UP control via MQTT","description":"Integrate your YOKIS MVR500E-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-12-29T16:26:41.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Power failure mode (enum)","slug":"power-failure-mode-enum","link":"#power-failure-mode-enum","children":[]},{"level":3,"title":"Reset to factory settings (enum)","slug":"reset-to-factory-settings-enum","link":"#reset-to-factory-settings-enum","children":[]},{"level":3,"title":"Relaunch ble advert (enum)","slug":"relaunch-ble-advert-enum","link":"#relaunch-ble-advert-enum","children":[]},{"level":3,"title":"Input mode (enum)","slug":"input-mode-enum","link":"#input-mode-enum","children":[]},{"level":3,"title":"Contact mode (enum)","slug":"contact-mode-enum","link":"#contact-mode-enum","children":[]},{"level":3,"title":"Last local command state (binary)","slug":"last-local-command-state-binary","link":"#last-local-command-state-binary","children":[]},{"level":3,"title":"Last bp connect state (binary)","slug":"last-bp-connect-state-binary","link":"#last-bp-connect-state-binary","children":[]},{"level":3,"title":"Send press (enum)","slug":"send-press-enum","link":"#send-press-enum","children":[]},{"level":3,"title":"Send release (enum)","slug":"send-release-enum","link":"#send-release-enum","children":[]},{"level":3,"title":"Select input mode (enum)","slug":"select-input-mode-enum","link":"#select-input-mode-enum","children":[]},{"level":3,"title":"Enable short press (binary)","slug":"enable-short-press-binary","link":"#enable-short-press-binary","children":[]},{"level":3,"title":"Enable long press (binary)","slug":"enable-long-press-binary","link":"#enable-long-press-binary","children":[]},{"level":3,"title":"Long press duration (numeric)","slug":"long-press-duration-numeric","link":"#long-press-duration-numeric","children":[]},{"level":3,"title":"Time between press (numeric)","slug":"time-between-press-numeric","link":"#time-between-press-numeric","children":[]},{"level":3,"title":"Enable R12M long press (binary)","slug":"enable-r12m-long-press-binary","link":"#enable-r12m-long-press-binary","children":[]},{"level":3,"title":"Enable local config lock (binary)","slug":"enable-local-config-lock-binary","link":"#enable-local-config-lock-binary","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/MVR500E-UP.md"}')}}]);