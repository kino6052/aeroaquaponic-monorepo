(this["webpackJsonptdd-react-form"]=this["webpackJsonptdd-react-form"]||[]).push([[0],{17:function(e,t,n){e.exports=n(23)},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),u=n(10),l=n(15),i=n(24);class r{}r.EventSubject=new l.a,r.unboxInputEvent=e=>{var t;return null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value},r.OnChangeSubject=()=>r.EventSubject.pipe(Object(i.a)(([e])=>"change"===e)),r.OnClickSubject=()=>r.EventSubject.pipe(Object(i.a)(([e])=>"click"===e)),r.OnFocusSubject=()=>r.EventSubject.pipe(Object(i.a)(([e])=>"focus"===e));n(22),n(11);var s=n(25);const o=new l.a;var d=n(26);class b{constructor(){this.StateSubject=new d.a([]),this.getInput=e=>this.StateSubject.getValue().find(({id:t})=>t===e),this.getValue=e=>{var t;return null===(t=this.getInput(e))||void 0===t?void 0:t.value},this.setInput=e=>{const t=[e,...this.StateSubject.getValue()].filter((e,t,n)=>n.indexOf(e)===t);this.StateSubject.next(t)}}}b.instance=void 0,b.resetInstance=()=>{b.instance=void 0},b.getInstance=()=>(b.instance||(b.instance=new b),b.instance);const p=e=>{const t=e.children,n=c.Children.map(t,e=>c.isValidElement(e)?c.cloneElement(e,{onClick:t=>{t.preventDefault(),r.EventSubject.next(["click",e.props.id,""])},onChange:t=>{var n;t.preventDefault(),r.EventSubject.next(["change",e.props.id,null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value])},onFocus:t=>{t.preventDefault(),r.EventSubject.next(["focus",e.props.id,""])}}):e);return c.createElement(c.Fragment,null,n)},v=e=>{const t=e.inputs;return c.useEffect(()=>{o.next()},[]),c.createElement("form",null,t.map(e=>c.createElement("div",{key:e.id,style:{flexDirection:"column"}},c.createElement("div",null,c.createElement(p,null,c.createElement("input",{disabled:e.isDisabled,id:e.id,value:e.value})),c.createElement(p,null,c.createElement("button",{id:"".concat(e.id,"-button")},"Validate"))),e.error&&c.createElement("p",{style:{color:"red"}},e.error))),c.createElement(p,null,c.createElement("button",{id:"submit"},"Submit")))};function m(){const e=(e=>{const t=Object(c.useState)(e.getValue()),n=Object(u.a)(t,2),a=n[0],l=n[1];Object(c.useEffect)(()=>{const t=e.pipe(Object(s.a)(1)).subscribe(e=>l(e));return()=>t.unsubscribe()},[e]);return[a,t=>e.next(t)]})(b.getInstance().StateSubject),t=Object(u.a)(e,1)[0];return c.createElement("div",{className:"App"},c.createElement(v,{inputs:t}))}const E=document.getElementById("root");Object(a.render)(c.createElement(m,null),E)}},[[17,1,2]]]);
//# sourceMappingURL=main.68f61f0f.chunk.js.map