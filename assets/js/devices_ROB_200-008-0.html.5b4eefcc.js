"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43776],{84339:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>i,data:()=>o});var s=n(6254);const a={},i=(0,n(32860).A)(a,[["render",function(e,t){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[9]||(t[9]=(0,s.Lk)("h1",{id:"robb-rob-200-008-0",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#robb-rob-200-008-0"},[(0,s.Lk)("span",null,"ROBB ROB_200-008-0")])],-1)),(0,s.Lk)("table",null,[t[7]||(t[7]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"ROB_200-008-0")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=ROBB"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("ROBB")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Zigbee 4 button wall switch")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery, action")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ROB_200-008-0.png",alt:"ROBB ROB_200-008-0"})])],-1)),t[6]||(t[6]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"White-label"),(0,s.Lk)("td",null,"Sunricher SR-ZG9001K4-DIM2")],-1))])]),t[10]||(t[10]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>First reset. Press and hold the upper two buttons for 5 seconds until led lights up (continuously blue or green). Immediately short press 1, 5 times continuously, indicator flashes 3 times quickly to indicate successful reset. - depending on the model, or in a pace of 2 times per second or in a pace of 5 times per second. Second pair. Press and hold the upper two buttons for 5 seconds again, until the led turns on. Then press the &quot;0&quot; once. It should now enter pair mode an start blinking - if it does not get connected, just try the second step again.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>t[8]||(t[8]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_1</code>, <code>off_1</code>, <code>stop_1</code>, <code>brightness_move_up_1</code>, <code>brightness_move_down_1</code>, <code>brightness_stop_1</code>, <code>on_2</code>, <code>off_2</code>, <code>stop_2</code>, <code>brightness_move_up_2</code>, <code>brightness_move_down_2</code>, <code>brightness_stop_2</code>.</p>',7))])}]]),o=JSON.parse('{"path":"/devices/ROB_200-008-0.html","title":"ROBB ROB_200-008-0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ROBB ROB_200-008-0 control via MQTT","description":"Integrate your ROBB ROB_200-008-0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-29T17:11:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/ROB_200-008-0.md"}')}}]);