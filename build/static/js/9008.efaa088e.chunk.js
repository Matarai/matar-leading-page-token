"use strict";(self.webpackChunkmatar_landing_page=self.webpackChunkmatar_landing_page||[]).push([[9008],{69008:(t,e,n)=>{n.d(e,{PhantomConnector:()=>u});var i=n(74948),s=n(26440),c=n(43139),o=n(27064),a=n(17008),h=n(72178),r=n(82928),d=(n(16432),new WeakMap);class u extends a.InjectedConnector{constructor(t){const e={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:r.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,s._)(this,"id",o.w.phantom),(0,i._)(this,d,{writable:!0,value:void 0}),(0,i.a)(this,d,e.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,n;const a=await this.getProvider();if(!a)throw new c.a;this.setupListeners(),this.emit("message",{type:"connecting"});let r=null;if((0,i.b)(this,d)&&null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){r=await this.getAccount().catch((()=>null));if(!!r)try{await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(s){if(this.isUserRejectedRequestError(s))throw new c.U(s)}}if(!r){const t=await a.request({method:"eth_requestAccounts"});r=h.getAddress(t[0])}let u=await this.getChainId(),w=this.isChainUnsupported(u);if(t.chainId&&u!==t.chainId)try{await this.switchChain(t.chainId),u=t.chainId,w=this.isChainUnsupported(t.chainId)}catch(o){console.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(n=this.options)&&void 0!==n&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const l={chain:{id:u,unsupported:w},provider:a,account:r};return this.emit("connect",l),l}catch(s){if(this.isUserRejectedRequestError(s))throw new c.U(s);if(-32002===s.code)throw new c.R(s);throw s}}async switchAccount(){const t=await this.getProvider();await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}}}]);
//# sourceMappingURL=9008.efaa088e.chunk.js.map