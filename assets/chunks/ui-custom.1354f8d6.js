import{d as r,n as d,q as i,e as l,f as _,s as u,o as p,c as f}from"../app.7e694214.js";const A=r({__name:"VPCarbonAds",setup(m){const{theme:o}=d(),n=o.value.carbonAds,{isAsideEnabled:a}=i(),s=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,s.value.appendChild(e)}}return n&&_(()=>{a.value?c():u(a,e=>e&&c())}),(e,b)=>(p(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:s},null,512))}});export{A as default};
