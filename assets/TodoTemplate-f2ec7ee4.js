import{r as m,a as _,o as i,c as r,w as T,v as f,b as e,d as u,n as h,g as k,e as x,t as I,F as g,f as $,h as L,i as b,j as w}from"./index-7adefd2d.js";const C={__name:"TodoInsert",emits:["insert"],setup(s,{emit:c}){const n=m(""),d=c,o=a=>{d("insert",a)},t={id:"todo-insert",class:"TodoInsert"};return(a,l)=>{const v=_("font-awesome-icon");return i(),r("div",h(k(t)),[T(e("input",{type:"text",placeholder:"할 일을 입력하세요.","onUpdate:modelValue":l[0]||(l[0]=p=>n.value=p)},null,512),[[f,n.value]]),e("button",{type:"button",onClick:l[1]||(l[1]=p=>o(n.value))},[u(v,{icon:["fas","plus"]})])],16)}}};const y={class:"TodoListItem-virtualized"},B={class:"TodoListItem"},j=["checked"],z={class:"text"},V={__name:"TodoListItem",props:{todo:{type:Object,default:()=>{}}},setup(s){const n=m(s.todo.text),d=o=>{console.log(o)};return(o,t)=>{const a=_("font-awesome-icon");return i(),r("div",y,[e("li",B,[e("div",{class:x(["checkbox",{checked:s.todo.checked}]),onClick:t[0]||(t[0]=l=>d(s.todo.id))},[e("input",{type:"checkbox",checked:s.todo.checked},null,8,j),e("div",z,I(n.value),1)],2),e("div",{class:"edit",onClick:t[1]||(t[1]=()=>{o.onChangeSelectedTodo(s.todo),o.onInsertToggle()})},[u(a,{icon:["fas","pen"]})]),e("div",{class:"remove",onClick:t[2]||(t[2]=()=>o.onRemove(o.id))},[u(a,{icon:["fas","circle-minus"]})])])])}}};const D={class:"TodoList"},F={__name:"TodoList",props:["todos"],setup(s){return(c,n)=>(i(),r("div",D,[(i(!0),r(g,null,$(s.todos,(d,o)=>(i(),L(V,{key:o,class:"todolist-item",todo:d},null,8,["todo"]))),128))]))}};const N={class:"TodoTemplate"},O=e("div",{class:"app-title"},"일정관리",-1),P={class:"content"},S={__name:"TodoTemplate",setup(s){const c=b([{id:1,text:"리액트 기초 알아보기",checked:!0},{id:2,text:"컴포넌트 스타일링 하기",checked:!1},{id:3,text:"투두 리스트 만들기",checked:!1}]),n=m(4),d=o=>{c.push({id:n,text:o,checked:!1}),n.value++};return w(c,(o,t)=>{console.log(o,t)}),(o,t)=>(i(),r("div",N,[O,e("div",P,[u(C,{onInsert:d}),u(F,{todos:c},null,8,["todos"])])]))}};export{S as default};
