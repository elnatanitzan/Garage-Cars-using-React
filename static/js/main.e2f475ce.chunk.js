(this["webpackJsonpfirst-app-with-itay"]=this["webpackJsonpfirst-app-with-itay"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(8),i=r.n(c),l=r(6),o=r(9),d=r(2),s=r(3),j=r(5),h=r(4),b=r(0),u=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.cars.map((function(t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("header",{children:Object(b.jsxs)("h3",{children:["Brand: ",t.brand]})}),Object(b.jsxs)("main",{children:[Object(b.jsxs)("p",{children:["Model: ",t.model]}),Object(b.jsxs)("p",{children:["Color: ",t.color]}),Object(b.jsxs)("p",{children:["Year: ",t.year]})]}),Object(b.jsx)("footer",{children:Object(b.jsx)("button",{onClick:function(){return e.props.deleteCar(t.id)},children:"Delete car"})})]},t.id)}));return Object(b.jsx)("div",{className:"cars",children:Object(b.jsx)("ul",{children:t})})}}]),r}(a.Component),O=u,m=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={fake_property:3,new_car:{brand:null,color:null,year:null,model:null}},e.handleChange=function(t){var r=Object(l.a)({},e.state.new_car);r[t.target.id]=t.target.value,e.setState({new_car:r}),console.log(e.state.new_car),console.log(t.target.id),console.log(t.target.value)},e.handleSubmit=function(t){t.preventDefault(),e.props.addCar(e.state.new_car),console.log(e.state.new_car)},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"add-car",children:[Object(b.jsx)("h3",{children:"Add new Car:"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"brand",children:"Brand:"}),Object(b.jsx)("input",{type:"text",id:"brand",onChange:this.handleChange,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"Model",children:"Model:"}),Object(b.jsx)("input",{type:"text",id:"model",onChange:this.handleChange})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"Color",children:"Color:"}),Object(b.jsx)("input",{type:"text",id:"color",onChange:this.handleChange})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"Year",children:"Year:"}),Object(b.jsx)("input",{type:"number",id:"year",onChange:this.handleChange})]})]}),Object(b.jsx)("div",{className:"button-container",children:Object(b.jsx)("button",{children:"Submit"})})]})]})}}]),r}(a.Component),p=m,y=(r(15),function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={my_cars:[{brand:"Honda",model:"Civic",color:"Black",year:2018,id:1},{brand:"Toyota",model:"Kamry",color:"White",year:2019,id:2},{brand:"Ferrari",model:"Testa rocca",color:"Red",year:2020,id:3},{brand:"Honda",model:"Civic",color:"Black",year:2018,id:4},{brand:"Toyota",model:"Kamry",color:"White",year:2019,id:5},{brand:"Ferrari",model:"Testa rocca",color:"Red",year:2020,id:6},{brand:"Honda",model:"Civic",color:"Black",year:2018,id:7},{brand:"Toyota",model:"Kamry",color:"White",year:2019,id:8},{brand:"Ferrari",model:"Testa rocca",color:"Red",year:2020,id:9}]},e.addCar=function(t){var a=Object(o.a)(e.state.my_cars);a.push(Object(l.a)(Object(l.a)({},t),{},{id:r.my_car_seq++})),e.setState({my_cars:a})},e.deleteCar=function(t){var r=e.state.my_cars.filter((function(e){return e.id!==t}));e.setState({my_cars:r})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"app-header",children:Object(b.jsx)("h1",{children:"Garage"})}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(p,{addCar:this.addCar}),Object(b.jsx)(O,{cars:this.state.my_cars,deleteCar:this.deleteCar})]})]})}}]),r}(a.Component));y.my_car_seq=10;var x=y;i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e2f475ce.chunk.js.map