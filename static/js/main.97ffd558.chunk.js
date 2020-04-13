(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{21:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/cooking.83512bcd.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/travel.1d3cf563.jpeg"},38:function(e,t,a){e.exports=a.p+"static/media/baking.45bdea72.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/bread_butter_pudding_whole.9cf5d08d.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/banana_bread_2.8a8dba26.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/millionaire_shortbread_full.dbe79c68.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/peanut_butter_cookies.82f05fc1.jpg"},48:function(e,t,a){e.exports=a(59)},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),m=a.n(r),i=(a(53),a(7)),c=a(8),u=a(9),s=a(10),l=a(18),d=(a(33),a(21),a(19)),E=a(62),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.ingredients,t=this.props.method;return o.a.createElement("div",null,o.a.createElement("div",{className:"row justify-content-center mt-3"},o.a.createElement("div",{className:"col-3"},o.a.createElement("h3",{className:"text-center"},"Ingredients"),o.a.createElement("ul",{className:"list-unstyled"},Object.keys(e).map((function(t,a){return o.a.createElement("li",null,e[t].ingredient.displayName," (",e[t].quantity," ",e[t].measurement,") ")})))),o.a.createElement("div",{className:"col-6"},o.a.createElement("h3",{className:"text-center"},"Method"),o.a.createElement("ol",null,Object.keys(t).map((function(e,a){return o.a.createElement("li",null,t[e].description," ")})))),o.a.createElement("div",{className:"col-2 justify-content-center"},o.a.createElement("h3",{className:"text-center"},"Result"),o.a.createElement("img",{src:this.props.img,height:"200",width:"200"}))))}}]),a}(o.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){switch(this.props.size){case 1:return o.a.createElement("h1",{className:"card-title"},this.props.title);case 2:return o.a.createElement("h2",{className:"card-title"},this.props.title);case 3:return o.a.createElement("h3",{className:"card-title"},this.props.title);case 4:default:return o.a.createElement("h4",{className:"card-title"},this.props.title)}}}]),a}(o.a.Component),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(E.a,{style:{height:"100%",width:"100%"}},o.a.createElement(E.a.Body,null,o.a.createElement(E.a.Title,null,o.a.createElement(h,{title:this.props.title,size:4})),o.a.createElement(E.a.Img,{variant:"top",src:this.props.img})))}}]),a}(o.a.Component),S=a(36),g=a.n(S),R=a(37),N=a.n(R),T=a(38),y=a.n(T);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row m-4"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(d.b,{to:"/baking"},o.a.createElement(A,{title:"Thing's I've Baked",img:y.a}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(d.b,{to:"/cooking"},o.a.createElement(A,{title:"Meals I've cooked",img:g.a}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(d.b,{to:"/traveling"},o.a.createElement(A,{title:"Places I've Been",img:N.a}))))))},b=a(17),f=a(26),I="g",w="mL",v="tsp",k="item",B={ENERGY:"kJ",CALORIES:"kcal",PROTEIN:I,CARBS:I,FATS:I,SATURATES:I,SUGARS:I,SALT:"mg",FIBRE:I},G={PLAIN_FLOUR:{displayName:"plain flour",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:1511,macro:B.ENERGY},{amount:357,macro:B.CALORIES},{amount:1.7,macro:B.FATS},{amount:.3,macro:B.SATURATES},{amount:.1,macro:B.SALT}]}},BAKING_POWDER:{displayName:"baking powder"}},C={WHITE_BLOOMER:{displayName:"white bloomer bread",link:"https://www.tesco.com/groceries/en-GB/products/250675630",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:1034,macro:B.ENERGY},{amount:244,macro:B.CALORIES},{amount:47.5,macro:B.CARBS},{amount:8.5,macro:B.PROTEIN},{amount:1.6,macro:B.FATS},{amount:.9,macro:B.SATURATES},{amount:2.6,macro:B.SUGARS},{amount:.8,macro:B.SALT},{amount:2.8,macro:B.FIBRE}]}}},L={RAISINS:{displayName:"raisins",nutrition:{quantity:30,measurement:I,macronutrients:[{amount:420,macro:B.ENERGY},{amount:99,macro:B.CALORIES},{amount:.3,macro:B.FATS},{amount:.1,macro:B.SATURATES},{amount:18.7,macro:B.SUGARS},{amount:.1,macro:B.SALT}]}}},U={BUTTER_UNSALTED:{displayName:"unsalted butter",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:3062,macro:B.ENERGY},{amount:745,macro:B.CALORIES},{amount:.6,macro:B.CARBS},{amount:.6,macro:B.PROTEIN},{amount:82.2,macro:B.FATS},{amount:52.1,macro:B.SATURATES},{amount:.6,macro:B.SUGARS},{amount:.1,macro:B.SALT},{amount:0,macro:B.FIBRE}]}},BUTTER_PEANUT:{displayName:"peanut butter",link:"https://www.tesco.com/groceries/en-GB/products/292894630",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:2645,macro:B.ENERGY},{amount:632,macro:B.CALORIES},{amount:22.2,macro:B.CARBS},{amount:24.4,macro:B.PROTEIN},{amount:49.5,macro:B.FATS},{amount:8.3,macro:B.SATURATES},{amount:10.7,macro:B.SUGARS},{amount:1.1,macro:B.SALT}]}}},j={EGG:{displayName:"egg",nutrition:{quantity:1,measurement:k,macronutrients:[{amount:648,macro:B.ENERGY},{amount:154,macro:B.CALORIES},{amount:.5,macro:B.CARBS},{amount:15,macro:B.PROTEIN},{amount:10.6,macro:B.FATS},{amount:3,macro:B.SATURATES},{amount:0,macro:B.SUGARS},{amount:.46,macro:B.SALT},{amount:0,macro:B.FIBRE}]}}},q={APPLE:{displayName:"apple",link:"https://www.tesco.com/groceries/en-GB/products/284477542",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:226,macro:B.ENERGY},{amount:53,macro:B.CALORIES},{amount:11.8,macro:B.CARBS},{amount:.4,macro:B.PROTEIN},{amount:.1,macro:B.FATS},{amount:0,macro:B.SATURATES},{amount:15.7,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:1.8,macro:B.FIBRE}]}},BANANA:{displayName:"banana",link:"https://www.tesco.com/groceries/en-GB/products/275280804",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:380,macro:B.ENERGY},{amount:90,macro:B.CALORIES},{amount:20.3,macro:B.CARBS},{amount:1.2,macro:B.PROTEIN},{amount:.1,macro:B.FATS},{amount:0,macro:B.SATURATES},{amount:18.1,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:1.4,macro:B.FIBRE}]}}},_={TEA:{displayName:"cold tea",nutrition:{quantity:100,measurement:w,macronutrients:[{amount:0,macro:B.ENERGY},{amount:0,macro:B.CALORIES},{amount:0,macro:B.FATS},{amount:0,macro:B.SATURATES},{amount:0,macro:B.SUGARS},{amount:0,macro:B.SALT}]}},LEMON_JUICE:{displayName:"fresh lemon juice",nutrition:{quantity:1,measurement:k,macronutrients:[{amount:0,macro:B.ENERGY},{amount:12,macro:B.CALORIES},{amount:0,macro:B.FATS},{amount:4.06,macro:B.CARBS},{amount:0,macro:B.SATURATES},{amount:.18,macro:B.PROTEIN},{amount:1.13,macro:B.SUGARS},{amount:0,macro:B.SALT}]}},SOYA_UNSWEETENED:{displayName:"unsweetened soya mill",link:"https://www.tesco.com/groceries/en-GB/products/251523947",nutrition:{quantity:100,measurement:w,macronutrients:[{amount:177,macro:B.ENERGY},{amount:42,macro:B.CALORIES},{amount:1.9,macro:B.FATS},{amount:2.7,macro:B.CARBS},{amount:.3,macro:B.SATURATES},{amount:3.3,macro:B.PROTEIN},{amount:2.5,macro:B.SUGARS},{amount:.1,macro:B.SALT},{amount:.6,macro:B.FIBRE}]}}},F={CINNAMON:{displayName:"cinnamon",link:"https://www.tesco.com/groceries/en-GB/products/254920403",nutrition:{quantity:.5,measurement:v,macronutrients:[{amount:13,macro:B.ENERGY},{amount:3,macro:B.CALORIES},{amount:.3,macro:B.CARBS},{amount:.1,macro:B.PROTEIN},{amount:.1,macro:B.FATS},{amount:.1,macro:B.SATURATES},{amount:.1,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:.7,macro:B.FIBRE}]}},NUTMEG:{displayName:"nutmeg",link:"https://www.tesco.com/groceries/en-GB/products/256149956",nutrition:{quantity:1,measurement:v,macronutrients:[{amount:0,macro:B.ENERGY},{amount:12,macro:B.CALORIES},{amount:1.1,macro:B.CARBS},{amount:.1,macro:B.PROTEIN},{amount:.8,macro:B.FATS},{amount:.6,macro:B.SATURATES},{amount:.6,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:0,macro:B.FIBRE}]}}},P={SUGAR_BROWN:{displayName:"brown sugar",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:1670,macro:B.ENERGY},{amount:393,macro:B.CALORIES},{amount:97.7,macro:B.CARBS},{amount:.1,macro:B.PROTEIN},{amount:.2,macro:B.FATS},{amount:.1,macro:B.SATURATES},{amount:97.7,macro:B.SUGARS},{amount:.1,macro:B.SALT},{amount:.2,macro:B.FIBRE}]}},SUGAR_WHITE:{displayName:"white sugar",nutrition:{quantity:100,link:"https://www.tesco.com/groceries/en-GB/products/287206934",measurement:I,macronutrients:[{amount:1700,macro:B.ENERGY},{amount:400,macro:B.CALORIES},{amount:100,macro:B.CARBS},{amount:0,macro:B.PROTEIN},{amount:0,macro:B.FATS},{amount:0,macro:B.SATURATES},{amount:100,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:0,macro:B.FIBRE}]}}},x={CHOCOLATE_70:{displayName:"70% chocolate",link:"https://www.tesco.com/groceries/en-GB/products/259301725",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:2350,macro:B.ENERGY},{amount:566,macro:B.CALORIES},{amount:34,macro:B.CARBS},{amount:9.5,macro:B.PROTEIN},{amount:41,macro:B.FATS},{amount:24,macro:B.SATURATES},{amount:29,macro:B.SUGARS},{amount:.1,macro:B.SALT},{amount:0,macro:B.FIBRE}]}}},M={WALNUTS:{displayName:"walnuts",link:"https://www.tesco.com/groceries/en-GB/products/271667182",nutrition:{quantity:100,measurement:I,macronutrients:[{amount:2805,macro:B.ENERGY},{amount:679,macro:B.CALORIES},{amount:9.9,macro:B.CARBS},{amount:18.2,macro:B.PROTEIN},{amount:61.9,macro:B.FATS},{amount:5.6,macro:B.SATURATES},{amount:1.8,macro:B.SUGARS},{amount:0,macro:B.SALT},{amount:4.6,macro:B.FIBRE}]}}},Y=Object(f.a)({},C,{},U,{},L,{},j,{},G,{},q,{},_,{},F,{},P,{},x,{},M,{},{VANILLA:{displayName:"Vanilla"}}),W=a(41),D=a.n(W),H={BREAD_PUDDING:{title:"apple bread and butter pudding",ingredients:[{ingredient:Y.SUGAR_BROWN,quantity:115,measurement:I},{ingredient:Y.RAISINS,quantity:75,measurement:I},{ingredient:Y.APPLE,quantity:350,measurement:I},{ingredient:Y.NUTMEG,quantity:1,measurement:v},{ingredient:Y.CINNAMON,quantity:2,measurement:v},{ingredient:Y.BUTTER_UNSALTED,quantity:120,measurement:I},{ingredient:Y.SOYA_UNSWEETENED,quantity:400,measurement:w},{ingredient:Y.EGG,quantity:3,measurement:k},{ingredient:Y.WHITE_BLOOMER,quantity:300,measurement:I}],method:[{step:1,description:"Soak the raisins in cold tea. Peel and slice the apples and keep them in cold water with a squeeze of lemon to stay fresh"},{step:2,description:"Add butter and milk to a saucepan and gently heat until butter has melted. Set aside to cool."},{step:3,description:"Whisk the eggs, sugar, cinnamon, nutmeg and vanilla in a bowl until combined. Add in the milk and whisk some more."},{step:4,description:"Tear the bread into pieces and throw into a greased bakign dish. Strain the raisins and apples and scatter both on top of the bread. Pour the milk mixture on top and sprinkle with brown sugar"},{step:5,description:"Bake for 30 minutes on 200 C"}],image:D.a}},z=a(42),J=a.n(z),K={BANANA_BREAD:{title:"chocolate and walnut banana bread",ingredients:[{ingredient:Y.PLAIN_FLOUR,quantity:230,measurement:I},{ingredient:Y.BUTTER_UNSALTED,quantity:75,measurement:I},{ingredient:Y.SUGAR_WHITE,quantity:200,measurement:I},{ingredient:Y.BANANA,quantity:200,measurement:I},{ingredient:Y.WALNUTS,quantity:75,measurement:I},{ingredient:Y.CHOCOLATE_70,quantity:67,measurement:I},{ingredient:Y.EGG,quantity:3,measurement:k},{ingredient:Y.BAKING_POWDER,quantity:.5,measurement:v},{ingredient:Y.VANILLA,quantity:3,measurement:k}],method:[{step:1,description:"Let the butter soften to room temperature, add all of the sugar to it and mix using an electric mixer on medium speed for 3-4 minutes."},{step:2,description:"Mash up the bananas using a fork until they have a liquid like consistency. Beat the eggs in a seperate bowl and combine with the banana. Add the vanilla"},{step:3,description:"Add the banana mixture into the butter and mix on low/medium speed until combined. "},{step:4,description:"Add the baking powder to the flour and slowly sift 1/3 of the dry ingredients into the wet at a time."},{step:5,description:"Chop up the walnuts and chocolate into a size you like, and mix them in"},{step:6,description:"Transfer to a baking tin - I used a rectangular bread loaf tin - and bake at 180 C for 55 minutes"},{step:7,description:"Turn the oven off and let the bread sit in the oven for 15 more minutes. After that, take it out and let it cool COMPLETELY before cutting. (Unless you have impatient housemates like I do - in which case cut into slices and enjoy!)"}],image:J.a}},V=a(43),$={MILIONAIRE_SHORTBREAD:{title:"milionaire shortbread",ingredients:[],method:[],image:a.n(V).a}},Q=a(44),X=a.n(Q),Z={PEANUT_BUTTER_COOKIES:{title:"peanut butter and chocolate cookies",ingredients:[{ingredient:Y.EGG,quantity:1,measurement:k},{ingredient:Y.PLAIN_FLOUR,quantity:180,measurement:I},{ingredient:Y.SUGAR_BROWN,quantity:100,measurement:I},{ingredient:Y.CHOCOLATE_70,quantity:70,measurement:I},{ingredient:Y.BUTTER_PEANUT,quantity:95,measurement:I}],method:[{step:1,description:"Cream the butter and sugar together on medium speed for 3-4 minutes."},{step:2,description:"Mix in the egg, then add the peanut butter and mix until combined."},{step:3,description:"Sift the flour, and fold it into the liquid mixture. Finally stir in the chunks of chocolate."},{step:4,description:"Weigh out roughly equal amounts of the mixture (mine ranged between 20-25g) and use your hands to shape each into a round ball which fits in the palm of your hand. If you have time, leave them in the fridge around 10 minutes. Flatten the ball and create the design on top of each cookie by gently pressing the back of a forkinto each cookie twice, as if making a plus sign with the fork."},{step:5,description:"Bake on a baking sheet in a pre-heated oven at 180C for 10 minutes. (While one batch is baking you can chill and shape the next)."},{step:6,description:"Remove from the oven and let the cookies cool and set on the baking sheet for 10 minutes before moving."}],image:X.a}},ee=Object(f.a)({},Z,{},K,{},H,{},$),te=a(61),ae=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={show:!1,recipeTitle:"",recipeImage:"",ingredients:[],method:[]},e.handleOpenModal=e.handleOpenModal.bind(Object(b.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(b.a)(e)),e}return Object(c.a)(a,[{key:"handleOpenModal",value:function(e){this.setState({show:!0,recipeTitle:e.title,recipeImage:e.image,ingredients:e.ingredients,method:e.method})}},{key:"handleCloseModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this,t=ee;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"gallery"},Object.keys(t).map((function(a,n){return console.log(t),o.a.createElement("div",{className:"col-4 gallery-item img-responsive"},o.a.createElement("div",{onClick:function(){return e.handleOpenModal(t[a])}},o.a.createElement("img",{className:"gallery-image",src:t[a].image}),o.a.createElement("div",{class:"gallery-item-info"},o.a.createElement("ul",null,o.a.createElement("li",{class:"gallery-item-title"},o.a.createElement("span",{class:"visually-hidden"},o.a.createElement(h,{size:2,title:t[a].title})))))),o.a.createElement(te.a,{dialogClassName:"modal-size",show:e.state.show,onHide:function(){return e.handleCloseModal(t[a])}},o.a.createElement(te.a.Header,{closeButton:!0,className:"d-flex justify-content-center"},o.a.createElement("div",{className:"col-11 text-center"},o.a.createElement(h,{size:1,title:e.state.recipeTitle}))),o.a.createElement(te.a.Body,null,o.a.createElement(p,{img:e.state.recipeImage,ingredients:e.state.ingredients,method:e.state.method}))))})))))}}]),a}(o.a.Component),ne=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row m-4"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h2",{style:{color:"white"}}," COMING SOON")))))}}]),a}(o.a.Component),oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row m-4"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h2",{style:{color:"white"}}," COMING SOON")))))}}]),a}(o.a.Component),re=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(l.a,{exact:!0,path:"/",component:O}),o.a.createElement(l.a,{exact:!0,path:"/baking",component:ae}),o.a.createElement(l.a,{exact:!0,path:"/cooking",component:ne}),o.a.createElement(l.a,{exact:!0,path:"/traveling",component:oe}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(d.a,null,o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.97ffd558.chunk.js.map