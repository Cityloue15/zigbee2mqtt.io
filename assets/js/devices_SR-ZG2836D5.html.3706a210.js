"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45249],{6880:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>c});var n=t(6254);const s={},a=(0,t(32860).A)(s,[["render",function(e,o){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[o[8]||(o[8]=(0,n.Lk)("h1",{id:"sunricher-sr-zg2836d5",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg2836d5"},[(0,n.Lk)("span",null,"Sunricher SR-ZG2836D5")])],-1)),(0,n.Lk)("table",null,[o[6]||(o[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[o[2]||(o[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SR-ZG2836D5")],-1)),(0,n.Lk)("tr",null,[o[1]||(o[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Sunricher"},{default:(0,n.k6)((()=>o[0]||(o[0]=[(0,n.eW)("Sunricher")]))),_:1})])]),o[3]||(o[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee smart remote")],-1)),o[4]||(o[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action")],-1)),o[5]||(o[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG2836D5.png",alt:"Sunricher SR-ZG2836D5"})])],-1))])]),o[9]||(o[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>o[7]||(o[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_to_level</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_stop</code>, <code>open</code>, <code>close</code>, <code>stop</code>, <code>color_temperature_move_stop</code>, <code>color_temperature_move_up</code>, <code>color_temperature_move_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>move_to_hue_and_saturation</code>, <code>color_hue_step_up</code>, <code>color_hue_step_down</code>, <code>color_saturation_step_up</code>, <code>color_saturation_step_down</code>, <code>color_loop_set</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>move_to_hue</code>, <code>recall</code>, <code>store</code>, <code>add</code>, <code>remove</code>, <code>remove_all</code>.</p>',7))])}]]),c=JSON.parse('{"path":"/devices/SR-ZG2836D5.html","title":"Sunricher SR-ZG2836D5 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG2836D5 control via MQTT","description":"Integrate your Sunricher SR-ZG2836D5 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/SR-ZG2836D5.md"}')}}]);