(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{104:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99),a(100),a(101),a(102),a(103),a(104);var o=a(20),s=a(21),m=a(22),i=a(23),u=a(9),d=a(26),E=a(15),p=a(27),h=a(91),f=a(92),g=a.n(f),N=a(8),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAMPSITES":return Object(E.a)({},e,{isLoading:!1,errMess:null,campsites:t.payload});case"CAMPSITES_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,campsites:[]});case"CAMPSITES_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(E.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(E.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(E.a)({},e,{comments:e.comments.concat(a)});default:return e}},y=[{id:0,name:"Bootstrap Outfitters",image:"/assets/images/bootstrap-logo.png",featured:!1,description:"Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."},{id:1,name:"Git Out Expeditions",image:"/assets/images/git-logo.png",featured:!1,description:"Join Git Out Expeditions to explore new horizons with a group of other adventurers!"},{id:2,name:"Mongo Fly Shop",image:"/assets/images/mongo-logo.png",featured:!1,description:"Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."},{id:3,name:"Node Outdoor Apparel",image:"/assets/images/node-logo.png",featured:!0,description:"From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered."}],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type,e},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOTIONS":return Object(E.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOTIONS_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOTIONS_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},M={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},k=a(10),S=a(56),L=a(88),C=a(154),x=a(155),j=a(156),F=a(157),I=a(158),A=a(159),D=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},T="http://localhost:3001/";function P(e){var t=e.campsite;return r.a.createElement(C.a,null,r.a.createElement(u.b,{to:"/directory/".concat(t.id)},r.a.createElement(x.a,{width:"100%",src:T+t.image,alt:t.name}),r.a.createElement(j.a,null,r.a.createElement(F.a,null,t.name))))}var _=function(e){var t=e.campsites.campsites.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-5 m-1"},r.a.createElement(P,{campsite:e}))}));return e.campsites.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(D,null))):e.campsites.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.campsites.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"Directory")),r.a.createElement("h2",null,"Directory"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},R=a(19),q=a(160),W=a(161),U=a(162),B=a(163),G=a(164),J=a(165),Y=a(166),H=a(167),z=a(180),Z=a(168),$=a(169),K=a(170),Q=a(171),V=a(172),X=a(173),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(R.a)(n)),n.toggleModal=n.toggleModal.bind(Object(R.a)(n)),n.handleLogin=n.handleLogin.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{fluid:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"NuCamp"),r.a.createElement("h2",null,"a better way to camp"))))),r.a.createElement(W.a,{dark:!0,sticky:"top",expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(U.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/assets/images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})),r.a.createElement(B.a,{onClick:this.toggleNav}),r.a.createElement(G.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(J.a,{navbar:!0},r.a.createElement(Y.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(Y.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/directory"},r.a.createElement("i",{className:"fa fa-list fa-lg"})," Directory")),r.a.createElement(Y.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("i",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(Y.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement("span",{className:"navbar-text ml-auto"},r.a.createElement(H.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-sign-in fa-lg"})," Login"))))),r.a.createElement(z.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Login"),r.a.createElement($.a,null,r.a.createElement(K.a,{onSubmit:this.handleLogin},r.a.createElement(Q.a,null,r.a.createElement(V.a,{htmlFor:"username"},"Username"),r.a.createElement(X.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(Q.a,null,r.a.createElement(V.a,{htmlFor:"password"},"Password"),r.a.createElement(X.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(Q.a,{check:!0},r.a.createElement(V.a,{check:!0},r.a.createElement(X.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(H.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var te=function(e){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-sm-2 offset-1"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/directory"},"Directory")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-6 col-sm-3 text-center"},r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},r.a.createElement("i",{className:"fa fa-instagram"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},r.a.createElement("i",{className:"fa fa-facebook"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co")))))},ae=a(174),ne=a(175),re=a(45);function le(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(D,null):n?r.a.createElement("h4",null,n):r.a.createElement(re.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{src:T+t.image,alt:t.name}),r.a.createElement(ae.a,null,r.a.createElement(F.a,null,t.name),r.a.createElement(ne.a,null,t.description))))}var ce=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(le,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(le,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(le,{item:e.partner}))))},oe=a(176),se=a(177),me=function(e){return e&&e.length},ie=function(e){return function(t){return!t||t.length<=e}},ue=function(e){return function(t){return t&&t.length>=e}},de=function(e){return!isNaN(+e)},Ee=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},pe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"Contact Us")),r.a.createElement("h2",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content align-items-center"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"1 Nucamp Way",r.a.createElement("br",null),"Seattle, WA 98001",r.a.createElement("br",null),"U.S.A.")),r.a.createElement("div",{className:"col"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Send us your Feedback"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(N.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(V.a,{htmlFor:"firstName",md:2},"First Name"),r.a.createElement(se.a,{md:10},r.a.createElement(N.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:me,minLength:ue(2),maxLength:ie(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(V.a,{htmlFor:"lastName",md:2},"Last Name"),r.a.createElement(se.a,{md:10},r.a.createElement(N.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:me,minLength:ue(2),maxLength:ie(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(V.a,{htmlFor:"phoneNum",md:2},"Phone"),r.a.createElement(se.a,{md:10},r.a.createElement(N.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:me,minLength:ue(10),maxLength:ie(15),isNumber:de}}),r.a.createElement(N.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(V.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(se.a,{md:10},r.a.createElement(N.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:me,validEmail:Ee}}),r.a.createElement(N.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(se.a,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(V.a,{check:!0},r.a.createElement(N.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(se.a,{md:4},r.a.createElement(N.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"By Phone"),r.a.createElement("option",null,"By Email")))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(V.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(se.a,{md:10},r.a.createElement(N.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),r.a.createElement(oe.a,{className:"form-group"},r.a.createElement(se.a,{md:{size:10,offset:2}},r.a.createElement(H.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),he=function(e){return function(t){return!t||t.length<=e}};function fe(e){var t=e.campsite;return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement(re.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{top:!0,src:T+t.image,alt:t.name}),r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,t.description)))))}function ge(e){var t=e.comments,a=e.postComment,n=e.campsiteId;if(t)return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(re.Stagger,{in:!0},t.map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.text," ",r.a.createElement("br",null),"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))}))),r.a.createElement(Ne,{campsiteId:n,postComment:a}))}var Ne=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.author,e.text)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(z.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement($.a,null,r.a.createElement(N.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement(V.a,{htmlFor:"rating"},"Rating"),r.a.createElement(N.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(V.a,{htmlFor:"author"},"Your Name"),r.a.createElement(N.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:he(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(V.a,{htmlFor:"text"},"Comment"),r.a.createElement(N.Control.textarea,{model:".text",id:"text",name:"text",rows:"6",className:"form-control"})),r.a.createElement(H.a,{type:"submit",color:"primary"},"Submit")))))}}]),a}(n.Component);var be=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(D,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.errMess)))):e.campsite?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/directory"},"Directory")),r.a.createElement(A.a,{active:!0},e.campsite.name)),r.a.createElement("h2",null,e.campsite.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(fe,{campsite:e.campsite}),r.a.createElement(ge,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id}))):r.a.createElement("div",null)},ve=a(178),ye=a(179);function we(e){var t=e.partner;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{object:!0,src:t.image,alt:t.name,width:"150"}),r.a.createElement(ve.a,{body:!0,className:"ml-5 mb-4"},r.a.createElement(ve.a,{heading:!0},t.name),t.description)):r.a.createElement("div",null)}var Oe=function(e){var t=e.partners.map((function(e){return r.a.createElement(ve.a,{tag:"li",key:e.id},r.a.createElement(we,{partner:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"About Us")),r.a.createElement("h2",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Our Mission"),r.a.createElement("p",null,"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(C.a,null,r.a.createElement(ye.a,{className:"bg-primary text-white"},r.a.createElement("h3",null,"Facts At a Glance")),r.a.createElement(ae.a,null,r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-6"},"Founded"),r.a.createElement("dd",{className:"col-6"},"February 3, 2016"),r.a.createElement("dt",{className:"col-6"},"No. of Campsites in 2019"),r.a.createElement("dd",{className:"col-6"},"563"),r.a.createElement("dt",{className:"col-6"},"No. of Reviews in 2019"),r.a.createElement("dd",{className:"col-6"},"4388"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"42"))))),r.a.createElement("div",{className:"col"},r.a.createElement(C.a,{className:"bg-light mt-3"},r.a.createElement(ae.a,null,r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."),r.a.createElement("footer",{className:"blockquote-footer"},"Muriel Strode,"," ",r.a.createElement("cite",{title:"Source Title"},'"Wind-Wafted Wild Flowers" - The Open Court, 1903'))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Community Partners")),r.a.createElement("div",{className:"col mt-4"},r.a.createElement(ve.a,{list:!0},t))))},Me=function(e){return{type:"COMMENTS_FAILED",payload:e}},ke=function(e){return{type:"ADD_COMMENTS",payload:e}},Se=function(){return{type:"CAMPSITES_LOADING"}},Le=function(e){return{type:"CAMPSITES_FAILED",payload:e}},Ce=function(e){return{type:"ADD_CAMPSITES",payload:e}},xe=function(){return{type:"PROMOTIONS_LOADING"}},je=function(e){return{type:"PROMOTIONS_FAILED",payload:e}},Fe=function(e){return{type:"ADD_PROMOTIONS",payload:e}},Ie={fetchCampsites:function(){return function(e){return e(Se()),fetch(T+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ce(t))})).catch((function(t){return e(Le(t.message))}))}},resetFeedbackForm:function(){return N.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(T+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ke(t))})).catch((function(t){return e(Me(t.message))}))}},fetchPromotions:function(){return function(e){return e(xe()),fetch(T+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Fe(t))})).catch((function(t){return e(je(t.message))}))}},postComment:function(e,t,a,n){return function(e,t,a,n){return function(r){var l={campsiteId:e,rating:t,author:a,text:n};return l.date=(new Date).toISOString(),fetch(T+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r({type:"ADD_COMMENT",payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(e,t,a,n)}},Ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement(S.a,null,r.a.createElement(L.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/home",component:function(){return r.a.createElement(ce,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(k.b,{exact:!0,path:"/directory",render:function(){return r.a.createElement(_,{campsites:e.props.campsites})}}),r.a.createElement(k.b,{path:"/directory/:campsiteId",component:function(t){var a=t.match;return r.a.createElement(be,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+a.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+a.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(k.b,{exact:!0,path:"/contactus",render:function(){return r.a.createElement(pe,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(k.b,{exact:!0,path:"/aboutus",render:function(){return r.a.createElement(Oe,{partners:e.props.partners})}}),r.a.createElement(k.a,{to:"/home"})))),r.a.createElement(te,null))}}]),a}(n.Component),De=Object(k.g)(Object(d.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions}}),Ie)(Ae)),Te=(a(152),Object(p.createStore)(Object(p.combineReducers)(Object(E.a)({campsites:b,comments:v,partners:w,promotions:O},Object(N.createForms)({feedbackForm:M}))),Object(p.applyMiddleware)(h.a,g.a))),Pe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:Te},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(De,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(153)}},[[94,1,2]]]);
//# sourceMappingURL=main.d3365c43.chunk.js.map