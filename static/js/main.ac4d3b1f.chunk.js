(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{104:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99),a(100),a(101),a(102),a(103),a(104);var o=a(20),s=a(21),m=a(22),i=a(23),u=a(9),d=a(26),E=a(12),p=a(27),h=a(91),f=a(92),g=a.n(f),N=a(8),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAMPSITES":return Object(E.a)({},e,{isLoading:!1,errMess:null,campsites:t.payload});case"CAMPSITES_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,campsites:[]});case"CAMPSITES_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(E.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(E.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(E.a)({},e,{comments:e.comments.concat(a)});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,partners:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PARTNERS":return Object(E.a)({},e,{isLoading:!1,errMess:null,partners:t.payload});case"PARTNERS_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,partners:[]});case"PARTNERS_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOTIONS":return Object(E.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOTIONS_LOADING":return Object(E.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOTIONS_FAILED":return Object(E.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},M={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},O=a(10),k=a(56),L=a(88),S=a(154),C=a(155),j=a(156),F=a(157),x=a(158),A=a(159),T=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},D="http://localhost:3001/";function I(e){var t=e.campsite;return r.a.createElement(S.a,null,r.a.createElement(u.b,{to:"/directory/".concat(t.id)},r.a.createElement(C.a,{width:"100%",src:D+t.image,alt:t.name}),r.a.createElement(j.a,null,r.a.createElement(F.a,null,t.name))))}var P=function(e){var t=e.campsites.campsites.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-5 m-1"},r.a.createElement(I,{campsite:e}))}));return e.campsites.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(T,null))):e.campsites.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.campsites.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(x.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"Directory")),r.a.createElement("h2",null,"Directory"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},R=a(19),_=a(160),q=a(161),W=a(162),U=a(163),G=a(164),Y=a(165),B=a(166),H=a(167),J=a(180),Z=a(168),z=a(169),$=a(170),K=a(171),Q=a(172),V=a(173),X=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(R.a)(n)),n.toggleModal=n.toggleModal.bind(Object(R.a)(n)),n.handleLogin=n.handleLogin.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{fluid:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"NuCamp"),r.a.createElement("h2",null,"a better way to camp"))))),r.a.createElement(q.a,{dark:!0,sticky:"top",expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(W.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/assets/images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})),r.a.createElement(U.a,{onClick:this.toggleNav}),r.a.createElement(G.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(Y.a,{navbar:!0},r.a.createElement(B.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(B.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/directory"},r.a.createElement("i",{className:"fa fa-list fa-lg"})," Directory")),r.a.createElement(B.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("i",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(B.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement("span",{className:"navbar-text ml-auto"},r.a.createElement(H.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-sign-in fa-lg"})," Login"))))),r.a.createElement(J.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Login"),r.a.createElement(z.a,null,r.a.createElement($.a,{onSubmit:this.handleLogin},r.a.createElement(K.a,null,r.a.createElement(Q.a,{htmlFor:"username"},"Username"),r.a.createElement(V.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(K.a,null,r.a.createElement(Q.a,{htmlFor:"password"},"Password"),r.a.createElement(V.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(K.a,{check:!0},r.a.createElement(Q.a,{check:!0},r.a.createElement(V.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(H.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var ee=function(e){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-sm-2 offset-1"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/directory"},"Directory")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-6 col-sm-3 text-center"},r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},r.a.createElement("i",{className:"fa fa-instagram"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},r.a.createElement("i",{className:"fa fa-facebook"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co")))))},te=a(174),ae=a(175),ne=a(31);function re(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(T,null):n?r.a.createElement("h4",null,n):r.a.createElement(ne.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"}},r.a.createElement(S.a,null,r.a.createElement(C.a,{src:D+t.image,alt:t.name}),r.a.createElement(te.a,null,r.a.createElement(F.a,null,t.name),r.a.createElement(ae.a,null,t.description))))}var ce=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(re,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(re,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(re,{item:e.partner,isLoading:e.partnerLoading,errMess:e.partnerErrMess}))))},le=a(176),oe=a(177),se=function(e){return e&&e.length},me=function(e){return function(t){return!t||t.length<=e}},ie=function(e){return function(t){return t&&t.length>=e}},ue=function(e){return!isNaN(+e)},de=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){this.props.resetFeedbackForm(),this.props.postFeedback(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(x.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"Contact Us")),r.a.createElement("h2",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content align-items-center"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"1 Nucamp Way",r.a.createElement("br",null),"Seattle, WA 98001",r.a.createElement("br",null),"U.S.A.")),r.a.createElement("div",{className:"col"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Send us your Feedback"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(N.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(le.a,{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"firstName",md:2},"First Name"),r.a.createElement(oe.a,{md:10},r.a.createElement(N.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:se,minLength:ie(2),maxLength:me(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"lastName",md:2},"Last Name"),r.a.createElement(oe.a,{md:10},r.a.createElement(N.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:se,minLength:ie(2),maxLength:me(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"phoneNum",md:2},"Phone"),r.a.createElement(oe.a,{md:10},r.a.createElement(N.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:se,minLength:ie(10),maxLength:me(15),isNumber:ue}}),r.a.createElement(N.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(oe.a,{md:10},r.a.createElement(N.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:se,validEmail:de}}),r.a.createElement(N.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(oe.a,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(Q.a,{check:!0},r.a.createElement(N.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(oe.a,{md:4},r.a.createElement(N.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"By Phone"),r.a.createElement("option",null,"By Email")))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(oe.a,{md:10},r.a.createElement(N.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),r.a.createElement(le.a,{className:"form-group"},r.a.createElement(oe.a,{md:{size:10,offset:2}},r.a.createElement(H.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),pe=function(e){return function(t){return!t||t.length<=e}};function he(e){var t=e.campsite;return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement(ne.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(S.a,null,r.a.createElement(C.a,{top:!0,src:D+t.image,alt:t.name}),r.a.createElement(te.a,null,r.a.createElement(ae.a,null,t.description)))))}function fe(e){var t=e.comments,a=e.postComment,n=e.campsiteId;if(t)return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(ne.Stagger,{in:!0},t.map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.text," ",r.a.createElement("br",null),"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))}))),r.a.createElement(ge,{campsiteId:n,postComment:a}))}var ge=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.author,e.text)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(J.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(z.a,null,r.a.createElement(N.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"rating"},"Rating"),r.a.createElement(N.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"author"},"Your Name"),r.a.createElement(N.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:pe(15)}}),r.a.createElement(N.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(Q.a,{htmlFor:"text"},"Comment"),r.a.createElement(N.Control.textarea,{model:".text",id:"text",name:"text",rows:"6",className:"form-control"})),r.a.createElement(H.a,{type:"submit",color:"primary"},"Submit")))))}}]),a}(n.Component);var Ne=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(T,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.errMess)))):e.campsite?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(x.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/directory"},"Directory")),r.a.createElement(A.a,{active:!0},e.campsite.name)),r.a.createElement("h2",null,e.campsite.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(he,{campsite:e.campsite}),r.a.createElement(fe,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id}))):r.a.createElement("div",null)},be=a(178),ve=a(179);function ye(e){var t=e.partner;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,{object:!0,src:D+t.image,alt:t.name,width:"150"}),r.a.createElement(be.a,{body:!0,className:"ml-5 mb-4"},r.a.createElement(be.a,{heading:!0},t.name),t.description)):r.a.createElement("div",null)}function we(e){var t=e.partners.partners.map((function(e){return r.a.createElement(ne.Fade,{in:!0,key:e.id},r.a.createElement(be.a,{tag:"li"},r.a.createElement(ye,{partner:e})))}));return e.partners.isLoading?r.a.createElement(T,null):e.partners.errMess?r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.partners.errMess)):r.a.createElement("div",{className:"col mt-4"},r.a.createElement(be.a,{list:!0},r.a.createElement(ne.Stagger,{in:!0},t)))}var Me=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(x.a,null,r.a.createElement(A.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(A.a,{active:!0},"About Us")),r.a.createElement("h2",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Our Mission"),r.a.createElement("p",null,"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(S.a,null,r.a.createElement(ve.a,{className:"bg-primary text-white"},r.a.createElement("h3",null,"Facts At a Glance")),r.a.createElement(te.a,null,r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-6"},"Founded"),r.a.createElement("dd",{className:"col-6"},"February 3, 2016"),r.a.createElement("dt",{className:"col-6"},"No. of Campsites in 2019"),r.a.createElement("dd",{className:"col-6"},"563"),r.a.createElement("dt",{className:"col-6"},"No. of Reviews in 2019"),r.a.createElement("dd",{className:"col-6"},"4388"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"42"))))),r.a.createElement("div",{className:"col"},r.a.createElement(S.a,{className:"bg-light mt-3"},r.a.createElement(te.a,null,r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."),r.a.createElement("footer",{className:"blockquote-footer"},"Muriel Strode,"," ",r.a.createElement("cite",{title:"Source Title"},'"Wind-Wafted Wild Flowers" - The Open Court, 1903'))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Community Partners")),r.a.createElement(we,{partners:e.partners})))},Oe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ke=function(e){return{type:"ADD_COMMENTS",payload:e}},Le=function(){return{type:"CAMPSITES_LOADING"}},Se=function(e){return{type:"CAMPSITES_FAILED",payload:e}},Ce=function(e){return{type:"ADD_CAMPSITES",payload:e}},je=function(){return{type:"PROMOTIONS_LOADING"}},Fe=function(e){return{type:"PROMOTIONS_FAILED",payload:e}},xe=function(e){return{type:"ADD_PROMOTIONS",payload:e}},Ae=function(){return{type:"PARTNERS_LOADING"}},Te=function(e){return{type:"PARTNERS_FAILED",payload:e}},De=function(e){return{type:"ADD_PARTNERS",payload:e}},Ie={fetchCampsites:function(){return function(e){return e(Le()),fetch(D+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ce(t))})).catch((function(t){return e(Se(t.message))}))}},resetFeedbackForm:function(){return N.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(D+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ke(t))})).catch((function(t){return e(Oe(t.message))}))}},fetchPromotions:function(){return function(e){return e(je()),fetch(D+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(xe(t))})).catch((function(t){return e(Fe(t.message))}))}},postComment:function(e,t,a,n){return function(e,t,a,n){return function(r){var c={campsiteId:e,rating:t,author:a,text:n};return c.date=(new Date).toISOString(),fetch(D+"comments",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r({type:"ADD_COMMENT",payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(e,t,a,n)},fetchPartners:function(){return function(e){return e(Ae()),fetch(D+"partners").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(De(t))})).catch((function(t){return e(Te(t.message))}))}},postFeedback:function(e){return function(e){return function(){return fetch(D+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Feedback: ",e),alert("Thank you for your feedback! \n "+JSON.stringify(e))})).catch((function(e){console.log("Feedback: ",e.message),alert("Your feedback could not be posted. \n Error: "+e.message)}))}}(e)}},Pe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions(),this.props.fetchPartners()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(k.a,null,r.a.createElement(L.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/home",component:function(){return r.a.createElement(ce,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.partners.filter((function(e){return e.featured}))[0],partnerLoading:e.props.partners.isLoading,partnerErrMess:e.props.partners.errMess})}}),r.a.createElement(O.b,{exact:!0,path:"/directory",render:function(){return r.a.createElement(P,{campsites:e.props.campsites})}}),r.a.createElement(O.b,{path:"/directory/:campsiteId",component:function(t){var a=t.match;return r.a.createElement(Ne,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+a.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+a.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(O.b,{exact:!0,path:"/contactus",render:function(){return r.a.createElement(Ee,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(O.b,{exact:!0,path:"/aboutus",render:function(){return r.a.createElement(Me,{partners:e.props.partners})}}),r.a.createElement(O.a,{to:"/home"})))),r.a.createElement(ee,null))}}]),a}(n.Component),Re=Object(O.g)(Object(d.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions}}),Ie)(Pe)),_e=(a(152),Object(p.createStore)(Object(p.combineReducers)(Object(E.a)({campsites:b,comments:v,partners:y,promotions:w},Object(N.createForms)({feedbackForm:M}))),Object(p.applyMiddleware)(h.a,g.a))),qe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:_e},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Re,null))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(153)}},[[94,1,2]]]);
//# sourceMappingURL=main.ac4d3b1f.chunk.js.map