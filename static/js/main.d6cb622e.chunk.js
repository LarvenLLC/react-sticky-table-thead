(this["webpackJsonpreact-sticky-table-thead-example"]=this["webpackJsonpreact-sticky-table-thead-example"]||[]).push([[0],{13:function(e,t,l){"use strict";l.r(t);l(6);var a=l(0),n=l.n(a),r=l(4),c=l.n(r),o=l(1),u=l.n(o),m=l(2),d=l.n(m);var i=function(e){var t,l;function a(t){return e.call(this,t)||this}l=e,(t=a).prototype=Object.create(l.prototype),t.prototype.constructor=t,t.__proto__=l;var r=a.prototype;return r.componentDidMount=function(){var e=this.tableContainer;d()(e).on("scroll",(function(){var e="translate(0,"+d()(this).scrollTop()+"px)";d()(this).find("thead").css("transform",e)}))},r.render=function(){var e=this,t=this.props;return n.a.createElement("div",{style:{overflow:"hidden",height:t.hiddenHorizontalScrollbar?t.height-15:""}},n.a.createElement("div",{ref:function(t){return e.tableContainer=t},className:this.props.className,style:{overflow:"auto",height:t.height,width:t.hiddenVerticalScrollbar?"calc(100% + 15px)":"100%"}},t.children))},a}(n.a.Component);i.defaultProps={height:450,hiddenVerticalScrollbar:!1,hiddenHorizontalScrollbar:!1,className:""},i.propTypes={height:u.a.number,hiddenVerticalScrollbar:u.a.bool,hiddenHorizontalScrollbar:u.a.bool,className:u.a.string};var E=i,s=function(){return n.a.createElement("div",{style:{width:250}}," ",n.a.createElement(E,{height:150}," ",n.a.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}}," ",n.a.createElement("thead",{style:{backgroundColor:"#c0c0c0"}},n.a.createElement("tr",null,n.a.createElement("th",null,"Item"),n.a.createElement("th",null,"Price (TZS)"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Onion"),n.a.createElement("td",null,"200")),n.a.createElement("tr",null,n.a.createElement("td",null,"Tomato"),n.a.createElement("td",null,"200")),n.a.createElement("tr",null,n.a.createElement("td",null,"Orange"),n.a.createElement("td",null,"200")),n.a.createElement("tr",null,n.a.createElement("td",null,"Banana"),n.a.createElement("td",null,"200")),n.a.createElement("tr",null,n.a.createElement("td",null,"Passion"),n.a.createElement("td",null,"300")),n.a.createElement("tr",null,n.a.createElement("td",null,"Mango"),n.a.createElement("td",null,"300")),n.a.createElement("tr",null,n.a.createElement("td",null,"Apple"),n.a.createElement("td",null,"500")),n.a.createElement("tr",null,n.a.createElement("td",null,"Avocado"),n.a.createElement("td",null,"500")),n.a.createElement("tr",null,n.a.createElement("td",null,"Guava"),n.a.createElement("td",null,"600")),n.a.createElement("tr",null,n.a.createElement("td",null,"Papaya"),n.a.createElement("td",null,"800")),n.a.createElement("tr",null,n.a.createElement("td",null,"Watermelon"),n.a.createElement("td",null,"1,000")),n.a.createElement("tr",null,n.a.createElement("td",null,"Pineapple"),n.a.createElement("td",null,"1,000"))))))};c.a.render(n.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,l){e.exports=l(13)},6:function(e,t,l){}},[[5,1,2]]]);
//# sourceMappingURL=main.d6cb622e.chunk.js.map