"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34013],{41948:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>a,data:()=>s});var i=t(6254);const l={},a=(0,t(32860).A)(l,[["render",function(e,n){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n[8]||(n[8]=(0,i.Lk)("h1",{id:"lidl-fb20-002",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#lidl-fb20-002"},[(0,i.Lk)("span",null,"Lidl FB20-002")])],-1)),(0,i.Lk)("table",null,[n[6]||(n[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[n[2]||(n[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"FB20-002")],-1)),(0,i.Lk)("tr",null,[n[1]||(n[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Lidl"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.eW)("Lidl")]))),_:1})])]),n[3]||(n[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Livarno Lux switch and dimming light remote control")],-1)),n[4]||(n[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"action")],-1)),n[5]||(n[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FB20-002.png",alt:"Lidl FB20-002"})])],-1))])]),n[9]||(n[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.</p><p>For more information, refer to the <a href="https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF" target="_blank" rel="noopener noreferrer">LIDL manual</a>.</p><h3 id="direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l" tabindex="-1"><a class="header-anchor" href="#direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l"><span>Direct Pairing with end device (like Livarno Lux ceiling light 14147206L)</span></a></h3><p>If you have successfully paired the remote and compatible end device like Livarno Lux ceiling light, you can make direct pairing (binding)</p><ol><li>Turn on end device (light)</li><li>Get close with the remote to the light max 30cm</li><li>Press and hold the ON button (or OFF to remove the direct pairing) on the remote and release it when the LED on the remote starts blinking</li><li>After a few seconds, the remote&#39;s LED stays on and the light starts to pulse. The pairing is done.</li></ol><p>Note: Be sure to make a direct pairing after you pair both devices with Z2M.</p><h3 id="on-button" tabindex="-1"><a class="header-anchor" href="#on-button"><span>On Button</span></a></h3><p>The &quot;On&quot; button sends the event only once. The remote remembers the last pressed button and ignores all consequent button presses. More info on the <a href="https://github.com/Koenkk/zigbee2mqtt/issues/6509" target="_blank" rel="noopener noreferrer">issue</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',11)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>n[7]||(n[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,i.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p>',5))])}]]),s=JSON.parse('{"path":"/devices/FB20-002.html","title":"Lidl FB20-002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl FB20-002 control via MQTT","description":"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Direct Pairing with end device (like Livarno Lux ceiling light 14147206L)","slug":"direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l","link":"#direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l","children":[]},{"level":3,"title":"On Button","slug":"on-button","link":"#on-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744053939000},"filePathRelative":"devices/FB20-002.md"}')}}]);