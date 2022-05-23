"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6174],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),a=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),P=a(o),d=n,m=P["".concat(p,".").concat(d)]||P[d]||u[d]||l;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=P;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var a=2;a<l;a++)i[a]=o[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}P.displayName="MDXCreateElement"},6379:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var r=o(7462),n=o(3366),l=(o(7294),o(3905)),i=["components"],c={title:"\u5404\u79cd\u534f\u8bae\u4ecb\u7ecd",date:"2022-04-21 19:00:00 +0800",tags:["protocol"]},p=void 0,a={unversionedId:"Protocol/summary",id:"Protocol/summary",title:"\u5404\u79cd\u534f\u8bae\u4ecb\u7ecd",description:"TCP - \u4f20\u8f93\u63a7\u5236\u534f\u8bae",source:"@site/docs/Protocol/02-summary.md",sourceDirName:"Protocol",slug:"/Protocol/summary",permalink:"/docs/Protocol/summary",draft:!1,tags:[{label:"protocol",permalink:"/docs/tags/protocol"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u5404\u79cd\u534f\u8bae\u4ecb\u7ecd",date:"2022-04-21 19:00:00 +0800",tags:["protocol"]},sidebar:"tutorialSidebar",previous:{title:"TCP \u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b\u4ecb\u7ecd",permalink:"/docs/Protocol/tcpip-intro"},next:{title:"Redis \u7f13\u5b58\u7a7f\u900f\u3001\u96ea\u5d29\u7b49\u95ee\u9898",permalink:"/docs/Redis/trouble"}},s={},u=[{value:"TCP - \u4f20\u8f93\u63a7\u5236\u534f\u8bae",id:"tcp---\u4f20\u8f93\u63a7\u5236\u534f\u8bae",level:3},{value:"IP - \u7f51\u9645\u534f\u8bae\uff08Internet Protocol\uff09",id:"ip---\u7f51\u9645\u534f\u8baeinternet-protocol",level:3},{value:"UDP - \u7528\u6237\u6570\u636e\u62a5\u534f\u8bae",id:"udp---\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae",level:3},{value:"HTTP - \u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae(Hyper Text Transfer Protocol)",id:"http---\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8baehyper-text-transfer-protocol",level:3},{value:"HTTPS - \u5b89\u5168\u7684 HTTP\uff08HTTP Secure\uff09",id:"https---\u5b89\u5168\u7684-httphttp-secure",level:3},{value:"SSL - \u5b89\u5168\u5957\u63a5\u5b57\u5c42\uff08Secure Sockets Layer\uff09",id:"ssl---\u5b89\u5168\u5957\u63a5\u5b57\u5c42secure-sockets-layer",level:3},{value:"SMTP - \u7b80\u6613\u90ae\u4ef6\u4f20\u8f93\u534f\u8bae\uff08Simple Mail Transfer Protocol\uff09",id:"smtp---\u7b80\u6613\u90ae\u4ef6\u4f20\u8f93\u534f\u8baesimple-mail-transfer-protocol",level:3},{value:"MIME - \u591a\u7528\u9014\u56e0\u7279\u7f51\u90ae\u4ef6\u6269\u5c55\uff08Multi-purpose Internet Mail Extensions\uff09",id:"mime---\u591a\u7528\u9014\u56e0\u7279\u7f51\u90ae\u4ef6\u6269\u5c55multi-purpose-internet-mail-extensions",level:3},{value:"IMAP - \u56e0\u7279\u7f51\u6d88\u606f\u8bbf\u95ee\u534f\u8bae\uff08Internet Message Access Protocol\uff09",id:"imap---\u56e0\u7279\u7f51\u6d88\u606f\u8bbf\u95ee\u534f\u8baeinternet-message-access-protocol",level:3},{value:"POP - \u90ae\u5c40\u534f\u8bae\uff08Post Office Protocol\uff09",id:"pop---\u90ae\u5c40\u534f\u8baepost-office-protocol",level:3},{value:"FTP - \u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff08File Transfer Protocol\uff09",id:"ftp---\u6587\u4ef6\u4f20\u8f93\u534f\u8baefile-transfer-protocol",level:3},{value:"NTP - \u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08Network Time Protocol\uff09",id:"ntp---\u7f51\u7edc\u65f6\u95f4\u534f\u8baenetwork-time-protocol",level:3},{value:"DHCP - \u52a8\u6001\u4e3b\u673a\u914d\u7f6e\u534f\u8bae\uff08Dynamic Host Configuration Protocol\uff09",id:"dhcp---\u52a8\u6001\u4e3b\u673a\u914d\u7f6e\u534f\u8baedynamic-host-configuration-protocol",level:3},{value:"SNMP - \u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8bae\uff08Simple Network Management Protocol\uff09",id:"snmp---\u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8baesimple-network-management-protocol",level:3},{value:"LDAP - \u8f7b\u91cf\u7ea7\u7684\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\uff08Lightweight Directory Access Protocol\uff09",id:"ldap---\u8f7b\u91cf\u7ea7\u7684\u76ee\u5f55\u8bbf\u95ee\u534f\u8baelightweight-directory-access-protocol",level:3},{value:"ICMP - \u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8bae\uff08Internet Control Message Protocol\uff09",id:"icmp---\u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8baeinternet-control-message-protocol",level:3},{value:"ARP - \u5730\u5740\u89e3\u6790\u534f\u8bae\uff08Address Resolution Protocol\uff09",id:"arp---\u5730\u5740\u89e3\u6790\u534f\u8baeaddress-resolution-protocol",level:3},{value:"RARP - \u53cd\u5411\u5730\u5740\u8f6c\u6362\u534f\u8bae\uff08Reverse Address Resolution Protocol\uff09",id:"rarp---\u53cd\u5411\u5730\u5740\u8f6c\u6362\u534f\u8baereverse-address-resolution-protocol",level:3},{value:"BOOTP - \u81ea\u4e3e\u534f\u8bae\uff08Boot Protocol\uff09",id:"bootp---\u81ea\u4e3e\u534f\u8baeboot-protocol",level:3},{value:"PPTP - \u70b9\u5bf9\u70b9\u96a7\u9053\u534f\u8bae\uff08Point to Point Tunneling Protocol\uff09",id:"pptp---\u70b9\u5bf9\u70b9\u96a7\u9053\u534f\u8baepoint-to-point-tunneling-protocol",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:3}],P={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},P,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"tcp---\u4f20\u8f93\u63a7\u5236\u534f\u8bae"},"TCP - \u4f20\u8f93\u63a7\u5236\u534f\u8bae"),(0,l.kt)("p",null,"TCP \u7528\u4e8e\u4ece\u5e94\u7528\u7a0b\u5e8f\u5230\u7f51\u7edc\u7684\u6570\u636e\u4f20\u8f93\u63a7\u5236\u3002\nTCP \u8d1f\u8d23\u5728\u6570\u636e\u4f20\u9001\u4e4b\u524d\u5c06\u5b83\u4eec\u5206\u5272\u4e3a IP \u5305\uff0c\u7136\u540e\u5728\u5b83\u4eec\u5230\u8fbe\u7684\u65f6\u5019\u5c06\u5b83\u4eec\u91cd\u7ec4\u3002"),(0,l.kt)("h3",{id:"ip---\u7f51\u9645\u534f\u8baeinternet-protocol"},"IP - \u7f51\u9645\u534f\u8bae\uff08Internet Protocol\uff09"),(0,l.kt)("p",null,"IP \u8d1f\u8d23\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\nIP \u8d1f\u8d23\u5728\u56e0\u7279\u7f51\u4e0a\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u5305\u3002"),(0,l.kt)("h3",{id:"udp---\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae"},"UDP - \u7528\u6237\u6570\u636e\u62a5\u534f\u8bae"),(0,l.kt)("p",null,"UDP \u662f\u9762\u5411\u65e0\u8fde\u63a5\u7684\u901a\u8baf\u534f\u8bae\uff0cUDP\u6570\u636e\u5305\u62ec\u76ee\u7684\u7aef\u53e3\u53f7\u548c\u6e90\u7aef\u53e3\u53f7\u4fe1\u606f\uff0c\u7531\u4e8e\u901a\u8baf\u4e0d\u9700\u8981\u8fde\u63a5\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b9e\u73b0\u5e7f\u64ad\u53d1\u9001\u3002\nUDP\u901a\u8baf\u65f6\u4e0d\u9700\u8981\u63a5\u6536\u65b9\u786e\u8ba4\uff0c\u5c5e\u4e8e\u4e0d\u53ef\u9760\u7684\u4f20\u8f93\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e22\u5305\u73b0\u8c61\uff0c\u5b9e\u9645\u5e94\u7528\u4e2d\u8981\u6c42\u7a0b\u5e8f\u5458\u7f16\u7a0b\u9a8c\u8bc1\u3002\nUDP\u4e0eTCP\u4f4d\u4e8e\u540c\u4e00\u5c42\uff0c\u4f46\u5b83\u4e0d\u7ba1\u6570\u636e\u5305\u7684\u987a\u5e8f\u3001\u9519\u8bef\u6216\u91cd\u53d1\u3002\u56e0\u6b64\uff0cUDP\u4e0d\u88ab\u5e94\u7528\u4e8e\u90a3\u4e9b\u4f7f\u7528\u865a\u7535\u8def\u7684\u9762\u5411\u8fde\u63a5\u7684\u670d\u52a1\uff0c\nUDP\u4e3b\u8981\u7528\u4e8e\u90a3\u4e9b\u9762\u5411\u67e5\u8be2---\u5e94\u7b54\u7684\u670d\u52a1\uff0c\u4f8b\u5982NFS\u3002\u76f8\u5bf9\u4e8eFTP\u6216Telnet\uff0c\u8fd9\u4e9b\u670d\u52a1\u9700\u8981\u4ea4\u6362\u7684\u4fe1\u606f\u91cf\u8f83\u5c0f\u3002"),(0,l.kt)("h3",{id:"http---\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8baehyper-text-transfer-protocol"},"HTTP - \u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae(Hyper Text Transfer Protocol)"),(0,l.kt)("p",null,"HTTP \u8d1f\u8d23 web \u670d\u52a1\u5668\u4e0e web \u6d4f\u89c8\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\nHTTP \u7528\u4e8e\u4ece web \u5ba2\u6237\u7aef\uff08\u6d4f\u89c8\u5668\uff09\u5411 web \u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u4ece web \u670d\u52a1\u5668\u5411 web \u5ba2\u6237\u7aef\u8fd4\u56de\u5185\u5bb9\uff08\u7f51\u9875\uff09\u3002"),(0,l.kt)("h3",{id:"https---\u5b89\u5168\u7684-httphttp-secure"},"HTTPS - \u5b89\u5168\u7684 HTTP\uff08HTTP Secure\uff09"),(0,l.kt)("p",null,"HTTPS \u8d1f\u8d23\u5728 web \u670d\u52a1\u5668\u548c web \u6d4f\u89c8\u5668\u4e4b\u95f4\u7684\u5b89\u5168\u901a\u4fe1\u3002\n\u4f5c\u4e3a\u6709\u4ee3\u8868\u6027\u7684\u5e94\u7528\uff0cHTTPS \u4f1a\u7528\u4e8e\u5904\u7406\u4fe1\u7528\u5361\u4ea4\u6613\u548c\u5176\u4ed6\u7684\u654f\u611f\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"ssl---\u5b89\u5168\u5957\u63a5\u5b57\u5c42secure-sockets-layer"},"SSL - \u5b89\u5168\u5957\u63a5\u5b57\u5c42\uff08Secure Sockets Layer\uff09"),(0,l.kt)("p",null,"SSL \u534f\u8bae\u7528\u4e8e\u4e3a\u5b89\u5168\u6570\u636e\u4f20\u8f93\u52a0\u5bc6\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"smtp---\u7b80\u6613\u90ae\u4ef6\u4f20\u8f93\u534f\u8baesimple-mail-transfer-protocol"},"SMTP - \u7b80\u6613\u90ae\u4ef6\u4f20\u8f93\u534f\u8bae\uff08Simple Mail Transfer Protocol\uff09"),(0,l.kt)("p",null,"SMTP \u7528\u4e8e\u7535\u5b50\u90ae\u4ef6\u7684\u4f20\u8f93\u3002"),(0,l.kt)("h3",{id:"mime---\u591a\u7528\u9014\u56e0\u7279\u7f51\u90ae\u4ef6\u6269\u5c55multi-purpose-internet-mail-extensions"},"MIME - \u591a\u7528\u9014\u56e0\u7279\u7f51\u90ae\u4ef6\u6269\u5c55\uff08Multi-purpose Internet Mail Extensions\uff09"),(0,l.kt)("p",null,"MIME \u534f\u8bae\u4f7f SMTP \u6709\u80fd\u529b\u901a\u8fc7 TCP/IP \u7f51\u7edc\u4f20\u8f93\u591a\u5a92\u4f53\u6587\u4ef6\uff0c\u5305\u62ec\u58f0\u97f3\u3001\u89c6\u9891\u548c\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"imap---\u56e0\u7279\u7f51\u6d88\u606f\u8bbf\u95ee\u534f\u8baeinternet-message-access-protocol"},"IMAP - \u56e0\u7279\u7f51\u6d88\u606f\u8bbf\u95ee\u534f\u8bae\uff08Internet Message Access Protocol\uff09"),(0,l.kt)("p",null,"IMAP \u7528\u4e8e\u5b58\u50a8\u548c\u53d6\u56de\u7535\u5b50\u90ae\u4ef6\u3002"),(0,l.kt)("h3",{id:"pop---\u90ae\u5c40\u534f\u8baepost-office-protocol"},"POP - \u90ae\u5c40\u534f\u8bae\uff08Post Office Protocol\uff09"),(0,l.kt)("p",null,"POP \u7528\u4e8e\u4ece\u7535\u5b50\u90ae\u4ef6\u670d\u52a1\u5668\u5411\u4e2a\u4eba\u7535\u8111\u4e0b\u8f7d\u7535\u5b50\u90ae\u4ef6\u3002"),(0,l.kt)("h3",{id:"ftp---\u6587\u4ef6\u4f20\u8f93\u534f\u8baefile-transfer-protocol"},"FTP - \u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff08File Transfer Protocol\uff09"),(0,l.kt)("p",null,"FTP \u8d1f\u8d23\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u6587\u4ef6\u4f20\u8f93\u3002"),(0,l.kt)("h3",{id:"ntp---\u7f51\u7edc\u65f6\u95f4\u534f\u8baenetwork-time-protocol"},"NTP - \u7f51\u7edc\u65f6\u95f4\u534f\u8bae\uff08Network Time Protocol\uff09"),(0,l.kt)("p",null,"NTP \u7528\u4e8e\u5728\u8ba1\u7b97\u673a\u4e4b\u95f4\u540c\u6b65\u65f6\u95f4\uff08\u949f\uff09\u3002"),(0,l.kt)("h3",{id:"dhcp---\u52a8\u6001\u4e3b\u673a\u914d\u7f6e\u534f\u8baedynamic-host-configuration-protocol"},"DHCP - \u52a8\u6001\u4e3b\u673a\u914d\u7f6e\u534f\u8bae\uff08Dynamic Host Configuration Protocol\uff09"),(0,l.kt)("p",null,"DHCP \u7528\u4e8e\u5411\u7f51\u7edc\u4e2d\u7684\u8ba1\u7b97\u673a\u5206\u914d\u52a8\u6001 IP \u5730\u5740\u3002"),(0,l.kt)("h3",{id:"snmp---\u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8baesimple-network-management-protocol"},"SNMP - \u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8bae\uff08Simple Network Management Protocol\uff09"),(0,l.kt)("p",null,"SNMP \u7528\u4e8e\u8ba1\u7b97\u673a\u7f51\u7edc\u7684\u7ba1\u7406\u3002"),(0,l.kt)("h3",{id:"ldap---\u8f7b\u91cf\u7ea7\u7684\u76ee\u5f55\u8bbf\u95ee\u534f\u8baelightweight-directory-access-protocol"},"LDAP - \u8f7b\u91cf\u7ea7\u7684\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\uff08Lightweight Directory Access Protocol\uff09"),(0,l.kt)("p",null,"LDAP \u7528\u4e8e\u4ece\u56e0\u7279\u7f51\u641c\u96c6\u5173\u4e8e\u7528\u6237\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"icmp---\u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8baeinternet-control-message-protocol"},"ICMP - \u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8bae\uff08Internet Control Message Protocol\uff09"),(0,l.kt)("p",null,"ICMP \u8d1f\u8d23\u7f51\u7edc\u4e2d\u7684\u9519\u8bef\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"arp---\u5730\u5740\u89e3\u6790\u534f\u8baeaddress-resolution-protocol"},"ARP - \u5730\u5740\u89e3\u6790\u534f\u8bae\uff08Address Resolution Protocol\uff09"),(0,l.kt)("p",null,"ARP - \u7528\u4e8e\u901a\u8fc7 IP \u6765\u67e5\u627e\u57fa\u4e8e IP \u5730\u5740\u7684\u8ba1\u7b97\u673a\u7f51\u5361\u7684\u786c\u4ef6\u5730\u5740\u3002"),(0,l.kt)("h3",{id:"rarp---\u53cd\u5411\u5730\u5740\u8f6c\u6362\u534f\u8baereverse-address-resolution-protocol"},"RARP - \u53cd\u5411\u5730\u5740\u8f6c\u6362\u534f\u8bae\uff08Reverse Address Resolution Protocol\uff09"),(0,l.kt)("p",null,"RARP \u7528\u4e8e\u901a\u8fc7 IP \u67e5\u627e\u57fa\u4e8e\u786c\u4ef6\u5730\u5740\u7684\u8ba1\u7b97\u673a\u7f51\u5361\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("h3",{id:"bootp---\u81ea\u4e3e\u534f\u8baeboot-protocol"},"BOOTP - \u81ea\u4e3e\u534f\u8bae\uff08Boot Protocol\uff09"),(0,l.kt)("p",null,"BOOTP \u7528\u4e8e\u4ece\u7f51\u7edc\u542f\u52a8\u8ba1\u7b97\u673a\u3002"),(0,l.kt)("h3",{id:"pptp---\u70b9\u5bf9\u70b9\u96a7\u9053\u534f\u8baepoint-to-point-tunneling-protocol"},"PPTP - \u70b9\u5bf9\u70b9\u96a7\u9053\u534f\u8bae\uff08Point to Point Tunneling Protocol\uff09"),(0,l.kt)("p",null,"PPTP \u7528\u4e8e\u79c1\u4eba\u7f51\u7edc\u4e4b\u95f4\u7684\u8fde\u63a5\uff08\u96a7\u9053\uff09\u3002"),(0,l.kt)("h3",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.runoob.com/tcpip/tcpip-protocols.html"},"TCP/IP \u534f\u8bae")))))}d.isMDXComponent=!0}}]);