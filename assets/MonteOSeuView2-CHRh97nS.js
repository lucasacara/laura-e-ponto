import{d as _a,S as Fl,_ as ga,c as Xe,b as re,f as K,w as ne,G as se,n as Bu,r as un,o as Z,g as ge,m as oe,t as yo,l as Bl,a4 as Ka,k as ku,a as zu,j as Hu,a5 as Vu,P as Mn,R as yn,U as Sn}from"./index-N_aRfPT8.js";import{L as Gu}from"./LogoLogoHorizontal-C4BzgNFn.js";import{i as Wu,a as $u,b as Xu,c as ju,O as qu}from"./image-7650-amendoa-Dl82jgm9.js";import{O as Yu,i as Ku,a as Zu,b as Ju,c as Qu,d as ed,e as td,f as nd,g as id,h as od,j as sd,k as rd,l as ad,m as cd,n as ld,o as ud,p as dd,q as hd,r as fd,s as pd,t as md,u as _d,v as gd,w as bd,x as vd,y as xd,z as Md,A as yd,B as Sd,C as Ed,D as Ad,E as Td,F as wd,G as Rd,H as Cd,I as Ld,J as Pd,K as Id,L as Dd,M as Nd,N as Ud,P as Od,Q as Fd,R as Bd,S as kd,T as zd,U as Hd,V as Vd,W as Gd,X as Wd,Y as $d,Z as Xd,_ as jd,$ as qd,a0 as Yd,a1 as Kd,a2 as Zd,a3 as Jd,a4 as Qd,a5 as eh,a6 as th,a7 as nh,a8 as ih,a9 as oh,aa as sh,ab as rh,ac as ah,ad as ch,ae as lh,af as uh,ag as dh,ah as hh,ai as fh,aj as ph,ak as mh,al as _h,am as gh,an as bh,ao as vh,ap as xh,aq as Mh,ar as yh,as as Sh,at as Eh,au as Ah,av as Th,aw as wh,ax as Rh,ay as Ch,az as Lh,aA as Ph}from"./image-9534-unicornio-xz_MDFQP.js";import{T as Ih}from"./TabAmigurumiCategory-Ems5HjDf.js";import{c as Dh,a as Nh,b as Uh,d as Oh}from"./cabelo5-CiK_DTb-.js";import{c as Fh,a as Bh,b as kh}from"./calca3-D5j4YyRU.js";import{c as zh,a as Hh,b as Vh}from"./calcado2-2-BEd3UjxP.js";import{t as Gh,r as Wh,c as $h,a as Xh}from"./top1-CtngCgQh.js";import{t as jh,o as qh,c as Yh,a as Kh}from"./tapa-olho1-BjEbCna2.js";import{c as Zh}from"./corpo1-CFvuuNPt.js";import{n as Jh}from"./no-select-DHo_o823.js";import{f as Qh,a as ef,n as tf}from"./variantSwitch-CaXQGcqB.js";import{a as nf,i as of}from"./image-7625-castanha-CmS6J4fG.js";import{c as sf,i as rf,a as af,b as cf}from"./image-4456-laranja-Di-l5QQW.js";import"./cabelo1-p6vkmw18.js";const lf={options:{step:["value-1","value-2","value-3","value-4","value-5","value-6","value-7"]},defaults:{step:"value-1"},variants:[{step:"value-1"},{step:"value-2"},{step:"value-3"},{step:"value-4"},{step:"value-5"},{step:"value-6"},{step:"value-7"}]},uf=_a({name:"PanelCloset",components:{OptionAmigurumi:Yu,SvgIcon:Fl,TabAmigurumiCategory:Ih},props:{step:{type:String,required:!1,default:"value-1",validator(i){return["value-1","value-2","value-3","value-4","value-5","value-6","value-7"].includes(i)}}},emits:["update:step"],data(){return{cabelo2Img:Oh,cabelo3Img:Uh,cabelo4Img:Nh,cabelo5Img:Dh,calca1Img:kh,calca2Img:Bh,calca3Img:Fh,calcado1Img:Vh,calcado2Img:Hh,calcado2Img2:zh,camisa1Img:Xh,camiseta1Img:$h,chapeu1Img:Kh,chapeu2Img:Yh,corpo1Img:Zh,noSelectImg:Jh,oculos1Img:qh,regata1Img:Wh,tapaOlho1Img:jh,top1Img:Gh,currentStep:this.step,snapping:!1}},watch:{step(i){this.currentStep=i}},methods:{onTabCorpoClick(){this.changeVariant("step","set","value-1",!1)},onTabCabeloClick(){this.changeVariant("step","set","value-2",!1)},onTabConjuntoClick(){this.changeVariant("step","set","value-3",!1)},onTabParteSuperiorClick(){this.changeVariant("step","set","value-4",!1)},onTabParteInferiorClick(){this.changeVariant("step","set","value-5",!1)},onTabCalcadosClick(){this.changeVariant("step","set","value-6",!1)},onTabAcessoriosClick(){this.changeVariant("step","set","value-7",!1)},changeVariant(i,e,t,n=!0){const o={step:this.currentStep},s=tf(o,lf,i,e,t);if(!(!s||s[i]===o[i]))return this.snapping=!n,s.step!==this.currentStep&&(this.currentStep=s.step,this.$emit("update:step",this.currentStep)),n||this.$nextTick(()=>{document.body.offsetWidth,this.snapping=!1}),o[i]},fadeIn:ef,fadeOut:Qh}}),df={class:"options-panel"},hf={class:"tabs","aria-label":"Etapas do boneco"},ff={class:"options-panel-2","aria-label":"Corpo"},pf={class:"panel-header"},mf={class:"texts-container"},_f={key:0,class:"frame-251"},gf={key:0,class:"step"},bf={key:0,class:"title"},vf={key:0,class:"subheader"},xf={class:"texts-container-2"},Mf={key:0,class:"oculos"},yf={key:0,class:"estilo-de-corpo"},Sf={class:"grid-options"},Ef={key:0,class:"subheader-2"},Af={class:"texts-container-3"},Tf={key:0,class:"chapeus"},wf={key:0,class:"detalhes-da-pele"},Rf={key:0,class:"grid-options-2"},Cf={key:0,class:"subheader-3"},Lf={class:"texts-container-4"},Pf={key:0,class:"brincos"},If={key:0,class:"braco-esquerdo"},Df={key:0,class:"grid-options-3"},Nf={key:0,class:"subheader-4"},Uf={class:"texts-container-5"},Of={key:0,class:"extras"},Ff={key:0,class:"braco-direito"},Bf={key:0,class:"grid-options-4"},kf={key:0,class:"subheader-5"},zf={class:"texts-container-6"},Hf={key:0,class:"bandeira"},Vf={key:0,class:"perna-esquerda"},Gf={key:0,class:"grid-options-5"},Wf={key:0,class:"subheader-6"},$f={key:0,class:"grid-options-6"};function Xf(i,e,t,n,o,s){const r=un("TabAmigurumiCategory"),a=un("SvgIcon"),c=un("OptionAmigurumi");return Z(),Xe("div",{class:Bu(["panel-closet",["step-"+i.currentStep,{"progtik-snap":i.snapping}]])},[re("div",df,[re("nav",hf,[K(r,{class:"tab-corpo",name:"Corpo",as:"button","aria-label":"Corpo — concluída",onClick:i.onTabCorpoClick,selected:i.currentStep==="value-1"?"true":void 0},null,8,["onClick","selected"]),K(r,{class:"tab-cabelo",name:"Cabelo",as:"button",onClick:i.onTabCabeloClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Cabelo — opcional":"Cabelo — concluída",selected:i.currentStep!=="value-2"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-7",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-6",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-5",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-4",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-3",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon-2",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-cabelo-icon",title:"icon-ic-scissor"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"]),K(r,{class:"tab-conjunto",name:"Conjunto",as:"button",onClick:i.onTabConjuntoClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Conjunto — obrigatória, pendente":"Conjunto — dispensada",selected:i.currentStep!=="value-3"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-7",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-6",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-5",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-4",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-3",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon-2",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-conjunto-icon",title:"icon-ic-dress"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"]),K(r,{class:"tab-parte-superior",name:"Parte Superior",as:"button",onClick:i.onTabParteSuperiorClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Parte Superior — obrigatória, pendente":"Parte Superior — concluída",selected:i.currentStep!=="value-4"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-7",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-6",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-5",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-4",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-3",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon-2",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-parte-superior-icon",title:"icon-ic-shirt"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"]),K(r,{class:"tab-parte-inferior",name:"Parte Inferior",as:"button",onClick:i.onTabParteInferiorClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Parte Inferior — obrigatória, pendente":"Parte Inferior — concluída",selected:i.currentStep!=="value-5"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-7",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-6",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-5",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-4",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-3",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon-2",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-parte-inferior-icon",title:"icon-ic-shorts"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"]),K(r,{class:"tab-calcados",name:"Calçados",as:"button",onClick:i.onTabCalcadosClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Calçados — opcional":"Calçados — concluída",selected:i.currentStep!=="value-6"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-7",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-6",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-5",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-4",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-3",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-calcados-icon-2",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-calcados-icon",title:"icon-ic-footwear"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"]),K(r,{class:"tab-acessorios",name:"Acessórios",as:"button",onClick:i.onTabAcessoriosClick,"aria-label":i.currentStep==="value-1"||i.currentStep==="value-2"?"Acessórios — opcional":"Acessórios — concluída",selected:i.currentStep!=="value-7"?void 0:"true"},{icon:ne(()=>[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-7"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-7",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-6"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-6",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-5"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-5",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-4"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-4",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-3",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon-2",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(a,{key:0,class:"tab-acessorios-icon",title:"icon-ic-glasses"})):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),_:1},8,["onClick","aria-label","selected"])]),re("section",ff,[re("div",pf,[re("div",mf,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-3"?(Z(),Xe("div",_f,[...e[0]||(e[0]=[re("p",{class:"step-2"},"ETAPA 3 DE 8",-1),re("h1",{class:"title-2"},"CONJUNTO",-1)])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-3"?(Z(),Xe("p",gf,yo(i.currentStep==="value-1"?"ETAPA 1 DE 7":i.currentStep==="value-2"?"ETAPA 2 DE 7":i.currentStep==="value-4"?"ETAPA 4 DE 8":i.currentStep==="value-5"?"ETAPA 5 DE 8":i.currentStep==="value-6"?"ETAPA 6 DE 8":"ETAPA 7 DE 8"),1)):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-3"?(Z(),Xe("h1",bf,yo(i.currentStep==="value-1"?"CORPO":i.currentStep==="value-2"?"CABELO":i.currentStep==="value-4"?"PARTE SUPERIOR":i.currentStep==="value-5"?"PARTE INFERIOR":i.currentStep==="value-6"?"CALÇADOS":"ACESSÓRIOS"),1)):oe("",!0)]),_:1},8,["onEnter","onLeave"])])]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",vf,[re("div",xf,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-1"?(Z(),Xe("h2",Mf,"ÓCULOS")):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("h2",yf,"ESTILO DE CORPO")):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),re("div",Sf,[K(c,{class:"option-amigurumi",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-3"?(Z(),ge(c,{key:0,class:"option-amigurumi-2",reason:"",img:i.corpo1Img,"use-custom-color":!1,title:i.currentStep!=="value-2"?"Nenhum":"Ondulado",detail:i.currentStep!=="value-7"?"":"+ R$ 10,00"},null,8,["img","title","detail"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-3"?(Z(),ge(c,{key:0,class:"option-amigurumi-3",reason:"",img:i.corpo1Img,"use-custom-color":!1,title:i.currentStep!=="value-2"?"Nenhum":"Ondulado",detail:i.currentStep!=="value-7"?"":"+ R$ 8,00"},null,8,["img","title","detail"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"||i.currentStep==="value-4"||i.currentStep==="value-5"||i.currentStep==="value-6"?(Z(),ge(c,{key:0,class:"option-amigurumi-21",detail:"",reason:"",img:i.cabelo3Img,"use-custom-color":!1,title:i.currentStep==="value-2"?"Ondulado":"Nenhum"},null,8,["img","title"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"||i.currentStep==="value-4"?(Z(),ge(c,{key:0,class:"option-amigurumi-22",detail:"",reason:"",img:i.cabelo4Img,"use-custom-color":!1,title:i.currentStep==="value-2"?"Ondulado":"Nenhum"},null,8,["img","title"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-2"?(Z(),ge(c,{key:0,class:"option-amigurumi-23",title:"Ondulado",detail:"",reason:"",img:i.cabelo5Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"])]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Ef,[re("div",Af,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-1"?(Z(),Xe("h2",Tf,"CHAPÉUS")):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("h2",wf,"DETALHES DA PELE")):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Rf,[K(c,{class:"option-amigurumi-4",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"]),K(c,{class:"option-amigurumi-5",title:"Nenhum",reason:"",img:i.corpo1Img,"use-custom-color":!1,detail:i.currentStep==="value-1"?"":void 0},null,8,["img","detail"]),K(c,{class:"option-amigurumi-6",title:"Nenhum",reason:"",img:i.corpo1Img,"use-custom-color":!1,detail:i.currentStep==="value-1"?"":void 0},null,8,["img","detail"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-7",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-8",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Cf,[re("div",Lf,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-1"?(Z(),Xe("h2",Pf,"BRINCOS")):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("h2",If,"BRAÇO ESQUERDO")):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Df,[K(c,{class:"option-amigurumi-9",title:"Nenhum",detail:"",reason:"",img:i.noSelectImg,"use-custom-color":!1,selected:i.currentStep==="value-1"?void 0:"true"},null,8,["img","selected"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-10",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-11",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Nf,[re("div",Uf,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-1"?(Z(),Xe("h2",Of,"EXTRAS")):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("h2",Ff,"BRAÇO DIREITO")):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Bf,[K(c,{class:"option-amigurumi-12",title:"Nenhum",detail:"",reason:"",img:i.noSelectImg,"use-custom-color":!1,selected:i.currentStep==="value-1"?void 0:"true"},null,8,["img","selected"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-13",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-14",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",kf,[re("div",zf,[K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep!=="value-1"?(Z(),Xe("h2",Hf,"BANDEIRA")):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("h2",Vf,"PERNA ESQUERDA")):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"||i.currentStep==="value-7"?(Z(),Xe("div",Gf,[K(c,{class:"option-amigurumi-15",title:"Nenhum",detail:"",reason:"",img:i.noSelectImg,"use-custom-color":!1,selected:i.currentStep==="value-1"?void 0:"true"},null,8,["img","selected"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-16",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),ge(c,{key:0,class:"option-amigurumi-17",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])):oe("",!0)]),_:1},8,["onEnter","onLeave"])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("div",Wf,[...e[1]||(e[1]=[re("div",{class:"texts-container-7"},[re("h2",{class:"perna-direita"},"PERNA DIREITA")],-1)])])):oe("",!0)]),_:1},8,["onEnter","onLeave"]),K(se,{css:!1,onEnter:i.fadeIn,onLeave:i.fadeOut},{default:ne(()=>[i.currentStep==="value-1"?(Z(),Xe("div",$f,[K(c,{class:"option-amigurumi-18",title:"Nenhum",detail:"",reason:"",img:i.noSelectImg,"use-custom-color":!1},null,8,["img"]),K(c,{class:"option-amigurumi-19",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"]),K(c,{class:"option-amigurumi-20",selected:"true",title:"Nenhum",detail:"",reason:"",img:i.corpo1Img,"use-custom-color":!1},null,8,["img"])])):oe("",!0)]),_:1},8,["onEnter","onLeave"])])])],2)}const jf=ga(uf,[["render",Xf],["__scopeId","data-v-ea756fb2"]]),qf=1,Yf="ac-cachecol",Kf="Cachecol",Zf="acessorios",Jf=16,Qf=230,ep="#c0262d",tp="#f6f3ec",np=null,ip=[0,0,0],op="modelo.glb",sp="miniatura.webp",rp={"ac-cachecol_croche_0":{cor:"tex/ac-cachecol_croche_0/crochet_basecolor.webp",normal:"tex/ac-cachecol_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/ac-cachecol_croche_0/crochet_orm.webp",altura:"tex/ac-cachecol_croche_0/crochet_height.webp",ganho:1.6481}},ap=[{textura:"ac-cachecol_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],cp="amigurumi_croche 1.1.0",lp="2026-11-13T15:53:02",up={formato:qf,id:Yf,nome:Kf,categoria:Zf,preco:Jf,ordem:Qf,cor:ep,cor_detalhe:tp,rotulo_cor:np,deslocamento:ip,modelo:op,miniatura:sp,texturas:rp,malhas:ap,gerado_por:cp,gerado_em:lp},dp=1,hp="ac-chapeu",fp="Chapéu",pp="acessorios",mp=22,_p=200,gp="#211f1e",bp=null,vp=null,xp=[0,0,0],Mp="modelo.glb",yp="miniatura.webp",Sp={"ac-chapeu_croche_0":{cor:"tex/ac-chapeu_croche_0/crochet_basecolor.webp",normal:"tex/ac-chapeu_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/ac-chapeu_croche_0/crochet_orm.webp",altura:"tex/ac-chapeu_croche_0/crochet_height.webp",ganho:1.6457}},Ep=[{textura:"ac-chapeu_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Ap="amigurumi_croche 1.1.0",Tp="2026-11-13T15:52:55",wp={formato:dp,id:hp,nome:fp,categoria:pp,preco:mp,ordem:_p,cor:gp,cor_detalhe:bp,rotulo_cor:vp,deslocamento:xp,modelo:Mp,miniatura:yp,texturas:Sp,malhas:Ep,gerado_por:Ap,gerado_em:Tp},Rp=1,Cp="ac-laco",Lp="Laço",Pp="acessorios",Ip=8,Dp=220,Np="#e8879f",Up=null,Op=null,Fp=[0,0,0],Bp="modelo.glb",kp="miniatura.webp",zp={"ac-laco_croche_0":{cor:"tex/ac-laco_croche_0/crochet_basecolor.webp",normal:"tex/ac-laco_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/ac-laco_croche_0/crochet_orm.webp",altura:"tex/ac-laco_croche_0/crochet_height.webp",ganho:1.6514}},Hp=[{textura:"ac-laco_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Vp="amigurumi_croche 1.1.0",Gp="2026-11-13T15:52:59",Wp={formato:Rp,id:Cp,nome:Lp,categoria:Pp,preco:Ip,ordem:Dp,cor:Np,cor_detalhe:Up,rotulo_cor:Op,deslocamento:Fp,modelo:Bp,miniatura:kp,texturas:zp,malhas:Hp,gerado_por:Vp,gerado_em:Gp},$p=1,Xp="ac-oculos",jp="Óculos redondos",qp="acessorios",Yp=12,Kp=210,Zp="#c0262d",Jp=null,Qp="cor das lentes",em=[0,0,0],tm="modelo.glb",nm="miniatura.webp",im={},om=[],sm="amigurumi_croche 1.1.0",rm="2026-11-13T15:52:56",am={formato:$p,id:Xp,nome:jp,categoria:qp,preco:Yp,ordem:Kp,cor:Zp,cor_detalhe:Jp,rotulo_cor:Qp,deslocamento:em,modelo:tm,miniatura:nm,texturas:im,malhas:om,gerado_por:sm,gerado_em:rm},cm=1,lm="cabelo-cacheado-curto",um="Cacheado curto",dm="cabelo",hm=15,fm=20,pm="#c0262d",mm=null,_m=null,gm=[0,0,0],bm="modelo.glb",vm="miniatura.webp",xm={"cabelo-cacheado-curto_croche_0":{cor:"tex/cabelo-cacheado-curto_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-cacheado-curto_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-cacheado-curto_croche_0/crochet_orm.webp",altura:"tex/cabelo-cacheado-curto_croche_0/crochet_height.webp",ganho:1.6389}},Mm=[{textura:"cabelo-cacheado-curto_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1},{textura:"cabelo-cacheado-curto_croche_0",ponto:.0036,relevo:.18,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],ym="amigurumi_croche 1.1.0",Sm="2026-11-13T15:50:31",Em={formato:cm,id:lm,nome:um,categoria:dm,preco:hm,ordem:fm,cor:pm,cor_detalhe:mm,rotulo_cor:_m,deslocamento:gm,modelo:bm,miniatura:vm,texturas:xm,malhas:Mm,gerado_por:ym,gerado_em:Sm},Am=1,Tm="cabelo-cacheado",wm="Cacheado",Rm="cabelo",Cm=20,Lm=10,Pm="#c0262d",Im=null,Dm=null,Nm=[0,0,0],Um="modelo.glb",Om="miniatura.webp",Fm={"cabelo-cacheado_croche_0":{cor:"tex/cabelo-cacheado_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-cacheado_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-cacheado_croche_0/crochet_orm.webp",altura:"tex/cabelo-cacheado_croche_0/crochet_height.webp",ganho:1.6317}},Bm=[{textura:"cabelo-cacheado_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1},{textura:"cabelo-cacheado_croche_0",ponto:.0036,relevo:.18,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],km="amigurumi_croche 1.1.0",zm="2026-11-13T15:50:18",Hm={formato:Am,id:Tm,nome:wm,categoria:Rm,preco:Cm,ordem:Lm,cor:Pm,cor_detalhe:Im,rotulo_cor:Dm,deslocamento:Nm,modelo:Um,miniatura:Om,texturas:Fm,malhas:Bm,gerado_por:km,gerado_em:zm},Vm=1,Gm="cabelo-chiquinha",Wm="Maria-chiquinha",$m="cabelo",Xm=18,jm=50,qm="#e3c27c",Ym="#e8879f",Km=null,Zm=[0,0,0],Jm="modelo.glb",Qm="miniatura.webp",e_={"cabelo-chiquinha_croche_0":{cor:"tex/cabelo-chiquinha_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-chiquinha_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-chiquinha_croche_0/crochet_orm.webp",altura:"tex/cabelo-chiquinha_croche_0/crochet_height.webp",ganho:1.6463}},t_=[{textura:"cabelo-chiquinha_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],n_="amigurumi_croche 1.1.0",i_="2026-11-13T15:51:01",o_={formato:Vm,id:Gm,nome:Wm,categoria:$m,preco:Xm,ordem:jm,cor:qm,cor_detalhe:Ym,rotulo_cor:Km,deslocamento:Zm,modelo:Jm,miniatura:Qm,texturas:e_,malhas:t_,gerado_por:n_,gerado_em:i_},s_=1,r_="cabelo-coque",a_="Coque",c_="cabelo",l_=15,u_=60,d_="#3a2416",h_="#3a2416",f_=null,p_=[0,0,0],m_="modelo.glb",__="miniatura.webp",g_={"cabelo-coque_croche_0":{cor:"tex/cabelo-coque_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-coque_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-coque_croche_0/crochet_orm.webp",altura:"tex/cabelo-coque_croche_0/crochet_height.webp",ganho:1.6469}},b_=[{textura:"cabelo-coque_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],v_="amigurumi_croche 1.1.0",x_="2026-11-13T15:51:11",M_={formato:s_,id:r_,nome:a_,categoria:c_,preco:l_,ordem:u_,cor:d_,cor_detalhe:h_,rotulo_cor:f_,deslocamento:p_,modelo:m_,miniatura:__,texturas:g_,malhas:b_,gerado_por:v_,gerado_em:x_},y_=1,S_="cabelo-curto-liso",E_="Curto liso",A_="cabelo",T_=10,w_=30,R_="#1c1918",C_=null,L_=null,P_=[0,0,0],I_="modelo.glb",D_="miniatura.webp",N_={"cabelo-curto-liso_croche_0":{cor:"tex/cabelo-curto-liso_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-curto-liso_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-curto-liso_croche_0/crochet_orm.webp",altura:"tex/cabelo-curto-liso_croche_0/crochet_height.webp",ganho:1.6484}},U_=[{textura:"cabelo-curto-liso_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],O_="amigurumi_croche 1.1.0",F_="2026-11-13T15:50:41",B_={formato:y_,id:S_,nome:E_,categoria:A_,preco:T_,ordem:w_,cor:R_,cor_detalhe:C_,rotulo_cor:L_,deslocamento:P_,modelo:I_,miniatura:D_,texturas:N_,malhas:U_,gerado_por:O_,gerado_em:F_},k_=1,z_="cabelo-rabo",H_="Rabo de cavalo",V_="cabelo",G_=15,W_=40,$_="#5e3a22",X_="#c0262d",j_=null,q_=[0,0,0],Y_="modelo.glb",K_="miniatura.webp",Z_={"cabelo-rabo_croche_0":{cor:"tex/cabelo-rabo_croche_0/crochet_basecolor.webp",normal:"tex/cabelo-rabo_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/cabelo-rabo_croche_0/crochet_orm.webp",altura:"tex/cabelo-rabo_croche_0/crochet_height.webp",ganho:1.6472}},J_=[{textura:"cabelo-rabo_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],Q_="amigurumi_croche 1.1.0",eg="2026-11-13T15:50:51",tg={formato:k_,id:z_,nome:H_,categoria:V_,preco:G_,ordem:W_,cor:$_,cor_detalhe:X_,rotulo_cor:j_,deslocamento:q_,modelo:Y_,miniatura:K_,texturas:Z_,malhas:J_,gerado_por:Q_,gerado_em:eg},ng=1,ig="calc-botinha",og="Botinha",sg="calcados",rg=18,ag=180,cg="#9b6842",lg="#3a2416",ug=null,dg=[0,0,0],hg="modelo.glb",fg="miniatura.webp",pg={"calc-botinha_croche_0":{cor:"tex/calc-botinha_croche_0/crochet_basecolor.webp",normal:"tex/calc-botinha_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/calc-botinha_croche_0/crochet_orm.webp",altura:"tex/calc-botinha_croche_0/crochet_height.webp",ganho:1.6456}},mg=[{textura:"calc-botinha_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],_g="amigurumi_croche 1.1.0",gg="2026-11-13T15:52:41",bg={formato:ng,id:ig,nome:og,categoria:sg,preco:rg,ordem:ag,cor:cg,cor_detalhe:lg,rotulo_cor:ug,deslocamento:dg,modelo:hg,miniatura:fg,texturas:pg,malhas:mg,gerado_por:_g,gerado_em:gg},vg=1,xg="calc-sapatilha",Mg="Sapatilha",yg="calcados",Sg=14,Eg=190,Ag="#c0262d",Tg=null,wg=null,Rg=[0,0,0],Cg="modelo.glb",Lg="miniatura.webp",Pg={"calc-sapatilha_croche_0":{cor:"tex/calc-sapatilha_croche_0/crochet_basecolor.webp",normal:"tex/calc-sapatilha_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/calc-sapatilha_croche_0/crochet_orm.webp",altura:"tex/calc-sapatilha_croche_0/crochet_height.webp",ganho:1.6424}},Ig=[{textura:"calc-sapatilha_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Dg="amigurumi_croche 1.1.0",Ng="2026-11-13T15:52:44",Ug={formato:vg,id:xg,nome:Mg,categoria:yg,preco:Sg,ordem:Eg,cor:Ag,cor_detalhe:Tg,rotulo_cor:wg,deslocamento:Rg,modelo:Cg,miniatura:Lg,texturas:Pg,malhas:Ig,gerado_por:Dg,gerado_em:Ng},Og=1,Fg="calc-tenis",Bg="Tênis",kg="calcados",zg=16,Hg=170,Vg="#211f1e",Gg="#f6f3ec",Wg=null,$g=[0,0,0],Xg="modelo.glb",jg="miniatura.webp",qg={"calc-tenis_croche_0":{cor:"tex/calc-tenis_croche_0/crochet_basecolor.webp",normal:"tex/calc-tenis_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/calc-tenis_croche_0/crochet_orm.webp",altura:"tex/calc-tenis_croche_0/crochet_height.webp",ganho:1.6375}},Yg=[{textura:"calc-tenis_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],Kg="amigurumi_croche 1.1.0",Zg="2026-11-13T15:52:36",Jg={formato:Og,id:Fg,nome:Bg,categoria:kg,preco:zg,ordem:Hg,cor:Vg,cor_detalhe:Gg,rotulo_cor:Wg,deslocamento:$g,modelo:Xg,miniatura:jg,texturas:qg,malhas:Yg,gerado_por:Kg,gerado_em:Zg},Qg=1,e0="conj-macacao",t0="Macacão",n0="conjunto",i0=38,o0=80,s0="#4f74a3",r0="#f2c94c",a0=null,c0=[0,0,0],l0="modelo.glb",u0="miniatura.webp",d0={"conj-macacao_croche_0":{cor:"tex/conj-macacao_croche_0/crochet_basecolor.webp",normal:"tex/conj-macacao_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/conj-macacao_croche_0/crochet_orm.webp",altura:"tex/conj-macacao_croche_0/crochet_height.webp",ganho:1.643}},h0=[{textura:"conj-macacao_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],f0="amigurumi_croche 1.1.0",p0="2026-11-13T15:51:34",m0={formato:Qg,id:e0,nome:t0,categoria:n0,preco:i0,ordem:o0,cor:s0,cor_detalhe:r0,rotulo_cor:a0,deslocamento:c0,modelo:l0,miniatura:u0,texturas:d0,malhas:h0,gerado_por:f0,gerado_em:p0},_0=1,g0="conj-vestido",b0="Vestido",v0="conjunto",x0=35,M0=70,y0="#e8879f",S0="#f6f3ec",E0=null,A0=[0,0,0],T0="modelo.glb",w0="miniatura.webp",R0={"conj-vestido_croche_0":{cor:"tex/conj-vestido_croche_0/crochet_basecolor.webp",normal:"tex/conj-vestido_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/conj-vestido_croche_0/crochet_orm.webp",altura:"tex/conj-vestido_croche_0/crochet_height.webp",ganho:1.6446}},C0=[{textura:"conj-vestido_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],L0="amigurumi_croche 1.1.0",P0="2026-11-13T15:51:22",I0={formato:_0,id:g0,nome:b0,categoria:v0,preco:x0,ordem:M0,cor:y0,cor_detalhe:S0,rotulo_cor:E0,deslocamento:A0,modelo:T0,miniatura:w0,texturas:R0,malhas:C0,gerado_por:L0,gerado_em:P0},D0=1,N0="boneco-base",U0="Boneco base",O0="corpo",F0=120,B0=0,k0="#e8c09e",z0=null,H0=null,V0=[0,0,0],G0="modelo.glb",W0="miniatura.webp",$0={Body:{cor:"tex/Body/crochet_basecolor.webp",normal:"tex/Body/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/Body/crochet_orm.webp",altura:"tex/Body/crochet_height.webp",ganho:1.6372}},X0=[{textura:"Body",ponto:.0036,relevo:.3,nuvem_tamanho:.01,nuvem_profundidade:.001,fiapos:60,fiapos_longos:.5,peso_relevo:!0,zona_detalhe:!1},{textura:"Body",ponto:.0036,relevo:.3,nuvem_tamanho:.01,nuvem_profundidade:.001,fiapos:60,fiapos_longos:.5,peso_relevo:!1,zona_detalhe:!1}],j0="amigurumi_croche 1.1.0",q0="2026-11-13T15:50:00",Y0={formato:D0,id:N0,nome:U0,categoria:O0,preco:F0,ordem:B0,cor:k0,cor_detalhe:z0,rotulo_cor:H0,deslocamento:V0,modelo:G0,miniatura:W0,texturas:$0,malhas:X0,gerado_por:j0,gerado_em:q0},K0=1,Z0="inf-calca-barra",J0="Calça com barra",Q0="inferior",eb=22,tb=140,nb="#8f8c86",ib=null,ob=null,sb=[0,0,0],rb="modelo.glb",ab="miniatura.webp",cb={"inf-calca-barra_croche_0":{cor:"tex/inf-calca-barra_croche_0/crochet_basecolor.webp",normal:"tex/inf-calca-barra_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/inf-calca-barra_croche_0/crochet_orm.webp",altura:"tex/inf-calca-barra_croche_0/crochet_height.webp",ganho:1.6429}},lb=[{textura:"inf-calca-barra_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],ub="amigurumi_croche 1.1.0",db="2026-11-13T15:52:20",hb={formato:K0,id:Z0,nome:J0,categoria:Q0,preco:eb,ordem:tb,cor:nb,cor_detalhe:ib,rotulo_cor:ob,deslocamento:sb,modelo:rb,miniatura:ab,texturas:cb,malhas:lb,gerado_por:ub,gerado_em:db},fb=1,pb="inf-calca",mb="Calça",_b="inferior",gb=20,bb=130,vb="#4f74a3",xb=null,Mb=null,yb=[0,0,0],Sb="modelo.glb",Eb="miniatura.webp",Ab={"inf-calca_croche_0":{cor:"tex/inf-calca_croche_0/crochet_basecolor.webp",normal:"tex/inf-calca_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/inf-calca_croche_0/crochet_orm.webp",altura:"tex/inf-calca_croche_0/crochet_height.webp",ganho:1.6452}},Tb=[{textura:"inf-calca_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],wb="amigurumi_croche 1.1.0",Rb="2026-11-13T15:52:10",Cb={formato:fb,id:pb,nome:mb,categoria:_b,preco:gb,ordem:bb,cor:vb,cor_detalhe:xb,rotulo_cor:Mb,deslocamento:yb,modelo:Sb,miniatura:Eb,texturas:Ab,malhas:Tb,gerado_por:wb,gerado_em:Rb},Lb=1,Pb="inf-saia",Ib="Saia",Db="inferior",Nb=18,Ub=160,Ob="#a786c9",Fb=null,Bb=null,kb=[0,0,0],zb="modelo.glb",Hb="miniatura.webp",Vb={"inf-saia_croche_0":{cor:"tex/inf-saia_croche_0/crochet_basecolor.webp",normal:"tex/inf-saia_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/inf-saia_croche_0/crochet_orm.webp",altura:"tex/inf-saia_croche_0/crochet_height.webp",ganho:1.6465}},Gb=[{textura:"inf-saia_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Wb="amigurumi_croche 1.1.0",$b="2026-11-13T15:52:32",Xb={formato:Lb,id:Pb,nome:Ib,categoria:Db,preco:Nb,ordem:Ub,cor:Ob,cor_detalhe:Fb,rotulo_cor:Bb,deslocamento:kb,modelo:zb,miniatura:Hb,texturas:Vb,malhas:Gb,gerado_por:Wb,gerado_em:$b},jb=1,qb="inf-shorts",Yb="Shorts",Kb="inferior",Zb=15,Jb=150,Qb="#6fa8d6",ev=null,tv=null,nv=[0,0,0],iv="modelo.glb",ov="miniatura.webp",sv={"inf-shorts_croche_0":{cor:"tex/inf-shorts_croche_0/crochet_basecolor.webp",normal:"tex/inf-shorts_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/inf-shorts_croche_0/crochet_orm.webp",altura:"tex/inf-shorts_croche_0/crochet_height.webp",ganho:1.6375}},rv=[{textura:"inf-shorts_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],av="amigurumi_croche 1.1.0",cv="2026-11-13T15:52:27",lv={formato:jb,id:qb,nome:Yb,categoria:Kb,preco:Zb,ordem:Jb,cor:Qb,cor_detalhe:ev,rotulo_cor:tv,deslocamento:nv,modelo:iv,miniatura:ov,texturas:sv,malhas:rv,gerado_por:av,gerado_em:cv},uv=1,dv="sup-camiseta",hv="Camiseta",fv="superior",pv=18,mv=90,_v="#211f1e",gv=null,bv=null,vv=[0,0,0],xv="modelo.glb",Mv="miniatura.webp",yv={"sup-camiseta_croche_0":{cor:"tex/sup-camiseta_croche_0/crochet_basecolor.webp",normal:"tex/sup-camiseta_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/sup-camiseta_croche_0/crochet_orm.webp",altura:"tex/sup-camiseta_croche_0/crochet_height.webp",ganho:1.6413}},Sv=[{textura:"sup-camiseta_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Ev="amigurumi_croche 1.1.0",Av="2026-11-13T15:51:40",Tv={formato:uv,id:dv,nome:hv,categoria:fv,preco:pv,ordem:mv,cor:_v,cor_detalhe:gv,rotulo_cor:bv,deslocamento:vv,modelo:xv,miniatura:Mv,texturas:yv,malhas:Sv,gerado_por:Ev,gerado_em:Av},wv=1,Rv="sup-listrada",Cv="Blusa listrada",Lv="superior",Pv=24,Iv=100,Dv="#211f1e",Nv="auto",Uv=null,Ov=[0,0,0],Fv="modelo.glb",Bv="miniatura.webp",kv={"sup-listrada_croche_0":{cor:"tex/sup-listrada_croche_0/crochet_basecolor.webp",normal:"tex/sup-listrada_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/sup-listrada_croche_0/crochet_orm.webp",altura:"tex/sup-listrada_croche_0/crochet_height.webp",ganho:1.6385}},zv=[{textura:"sup-listrada_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!0}],Hv="amigurumi_croche 1.1.0",Vv="2026-11-13T15:51:47",Gv={formato:wv,id:Rv,nome:Cv,categoria:Lv,preco:Pv,ordem:Iv,cor:Dv,cor_detalhe:Nv,rotulo_cor:Uv,deslocamento:Ov,modelo:Fv,miniatura:Bv,texturas:kv,malhas:zv,gerado_por:Hv,gerado_em:Vv},Wv=1,$v="sup-regata",Xv="Regata",jv="superior",qv=14,Yv=110,Kv="#f2c94c",Zv=null,Jv=null,Qv=[0,0,0],ex="modelo.glb",tx="miniatura.webp",nx={"sup-regata_croche_0":{cor:"tex/sup-regata_croche_0/crochet_basecolor.webp",normal:"tex/sup-regata_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/sup-regata_croche_0/crochet_orm.webp",altura:"tex/sup-regata_croche_0/crochet_height.webp",ganho:1.6469}},ix=[{textura:"sup-regata_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],ox="amigurumi_croche 1.1.0",sx="2026-11-13T15:51:52",rx={formato:Wv,id:$v,nome:Xv,categoria:jv,preco:qv,ordem:Yv,cor:Kv,cor_detalhe:Zv,rotulo_cor:Jv,deslocamento:Qv,modelo:ex,miniatura:tx,texturas:nx,malhas:ix,gerado_por:ox,gerado_em:sx},ax=1,cx="sup-sueter",lx="Suéter gola alta",ux="superior",dx=26,hx=120,fx="#2f7a43",px=null,mx=null,_x=[0,0,0],gx="modelo.glb",bx="miniatura.webp",vx={"sup-sueter_croche_0":{cor:"tex/sup-sueter_croche_0/crochet_basecolor.webp",normal:"tex/sup-sueter_croche_0/crochet_normaldetail.webp",normal_detalhe:!0,orm:"tex/sup-sueter_croche_0/crochet_orm.webp",altura:"tex/sup-sueter_croche_0/crochet_height.webp",ganho:1.6355}},xx=[{textura:"sup-sueter_croche_0",ponto:.0036,relevo:.28,nuvem_tamanho:.009,nuvem_profundidade:5e-4,fiapos:50,fiapos_longos:.45,peso_relevo:!1,zona_detalhe:!1}],Mx="amigurumi_croche 1.1.0",yx="2026-11-13T15:52:00",Sx={formato:ax,id:cx,nome:lx,categoria:ux,preco:dx,ordem:hx,cor:fx,cor_detalhe:px,rotulo_cor:mx,deslocamento:_x,modelo:gx,miniatura:bx,texturas:vx,malhas:xx,gerado_por:Mx,gerado_em:yx},Ex="/laura-e-ponto/assets/miniatura-OlTux_aR.webp",Ax="/laura-e-ponto/assets/modelo-D9ICNPmS.glb",Tx="/laura-e-ponto/assets/crochet_basecolor-rwCzixmD.webp",wx="/laura-e-ponto/assets/crochet_height-DC1ZxDrP.webp",Rx="/laura-e-ponto/assets/crochet_normaldetail-Bhxup5R_.webp",Cx="/laura-e-ponto/assets/crochet_orm-B-JIcJzG.webp",Lx="/laura-e-ponto/assets/miniatura-gYcRalZm.webp",Px="/laura-e-ponto/assets/modelo-CAcKJqHW.glb",Ix="/laura-e-ponto/assets/crochet_basecolor-D1Sdq17t.webp",Dx="/laura-e-ponto/assets/crochet_height-BQu07bbG.webp",Nx="/laura-e-ponto/assets/crochet_normaldetail-XB4RvXNH.webp",Ux="/laura-e-ponto/assets/crochet_orm-aMAvFLMf.webp",Ox="/laura-e-ponto/assets/miniatura-B6UDVfgY.webp",Fx="/laura-e-ponto/assets/modelo-D_ALRkWc.glb",Bx="/laura-e-ponto/assets/crochet_basecolor-DvEnv-GV.webp",kx="/laura-e-ponto/assets/crochet_height-B48vE5BM.webp",zx="/laura-e-ponto/assets/crochet_normaldetail-CPaFniQ9.webp",Hx="/laura-e-ponto/assets/crochet_orm-DYyDE0sx.webp",Vx="/laura-e-ponto/assets/miniatura-BtqAAv06.webp",Gx="/laura-e-ponto/assets/modelo-Ct1VM3_l.glb",Wx="/laura-e-ponto/assets/miniatura-DA4h7LIS.webp",$x="/laura-e-ponto/assets/modelo-0nAxPdoP.glb",Xx="/laura-e-ponto/assets/crochet_basecolor-CfZX8WPi.webp",jx="/laura-e-ponto/assets/crochet_height-Cixm4VhW.webp",qx="/laura-e-ponto/assets/crochet_normaldetail-iV1M0U4V.webp",Yx="/laura-e-ponto/assets/crochet_orm-hJOcGQlS.webp",Kx="/laura-e-ponto/assets/miniatura-DNSgvUDe.webp",Zx="/laura-e-ponto/assets/modelo-B0NfE4J7.glb",Jx="/laura-e-ponto/assets/crochet_basecolor-BAhLQLwM.webp",Qx="/laura-e-ponto/assets/crochet_height-B7tnnNrx.webp",e1="/laura-e-ponto/assets/crochet_normaldetail-CI36unF8.webp",t1="/laura-e-ponto/assets/crochet_orm-B18d65Yh.webp",n1="/laura-e-ponto/assets/miniatura-DiT_Z22c.webp",i1="/laura-e-ponto/assets/modelo-Bk8KdFuA.glb",o1="/laura-e-ponto/assets/crochet_basecolor-CM88TZdN.webp",s1="/laura-e-ponto/assets/crochet_height-BuLhFqiF.webp",r1="/laura-e-ponto/assets/crochet_normaldetail-CjINwIHM.webp",a1="/laura-e-ponto/assets/crochet_orm-C16Ak9f-.webp",c1="/laura-e-ponto/assets/miniatura-CZ7uppuv.webp",l1="/laura-e-ponto/assets/modelo-BX017UAh.glb",u1="/laura-e-ponto/assets/crochet_basecolor-BIED6bl0.webp",d1="/laura-e-ponto/assets/crochet_height-CoDrzNdH.webp",h1="/laura-e-ponto/assets/crochet_normaldetail-BVRVoZ8R.webp",f1="/laura-e-ponto/assets/crochet_orm-Da8JU_Cp.webp",p1="/laura-e-ponto/assets/miniatura-DIEO2pot.webp",m1="/laura-e-ponto/assets/modelo-BSHyVyqT.glb",_1="/laura-e-ponto/assets/crochet_basecolor-Cgex_9P_.webp",g1="/laura-e-ponto/assets/crochet_height-DHIHnw_8.webp",b1="/laura-e-ponto/assets/crochet_normaldetail-CR2bOz3O.webp",v1="/laura-e-ponto/assets/crochet_orm-DRWrxMIx.webp",x1="/laura-e-ponto/assets/miniatura-Abfox-da.webp",M1="/laura-e-ponto/assets/modelo-DIa0LVpK.glb",y1="/laura-e-ponto/assets/crochet_basecolor-CViS58bQ.webp",S1="/laura-e-ponto/assets/crochet_height-CJA8s8tY.webp",E1="/laura-e-ponto/assets/crochet_normaldetail-BSOKEzDs.webp",A1="/laura-e-ponto/assets/crochet_orm-2s_Fis64.webp",T1="/laura-e-ponto/assets/miniatura-VfJe9j8d.webp",w1="/laura-e-ponto/assets/modelo-BPTgVW6Y.glb",R1="/laura-e-ponto/assets/crochet_basecolor-C4B7gTEF.webp",C1="/laura-e-ponto/assets/crochet_height-iWW0iTRd.webp",L1="/laura-e-ponto/assets/crochet_normaldetail-DgwxWuBh.webp",P1="/laura-e-ponto/assets/crochet_orm-CiKuOtFr.webp",I1="/laura-e-ponto/assets/miniatura-D5Y0MNBE.webp",D1="/laura-e-ponto/assets/modelo-CcYsyiEU.glb",N1="/laura-e-ponto/assets/crochet_basecolor-Bun5demk.webp",U1="/laura-e-ponto/assets/crochet_height-DuJR3Bez.webp",O1="/laura-e-ponto/assets/crochet_normaldetail-DHrLjYfr.webp",F1="/laura-e-ponto/assets/crochet_orm-yNrv5IiX.webp",B1="/laura-e-ponto/assets/miniatura-CMAV4nnM.webp",k1="/laura-e-ponto/assets/modelo-D9wn-S9K.glb",z1="/laura-e-ponto/assets/crochet_basecolor-YroySX9p.webp",H1="/laura-e-ponto/assets/crochet_height-FTGEZu13.webp",V1="/laura-e-ponto/assets/crochet_normaldetail-CEMILskM.webp",G1="/laura-e-ponto/assets/crochet_orm-SDwn8kME.webp",W1="/laura-e-ponto/assets/miniatura-cd5-tOnM.webp",$1="/laura-e-ponto/assets/modelo-D9OI1xsB.glb",X1="/laura-e-ponto/assets/crochet_basecolor-B-s6cf-t.webp",j1="/laura-e-ponto/assets/crochet_height-o-b6CSKI.webp",q1="/laura-e-ponto/assets/crochet_normaldetail-EsFRm9JF.webp",Y1="/laura-e-ponto/assets/crochet_orm-CF1SjpMs.webp",K1="/laura-e-ponto/assets/miniatura-Cf7SfDv3.webp",Z1="/laura-e-ponto/assets/modelo-CjY51SOX.glb",J1="/laura-e-ponto/assets/crochet_basecolor-C7qxp7AN.webp",Q1="/laura-e-ponto/assets/crochet_height-ClUpRMTM.webp",eM="/laura-e-ponto/assets/crochet_normaldetail-BRPtd23L.webp",tM="/laura-e-ponto/assets/crochet_orm-DgEV3UHL.webp",nM="/laura-e-ponto/assets/miniatura-DU9rtAq3.webp",iM="/laura-e-ponto/assets/modelo-Bsh7h9dp.glb",oM="/laura-e-ponto/assets/crochet_basecolor-aPxPKmyL.webp",sM="/laura-e-ponto/assets/crochet_height-CKrCYNae.webp",rM="/laura-e-ponto/assets/crochet_normaldetail-D4Re7zYY.webp",aM="/laura-e-ponto/assets/crochet_orm-iyP3jxnH.webp",cM="/laura-e-ponto/assets/miniatura-Dx-zJw3t.webp",lM="/laura-e-ponto/assets/modelo-BSaG9_pK.glb",uM="/laura-e-ponto/assets/crochet_basecolor-CXffjWBA.webp",dM="/laura-e-ponto/assets/crochet_height-B5wQRMou.webp",hM="/laura-e-ponto/assets/crochet_normaldetail-CfCSUvCb.webp",fM="/laura-e-ponto/assets/crochet_orm-DdqP6QGV.webp",pM="/laura-e-ponto/assets/miniatura-BVIUeKdI.webp",mM="/laura-e-ponto/assets/modelo-Cr7yIzke.glb",_M="/laura-e-ponto/assets/crochet_basecolor-Du1pBYGQ.webp",gM="/laura-e-ponto/assets/crochet_height-BSJDA-65.webp",bM="/laura-e-ponto/assets/crochet_normaldetail-CJwWWbtV.webp",vM="/laura-e-ponto/assets/crochet_orm-7UQDk5eW.webp",xM="/laura-e-ponto/assets/miniatura-EvNm5zD_.webp",MM="/laura-e-ponto/assets/modelo-B6RtpLNF.glb",yM="/laura-e-ponto/assets/crochet_basecolor-C9p1Qkcm.webp",SM="/laura-e-ponto/assets/crochet_height-BKZqZp1J.webp",EM="/laura-e-ponto/assets/crochet_normaldetail-hCNz7cVE.webp",AM="/laura-e-ponto/assets/crochet_orm-DzuvPvMp.webp",TM="/laura-e-ponto/assets/miniatura-B17WajQp.webp",wM="/laura-e-ponto/assets/modelo-CZhsoccE.glb",RM="/laura-e-ponto/assets/crochet_basecolor-nxTE1LEE.webp",CM="/laura-e-ponto/assets/crochet_height-UBrsazQX.webp",LM="/laura-e-ponto/assets/crochet_normaldetail-CQ3U5Kan.webp",PM="/laura-e-ponto/assets/crochet_orm-DqnWzOR3.webp",IM="/laura-e-ponto/assets/miniatura-DHJyDO9l.webp",DM="/laura-e-ponto/assets/modelo-C8iDiJrS.glb",NM="/laura-e-ponto/assets/crochet_basecolor-Bkzeg2Iu.webp",UM="/laura-e-ponto/assets/crochet_height-CibuZVbI.webp",OM="/laura-e-ponto/assets/crochet_normaldetail-XKRX2_QY.webp",FM="/laura-e-ponto/assets/crochet_orm-C9c8-ITp.webp",BM="/laura-e-ponto/assets/miniatura-DbTFFVRu.webp",kM="/laura-e-ponto/assets/modelo-9mcvmfG1.glb",zM="/laura-e-ponto/assets/crochet_basecolor-q7z9m-yj.webp",HM="/laura-e-ponto/assets/crochet_height-Fp4HX6x9.webp",VM="/laura-e-ponto/assets/crochet_normaldetail-bJCf7h5E.webp",GM="/laura-e-ponto/assets/crochet_orm-B-B9Hz-x.webp",WM="/laura-e-ponto/assets/miniatura-Duu5MciX.webp",$M="/laura-e-ponto/assets/modelo-DRbhScu4.glb",XM="/laura-e-ponto/assets/crochet_basecolor-B4X_O3FH.webp",jM="/laura-e-ponto/assets/crochet_height-rninz5G1.webp",qM="/laura-e-ponto/assets/crochet_normaldetail-2BW3TJdY.webp",YM="/laura-e-ponto/assets/crochet_orm-DQfIWj9y.webp",KM="/laura-e-ponto/assets/miniatura-BB4OdGHM.webp",ZM="/laura-e-ponto/assets/modelo-B5Vh9s1f.glb",JM="/laura-e-ponto/assets/crochet_basecolor-BH7KQhAP.webp",QM="/laura-e-ponto/assets/crochet_height-_oAgQPoN.webp",ey="/laura-e-ponto/assets/crochet_normaldetail-Bj81_nUE.webp",ty="/laura-e-ponto/assets/crochet_orm-Q4urD4lm.webp",ny=[{id:"corpo",pasta:"corpo"},{id:"cabelo",pasta:"cabelos"},{id:"conjunto",pasta:"conjuntos"},{id:"superior",pasta:"superiores"},{id:"inferior",pasta:"inferiores"},{id:"calcados",pasta:"calcados"},{id:"acessorios",pasta:"acessorios"}],iy=/^[a-z0-9]+(-[a-z0-9]+)*$/,Za=/^#[0-9a-f]{6}$/,Uo=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ro=i=>typeof i=="number"&&Number.isFinite(i);class kl extends Error{}const xt=i=>{throw new kl(i)};function oy(i,e,t){try{return{ok:!0,...sy(i,e,t)}}catch(n){if(n instanceof kl)return{ok:!1,motivo:n.message};throw n}}function sy(i,e,t){Uo(i)||xt("peca.json não é um objeto");const n=i;n.formato!==1&&xt(`formato desconhecido: ${String(n.formato)}`);const o=e.split("/").filter(Boolean),s=n.id;(typeof s!="string"||!iy.test(s)||s.length>40||s!==o.at(-1))&&xt(`id inválido ou diferente da pasta: ${String(s)}`);const r=n.nome;(typeof r!="string"||r.trim().length<1||r.trim().length>40)&&xt("nome inválido");const a=ny.find(g=>g.id===n.categoria);a||xt(`categoria desconhecida: ${String(n.categoria)}`),(!ro(n.preco)||n.preco<0)&&xt("preço inválido"),(!Number.isInteger(n.ordem)||n.ordem<0||n.ordem>9999)&&xt("ordem inválida"),(typeof n.cor!="string"||!Za.test(n.cor))&&xt(`cor inválida: ${String(n.cor)}`);const c=n.cor_detalhe;c===null||c==="auto"||typeof c=="string"&&Za.test(c)||xt(`cor_detalhe inválida: ${String(c)}`);const l=n.rotulo_cor;l===null||typeof l=="string"&&l.length<=40||xt("rotulo_cor inválido");const u=n.deslocamento;(!Array.isArray(u)||u.length!==3||!u.every(ro))&&xt("deslocamento inválido");const d=g=>typeof g!="string"?xt(`arquivo não encontrado: ${String(g)}`):((g.startsWith("/")||g.split(/[\\/]/).includes(".."))&&xt(`caminho inválido: ${g}`),t(g)||xt(`arquivo não encontrado: ${g}`),g);d(n.modelo),d(n.miniatura),Uo(n.texturas)||xt("textura inválida: texturas");for(const[g,m]of Object.entries(n.texturas)){Uo(m)||xt(`textura inválida: ${g}`);const f=m;(!ro(f.ganho)||f.ganho<=0||typeof f.normal_detalhe!="boolean")&&xt(`textura inválida: ${g}`);for(const S of["cor","normal","orm","altura"])typeof f[S]!="string"&&xt(`textura inválida: ${g}`),d(f[S])}Array.isArray(n.malhas)||xt("malha 0 inválida"),n.malhas.forEach((g,m)=>{Uo(g)&&typeof g.textura=="string"&&Object.hasOwn(n.texturas,g.textura)&&ro(g.ponto)&&g.ponto>0&&[g.relevo,g.nuvem_tamanho,g.nuvem_profundidade,g.fiapos,g.fiapos_longos].every(S=>ro(S)&&S>=0)&&typeof g.peso_relevo=="boolean"&&typeof g.zona_detalhe=="boolean"||xt(`malha ${m} inválida`)});const h=[],p=a,_=o.at(-2)??"";return _!==p.pasta&&h.push(`pasta de categoria "${_}" diferente da categoria "${p.id}"`),{manifesto:n,avisos:h}}const Ja=Object.assign({"/resources/acessorios/ac-cachecol/peca.json":up,"/resources/acessorios/ac-chapeu/peca.json":wp,"/resources/acessorios/ac-laco/peca.json":Wp,"/resources/acessorios/ac-oculos/peca.json":am,"/resources/cabelos/cabelo-cacheado-curto/peca.json":Em,"/resources/cabelos/cabelo-cacheado/peca.json":Hm,"/resources/cabelos/cabelo-chiquinha/peca.json":o_,"/resources/cabelos/cabelo-coque/peca.json":M_,"/resources/cabelos/cabelo-curto-liso/peca.json":B_,"/resources/cabelos/cabelo-rabo/peca.json":tg,"/resources/calcados/calc-botinha/peca.json":bg,"/resources/calcados/calc-sapatilha/peca.json":Ug,"/resources/calcados/calc-tenis/peca.json":Jg,"/resources/conjuntos/conj-macacao/peca.json":m0,"/resources/conjuntos/conj-vestido/peca.json":I0,"/resources/corpo/boneco-base/peca.json":Y0,"/resources/inferiores/inf-calca-barra/peca.json":hb,"/resources/inferiores/inf-calca/peca.json":Cb,"/resources/inferiores/inf-saia/peca.json":Xb,"/resources/inferiores/inf-shorts/peca.json":lv,"/resources/superiores/sup-camiseta/peca.json":Tv,"/resources/superiores/sup-listrada/peca.json":Gv,"/resources/superiores/sup-regata/peca.json":rx,"/resources/superiores/sup-sueter/peca.json":Sx}),Qa=Object.assign({"/resources/acessorios/ac-cachecol/miniatura.webp":Ex,"/resources/acessorios/ac-cachecol/modelo.glb":Ax,"/resources/acessorios/ac-cachecol/tex/ac-cachecol_croche_0/crochet_basecolor.webp":Tx,"/resources/acessorios/ac-cachecol/tex/ac-cachecol_croche_0/crochet_height.webp":wx,"/resources/acessorios/ac-cachecol/tex/ac-cachecol_croche_0/crochet_normaldetail.webp":Rx,"/resources/acessorios/ac-cachecol/tex/ac-cachecol_croche_0/crochet_orm.webp":Cx,"/resources/acessorios/ac-chapeu/miniatura.webp":Lx,"/resources/acessorios/ac-chapeu/modelo.glb":Px,"/resources/acessorios/ac-chapeu/tex/ac-chapeu_croche_0/crochet_basecolor.webp":Ix,"/resources/acessorios/ac-chapeu/tex/ac-chapeu_croche_0/crochet_height.webp":Dx,"/resources/acessorios/ac-chapeu/tex/ac-chapeu_croche_0/crochet_normaldetail.webp":Nx,"/resources/acessorios/ac-chapeu/tex/ac-chapeu_croche_0/crochet_orm.webp":Ux,"/resources/acessorios/ac-laco/miniatura.webp":Ox,"/resources/acessorios/ac-laco/modelo.glb":Fx,"/resources/acessorios/ac-laco/tex/ac-laco_croche_0/crochet_basecolor.webp":Bx,"/resources/acessorios/ac-laco/tex/ac-laco_croche_0/crochet_height.webp":kx,"/resources/acessorios/ac-laco/tex/ac-laco_croche_0/crochet_normaldetail.webp":zx,"/resources/acessorios/ac-laco/tex/ac-laco_croche_0/crochet_orm.webp":Hx,"/resources/acessorios/ac-oculos/miniatura.webp":Vx,"/resources/acessorios/ac-oculos/modelo.glb":Gx,"/resources/cabelos/cabelo-cacheado-curto/miniatura.webp":Wx,"/resources/cabelos/cabelo-cacheado-curto/modelo.glb":$x,"/resources/cabelos/cabelo-cacheado-curto/tex/cabelo-cacheado-curto_croche_0/crochet_basecolor.webp":Xx,"/resources/cabelos/cabelo-cacheado-curto/tex/cabelo-cacheado-curto_croche_0/crochet_height.webp":jx,"/resources/cabelos/cabelo-cacheado-curto/tex/cabelo-cacheado-curto_croche_0/crochet_normaldetail.webp":qx,"/resources/cabelos/cabelo-cacheado-curto/tex/cabelo-cacheado-curto_croche_0/crochet_orm.webp":Yx,"/resources/cabelos/cabelo-cacheado/miniatura.webp":Kx,"/resources/cabelos/cabelo-cacheado/modelo.glb":Zx,"/resources/cabelos/cabelo-cacheado/tex/cabelo-cacheado_croche_0/crochet_basecolor.webp":Jx,"/resources/cabelos/cabelo-cacheado/tex/cabelo-cacheado_croche_0/crochet_height.webp":Qx,"/resources/cabelos/cabelo-cacheado/tex/cabelo-cacheado_croche_0/crochet_normaldetail.webp":e1,"/resources/cabelos/cabelo-cacheado/tex/cabelo-cacheado_croche_0/crochet_orm.webp":t1,"/resources/cabelos/cabelo-chiquinha/miniatura.webp":n1,"/resources/cabelos/cabelo-chiquinha/modelo.glb":i1,"/resources/cabelos/cabelo-chiquinha/tex/cabelo-chiquinha_croche_0/crochet_basecolor.webp":o1,"/resources/cabelos/cabelo-chiquinha/tex/cabelo-chiquinha_croche_0/crochet_height.webp":s1,"/resources/cabelos/cabelo-chiquinha/tex/cabelo-chiquinha_croche_0/crochet_normaldetail.webp":r1,"/resources/cabelos/cabelo-chiquinha/tex/cabelo-chiquinha_croche_0/crochet_orm.webp":a1,"/resources/cabelos/cabelo-coque/miniatura.webp":c1,"/resources/cabelos/cabelo-coque/modelo.glb":l1,"/resources/cabelos/cabelo-coque/tex/cabelo-coque_croche_0/crochet_basecolor.webp":u1,"/resources/cabelos/cabelo-coque/tex/cabelo-coque_croche_0/crochet_height.webp":d1,"/resources/cabelos/cabelo-coque/tex/cabelo-coque_croche_0/crochet_normaldetail.webp":h1,"/resources/cabelos/cabelo-coque/tex/cabelo-coque_croche_0/crochet_orm.webp":f1,"/resources/cabelos/cabelo-curto-liso/miniatura.webp":p1,"/resources/cabelos/cabelo-curto-liso/modelo.glb":m1,"/resources/cabelos/cabelo-curto-liso/tex/cabelo-curto-liso_croche_0/crochet_basecolor.webp":_1,"/resources/cabelos/cabelo-curto-liso/tex/cabelo-curto-liso_croche_0/crochet_height.webp":g1,"/resources/cabelos/cabelo-curto-liso/tex/cabelo-curto-liso_croche_0/crochet_normaldetail.webp":b1,"/resources/cabelos/cabelo-curto-liso/tex/cabelo-curto-liso_croche_0/crochet_orm.webp":v1,"/resources/cabelos/cabelo-rabo/miniatura.webp":x1,"/resources/cabelos/cabelo-rabo/modelo.glb":M1,"/resources/cabelos/cabelo-rabo/tex/cabelo-rabo_croche_0/crochet_basecolor.webp":y1,"/resources/cabelos/cabelo-rabo/tex/cabelo-rabo_croche_0/crochet_height.webp":S1,"/resources/cabelos/cabelo-rabo/tex/cabelo-rabo_croche_0/crochet_normaldetail.webp":E1,"/resources/cabelos/cabelo-rabo/tex/cabelo-rabo_croche_0/crochet_orm.webp":A1,"/resources/calcados/calc-botinha/miniatura.webp":T1,"/resources/calcados/calc-botinha/modelo.glb":w1,"/resources/calcados/calc-botinha/tex/calc-botinha_croche_0/crochet_basecolor.webp":R1,"/resources/calcados/calc-botinha/tex/calc-botinha_croche_0/crochet_height.webp":C1,"/resources/calcados/calc-botinha/tex/calc-botinha_croche_0/crochet_normaldetail.webp":L1,"/resources/calcados/calc-botinha/tex/calc-botinha_croche_0/crochet_orm.webp":P1,"/resources/calcados/calc-sapatilha/miniatura.webp":I1,"/resources/calcados/calc-sapatilha/modelo.glb":D1,"/resources/calcados/calc-sapatilha/tex/calc-sapatilha_croche_0/crochet_basecolor.webp":N1,"/resources/calcados/calc-sapatilha/tex/calc-sapatilha_croche_0/crochet_height.webp":U1,"/resources/calcados/calc-sapatilha/tex/calc-sapatilha_croche_0/crochet_normaldetail.webp":O1,"/resources/calcados/calc-sapatilha/tex/calc-sapatilha_croche_0/crochet_orm.webp":F1,"/resources/calcados/calc-tenis/miniatura.webp":B1,"/resources/calcados/calc-tenis/modelo.glb":k1,"/resources/calcados/calc-tenis/tex/calc-tenis_croche_0/crochet_basecolor.webp":z1,"/resources/calcados/calc-tenis/tex/calc-tenis_croche_0/crochet_height.webp":H1,"/resources/calcados/calc-tenis/tex/calc-tenis_croche_0/crochet_normaldetail.webp":V1,"/resources/calcados/calc-tenis/tex/calc-tenis_croche_0/crochet_orm.webp":G1,"/resources/conjuntos/conj-macacao/miniatura.webp":W1,"/resources/conjuntos/conj-macacao/modelo.glb":$1,"/resources/conjuntos/conj-macacao/tex/conj-macacao_croche_0/crochet_basecolor.webp":X1,"/resources/conjuntos/conj-macacao/tex/conj-macacao_croche_0/crochet_height.webp":j1,"/resources/conjuntos/conj-macacao/tex/conj-macacao_croche_0/crochet_normaldetail.webp":q1,"/resources/conjuntos/conj-macacao/tex/conj-macacao_croche_0/crochet_orm.webp":Y1,"/resources/conjuntos/conj-vestido/miniatura.webp":K1,"/resources/conjuntos/conj-vestido/modelo.glb":Z1,"/resources/conjuntos/conj-vestido/tex/conj-vestido_croche_0/crochet_basecolor.webp":J1,"/resources/conjuntos/conj-vestido/tex/conj-vestido_croche_0/crochet_height.webp":Q1,"/resources/conjuntos/conj-vestido/tex/conj-vestido_croche_0/crochet_normaldetail.webp":eM,"/resources/conjuntos/conj-vestido/tex/conj-vestido_croche_0/crochet_orm.webp":tM,"/resources/corpo/boneco-base/miniatura.webp":nM,"/resources/corpo/boneco-base/modelo.glb":iM,"/resources/corpo/boneco-base/tex/Body/crochet_basecolor.webp":oM,"/resources/corpo/boneco-base/tex/Body/crochet_height.webp":sM,"/resources/corpo/boneco-base/tex/Body/crochet_normaldetail.webp":rM,"/resources/corpo/boneco-base/tex/Body/crochet_orm.webp":aM,"/resources/inferiores/inf-calca-barra/miniatura.webp":cM,"/resources/inferiores/inf-calca-barra/modelo.glb":lM,"/resources/inferiores/inf-calca-barra/tex/inf-calca-barra_croche_0/crochet_basecolor.webp":uM,"/resources/inferiores/inf-calca-barra/tex/inf-calca-barra_croche_0/crochet_height.webp":dM,"/resources/inferiores/inf-calca-barra/tex/inf-calca-barra_croche_0/crochet_normaldetail.webp":hM,"/resources/inferiores/inf-calca-barra/tex/inf-calca-barra_croche_0/crochet_orm.webp":fM,"/resources/inferiores/inf-calca/miniatura.webp":pM,"/resources/inferiores/inf-calca/modelo.glb":mM,"/resources/inferiores/inf-calca/tex/inf-calca_croche_0/crochet_basecolor.webp":_M,"/resources/inferiores/inf-calca/tex/inf-calca_croche_0/crochet_height.webp":gM,"/resources/inferiores/inf-calca/tex/inf-calca_croche_0/crochet_normaldetail.webp":bM,"/resources/inferiores/inf-calca/tex/inf-calca_croche_0/crochet_orm.webp":vM,"/resources/inferiores/inf-saia/miniatura.webp":xM,"/resources/inferiores/inf-saia/modelo.glb":MM,"/resources/inferiores/inf-saia/tex/inf-saia_croche_0/crochet_basecolor.webp":yM,"/resources/inferiores/inf-saia/tex/inf-saia_croche_0/crochet_height.webp":SM,"/resources/inferiores/inf-saia/tex/inf-saia_croche_0/crochet_normaldetail.webp":EM,"/resources/inferiores/inf-saia/tex/inf-saia_croche_0/crochet_orm.webp":AM,"/resources/inferiores/inf-shorts/miniatura.webp":TM,"/resources/inferiores/inf-shorts/modelo.glb":wM,"/resources/inferiores/inf-shorts/tex/inf-shorts_croche_0/crochet_basecolor.webp":RM,"/resources/inferiores/inf-shorts/tex/inf-shorts_croche_0/crochet_height.webp":CM,"/resources/inferiores/inf-shorts/tex/inf-shorts_croche_0/crochet_normaldetail.webp":LM,"/resources/inferiores/inf-shorts/tex/inf-shorts_croche_0/crochet_orm.webp":PM,"/resources/superiores/sup-camiseta/miniatura.webp":IM,"/resources/superiores/sup-camiseta/modelo.glb":DM,"/resources/superiores/sup-camiseta/tex/sup-camiseta_croche_0/crochet_basecolor.webp":NM,"/resources/superiores/sup-camiseta/tex/sup-camiseta_croche_0/crochet_height.webp":UM,"/resources/superiores/sup-camiseta/tex/sup-camiseta_croche_0/crochet_normaldetail.webp":OM,"/resources/superiores/sup-camiseta/tex/sup-camiseta_croche_0/crochet_orm.webp":FM,"/resources/superiores/sup-listrada/miniatura.webp":BM,"/resources/superiores/sup-listrada/modelo.glb":kM,"/resources/superiores/sup-listrada/tex/sup-listrada_croche_0/crochet_basecolor.webp":zM,"/resources/superiores/sup-listrada/tex/sup-listrada_croche_0/crochet_height.webp":HM,"/resources/superiores/sup-listrada/tex/sup-listrada_croche_0/crochet_normaldetail.webp":VM,"/resources/superiores/sup-listrada/tex/sup-listrada_croche_0/crochet_orm.webp":GM,"/resources/superiores/sup-regata/miniatura.webp":WM,"/resources/superiores/sup-regata/modelo.glb":$M,"/resources/superiores/sup-regata/tex/sup-regata_croche_0/crochet_basecolor.webp":XM,"/resources/superiores/sup-regata/tex/sup-regata_croche_0/crochet_height.webp":jM,"/resources/superiores/sup-regata/tex/sup-regata_croche_0/crochet_normaldetail.webp":qM,"/resources/superiores/sup-regata/tex/sup-regata_croche_0/crochet_orm.webp":YM,"/resources/superiores/sup-sueter/miniatura.webp":KM,"/resources/superiores/sup-sueter/modelo.glb":ZM,"/resources/superiores/sup-sueter/tex/sup-sueter_croche_0/crochet_basecolor.webp":JM,"/resources/superiores/sup-sueter/tex/sup-sueter_croche_0/crochet_height.webp":QM,"/resources/superiores/sup-sueter/tex/sup-sueter_croche_0/crochet_normaldetail.webp":ey,"/resources/superiores/sup-sueter/tex/sup-sueter_croche_0/crochet_orm.webp":ty});function ry(){const i=[],e=[],t=new Set;for(const n of Object.keys(Ja).sort()){const o=n.slice(0,-10),s=l=>Qa[`${o}/${l}`],r=oy(Ja[n],o,l=>`${o}/${l}`in Qa);if(r.ok===!1){const l=`${o}: ${r.motivo}`;console.warn(`[catalogo] ${l}`),e.push(l);continue}for(const l of r.avisos)console.warn(`[catalogo] ${o}: ${l}`),e.push(`${o}: ${l}`);const a=r.manifesto;if(t.has(a.id)){const l=`id duplicado: ${a.id} (${o}); mantido o primeiro`;console.warn(`[catalogo] ${l}`),e.push(l);continue}t.add(a.id);const c={};for(const[l,u]of Object.entries(a.texturas))c[l]={cor:s(u.cor),normal:s(u.normal),orm:s(u.orm),altura:s(u.altura)};i.push({manifesto:a,pasta:o,urls:{modelo:s(a.modelo),miniatura:s(a.miniatura),texturas:c}})}return{pecas:i,avisos:e}}const ay=(i,e)=>i.manifesto.ordem-e.manifesto.ordem||i.manifesto.nome.localeCompare(e.manifesto.nome,"pt-BR"),Dn=Bl("catalogo",{state:()=>({pecas:[],avisos:[],carregado:!1}),getters:{corpo(i){const e=i.pecas.filter(t=>t.manifesto.categoria==="corpo");return e.sort((t,n)=>t.manifesto.ordem-n.manifesto.ordem||(t.manifesto.id<n.manifesto.id?-1:1)),e[0]??null},daCategoria(i){return e=>i.pecas.filter(t=>t.manifesto.categoria===e).sort(ay)},porId(i){return e=>i.pecas.find(t=>t.manifesto.id===e)}},actions:{carregar(){if(this.carregado)return;const{pecas:i,avisos:e}=ry();this.pecas=i,this.avisos=e,this.carregado=!0,i.filter(n=>n.manifesto.categoria==="corpo").length>1&&console.warn(`[catalogo] mais de um pacote de corpo; usando ${this.corpo?.manifesto.id}`)}}}),Is=[{id:"corpo",label:"Corpo",title:"Corpo",sub:"O boneco base em voltas de crochê. Escolha a cor da linha ao lado.",colorTitle:"Cor da pele"},{id:"cabelo",label:"Cabelo",title:"Cabelo",sub:"Opcional. Sem cabelo, o boneco fica careca.",none:"Sem cabelo",colorTitle:"Cor do cabelo"},{id:"conjunto",label:"Conjunto",title:"Conjunto",sub:"Peça única: substitui a parte superior e a inferior.",none:"Sem conjunto",colorTitle:"Cor do conjunto"},{id:"superior",label:"Parte superior",title:"Parte superior",sub:"Blusas e camisetas de crochê.",none:"Sem blusa",colorTitle:"Cor da blusa"},{id:"inferior",label:"Parte inferior",title:"Parte inferior",sub:"Calças, shorts e saias.",none:"Sem calça",colorTitle:"Cor da peça"},{id:"calcados",label:"Calçados",title:"Calçados",sub:"Opcional. Sem calçado, o boneco fica descalço.",none:"Descalço",colorTitle:"Cor do calçado"},{id:"acessorios",label:"Acessórios",title:"Acessórios",sub:"Escolha quantos quiser. Clique de novo para tirar.",multi:!0,colorTitle:"Cor do acessório"},{id:"detalhes",label:"Detalhes",title:"Detalhes",sub:"Confira o seu amigurumi e o valor final."}],fs=["cabelo","conjunto","superior","inferior","calcados"],ec=i=>fs.includes(i),cy={corpo:{y:.076,dist:.4}},ly=[{name:"Roqueira",desc:"Cachos, chapéu e listras",skin:"#e8c09e",sel:{cabelo:"cabelo-cacheado",superior:"sup-listrada",inferior:"inf-calca-barra",calcados:"calc-tenis"},acc:["ac-chapeu","ac-oculos"],colors:{"cabelo-cacheado":"#c0262d","sup-listrada":"#211f1e","inf-calca-barra":"#8f8c86","calc-tenis":"#211f1e","ac-chapeu":"#211f1e","ac-oculos":"#c0262d"}},{name:"Verão",desc:"Regata, shorts e laço",skin:"#c18a5d",sel:{cabelo:"cabelo-chiquinha",superior:"sup-regata",inferior:"inf-shorts",calcados:"calc-sapatilha"},acc:["ac-laco"],colors:{"cabelo-chiquinha":"#1c1918","sup-regata":"#f2c94c","inf-shorts":"#6fa8d6","calc-sapatilha":"#e8695a","ac-laco":"#d6457a"}},{name:"Inverno",desc:"Suéter, saia e cachecol",skin:"#f2dccb",sel:{cabelo:"cabelo-coque",superior:"sup-sueter",inferior:"inf-saia",calcados:"calc-botinha"},acc:["ac-cachecol"],colors:{"cabelo-coque":"#c4914c","sup-sueter":"#2f7a43","inf-saia":"#7c1f2e","calc-botinha":"#9b6842","ac-cachecol":"#c0262d"}},{name:"Festa",desc:"Vestido e rabo de cavalo",skin:"#734b31",sel:{cabelo:"cabelo-rabo",conjunto:"conj-vestido",calcados:"calc-sapatilha"},acc:[],colors:{"cabelo-rabo":"#1c1918","conj-vestido":"#a786c9","calc-sapatilha":"#f6f3ec"}}],Ds=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function uy(i){const e=parseInt(i.slice(1),16),t=Ds((e>>16&255)/255),n=Ds((e>>8&255)/255),o=Ds((e&255)/255);return(Math.max(t,n,o)+Math.min(t,n,o))/2}function zl(i,e){return i.cor_detalhe===null?e:i.cor_detalhe!=="auto"?i.cor_detalhe:uy(e)>.35?"#211f1e":"#f6f3ec"}const dy=i=>i.malhas.some(e=>e.zona_detalhe),tc=()=>({cabelo:null,conjunto:null,superior:null,inferior:null,calcados:null});let Oo=null;const Ns=Bl("montagem",{state:()=>({etapa:0,pele:"#e8c09e",nome:"",sel:tc(),acc:[],accAtivo:null,cores:{},coresDetalhe:{},parteCor:"principal",carregando:[],erro:null}),getters:{idsSelecionados(i){return[...fs.map(e=>i.sel[e]).filter(e=>!!e),...i.acc]},corDe(i){const e=Dn();return t=>i.cores[t]??e.porId(t)?.manifesto.cor??"#ffffff"},corDetalheDe(i){const e=Dn();return t=>{if(i.coresDetalhe[t])return i.coresDetalhe[t];const n=e.porId(t)?.manifesto,o=i.cores[t]??n?.cor??"#ffffff";return n?zl(n,o):o}},temDetalhe(){const i=Dn();return e=>{const t=i.porId(e)?.manifesto;return!!t&&dy(t)}},total(){const i=Dn(),e=i.corpo?.manifesto.preco??0;return this.idsSelecionados.reduce((t,n)=>t+(i.porId(n)?.manifesto.preco??0),e)},etapaAtual(i){return Is[i.etapa]},etapaFeita(i){return e=>e==="corpo"||(e==="acessorios"?i.acc.length>0:ec(e)&&!!i.sel[e])}},actions:{iniciar(){const i=Dn().corpo;i&&(this.pele=i.manifesto.cor)},escolher(i,e){if(this.parteCor="principal",i==="acessorios"){if(!e)return;const t=this.acc.indexOf(e);t>=0?(this.acc.splice(t,1),this.accAtivo===e&&(this.accAtivo=this.acc.at(-1)??null)):(this.acc.push(e),this.accAtivo=e);return}this.sel[i]=e,e&&i==="conjunto"&&(this.sel.superior=this.sel.inferior=null),e&&(i==="superior"||i==="inferior")&&(this.sel.conjunto=null)},tirar(i){for(const t of fs)this.sel[t]===i&&(this.sel[t]=null);const e=this.acc.indexOf(i);e>=0&&(this.acc.splice(e,1),this.accAtivo===i&&(this.accAtivo=this.acc.at(-1)??null))},definirCor(i){const e=this.etapaAtual;if(e.id==="corpo"){this.pele=i;return}const t=e.id==="acessorios"?this.accAtivo:ec(e.id)?this.sel[e.id]:null;t&&(this.parteCor==="detalhe"&&this.temDetalhe(t)?this.coresDetalhe[t]=i:this.cores[t]=i)},escolherParteCor(i){this.parteCor=i},ativarAcessorio(i){this.accAtivo=i,this.parteCor="principal"},irPara(i){this.parteCor="principal",this.etapa=Math.max(0,Math.min(Is.length-1,i))},proxima(){this.irPara(this.etapa===Is.length-1?0:this.etapa+1)},anterior(){this.irPara(this.etapa-1)},aplicarExemplo(i){const e=ly[i];if(!e)return;const t=Dn(),n=s=>t.porId(s)?!0:(console.warn(`[montagem] exemplo "${e.name}": peça ${s} não existe no catálogo`),!1),o=tc();for(const s of fs){const r=e.sel[s];r&&n(r)&&(o[s]=r)}this.sel=o,this.acc=e.acc.filter(n),this.accAtivo=this.acc.at(-1)??null,Object.assign(this.cores,e.colors);for(const s of Object.keys(e.colors))delete this.coresDetalhe[s];this.parteCor="principal",this.pele=e.skin},definirNome(i){this.nome=i.slice(0,30)},marcarCarregando(i,e){const t=this.carregando.indexOf(i);e&&t<0&&this.carregando.push(i),!e&&t>=0&&this.carregando.splice(t,1)},mostrarErro(i){this.erro=i,Oo&&clearTimeout(Oo),Oo=setTimeout(()=>{this.erro=null,Oo=null},4e3)}}});const ba="170",Bi={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hy=0,nc=1,fy=2,Hl=1,py=2,Pn=3,pn=0,Ot=1,tn=2,ei=0,ki=1,ic=2,oc=3,sc=4,my=5,di=100,_y=101,gy=102,by=103,vy=104,xy=200,My=201,yy=202,Sy=203,yr=204,Sr=205,Ey=206,Ay=207,Ty=208,wy=209,Ry=210,Cy=211,Ly=212,Py=213,Iy=214,Er=0,Ar=1,Tr=2,Gi=3,wr=4,Rr=5,Cr=6,Lr=7,Vl=0,Dy=1,Ny=2,ti=0,Uy=1,Oy=2,Fy=3,By=4,ky=5,zy=6,Gl=7,rc="attached",Hy="detached",Wl=300,Wi=301,$i=302,Pr=303,Ir=304,Ts=306,fi=1e3,Zn=1001,Ms=1002,Ft=1003,$l=1004,bo=1005,Wt=1006,ps=1007,Un=1008,kn=1009,Xl=1010,jl=1011,To=1012,va=1013,pi=1014,sn=1015,Po=1016,xa=1017,Ma=1018,Xi=1020,ql=35902,Yl=1021,Kl=1022,qt=1023,Zl=1024,Jl=1025,zi=1026,ji=1027,ya=1028,Sa=1029,Ql=1030,Ea=1031,Aa=1033,ms=33776,_s=33777,gs=33778,bs=33779,Dr=35840,Nr=35841,Ur=35842,Or=35843,Fr=36196,Br=37492,kr=37496,zr=37808,Hr=37809,Vr=37810,Gr=37811,Wr=37812,$r=37813,Xr=37814,jr=37815,qr=37816,Yr=37817,Kr=37818,Zr=37819,Jr=37820,Qr=37821,vs=36492,ea=36494,ta=36495,eu=36283,na=36284,ia=36285,oa=36286,wo=2300,Ro=2301,Us=2302,ac=2400,cc=2401,lc=2402,Vy=2500,Gy=0,tu=1,sa=2,Wy=3200,$y=3201,nu=0,Xy=1,Nn="",bt="srgb",It="srgb-linear",ws="linear",at="srgb",vi=7680,uc=519,jy=512,qy=513,Yy=514,iu=515,Ky=516,Zy=517,Jy=518,Qy=519,ra=35044,dc="300 es",On=2e3,ys=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const So=Math.PI/180,qi=180/Math.PI;function rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Ta(i,e){return(i%e+e)%e}function eS(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function tS(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function nS(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function iS(i,e=1){return e-Math.abs(Ta(i,e*2)-e)}function oS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function aS(i,e){return i+Math.random()*(e-i)}function cS(i){return i*(.5-Math.random())}function lS(i){i!==void 0&&(hc=i);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uS(i){return i*So}function dS(i){return i*qi}function hS(i){return(i&i-1)===0&&i!==0}function fS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mS(i,e,t,n,o){const s=Math.cos,r=Math.sin,a=s(t/2),c=r(t/2),l=s((e+n)/2),u=r((e+n)/2),d=s((e-n)/2),h=r((e-n)/2),p=s((n-e)/2),_=r((n-e)/2);switch(o){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rs={DEG2RAD:So,RAD2DEG:qi,generateUUID:rn,clamp:wt,euclideanModulo:Ta,mapLinear:eS,inverseLerp:tS,lerp:Eo,damp:nS,pingpong:iS,smoothstep:oS,smootherstep:sS,randInt:rS,randFloat:aS,randFloatSpread:cS,seededRandom:lS,degToRad:uS,radToDeg:dS,isPowerOfTwo:hS,ceilPowerOfTwo:fS,floorPowerOfTwo:pS,setQuaternionFromProperEuler:mS,normalize:ot,denormalize:nn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*o+e.x,this.y=s*o+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,o,s,r,a,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,s,r,a,c,l)}set(e,t,n,o,s,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=o,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=o[0],m=o[3],f=o[6],S=o[1],E=o[4],v=o[7],N=o[2],T=o[5],R=o[8];return s[0]=r*g+a*S+c*N,s[3]=r*m+a*E+c*T,s[6]=r*f+a*v+c*R,s[1]=l*g+u*S+d*N,s[4]=l*m+u*E+d*T,s[7]=l*f+u*v+d*R,s[2]=h*g+p*S+_*N,s[5]=h*m+p*E+_*T,s[8]=h*f+p*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*s*u+n*a*c+o*s*l-o*r*c}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*r-a*l,h=a*c-u*s,p=l*s-r*c,_=t*d+n*h+o*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(o*l-u*n)*g,e[2]=(a*n-o*r)*g,e[3]=h*g,e[4]=(u*t-o*c)*g,e[5]=(o*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-o*l,o*c,-o*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Fe;function ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _S(){const i=Co("canvas");return i.style.display="block",i}const fc={};function vo(i){i in fc||(fc[i]=!0,console.warn(i))}function gS(i,e,t){return new Promise(function(n,o){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function bS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:It,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],_c=[.3127,.329],gc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[It]:{primaries:pc,whitePoint:_c,transfer:ws,toXYZ:gc,fromXYZ:bc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:pc,whitePoint:_c,transfer:at,toXYZ:gc,fromXYZ:bc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let xi;class xS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=Co("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=Fn(s[r]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MS=0;class su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(Fs(o[r].image)):s.push(Fs(o[r]))}else s=Fs(o);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;class Tt extends _i{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Zn,o=Zn,s=Wt,r=Un,a=qt,c=kn,l=Tt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=rn(),this.name="",this.source=new su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Wl;Tt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,o=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*o+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*o+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*o+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*o+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(p+1)/2,N=(f+1)/2,T=(u+h)/4,R=(d+g)/4,P=(_+m)/4;return E>v&&E>N?E<.01?(n=0,o=.707106781,s=.707106781):(n=Math.sqrt(E),o=T/n,s=R/n):v>N?v<.01?(n=.707106781,o=0,s=.707106781):(o=Math.sqrt(v),n=T/o,s=P/o):N<.01?(n=.707106781,o=.707106781,s=0):(s=Math.sqrt(N),n=R/s,o=P/s),this.set(n,o,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-g)/S,this.z=(h-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SS extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const o={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,o=e.textures.length;n<o;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new su(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends SS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ru extends Tt{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends Tt{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,s,r,a){let c=n[o+0],l=n[o+1],u=n[o+2],d=n[o+3];const h=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==h||l!==p||u!==_){let m=1-a;const f=c*h+l*p+u*_+d*g,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const N=Math.sqrt(E),T=Math.atan2(N,f*S);m=Math.sin(m*T)/N,a=Math.sin(a*T)/N}const v=a*S;if(c=c*m+h*v,l=l*m+p*v,u=u*m+_*v,d=d*m+g*v,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,o,s,r){const a=n[o],c=n[o+1],l=n[o+2],u=n[o+3],d=s[r],h=s[r+1],p=s[r+2],_=s[r+3];return e[t]=a*_+u*d+c*p-l*h,e[t+1]=c*_+u*h+l*d-a*p,e[t+2]=l*_+u*p+a*h-c*d,e[t+3]=u*_-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,s=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(o/2),d=a(s/2),h=c(n/2),p=c(o/2),_=c(s/2);switch(r){case"XYZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d+h*p*_;break;case"YZX":this._x=h*u*d+l*p*_,this._y=l*p*d+h*u*_,this._z=l*u*_-h*p*d,this._w=l*u*d-h*p*_;break;case"XZY":this._x=h*u*d-l*p*_,this._y=l*p*d-h*u*_,this._z=l*u*_+h*p*d,this._w=l*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(r-o)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(o+r)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(o+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(r-o)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,s=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+o*l-s*c,this._y=o*u+r*c+s*a-n*l,this._z=s*u+r*l+n*c-o*a,this._w=r*u-n*a-o*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+o*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=o,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*o+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=o*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*o,this.y=s[1]*t+s[4]*n+s[7]*o,this.z=s[2]*t+s[5]*n+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*o+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*o+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*o+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*o+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,s=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*o-a*n),u=2*(a*t-s*o),d=2*(s*n-r*t);return this.x=t+c*l+r*d-a*u,this.y=n+c*u+a*l-s*d,this.z=o+c*d+s*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*o,this.y=s[1]*t+s[5]*n+s[9]*o,this.z=s[2]*t+s[6]*n+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,s=e.z,r=t.x,a=t.y,c=t.z;return this.x=o*c-s*a,this.y=s*r-n*c,this.z=n*a-o*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new w,vc=new mn;class an{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Jt):Jt.fromBufferAttribute(s,r),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const o=e.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Bo.subVectors(this.max,ao),Mi.subVectors(e.a,ao),yi.subVectors(e.b,ao),Si.subVectors(e.c,ao),Gn.subVectors(yi,Mi),Wn.subVectors(Si,yi),ii.subVectors(Mi,Si);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ii.z,ii.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ii.z,0,-ii.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ii.y,ii.x,0];return!ks(t,Mi,yi,Si,Bo)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,Mi,yi,Si,Bo))?!1:(ko.crossVectors(Gn,Wn),t=[ko.x,ko.y,ko.z],ks(t,Mi,yi,Si,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new w,new w,new w,new w,new w,new w,new w,new w],Jt=new w,Fo=new an,Mi=new w,yi=new w,Si=new w,Gn=new w,Wn=new w,ii=new w,ao=new w,Bo=new w,ko=new w,oi=new w;function ks(i,e,t,n,o){for(let s=0,r=i.length-3;s<=r;s+=3){oi.fromArray(i,s);const a=o.x*Math.abs(oi.x)+o.y*Math.abs(oi.y)+o.z*Math.abs(oi.z),c=e.dot(oi),l=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const AS=new an,co=new w,zs=new w;class gn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AS.setFromPoints(e).getCenter(n);let o=0;for(let s=0,r=e.length;s<r;s++)o=Math.max(o,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(co,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(zs)),this.expandByPoint(co.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new w,Hs=new w,zo=new w,$n=new w,Vs=new w,Ho=new w,Gs=new w;class Qi{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Hs.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Hs);const s=e.distanceTo(t)*.5,r=-this.direction.dot(zo),a=$n.dot(this.direction),c=-$n.dot(zo),l=$n.lengthSq(),u=Math.abs(1-r*r);let d,h,p,_;if(u>0)if(d=r*c-a,h=r*a-c,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+r*h+2*a)+h*(r*d+h+2*c)+l}else h=s,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(Hs).addScaledVector(zo,h),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),o=An.dot(An)-n*n,s=e.radius*e.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,s,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,o=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,o=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||s>o||((s>n||isNaN(n))&&(n=s),(r<o||isNaN(o))&&(o=r),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>o)||((a>n||n!==n)&&(n=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,o,s){Vs.subVectors(t,e),Ho.subVectors(n,e),Gs.crossVectors(Vs,Ho);let r=this.direction.dot(Gs),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;$n.subVectors(this.origin,e);const c=a*this.direction.dot(Ho.crossVectors($n,Ho));if(c<0)return null;const l=a*this.direction.dot(Vs.cross($n));if(l<0||c+l>r)return null;const u=-a*$n.dot(Gs);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,o,s,r,a,c,l,u,d,h,p,_,g,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,s,r,a,c,l,u,d,h,p,_,g,m)}set(e,t,n,o,s,r,a,c,l,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=o,f[1]=s,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),r=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(o),l=Math.sin(o),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=r*u,p=r*d,_=a*u,g=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=_+p*l,t[10]=r*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h+g*a,t[4]=_*a-p,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=r*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,_=l*u,g=l*d;t[0]=h-g*a,t[4]=-r*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*u,t[9]=g-h*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const h=r*u,p=r*d,_=a*u,g=a*d;t[0]=c*u,t[4]=_*l-p,t[8]=h*l+g,t[1]=c*d,t[5]=g*l+h,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const h=r*c,p=r*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=r*c,p=r*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+g,t[5]=r*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TS,e,wS)}lookAt(e,t,n){const o=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Xn.crossVectors(n,Vt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Xn.crossVectors(n,Vt)),Xn.normalize(),Vo.crossVectors(Vt,Xn),o[0]=Xn.x,o[4]=Vo.x,o[8]=Vt.x,o[1]=Xn.y,o[5]=Vo.y,o[9]=Vt.y,o[2]=Xn.z,o[6]=Vo.z,o[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],S=n[3],E=n[7],v=n[11],N=n[15],T=o[0],R=o[4],P=o[8],y=o[12],M=o[1],C=o[5],W=o[9],k=o[13],V=o[2],J=o[6],G=o[10],ee=o[14],z=o[3],ae=o[7],me=o[11],ye=o[15];return s[0]=r*T+a*M+c*V+l*z,s[4]=r*R+a*C+c*J+l*ae,s[8]=r*P+a*W+c*G+l*me,s[12]=r*y+a*k+c*ee+l*ye,s[1]=u*T+d*M+h*V+p*z,s[5]=u*R+d*C+h*J+p*ae,s[9]=u*P+d*W+h*G+p*me,s[13]=u*y+d*k+h*ee+p*ye,s[2]=_*T+g*M+m*V+f*z,s[6]=_*R+g*C+m*J+f*ae,s[10]=_*P+g*W+m*G+f*me,s[14]=_*y+g*k+m*ee+f*ye,s[3]=S*T+E*M+v*V+N*z,s[7]=S*R+E*C+v*J+N*ae,s[11]=S*P+E*W+v*G+N*me,s[15]=S*y+E*k+v*ee+N*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],s=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*d-o*l*d-s*a*h+n*l*h+o*a*p-n*c*p)+g*(+t*c*p-t*l*h+s*r*h-o*r*p+o*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*r*d+n*r*p+s*a*u-n*l*u)+f*(-o*a*u-t*c*d+t*a*h+o*r*d-n*r*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],S=d*m*l-g*h*l+g*c*p-a*m*p-d*c*f+a*h*f,E=_*h*l-u*m*l-_*c*p+r*m*p+u*c*f-r*h*f,v=u*g*l-_*d*l+_*a*p-r*g*p-u*a*f+r*d*f,N=_*d*c-u*g*c-_*a*h+r*g*h+u*a*m-r*d*m,T=t*S+n*E+o*v+s*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=S*R,e[1]=(g*h*s-d*m*s-g*o*p+n*m*p+d*o*f-n*h*f)*R,e[2]=(a*m*s-g*c*s+g*o*l-n*m*l-a*o*f+n*c*f)*R,e[3]=(d*c*s-a*h*s-d*o*l+n*h*l+a*o*p-n*c*p)*R,e[4]=E*R,e[5]=(u*m*s-_*h*s+_*o*p-t*m*p-u*o*f+t*h*f)*R,e[6]=(_*c*s-r*m*s-_*o*l+t*m*l+r*o*f-t*c*f)*R,e[7]=(r*h*s-u*c*s+u*o*l-t*h*l-r*o*p+t*c*p)*R,e[8]=v*R,e[9]=(_*d*s-u*g*s-_*n*p+t*g*p+u*n*f-t*d*f)*R,e[10]=(r*g*s-_*a*s+_*n*l-t*g*l-r*n*f+t*a*f)*R,e[11]=(u*a*s-r*d*s-u*n*l+t*d*l+r*n*p-t*a*p)*R,e[12]=N*R,e[13]=(u*g*o-_*d*o+_*n*h-t*g*h-u*n*m+t*d*m)*R,e[14]=(_*a*o-r*g*o-_*n*c+t*g*c+r*n*m-t*a*m)*R,e[15]=(r*d*o-u*a*o+u*n*c-t*d*c-r*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,o=e.y,s=e.z;return t[0]*=n,t[4]*=o,t[8]*=s,t[1]*=n,t[5]*=o,t[9]*=s,t[2]*=n,t[6]*=o,t[10]*=s,t[3]*=n,t[7]*=o,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),s=1-n,r=e.x,a=e.y,c=e.z,l=s*r,u=s*a;return this.set(l*r+n,l*a-o*c,l*c+o*a,0,l*a+o*c,u*a+n,u*c-o*r,0,l*c-o*a,u*c+o*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,s,r){return this.set(1,n,s,0,e,1,r,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,s=t._x,r=t._y,a=t._z,c=t._w,l=s+s,u=r+r,d=a+a,h=s*l,p=s*u,_=s*d,g=r*u,m=r*d,f=a*d,S=c*l,E=c*u,v=c*d,N=n.x,T=n.y,R=n.z;return o[0]=(1-(g+f))*N,o[1]=(p+v)*N,o[2]=(_-E)*N,o[3]=0,o[4]=(p-v)*T,o[5]=(1-(h+f))*T,o[6]=(m+S)*T,o[7]=0,o[8]=(_+E)*R,o[9]=(m-S)*R,o[10]=(1-(h+g))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let s=Ei.set(o[0],o[1],o[2]).length();const r=Ei.set(o[4],o[5],o[6]).length(),a=Ei.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),e.x=o[12],e.y=o[13],e.z=o[14],Qt.copy(this);const l=1/s,u=1/r,d=1/a;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,o,s,r,a=On){const c=this.elements,l=2*s/(t-e),u=2*s/(n-o),d=(t+e)/(t-e),h=(n+o)/(n-o);let p,_;if(a===On)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===ys)p=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,o,s,r,a=On){const c=this.elements,l=1/(t-e),u=1/(n-o),d=1/(r-s),h=(t+e)*l,p=(n+o)*u;let _,g;if(a===On)_=(r+s)*d,g=-2*d;else if(a===ys)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new w,Qt=new ke,TS=new w(0,0,0),wS=new w(1,1,1),Xn=new w,Vo=new w,Vt=new w,xc=new ke,Mc=new mn;class _n{constructor(e=0,t=0,n=0,o=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,s=o[0],r=o[4],a=o[8],c=o[1],l=o[5],u=o[9],d=o[2],h=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const yc=new w,Ai=new mn,Tn=new ke,Go=new w,lo=new w,CS=new w,LS=new mn,Sc=new w(1,0,0),Ec=new w(0,1,0),Ac=new w(0,0,1),Tc={type:"added"},PS={type:"removed"},Ti={type:"childadded",child:null},Ws={type:"childremoved",child:null};class _t extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new w,t=new _n,n=new mn,o=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(lo,Go,this.up):Tn.lookAt(Go,lo,this.up),this.quaternion.setFromRotationMatrix(Tn),o&&(Tn.extractRotation(o.matrixWorld),Ai.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PS),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,LS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));o.material=a}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(s(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=o,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}_t.DEFAULT_UP=new w(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new w,wn=new w,$s=new w,Rn=new w,wi=new w,Ri=new w,wc=new w,Xs=new w,js=new w,qs=new w,Ys=new Qe,Ks=new Qe,Zs=new Qe;class on{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),en.subVectors(e,t),o.cross(en);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,t,n,o,s){en.subVectors(o,t),wn.subVectors(n,t),$s.subVectors(e,t);const r=en.dot(en),a=en.dot(wn),c=en.dot($s),l=wn.dot(wn),u=wn.dot($s),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,_=(r*u-a*c)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,o,s,r,a,c){return this.getBarycoord(e,t,n,o,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(r,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(e,t,n,o,s,r){return Ys.setScalar(0),Ks.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,o),r.setScalar(0),r.addScaledVector(Ys,s.x),r.addScaledVector(Ks,s.y),r.addScaledVector(Zs,s.z),r}static isFrontFacing(e,t,n,o){return en.subVectors(n,t),wn.subVectors(e,t),en.cross(wn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),en.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,o,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,s=this.c;let r,a;wi.subVectors(o,n),Ri.subVectors(s,n),Xs.subVectors(e,n);const c=wi.dot(Xs),l=Ri.dot(Xs);if(c<=0&&l<=0)return t.copy(n);js.subVectors(e,o);const u=wi.dot(js),d=Ri.dot(js);if(u>=0&&d<=u)return t.copy(o);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(wi,r);qs.subVectors(e,s);const p=wi.dot(qs),_=Ri.dot(qs);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ri,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return wc.subVectors(s,o),a=(d-u)/(d-u+(p-_)),t.copy(o).addScaledVector(wc,a);const f=1/(m+g+h);return r=g*f,a=h*f,t.copy(n).addScaledVector(wi,r).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=qe.workingColorSpace){if(e=Ta(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Js(r,s,e+1/3),this.g=Js(r,s,e),this.b=Js(r,s,e-1/3)}return qe.toWorkingColorSpace(this,o),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return qe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(wt(Pt.r*255,0,255))*65536+Math.round(wt(Pt.g*255,0,255))*256+Math.round(wt(Pt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,o=Pt.g,s=Pt.b,r=Math.max(n,o,s),a=Math.min(n,o,s);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case n:c=(o-s)/d+(o<s?6:0);break;case o:c=(s-n)/d+2;break;case s:c=(n-o)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=bt){qe.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,o=Pt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Wo);const n=Eo(jn.h,Wo.h,t),o=Eo(jn.s,Wo.s,t),s=Eo(jn.l,Wo.l,t);return this.setHSL(n,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*o,this.g=s[1]*t+s[4]*n+s[7]*o,this.b=s[2]*t+s[5]*n+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Pe;Pe.NAMES=au;let IS=0;class fn extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=rn(),this.name="",this.blending=ki,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Sr,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(t){const s=o(e.textures),r=o(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let s=0;s!==o;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new w,$o=new De;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),o=ot(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),o=ot(o,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}}class cu extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lu extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let DS=0;const Xt=new ke,Qs=new _t,Ci=new w,Gt=new an,uo=new an,At=new w;class Yt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?lu:cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,s=e.length;o<s;o++){const r=e[o];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bn(n,3))}else{for(let n=0,o=t.count;n<o;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Gt.min,uo.min),Gt.expandByPoint(At),At.addVectors(Gt.max,uo.max),Gt.expandByPoint(At)):(Gt.expandByPoint(uo.min),Gt.expandByPoint(uo.max))}Gt.getCenter(n);let o=0;for(let s=0,r=e.count;s<r;s++)At.fromBufferAttribute(e,s),o=Math.max(o,n.distanceToSquared(At));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(e,l),At.add(Ci)),o=Math.max(o,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new w,c[P]=new w;const l=new w,u=new w,d=new w,h=new De,p=new De,_=new De,g=new w,m=new w;function f(P,y,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,y),_.fromBufferAttribute(s,M),u.sub(l),d.sub(l),p.sub(h),_.sub(h);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[P].add(g),a[y].add(g),a[M].add(g),c[P].add(m),c[y].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,y=S.length;P<y;++P){const M=S[P],C=M.start,W=M.count;for(let k=C,V=C+W;k<V;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new w,v=new w,N=new w,T=new w;function R(P){N.fromBufferAttribute(o,P),T.copy(N);const y=a[P];E.copy(y),E.sub(N.multiplyScalar(N.dot(y))).normalize(),v.crossVectors(T,y);const C=v.dot(c[P])<0?-1:1;r.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,y=S.length;P<y;++P){const M=S[P],C=M.start,W=M.count;for(let k=C,V=C+W;k<V;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const o=new w,s=new w,r=new w,a=new w,c=new w,l=new w,u=new w,d=new w;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,s),d.subVectors(o,s),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)o.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,s),d.subVectors(o,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)h[_++]=l[p++]}return new vt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const o={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(o[c]=u,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const l in o){const u=o[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new ke,si=new Qi,Xo=new gn,Cc=new w,jo=new w,qo=new w,Yo=new w,er=new w,Ko=new w,Lc=new w,Zo=new w;class lt extends _t{constructor(e=new Yt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(s&&a){Ko.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(er.fromBufferAttribute(d,e),r?Ko.addScaledVector(er,u):Ko.addScaledVector(er.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Xo.containsPoint(si.origin)===!1&&(si.intersectSphere(Xo,Cc)===null||si.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),si.copy(e.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let o;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=r[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,N=E;v<N;v+=3){const T=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);o=Jo(this,f,e,n,l,u,d,T,R,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);o=Jo(this,r,e,n,l,u,d,S,E,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=r[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,N=E;v<N;v+=3){const T=v,R=v+1,P=v+2;o=Jo(this,f,e,n,l,u,d,T,R,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=m,E=m+1,v=m+2;o=Jo(this,r,e,n,l,u,d,S,E,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function NS(i,e,t,n,o,s,r,a){let c;if(e.side===Ot?c=n.intersectTriangle(r,s,o,!0,a):c=n.intersectTriangle(o,s,r,e.side===pn,a),c===null)return null;Zo.copy(a),Zo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zo);return l<t.near||l>t.far?null:{distance:l,point:Zo.clone(),object:i}}function Jo(i,e,t,n,o,s,r,a,c,l){i.getVertexPosition(a,jo),i.getVertexPosition(c,qo),i.getVertexPosition(l,Yo);const u=NS(i,e,t,n,jo,qo,Yo,Lc);if(u){const d=new w;on.getBarycoord(Lc,jo,qo,Yo,d),o&&(u.uv=on.getInterpolatedAttribute(o,a,c,l,d,new De)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,c,l,d,new De)),r&&(u.normal=on.getInterpolatedAttribute(r,a,c,l,d,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new w,materialIndex:0};on.getNormal(jo,qo,Yo,h.normal),u.face=h,u.barycoord=d}return u}class eo extends Yt{constructor(e=1,t=1,n=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,o,r,2),_("x","z","y",1,-1,e,n,-t,o,r,3),_("x","y","z",1,-1,e,t,n,o,s,4),_("x","y","z",-1,-1,e,t,-n,o,s,5),this.setIndex(c),this.setAttribute("position",new Bn(l,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(d,2));function _(g,m,f,S,E,v,N,T,R,P,y){const M=v/R,C=N/P,W=v/2,k=N/2,V=T/2,J=R+1,G=P+1;let ee=0,z=0;const ae=new w;for(let me=0;me<G;me++){const ye=me*C-k;for(let Ne=0;Ne<J;Ne++){const et=Ne*M-W;ae[g]=et*S,ae[m]=ye*E,ae[f]=V,l.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[f]=T>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(Ne/R),d.push(1-me/P),ee+=1}}for(let me=0;me<P;me++)for(let ye=0;ye<R;ye++){const Ne=h+ye+J*me,et=h+ye+J*(me+1),X=h+(ye+1)+J*(me+1),Q=h+(ye+1)+J*me;c.push(Ne,et,Q),c.push(et,X,Q),z+=6}a.addGroup(p,z,y),p+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Yi(i[t]);for(const o in n)e[o]=n[o]}return e}function US(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const OS={clone:Yi,merge:Nt};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?t.uniforms[o]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[o]={type:"m4",value:r.toArray()}:t.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class du extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new w,Pc=new De,Ic=new De;class Ut extends du{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Ic),t.subVectors(Ic,Pc)}setViewOffset(e,t,n,o,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*o/c,t-=r.offsetY*n/l,o*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class kS extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ut(Li,Pi,e,t);o.layers=this.layers,this.add(o);const s=new Ut(Li,Pi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(Li,Pi,e,t);r.layers=this.layers,this.add(r);const a=new Ut(Li,Pi,e,t);a.layers=this.layers,this.add(a);const c=new Ut(Li,Pi,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Li,Pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,s,r,a,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,s),e.setRenderTarget(n,1,o),e.render(t,r),e.setRenderTarget(n,2,o),e.render(t,a),e.setRenderTarget(n,3,o),e.render(t,c),e.setRenderTarget(n,4,o),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,o),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hu extends Tt{constructor(e,t,n,o,s,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,n,o,s,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new hu(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new eo(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:ei});s.uniforms.tEquirect.value=t;const r=new lt(o,s),a=t.minFilter;return t.minFilter===Un&&(t.minFilter=Wt),new kS(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,o){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,o);e.setRenderTarget(s)}}const tr=new w,HS=new w,VS=new Fe;class Kn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=tr.subVectors(n,t).cross(HS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tr),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||VS.getNormalMatrix(e),o=this.coplanarPoint(tr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new gn,Qo=new w;class Ra{constructor(e=new Kn,t=new Kn,n=new Kn,o=new Kn,s=new Kn,r=new Kn){this.planes=[e,t,n,o,s,r]}set(e,t,n,o,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,o=e.elements,s=o[0],r=o[1],a=o[2],c=o[3],l=o[4],u=o[5],d=o[6],h=o[7],p=o[8],_=o[9],g=o[10],m=o[11],f=o[12],S=o[13],E=o[14],v=o[15];if(n[0].setComponents(c-s,h-l,m-p,v-f).normalize(),n[1].setComponents(c+s,h+l,m+p,v+f).normalize(),n[2].setComponents(c+r,h+u,m+_,v+S).normalize(),n[3].setComponents(c-r,h-u,m-_,v-S).normalize(),n[4].setComponents(c-a,h-d,m-g,v-E).normalize(),t===On)n[5].setComponents(c+a,h+d,m+g,v+E).normalize();else if(t===ys)n[5].setComponents(a,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Qo.x=o.normal.x>0?e.max.x:e.min.x,Qo.y=o.normal.y>0?e.max.y:e.min.y,Qo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let i=null,e=!1,t=null,n=null;function o(s,r){t(s,r),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function GS(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:o,remove:s,update:r}}class Cs extends Yt{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const s=e/2,r=t/2,a=Math.floor(n),c=Math.floor(o),l=a+1,u=c+1,d=e/a,h=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const S=f*h-r;for(let E=0;E<l;E++){const v=E*d-s;_.push(v,-S,0),g.push(0,0,1),m.push(E/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const E=S+l*f,v=S+l*(f+1),N=S+1+l*(f+1),T=S+1+l*f;p.push(E,v,T),p.push(v,N,T)}this.setIndex(p),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var WS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:WS,alphahash_pars_fragment:$S,alphamap_fragment:XS,alphamap_pars_fragment:jS,alphatest_fragment:qS,alphatest_pars_fragment:YS,aomap_fragment:KS,aomap_pars_fragment:ZS,batching_pars_vertex:JS,batching_vertex:QS,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:oE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:cE,color_fragment:lE,color_pars_fragment:uE,color_pars_vertex:dE,color_vertex:hE,common:fE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:_E,displacementmap_vertex:gE,emissivemap_fragment:bE,emissivemap_pars_fragment:vE,colorspace_fragment:xE,colorspace_pars_fragment:ME,envmap_fragment:yE,envmap_common_pars_fragment:SE,envmap_pars_fragment:EE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:OE,envmap_vertex:TE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:LE,gradientmap_pars_fragment:PE,lightmap_pars_fragment:IE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:NE,lights_pars_begin:UE,lights_toon_fragment:FE,lights_toon_pars_fragment:BE,lights_phong_fragment:kE,lights_phong_pars_fragment:zE,lights_physical_fragment:HE,lights_physical_pars_fragment:VE,lights_fragment_begin:GE,lights_fragment_maps:WE,lights_fragment_end:$E,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:YE,map_fragment:KE,map_pars_fragment:ZE,map_particle_fragment:JE,map_particle_pars_fragment:QE,metalnessmap_fragment:e2,metalnessmap_pars_fragment:t2,morphinstance_vertex:n2,morphcolor_vertex:i2,morphnormal_vertex:o2,morphtarget_pars_vertex:s2,morphtarget_vertex:r2,normal_fragment_begin:a2,normal_fragment_maps:c2,normal_pars_fragment:l2,normal_pars_vertex:u2,normal_vertex:d2,normalmap_pars_fragment:h2,clearcoat_normal_fragment_begin:f2,clearcoat_normal_fragment_maps:p2,clearcoat_pars_fragment:m2,iridescence_pars_fragment:_2,opaque_fragment:g2,packing:b2,premultiplied_alpha_fragment:v2,project_vertex:x2,dithering_fragment:M2,dithering_pars_fragment:y2,roughnessmap_fragment:S2,roughnessmap_pars_fragment:E2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:T2,shadowmap_vertex:w2,shadowmask_pars_fragment:R2,skinbase_vertex:C2,skinning_pars_vertex:L2,skinning_vertex:P2,skinnormal_vertex:I2,specularmap_fragment:D2,specularmap_pars_fragment:N2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:F2,transmission_pars_fragment:B2,uv_pars_fragment:k2,uv_pars_vertex:z2,uv_vertex:H2,worldpos_vertex:V2,background_vert:G2,background_frag:W2,backgroundCube_vert:$2,backgroundCube_frag:X2,cube_vert:j2,cube_frag:q2,depth_vert:Y2,depth_frag:K2,distanceRGBA_vert:Z2,distanceRGBA_frag:J2,equirect_vert:Q2,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:oA,meshlambert_vert:sA,meshlambert_frag:rA,meshmatcap_vert:aA,meshmatcap_frag:cA,meshnormal_vert:lA,meshnormal_frag:uA,meshphong_vert:dA,meshphong_frag:hA,meshphysical_vert:fA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:_A,points_vert:gA,points_frag:bA,shadow_vert:vA,shadow_frag:xA,sprite_vert:MA,sprite_frag:yA},ce={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dn={basic:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Nt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Nt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Nt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Nt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Nt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Nt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Nt([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Nt([ce.lights,ce.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};dn.physical={uniforms:Nt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const es={r:0,b:0,g:0},ai=new _n,SA=new ke;function EA(i,e,t,n,o,s,r){const a=new Pe(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function _(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function g(S){let E=!1;const v=_(S);v===null?f(a,c):v&&v.isColor&&(f(v,1),E=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,E){const v=_(E);v&&(v.isCubeTexture||v.mapping===Ts)?(u===void 0&&(u=new lt(new eo(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Yi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(u)),ai.copy(E.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(ai)),u.material.toneMapped=qe.getTransfer(v.colorSpace)!==at,(d!==v||h!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new Cs(2,2),new zn({name:"BackgroundMaterial",uniforms:Yi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,E){S.getRGB(es,uu(i)),n.buffers.color.setClear(es.r,es.g,es.b,E,r)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:g,addToRenderList:m}}function AA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=h(null);let s=o,r=!1;function a(M,C,W,k,V){let J=!1;const G=d(k,W,C);s!==G&&(s=G,l(s.object)),J=p(M,k,W,V),J&&_(M,k,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(M,C,W,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,C,W){const k=W.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let J=V[C.id];J===void 0&&(J={},V[C.id]=J);let G=J[k];return G===void 0&&(G=h(c()),J[k]=G),G}function h(M){const C=[],W=[],k=[];for(let V=0;V<t;V++)C[V]=0,W[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,C,W,k){const V=s.attributes,J=C.attributes;let G=0;const ee=W.getAttributes();for(const z in ee)if(ee[z].location>=0){const me=V[z];let ye=J[z];if(ye===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function _(M,C,W,k){const V={},J=C.attributes;let G=0;const ee=W.getAttributes();for(const z in ee)if(ee[z].location>=0){let me=J[z];me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),V[z]=ye,G++}s.attributes=V,s.attributesNum=G,s.index=k}function g(){const M=s.newAttributes;for(let C=0,W=M.length;C<W;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const W=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;W[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),V[M]!==C&&(i.vertexAttribDivisor(M,C),V[M]=C)}function S(){const M=s.newAttributes,C=s.enabledAttributes;for(let W=0,k=C.length;W<k;W++)C[W]!==M[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function E(M,C,W,k,V,J,G){G===!0?i.vertexAttribIPointer(M,C,W,V,J):i.vertexAttribPointer(M,C,W,k,V,J)}function v(M,C,W,k){g();const V=k.attributes,J=W.getAttributes(),G=C.defaultAttributeValues;for(const ee in J){const z=J[ee];if(z.location>=0){let ae=V[ee];if(ae===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const me=ae.normalized,ye=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;const et=Ne.buffer,X=Ne.type,Q=Ne.bytesPerElement,xe=X===i.INT||X===i.UNSIGNED_INT||ae.gpuType===va;if(ae.isInterleavedBufferAttribute){const le=ae.data,Le=le.stride,Me=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)f(z.location+Be,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<z.locationSize;Be++)m(z.location+Be);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Be=0;Be<z.locationSize;Be++)E(z.location+Be,ye/z.locationSize,X,me,Le*Q,(Me+ye/z.locationSize*Be)*Q,xe)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)f(z.location+le,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<z.locationSize;le++)m(z.location+le);i.bindBuffer(i.ARRAY_BUFFER,et);for(let le=0;le<z.locationSize;le++)E(z.location+le,ye/z.locationSize,X,me,ye*Q,ye/z.locationSize*le*Q,xe)}}else if(G!==void 0){const me=G[ee];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(z.location,me);break;case 3:i.vertexAttrib3fv(z.location,me);break;case 4:i.vertexAttrib4fv(z.location,me);break;default:i.vertexAttrib1fv(z.location,me)}}}}S()}function N(){P();for(const M in n){const C=n[M];for(const W in C){const k=C[W];for(const V in k)u(k[V].object),delete k[V];delete C[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const W in C){const k=C[W];for(const V in k)u(k[V].object),delete k[V];delete C[W]}delete n[M.id]}function R(M){for(const C in n){const W=n[C];if(W[M.id]===void 0)continue;const k=W[M.id];for(const V in k)u(k[V].object),delete k[V];delete W[M.id]}}function P(){y(),r=!0,s!==o&&(s=o,l(s.object))}function y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function TA(i,e,t){let n;function o(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)r(l[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wA(i,e,t,n){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(R){return!(R!==qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:N,maxSamples:T}}function RA(i){const e=this;let t=null,n=0,o=!1,s=!1;const r=new Kn,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||o;return o=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!o||_===null||_.length===0||s&&!m)s?u(null):l();else{const S=s?0:n,E=S*4;let v=f.clippingState||null;c.value=v,v=u(_,h,E,p);for(let N=0;N!==E;++N)v[N]=t[N];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==g;++E,v+=4)r.copy(d[E]).applyMatrix4(S,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function CA(i){let e=new WeakMap;function t(r,a){return a===Pr?r.mapping=Wi:a===Ir&&(r.mapping=$i),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pr||a===Ir)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new zS(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",o),t(l.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ca extends du{constructor(e=-1,t=1,n=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=o+t,c=o-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Dc=[.125,.215,.35,.446,.526,.582],hi=20,nr=new Ca,Nc=new Pe;let ir=null,or=0,sr=0,rr=!1;const ui=(1+Math.sqrt(5))/2,Ii=1/ui,Uc=[new w(-ui,Ii,0),new w(ui,Ii,0),new w(-Ii,0,ui),new w(Ii,0,ui),new w(0,ui,-Ii),new w(0,ui,Ii),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){ir=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,o,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ir,or,sr),this._renderer.xr.enabled=rr,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ir=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Po,format:qt,colorSpace:It,depthBuffer:!1},o=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LA(s)),this._blurMaterial=PA(s,e,t)}return o}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,o){const a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Nc),u.toneMapping=ti,u.autoClear=!1;const p=new Jn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new lt(new eo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nc),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const E=this._cubeSize;ts(o,S*E,f>2?E:0,E,E),u.setRenderTarget(o),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Wi||e.mapping===$i;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uc[(o-s-1)%Uc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,o,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,o,"latitudinal",s),this._halfBlur(r,e,n,n,o,"longitudinal",s)}_halfBlur(e,t,n,o,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new lt(this._lodPlanes[o],l),h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let S=0;for(let R=0;R<hi;++R){const P=R/g,y=Math.exp(-P*P/2);f.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const v=this._sizeLods[o],N=3*v*(o>E-Fi?o-E+Fi:0),T=4*(this._cubeSize-v);ts(t,N,T,3*v,2*v),c.setRenderTarget(t),c.render(d,nr)}}function LA(i){const e=[],t=[],n=[];let o=i;const s=i-Fi+1+Dc.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);t.push(a);let c=1/a;r>i-Fi?c=Dc[r-i+Fi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,S=new Float32Array(g*_*p),E=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,P=T>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(y,g*_*T),E.set(h,m*_*T);const M=[T,T,T,T,T,T];v.set(M,f*_*T)}const N=new Yt;N.setAttribute("position",new vt(S,g)),N.setAttribute("uv",new vt(E,m)),N.setAttribute("faceIndex",new vt(v,f)),e.push(N),o>Fi&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function PA(i,e,t){const n=new Float32Array(hi),o=new w(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Fc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Ir,u=c===Wi||c===$i;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new aa(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&o(p)?(t===null&&(t=new aa(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function o(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function DA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function NA(i,e,t,n){const o={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",r),delete o[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return o[h.id]===!0||(h.addEventListener("dispose",r),o[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let E=0,v=S.length;E<v;E+=3){const N=S[E+0],T=S[E+1],R=S[E+2];h.push(N,T,T,R,R,N)}}else if(_!==void 0){const S=_.array;g=_.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const N=E+0,T=E+1,R=E+2;h.push(N,T,T,R,R,N)}}else return;const m=new(ou(h)?lu:cu)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function UA(i,e,t){let n;function o(h){n=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function c(h,p){i.drawElements(n,p,s,h*r),t.update(p,n,1)}function l(h,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,h*r,_),t.update(p,n,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function d(h,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/r,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,g,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*g[S];t.update(f,n,1)}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function OA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function FA(i,e,t){const n=new WeakMap,o=new Qe;function s(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),_===!0&&(E=2),g===!0&&(E=3);let v=a.attributes.position.count*E,N=1;v>e.maxTextureSize&&(N=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*N*4*d),R=new ru(T,v,N,d);R.type=sn,R.needsUpdate=!0;const P=E*4;for(let M=0;M<d;M++){const C=m[M],W=f[M],k=S[M],V=v*N*4*M;for(let J=0;J<C.count;J++){const G=J*P;p===!0&&(o.fromBufferAttribute(C,J),T[V+G+0]=o.x,T[V+G+1]=o.y,T[V+G+2]=o.z,T[V+G+3]=0),_===!0&&(o.fromBufferAttribute(W,J),T[V+G+4]=o.x,T[V+G+5]=o.y,T[V+G+6]=o.z,T[V+G+7]=0),g===!0&&(o.fromBufferAttribute(k,J),T[V+G+8]=o.x,T[V+G+9]=o.y,T[V+G+10]=o.z,T[V+G+11]=k.itemSize===4?o.w:1)}}h={count:d,texture:R,size:new De(v,N)},n.set(a,h),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function BA(i,e,t,n){let o=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(o.get(d)!==l&&(e.update(d),o.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),o.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;o.get(h)!==l&&(h.update(),o.set(h,l))}return d}function r(){o=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class pu extends Tt{constructor(e,t,n,o,s,r,a,c,l,u=zi){if(u!==zi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=pi),n===void 0&&u===ji&&(n=Xi),super(null,o,s,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mu=new Tt,kc=new pu(1,1),_u=new ru,gu=new ES,bu=new hu,zc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function to(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let s=zc[o];if(s===void 0&&(s=new Float32Array(o),zc[o]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(s,a)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ls(i,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function HA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function VA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function GA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),Et(t,n)}}function WA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Et(t,n)}}function $A(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Et(t,n)}}function XA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function qA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function YA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function KA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ZA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function JA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function eT(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let s;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=iu,s=kc):s=mu,t.setTexture2D(e||s,o)}function tT(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||gu,o)}function nT(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||bu,o)}function iT(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||_u,o)}function oT(i){switch(i){case 5126:return kA;case 35664:return zA;case 35665:return HA;case 35666:return VA;case 35674:return GA;case 35675:return WA;case 35676:return $A;case 5124:case 35670:return XA;case 35667:case 35671:return jA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return KA;case 36294:return ZA;case 36295:return JA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function sT(i,e){i.uniform1fv(this.addr,e)}function rT(i,e){const t=to(e,this.size,2);i.uniform2fv(this.addr,t)}function aT(i,e){const t=to(e,this.size,3);i.uniform3fv(this.addr,t)}function cT(i,e){const t=to(e,this.size,4);i.uniform4fv(this.addr,t)}function lT(i,e){const t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uT(i,e){const t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dT(i,e){const t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hT(i,e){i.uniform1iv(this.addr,e)}function fT(i,e){i.uniform2iv(this.addr,e)}function pT(i,e){i.uniform3iv(this.addr,e)}function mT(i,e){i.uniform4iv(this.addr,e)}function _T(i,e){i.uniform1uiv(this.addr,e)}function gT(i,e){i.uniform2uiv(this.addr,e)}function bT(i,e){i.uniform3uiv(this.addr,e)}function vT(i,e){i.uniform4uiv(this.addr,e)}function xT(i,e,t){const n=this.cache,o=e.length,s=Ls(t,o);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let r=0;r!==o;++r)t.setTexture2D(e[r]||mu,s[r])}function MT(i,e,t){const n=this.cache,o=e.length,s=Ls(t,o);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let r=0;r!==o;++r)t.setTexture3D(e[r]||gu,s[r])}function yT(i,e,t){const n=this.cache,o=e.length,s=Ls(t,o);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let r=0;r!==o;++r)t.setTextureCube(e[r]||bu,s[r])}function ST(i,e,t){const n=this.cache,o=e.length,s=Ls(t,o);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let r=0;r!==o;++r)t.setTexture2DArray(e[r]||_u,s[r])}function ET(i){switch(i){case 5126:return sT;case 35664:return rT;case 35665:return aT;case 35666:return cT;case 35674:return lT;case 35675:return uT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return fT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return _T;case 36294:return gT;case 36295:return bT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}class AT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oT(t.type)}}class TT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ET(t.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(e,t[a.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function $c(i,e){i.seq.push(e),i.map[e.id]=e}function RT(i,e,t){const n=i.name,o=n.length;for(ar.lastIndex=0;;){const s=ar.exec(n),r=ar.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===o){$c(t,l===void 0?new AT(a,i,e):new TT(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wT(a),$c(t,d)),t=d}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const s=e.getActiveUniform(t,o),r=e.getUniformLocation(t,s.name);RT(s,r,this)}}setValue(e,t,n,o){const s=this.map[t];s!==void 0&&s.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let s=0,r=t.length;s!==r;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,s=e.length;o!==s;++o){const r=e[o];r.id in t&&n.push(r)}return n}}function Xc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const CT=37297;let LT=0;function PT(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=o;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const jc=new Fe;function IT(i){qe._getMatrix(jc,qe.workingColorSpace,i);const e=`mat3( ${jc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case ws:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+PT(i.getShaderSource(e),r)}else return o}function DT(i,e){const t=IT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NT(i,e){let t;switch(e){case Uy:t="Linear";break;case Oy:t="Reinhard";break;case Fy:t="Cineon";break;case By:t="ACESFilmic";break;case zy:t="AgX";break;case Gl:t="Neutral";break;case ky:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new w;function UT(){qe.getLuminanceCoefficients(ns);const i=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function FT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const s=i.getActiveAttrib(e,o),r=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function xo(i){return i!==""}function Yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(kT,HT)}const zT=new Map;function HT(i,e){let t=Ge[e];if(t===void 0){const n=zT.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(VT,GT)}function GT(i,e,t,n){let o="";for(let s=parseInt(e);s<parseInt(t);s++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Jc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===py?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function $T(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case $i:e="ENVMAP_TYPE_CUBE";break;case Ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===$i&&(e="ENVMAP_MODE_REFRACTION"),e}function jT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Ny:e="ENVMAP_BLENDING_ADD";break}return e}function qT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YT(i,e,t,n){const o=i.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=WT(t),l=$T(t),u=XT(t),d=jT(t),h=qT(t),p=OT(t),_=FT(s),g=o.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xo).join(`
`),f.length>0&&(f+=`
`)):(m=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),f=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ti?NT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,DT("linearToOutputTexel",t.outputColorSpace),UT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),r=ca(r),r=Yc(r,t),r=Kc(r,t),a=ca(a),a=Yc(a,t),a=Kc(a,t),r=Zc(r),a=Zc(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+m+r,v=S+f+a,N=Xc(o,o.VERTEX_SHADER,E),T=Xc(o,o.FRAGMENT_SHADER,v);o.attachShader(g,N),o.attachShader(g,T),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function R(C){if(i.debug.checkShaderErrors){const W=o.getProgramInfoLog(g).trim(),k=o.getShaderInfoLog(N).trim(),V=o.getShaderInfoLog(T).trim();let J=!0,G=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,g,N,T);else{const ee=qc(o,N,"vertex"),z=qc(o,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ee+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||V==="")&&(G=!1);G&&(C.diagnostics={runnable:J,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:f}})}o.deleteShader(N),o.deleteShader(T),P=new xs(o,g),y=BT(o,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(g,CT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=T,this}let KT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JT(e),t.set(e,n)),n}}class JT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function QT(i,e,t,n,o,s,r){const a=new wa,c=new ZT,l=new Set,u=[],d=o.logarithmicDepthBuffer,h=o.vertexTextures;let p=o.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,C,W,k){const V=W.fog,J=k.geometry,G=y.isMeshStandardMaterial?W.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),z=ee&&ee.mapping===Ts?ee.image.height:null,ae=_[y.type];y.precision!==null&&(p=o.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=me!==void 0?me.length:0;let Ne=0;J.morphAttributes.position!==void 0&&(Ne=1),J.morphAttributes.normal!==void 0&&(Ne=2),J.morphAttributes.color!==void 0&&(Ne=3);let et,X,Q,xe;if(ae){const it=dn[ae];et=it.vertexShader,X=it.fragmentShader}else et=y.vertexShader,X=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),xe=c.getFragmentShaderID(y);const le=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Me=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,ut=!!y.map,Ye=!!y.matcap,dt=!!ee,I=!!y.aoMap,Rt=!!y.lightMap,We=!!y.bumpMap,$e=!!y.normalMap,Ce=!!y.displacementMap,rt=!!y.emissiveMap,Re=!!y.metalnessMap,A=!!y.roughnessMap,b=y.anisotropy>0,O=y.clearcoat>0,j=y.dispersion>0,q=y.iridescence>0,$=y.sheen>0,Se=y.transmission>0,ue=b&&!!y.anisotropyMap,_e=O&&!!y.clearcoatMap,Ze=O&&!!y.clearcoatNormalMap,te=O&&!!y.clearcoatRoughnessMap,be=q&&!!y.iridescenceMap,Ie=q&&!!y.iridescenceThicknessMap,Ue=$&&!!y.sheenColorMap,ve=$&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,Ve=!!y.specularColorMap,ht=!!y.specularIntensityMap,L=Se&&!!y.transmissionMap,de=Se&&!!y.thicknessMap,H=!!y.gradientMap,Y=!!y.alphaMap,pe=y.alphaTest>0,he=!!y.alphaHash,ze=!!y.extensions;let gt=ti;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ct={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:X,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:Me,instancingColor:Me&&k.instanceColor!==null,instancingMorph:Me&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:It,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:Ye,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:Rt,bumpMap:We,normalMap:$e,displacementMap:h&&Ce,emissiveMap:rt,normalMapObjectSpace:$e&&y.normalMapType===Xy,normalMapTangentSpace:$e&&y.normalMapType===nu,metalnessMap:Re,roughnessMap:A,anisotropy:b,anisotropyMap:ue,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:te,dispersion:j,iridescence:q,iridescenceMap:be,iridescenceThicknessMap:Ie,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:Ke,specularColorMap:Ve,specularIntensityMap:ht,transmission:Se,transmissionMap:L,thicknessMap:de,gradientMap:H,opaque:y.transparent===!1&&y.blending===ki&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:pe,alphaHash:he,combine:y.combine,mapUv:ut&&g(y.map.channel),aoMapUv:I&&g(y.aoMap.channel),lightMapUv:Rt&&g(y.lightMap.channel),bumpMapUv:We&&g(y.bumpMap.channel),normalMapUv:$e&&g(y.normalMap.channel),displacementMapUv:Ce&&g(y.displacementMap.channel),emissiveMapUv:rt&&g(y.emissiveMap.channel),metalnessMapUv:Re&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:ue&&g(y.anisotropyMap.channel),clearcoatMapUv:_e&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(y.sheenRoughnessMap.channel),specularMapUv:Ke&&g(y.specularMap.channel),specularColorMapUv:Ve&&g(y.specularColorMap.channel),specularIntensityMapUv:ht&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:de&&g(y.thicknessMap.channel),alphaMapUv:Y&&g(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&($e||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(ut||Y),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:rt&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ze&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&y.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(S(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=_[y.type];let C;if(M){const W=dn[M];C=OS.clone(W.uniforms)}else C=y.uniforms;return C}function N(y,M){let C;for(let W=0,k=u.length;W<k;W++){const V=u[W];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new YT(i,M,y,s),u.push(C)),C}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:N,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:P}}function ew(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function o(r,a,c){i.get(r)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:s}}function tw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function el(){const i=[];let e=0;const t=[],n=[],o=[];function s(){e=0,t.length=0,n.length=0,o.length=0}function r(d,h,p,_,g,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=r(d,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?o.push(f):t.push(f)}function c(d,h,p,_,g,m){const f=r(d,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?o.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||tw),n.length>1&&n.sort(h||Qc),o.length>1&&o.sort(h||Qc)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:o,init:s,push:a,unshift:c,finish:u,sort:l}}function nw(){let i=new WeakMap;function e(n,o){const s=i.get(n);let r;return s===void 0?(r=new el,i.set(n,[r])):o>=s.length?(r=new el,s.push(r)):r=s[o],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function iw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Pe};break;case"SpotLight":t={position:new w,direction:new w,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function ow(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sw=0;function rw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function aw(i){const e=new iw,t=ow(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const o=new w,s=new ke,r=new ke;function a(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,S=0,E=0,v=0,N=0,T=0,R=0;l.sort(rw);for(let y=0,M=l.length;y<M;y++){const C=l[y],W=C.color,k=C.intensity,V=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=W.r*k,d+=W.g*k,h+=W.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,z=t.get(C);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(W).multiplyScalar(k),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[g]=G;const ee=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,ee.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=ee.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=J,v++}g++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(W).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const ee=C.shadow,z=t.get(C);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=G,_++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==N||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+N-T,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=N,P.numLightProbes=R,n.version=sw++)}function c(l,u){let d=0,h=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const E=l[f];if(E.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(m),d++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(E.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(E.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function tl(i){const e=new aw(i),t=[],n=[];function o(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function cw(i){let e=new WeakMap;function t(o,s=0){const r=e.get(o);let a;return r===void 0?(a=new tl(i),e.set(o,[a])):s>=r.length?(a=new tl(i),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lw extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uw extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fw(i,e,t){let n=new Ra;const o=new De,s=new De,r=new Qe,a=new lw({depthPacking:$y}),c=new uw,l={},u=t.maxTextureSize,d={[pn]:Ot,[Ot]:pn,[tn]:tn},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:dw,fragmentShader:hw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new lt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let f=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ei),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=f!==Pn&&this.type===Pn,V=f===Pn&&this.type!==Pn;for(let J=0,G=T.length;J<G;J++){const ee=T[J],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ae=z.getFrameExtents();if(o.multiply(ae),s.copy(z.mapSize),(o.x>u||o.y>u)&&(o.x>u&&(s.x=Math.floor(u/ae.x),o.x=s.x*ae.x,z.mapSize.x=s.x),o.y>u&&(s.y=Math.floor(u/ae.y),o.y=s.y*ae.y,z.mapSize.y=s.y)),z.map===null||k===!0||V===!0){const ye=this.type!==Pn?{minFilter:Ft,magFilter:Ft}:{};z.map!==null&&z.map.dispose(),z.map=new mi(o.x,o.y,ye),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const me=z.getViewportCount();for(let ye=0;ye<me;ye++){const Ne=z.getViewport(ye);r.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),W.viewport(r),z.updateMatrices(ee,ye),n=z.getFrustum(),v(R,P,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Pn&&S(z,P),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,C)};function S(T,R){const P=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(o.x,o.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,p,g,null)}function E(T,R,P,y){let M=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,k=R.uuid;let V=l[W];V===void 0&&(V={},l[W]=V);let J=V[k];J===void 0&&(J=M.clone(),V[k]=J,R.addEventListener("dispose",N)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,y===Pn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=P}return M}function v(T,R,P,y,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=e.update(T),V=T.material;if(Array.isArray(V)){const J=k.groups;for(let G=0,ee=J.length;G<ee;G++){const z=J[G],ae=V[z.materialIndex];if(ae&&ae.visible){const me=E(T,ae,y,M);T.onBeforeShadow(i,T,R,P,k,me,z),i.renderBufferDirect(P,null,k,me,T,z),T.onAfterShadow(i,T,R,P,k,me,z)}}}else if(V.visible){const J=E(T,V,y,M);T.onBeforeShadow(i,T,R,P,k,J,null),i.renderBufferDirect(P,null,k,J,T,null),T.onAfterShadow(i,T,R,P,k,J,null)}}const W=T.children;for(let k=0,V=W.length;k<V;k++)v(W[k],R,P,y,M)}function N(T){T.target.removeEventListener("dispose",N);for(const P in l){const y=l[P],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const pw={[Er]:Ar,[Tr]:Cr,[wr]:Lr,[Gi]:Rr,[Ar]:Er,[Cr]:Tr,[Lr]:wr,[Rr]:Gi};function mw(i,e){function t(){let L=!1;const de=new Qe;let H=null;const Y=new Qe(0,0,0,0);return{setMask:function(pe){H!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),H=pe)},setLocked:function(pe){L=pe},setClear:function(pe,he,ze,gt,Ct){Ct===!0&&(pe*=gt,he*=gt,ze*=gt),de.set(pe,he,ze,gt),Y.equals(de)===!1&&(i.clearColor(pe,he,ze,gt),Y.copy(de))},reset:function(){L=!1,H=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,de=!1,H=null,Y=null,pe=null;return{setReversed:function(he){if(de!==he){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const gt=pe;pe=null,this.setClear(gt)}de=he},getReversed:function(){return de},setTest:function(he){he?le(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(he){H!==he&&!L&&(i.depthMask(he),H=he)},setFunc:function(he){if(de&&(he=pw[he]),Y!==he){switch(he){case Er:i.depthFunc(i.NEVER);break;case Ar:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=he}},setLocked:function(he){L=he},setClear:function(he){pe!==he&&(de&&(he=1-he),i.clearDepth(he),pe=he)},reset:function(){L=!1,H=null,Y=null,pe=null,de=!1}}}function o(){let L=!1,de=null,H=null,Y=null,pe=null,he=null,ze=null,gt=null,Ct=null;return{setTest:function(it){L||(it?le(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(it){de!==it&&!L&&(i.stencilMask(it),de=it)},setFunc:function(it,Kt,vn){(H!==it||Y!==Kt||pe!==vn)&&(i.stencilFunc(it,Kt,vn),H=it,Y=Kt,pe=vn)},setOp:function(it,Kt,vn){(he!==it||ze!==Kt||gt!==vn)&&(i.stencilOp(it,Kt,vn),he=it,ze=Kt,gt=vn)},setLocked:function(it){L=it},setClear:function(it){Ct!==it&&(i.clearStencil(it),Ct=it)},reset:function(){L=!1,de=null,H=null,Y=null,pe=null,he=null,ze=null,gt=null,Ct=null}}}const s=new t,r=new n,a=new o,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,E=null,v=null,N=null,T=null,R=new Pe(0,0,0),P=0,y=!1,M=null,C=null,W=null,k=null,V=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=ee>=2);let ae=null,me={};const ye=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),et=new Qe().fromArray(ye),X=new Qe().fromArray(Ne);function Q(L,de,H,Y){const pe=new Uint8Array(4),he=i.createTexture();i.bindTexture(L,he),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<H;ze++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(de+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return he}const xe={};xe[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),le(i.DEPTH_TEST),r.setFunc(Gi),We(!1),$e(nc),le(i.CULL_FACE),I(ei);function le(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Le(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Me(L,de){return d[L]!==de?(i.bindFramebuffer(L,de),d[L]=de,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Be(L,de){let H=p,Y=!1;if(L){H=h.get(de),H===void 0&&(H=[],h.set(de,H));const pe=L.textures;if(H.length!==pe.length||H[0]!==i.COLOR_ATTACHMENT0){for(let he=0,ze=pe.length;he<ze;he++)H[he]=i.COLOR_ATTACHMENT0+he;H.length=pe.length,Y=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Y=!0);Y&&i.drawBuffers(H)}function ut(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Ye={[di]:i.FUNC_ADD,[_y]:i.FUNC_SUBTRACT,[gy]:i.FUNC_REVERSE_SUBTRACT};Ye[by]=i.MIN,Ye[vy]=i.MAX;const dt={[xy]:i.ZERO,[My]:i.ONE,[yy]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[Ry]:i.SRC_ALPHA_SATURATE,[Ty]:i.DST_COLOR,[Ey]:i.DST_ALPHA,[Sy]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[wy]:i.ONE_MINUS_DST_COLOR,[Ay]:i.ONE_MINUS_DST_ALPHA,[Cy]:i.CONSTANT_COLOR,[Ly]:i.ONE_MINUS_CONSTANT_COLOR,[Py]:i.CONSTANT_ALPHA,[Iy]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,de,H,Y,pe,he,ze,gt,Ct,it){if(L===ei){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),L!==my){if(L!==m||it!==y){if((f!==di||v!==di)&&(i.blendEquation(i.FUNC_ADD),f=di,v=di),it)switch(L){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,N=null,T=null,R.set(0,0,0),P=0,m=L,y=it}return}pe=pe||de,he=he||H,ze=ze||Y,(de!==f||pe!==v)&&(i.blendEquationSeparate(Ye[de],Ye[pe]),f=de,v=pe),(H!==S||Y!==E||he!==N||ze!==T)&&(i.blendFuncSeparate(dt[H],dt[Y],dt[he],dt[ze]),S=H,E=Y,N=he,T=ze),(gt.equals(R)===!1||Ct!==P)&&(i.blendColor(gt.r,gt.g,gt.b,Ct),R.copy(gt),P=Ct),m=L,y=!1}function Rt(L,de){L.side===tn?Le(i.CULL_FACE):le(i.CULL_FACE);let H=L.side===Ot;de&&(H=!H),We(H),L.blending===ki&&L.transparent===!1?I(ei):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function $e(L){L!==hy?(le(i.CULL_FACE),L!==C&&(L===nc?i.cullFace(i.BACK):L===fy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),C=L}function Ce(L){L!==W&&(G&&i.lineWidth(L),W=L)}function rt(L,de,H){L?(le(i.POLYGON_OFFSET_FILL),(k!==de||V!==H)&&(i.polygonOffset(de,H),k=de,V=H)):Le(i.POLYGON_OFFSET_FILL)}function Re(L){L?le(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+J-1),ae!==L&&(i.activeTexture(L),ae=L)}function b(L,de,H){H===void 0&&(ae===null?H=i.TEXTURE0+J-1:H=ae);let Y=me[H];Y===void 0&&(Y={type:void 0,texture:void 0},me[H]=Y),(Y.type!==L||Y.texture!==de)&&(ae!==H&&(i.activeTexture(H),ae=H),i.bindTexture(L,de||xe[L]),Y.type=L,Y.texture=de)}function O(){const L=me[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){et.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function ve(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ke(L,de){let H=l.get(de);H===void 0&&(H=new WeakMap,l.set(de,H));let Y=H.get(L);Y===void 0&&(Y=i.getUniformBlockIndex(de,L.name),H.set(L,Y))}function Ve(L,de){const Y=l.get(de).get(L);c.get(de)!==Y&&(i.uniformBlockBinding(de,Y,L.__bindingPointIndex),c.set(de,Y))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,me={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,E=null,v=null,N=null,T=null,R=new Pe(0,0,0),P=0,y=!1,M=null,C=null,W=null,k=null,V=null,et.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:le,disable:Le,bindFramebuffer:Me,drawBuffers:Be,useProgram:ut,setBlending:I,setMaterial:Rt,setFlipSided:We,setCullFace:$e,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Re,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:q,texImage2D:be,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:Ze,texStorage3D:te,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Ue,viewport:ve,reset:ht}}function nl(i,e,t,n){const o=_w(n);switch(t){case Yl:return i*e;case Zl:return i*e;case Jl:return i*e*2;case ya:return i*e/o.components*o.byteLength;case Sa:return i*e/o.components*o.byteLength;case Ql:return i*e*2/o.components*o.byteLength;case Ea:return i*e*2/o.components*o.byteLength;case Kl:return i*e*3/o.components*o.byteLength;case qt:return i*e*4/o.components*o.byteLength;case Aa:return i*e*4/o.components*o.byteLength;case ms:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:case Or:return Math.max(i,16)*Math.max(e,8)/4;case Dr:case Ur:return Math.max(i,8)*Math.max(e,8)/2;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vs:case ea:case ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eu:case na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _w(i){switch(i){case kn:case Xl:return{byteLength:1,components:1};case To:case jl:case Po:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case pi:case va:case sn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gw(i,e,t,n,o,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return p?new OffscreenCanvas(A,b):Co("canvas")}function g(A,b,O){let j=1;const q=Re(A);if((q.width>O||q.height>O)&&(j=O/Math.max(q.width,q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*q.width),Se=Math.floor(j*q.height);d===void 0&&(d=_($,Se));const ue=b?_($,Se):d;return ue.width=$,ue.height=Se,ue.getContext("2d").drawImage(A,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+$+"x"+Se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,b,O,j,q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),b===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){const Se=q?ws:qe.getTransfer(j);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Se===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(A,b){let O;return A?b===null||b===pi||b===Xi?O=i.DEPTH24_STENCIL8:b===sn?O=i.DEPTH32F_STENCIL8:b===To&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===Xi?O=i.DEPTH_COMPONENT24:b===sn?O=i.DEPTH_COMPONENT32F:b===To&&(O=i.DEPTH_COMPONENT16),O}function N(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Wt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&u.delete(b)}function R(A){const b=A.target;b.removeEventListener("dispose",R),M(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const O=A.source,j=h.get(O);if(j){const q=j[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(A),Object.keys(j).length===0&&h.delete(O)}n.remove(A)}function y(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const O=A.source,j=h.get(O);delete j[b.__cacheKey],r.memory.textures--}function M(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let q=0;q<b.__webglFramebuffer[j].length;q++)i.deleteFramebuffer(b.__webglFramebuffer[j][q]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,q=O.length;j<q;j++){const $=n.get(O[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(O[j])}n.remove(A)}let C=0;function W(){C=0}function k(){const A=C;return A>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+o.maxTextures),C+=1,A}function V(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function J(A,b){const O=n.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,A,b);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function G(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function ee(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function z(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Q(O,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const ae={[fi]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},me={[Ft]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[ps]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},ye={[jy]:i.NEVER,[Qy]:i.ALWAYS,[qy]:i.LESS,[iu]:i.LEQUAL,[Yy]:i.EQUAL,[Jy]:i.GEQUAL,[Ky]:i.GREATER,[Zy]:i.NOTEQUAL};function Ne(A,b){if(b.type===sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wt||b.magFilter===ps||b.magFilter===bo||b.magFilter===Un||b.minFilter===Wt||b.minFilter===ps||b.minFilter===bo||b.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ae[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ae[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ae[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,me[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ft||b.minFilter!==bo&&b.minFilter!==Un||b.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function et(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const j=b.source;let q=h.get(j);q===void 0&&(q={},h.set(j,q));const $=V(b);if($!==A.__cacheKey){q[$]===void 0&&(q[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),q[$].usedTimes++;const Se=q[A.__cacheKey];Se!==void 0&&(q[A.__cacheKey].usedTimes--,Se.usedTimes===0&&y(b)),A.__cacheKey=$,A.__webglTexture=q[$].texture}return O}function X(A,b,O){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const q=et(A,b),$=b.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+O);const Se=n.get($);if($.version!==Se.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const ue=qe.getPrimaries(qe.workingColorSpace),_e=b.colorSpace===Nn?null:qe.getPrimaries(b.colorSpace),Ze=b.colorSpace===Nn||ue===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=g(b.image,!1,o.maxTextureSize);te=rt(b,te);const be=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type);let Ue=E(b.internalFormat,be,Ie,b.colorSpace,b.isVideoTexture);Ne(j,b);let ve;const Ke=b.mipmaps,Ve=b.isVideoTexture!==!0,ht=Se.__version===void 0||q===!0,L=$.dataReady,de=N(b,te);if(b.isDepthTexture)Ue=v(b.format===ji,b.type),ht&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ue,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ue,te.width,te.height,0,be,Ie,null));else if(b.isDataTexture)if(Ke.length>0){Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,de,Ue,Ke[0].width,Ke[0].height);for(let H=0,Y=Ke.length;H<Y;H++)ve=Ke[H],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,be,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,H,Ue,ve.width,ve.height,0,be,Ie,ve.data);b.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(i.TEXTURE_2D,de,Ue,te.width,te.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,be,Ie,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,te.width,te.height,0,be,Ie,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ue,Ke[0].width,Ke[0].height,te.depth);for(let H=0,Y=Ke.length;H<Y;H++)if(ve=Ke[H],b.format!==qt)if(be!==null)if(Ve){if(L)if(b.layerUpdates.size>0){const pe=nl(ve.width,ve.height,b.format,b.type);for(const he of b.layerUpdates){const ze=ve.data.subarray(he*pe/ve.data.BYTES_PER_ELEMENT,(he+1)*pe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,he,ve.width,ve.height,1,be,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,te.depth,be,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Ue,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,te.depth,be,Ie,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Ue,ve.width,ve.height,te.depth,0,be,Ie,ve.data)}else{Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,de,Ue,Ke[0].width,Ke[0].height);for(let H=0,Y=Ke.length;H<Y;H++)ve=Ke[H],b.format!==qt?be!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,be,Ie,ve.data):t.texImage2D(i.TEXTURE_2D,H,Ue,ve.width,ve.height,0,be,Ie,ve.data)}else if(b.isDataArrayTexture)if(Ve){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ue,te.width,te.height,te.depth),L)if(b.layerUpdates.size>0){const H=nl(te.width,te.height,b.format,b.type);for(const Y of b.layerUpdates){const pe=te.data.subarray(Y*H/te.data.BYTES_PER_ELEMENT,(Y+1)*H/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,be,Ie,pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,be,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,te.width,te.height,te.depth,0,be,Ie,te.data);else if(b.isData3DTexture)Ve?(ht&&t.texStorage3D(i.TEXTURE_3D,de,Ue,te.width,te.height,te.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,be,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,te.width,te.height,te.depth,0,be,Ie,te.data);else if(b.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(i.TEXTURE_2D,de,Ue,te.width,te.height);else{let H=te.width,Y=te.height;for(let pe=0;pe<de;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ue,H,Y,0,be,Ie,null),H>>=1,Y>>=1}}else if(Ke.length>0){if(Ve&&ht){const H=Re(Ke[0]);t.texStorage2D(i.TEXTURE_2D,de,Ue,H.width,H.height)}for(let H=0,Y=Ke.length;H<Y;H++)ve=Ke[H],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,be,Ie,ve):t.texImage2D(i.TEXTURE_2D,H,Ue,be,Ie,ve);b.generateMipmaps=!1}else if(Ve){if(ht){const H=Re(te);t.texStorage2D(i.TEXTURE_2D,de,Ue,H.width,H.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,Ue,be,Ie,te);m(b)&&f(j),Se.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,O){if(b.image.length!==6)return;const j=et(A,b),q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const $=n.get(q);if(q.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const Se=qe.getPrimaries(qe.workingColorSpace),ue=b.colorSpace===Nn?null:qe.getPrimaries(b.colorSpace),_e=b.colorSpace===Nn||Se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,be=[];for(let Y=0;Y<6;Y++)!Ze&&!te?be[Y]=g(b.image[Y],!0,o.maxCubemapSize):be[Y]=te?b.image[Y].image:b.image[Y],be[Y]=rt(b,be[Y]);const Ie=be[0],Ue=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),Ke=E(b.internalFormat,Ue,ve,b.colorSpace),Ve=b.isVideoTexture!==!0,ht=$.__version===void 0||j===!0,L=q.dataReady;let de=N(b,Ie);Ne(i.TEXTURE_CUBE_MAP,b);let H;if(Ze){Ve&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ke,Ie.width,Ie.height);for(let Y=0;Y<6;Y++){H=be[Y].mipmaps;for(let pe=0;pe<H.length;pe++){const he=H[pe];b.format!==qt?Ue!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,he.width,he.height,Ue,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,he.width,he.height,Ue,ve,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ke,he.width,he.height,0,Ue,ve,he.data)}}}else{if(H=b.mipmaps,Ve&&ht){H.length>0&&de++;const Y=Re(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,be[Y].width,be[Y].height,Ue,ve,be[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,be[Y].width,be[Y].height,0,Ue,ve,be[Y].data);for(let pe=0;pe<H.length;pe++){const ze=H[pe].image[Y].image;Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,ze.width,ze.height,Ue,ve,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ke,ze.width,ze.height,0,Ue,ve,ze.data)}}else{Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ue,ve,be[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,Ue,ve,be[Y]);for(let pe=0;pe<H.length;pe++){const he=H[pe];Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,Ue,ve,he.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ke,Ue,ve,he.image[Y])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),$.__version=q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xe(A,b,O,j,q,$){const Se=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),_e=E(O.internalFormat,Se,ue,O.colorSpace),Ze=n.get(b),te=n.get(O);if(te.__renderTarget=b,!Ze.__hasExternalTextures){const be=Math.max(1,b.width>>$),Ie=Math.max(1,b.height>>$);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,$,_e,be,Ie,b.depth,0,Se,ue,null):t.texImage2D(q,$,_e,be,Ie,0,Se,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,q,te.__webglTexture,0,We(b)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,q,te.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const j=b.depthTexture,q=j&&j.isDepthTexture?j.type:null,$=v(b.stencilBuffer,q),Se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=We(b);$e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,$,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const j=b.textures;for(let q=0;q<j.length;q++){const $=j[q],Se=s.convert($.format,$.colorSpace),ue=s.convert($.type),_e=E($.internalFormat,Se,ue,$.colorSpace),Ze=We(b);O&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,_e,b.width,b.height):$e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,_e,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_e,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const q=j.__webglTexture,$=We(b);if(b.depthTexture.format===zi)$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(b.depthTexture.format===ji)$e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Me(A){const b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",q)};j.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Le(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),le(b.__webglDepthbuffer[j],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),le(b.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,b,O){const j=n.get(A);b!==void 0&&xe(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Me(A)}function ut(A){const b=A.texture,O=n.get(A),j=n.get(b);A.addEventListener("dispose",R);const q=A.textures,$=A.isWebGLCubeRenderTarget===!0,Se=q.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,r.memory.textures++),$){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let _e=0;_e<b.mipmaps.length;_e++)O.__webglFramebuffer[ue][_e]=i.createFramebuffer()}else O.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)O.__webglFramebuffer[ue]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ue=0,_e=q.length;ue<_e;ue++){const Ze=n.get(q[ue]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&$e(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<q.length;ue++){const _e=q[ue];O.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Ze=s.convert(_e.format,_e.colorSpace),te=s.convert(_e.type),be=E(_e.internalFormat,Ze,te,_e.colorSpace,A.isXRRenderTarget===!0),Ie=We(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,be,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),le(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)xe(O.__webglFramebuffer[ue][_e],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else xe(O.__webglFramebuffer[ue],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,_e=q.length;ue<_e;ue++){const Ze=q[ue],te=n.get(Ze);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ne(i.TEXTURE_2D,Ze),xe(O.__webglFramebuffer,A,Ze,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(Ze)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),Ne(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)xe(O.__webglFramebuffer[_e],A,b,i.COLOR_ATTACHMENT0,ue,_e);else xe(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ue,0);m(b)&&f(ue),t.unbindTexture()}A.depthBuffer&&Me(A)}function Ye(A){const b=A.textures;for(let O=0,j=b.length;O<j;O++){const q=b[O];if(m(q)){const $=S(A),Se=n.get(q).__webglTexture;t.bindTexture($,Se),f($),t.unbindTexture()}}}const dt=[],I=[];function Rt(A){if(A.samples>0){if($e(A)===!1){const b=A.textures,O=A.width,j=A.height;let q=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ue=b.length>1;if(ue)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const Ze=n.get(b[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,q,i.NEAREST),c===!0&&(dt.length=0,I.length=0,dt.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const Ze=n.get(b[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function We(A){return Math.min(o.maxSamples,A.samples)}function $e(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(A){const b=r.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function rt(A,b){const O=A.colorSpace,j=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==It&&O!==Nn&&(qe.getTransfer(O)===at?(j!==qt||q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=Be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$e}function bw(i,e){function t(n,o=Nn){let s;const r=qe.getTransfer(o);if(n===kn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.BYTE;if(n===jl)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Po)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===qt)return i.RGBA;if(n===Zl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===ms||n===_s||n===gs||n===bs)if(r===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dr||n===Nr||n===Ur||n===Or)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Br||n===kr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fr||n===Br)return r===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===Hr||n===Vr||n===Gr||n===Wr||n===$r||n===Xr||n===jr||n===qr||n===Yr||n===Kr||n===Zr||n===Jr||n===Qr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===ea||n===ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vs)return r===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===na||n===ia||n===oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class vw extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xw={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xw)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new Tt,s=e.properties.get(o);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:Mw,fragmentShader:yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ew extends _i{constructor(e,t){super();const n=this;let o=null,s=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,_=null;const g=new Sw,m=t.getContextAttributes();let f=null,S=null;const E=[],v=[],N=new De;let T=null;const R=new Ut;R.viewport=new Qe;const P=new Ut;P.viewport=new Qe;const y=[R,P],M=new vw;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=E[X];return Q===void 0&&(Q=new cr,E[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=E[X];return Q===void 0&&(Q=new cr,E[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=E[X];return Q===void 0&&(Q=new cr,E[X]=Q),Q.getHandSpace()};function k(X){const Q=v.indexOf(X.inputSource);if(Q===-1)return;const xe=E[Q];xe!==void 0&&(xe.update(X.inputSource,X.frame,l||r),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){o.removeEventListener("select",k),o.removeEventListener("selectstart",k),o.removeEventListener("selectend",k),o.removeEventListener("squeeze",k),o.removeEventListener("squeezestart",k),o.removeEventListener("squeezeend",k),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",J);for(let X=0;X<E.length;X++){const Q=v[X];Q!==null&&(v[X]=null,E[X].disconnect(Q))}C=null,W=null,g.reset(),e.setRenderTarget(f),p=null,h=null,d=null,o=null,S=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(f=e.getRenderTarget(),o.addEventListener("select",k),o.addEventListener("selectstart",k),o.addEventListener("selectend",k),o.addEventListener("squeeze",k),o.addEventListener("squeezestart",k),o.addEventListener("squeezeend",k),o.addEventListener("end",V),o.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),o.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(o,t,Q),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new mi(p.framebufferWidth,p.framebufferHeight,{format:qt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ji:zi,xe=m.stencil?Xi:pi);const Le={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(o,t),h=d.createProjectionLayer(Le),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new mi(h.textureWidth,h.textureHeight,{format:qt,type:kn,depthTexture:new pu(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await o.requestReferenceSpace(a),et.setContext(o),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(X){for(let Q=0;Q<X.removed.length;Q++){const xe=X.removed[Q],le=v.indexOf(xe);le>=0&&(v[le]=null,E[le].disconnect(xe))}for(let Q=0;Q<X.added.length;Q++){const xe=X.added[Q];let le=v.indexOf(xe);if(le===-1){for(let Me=0;Me<E.length;Me++)if(Me>=v.length){v.push(xe),le=Me;break}else if(v[Me]===null){v[Me]=xe,le=Me;break}if(le===-1)break}const Le=E[le];Le&&Le.connect(xe)}}const G=new w,ee=new w;function z(X,Q,xe){G.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const le=G.distanceTo(ee),Le=Q.projectionMatrix.elements,Me=xe.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),ut=Le[14]/(Le[10]+1),Ye=(Le[9]+1)/Le[5],dt=(Le[9]-1)/Le[5],I=(Le[8]-1)/Le[0],Rt=(Me[8]+1)/Me[0],We=Be*I,$e=Be*Rt,Ce=le/(-I+Rt),rt=Ce*-I;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rt),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Le[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Re=Be+Ce,A=ut+Ce,b=We-rt,O=$e+(le-rt),j=Ye*ut/A*Re,q=dt*ut/A*Re;X.projectionMatrix.makePerspective(b,O,j,q,Re,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let Q=X.near,xe=X.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),M.near=P.near=R.near=Q,M.far=P.far=R.far=xe,(C!==M.near||W!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,W=M.far),R.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;const le=X.parent,Le=M.cameras;ae(M,le);for(let Me=0;Me<Le.length;Me++)ae(Le[Me],le);Le.length===2?z(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),me(X,M,le)};function me(X,Q,xe){xe===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ye=null;function Ne(X,Q){if(u=Q.getViewerPose(l||r),_=Q,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let le=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Me=0;Me<xe.length;Me++){const Be=xe[Me];let ut=null;if(p!==null)ut=p.getViewport(Be);else{const dt=d.getViewSubImage(h,Be);ut=dt.viewport,Me===0&&(e.setRenderTargetTextures(S,dt.colorTexture,h.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(S))}let Ye=y[Me];Ye===void 0&&(Ye=new Ut,Ye.layers.enable(Me),Ye.viewport=new Qe,y[Me]=Ye),Ye.matrix.fromArray(Be.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Be.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Me===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Ye)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Me=d.getDepthInformation(xe[0]);Me&&Me.isValid&&Me.texture&&g.init(e,Me,o.renderState)}}for(let xe=0;xe<E.length;xe++){const le=v[xe],Le=E[xe];le!==null&&Le!==void 0&&Le.update(le,Q,l||r)}ye&&ye(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const et=new fu;et.setAnimationLoop(Ne),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}const ci=new _n,Aw=new ke;function Tw(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,uu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function o(m,f,S,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function ww(i,e,t,n){let o={},s={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function l(S,E){let v=o[S.id];v===void 0&&(_(S),v=u(S),o[S.id]=v,S.addEventListener("dispose",m));const N=E.program;n.updateUBOMapping(S,N);const T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){const E=d();S.__bindingPointIndex=E;const v=i.createBuffer(),N=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,N,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function d(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=o[S.id],v=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,R=v.length;T<R;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=P.length;y<M;y++){const C=P[y];if(p(C,T,y,N)===!0){const W=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let J=0;J<k.length;J++){const G=k[J],ee=g(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+V,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,v,N){const T=S.value,R=E+"_"+v;if(N[R]===void 0)return typeof T=="number"||typeof T=="boolean"?N[R]=T:N[R]=T.clone(),!0;{const P=N[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return N[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(S){const E=S.uniforms;let v=0;const N=16;for(let R=0,P=E.length;R<P;R++){const y=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,C=y.length;M<C;M++){const W=y[M],k=Array.isArray(W.value)?W.value:[W.value];for(let V=0,J=k.length;V<J;V++){const G=k[V],ee=g(G),z=v%N,ae=z%ee.boundary,me=z+ae;v+=ae,me!==0&&N-me<ee.storage&&(v+=N-me),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=ee.storage}}}const T=v%N;return T>0&&(v+=N-T),S.__size=v,S.__cache={},this}function g(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const v=r.indexOf(E.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(o[E.id]),delete o[E.id],delete s[E.id]}function f(){for(const S in o)i.deleteBuffer(o[S]);r=[],o={},s={}}return{bind:c,update:l,dispose:f}}class Rw{constructor(e={}){const{canvas:t=_S(),context:n=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let N=!1,T=0,R=0,P=null,y=-1,M=null;const C=new Qe,W=new Qe;let k=null;const V=new Pe(0);let J=0,G=t.width,ee=t.height,z=1,ae=null,me=null;const ye=new Qe(0,0,G,ee),Ne=new Qe(0,0,G,ee);let et=!1;const X=new Ra;let Q=!1,xe=!1;const le=new ke,Le=new ke,Me=new w,Be=new Qe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function dt(){return P===null?z:1}let I=n;function Rt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){const D="webgl2";if(I=Rt(D,x),I===null)throw Rt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let We,$e,Ce,rt,Re,A,b,O,j,q,$,Se,ue,_e,Ze,te,be,Ie,Ue,ve,Ke,Ve,ht,L;function de(){We=new DA(I),We.init(),Ve=new bw(I,We),$e=new wA(I,We,e,Ve),Ce=new mw(I,We),$e.reverseDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),rt=new OA(I),Re=new ew,A=new gw(I,We,Ce,Re,$e,Ve,rt),b=new CA(v),O=new IA(v),j=new GS(I),ht=new AA(I,j),q=new NA(I,j,rt,ht),$=new BA(I,q,j,rt),Ue=new FA(I,$e,A),te=new RA(Re),Se=new QT(v,b,O,We,$e,ht,te),ue=new Tw(v,Re),_e=new nw,Ze=new cw(We),Ie=new EA(v,b,O,Ce,$,p,c),be=new fw(v,$,$e),L=new ww(I,rt,$e,Ce),ve=new TA(I,We,rt),Ke=new UA(I,We,rt),rt.programs=Se.programs,v.capabilities=$e,v.extensions=We,v.properties=Re,v.renderLists=_e,v.shadowMap=be,v.state=Ce,v.info=rt}de();const H=new Ew(v,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=We.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=We.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(G,ee,!1))},this.getSize=function(x){return x.set(G,ee)},this.setSize=function(x,D,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,ee=D,t.width=Math.floor(x*z),t.height=Math.floor(D*z),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(G*z,ee*z).floor()},this.setDrawingBufferSize=function(x,D,F){G=x,ee=D,z=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,D,F,B){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,D,F,B),Ce.viewport(C.copy(ye).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,D,F,B){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,D,F,B),Ce.scissor(W.copy(Ne).multiplyScalar(z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){Ce.setScissorTest(et=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(x=!0,D=!0,F=!0){let B=0;if(x){let U=!1;if(P!==null){const ie=P.texture.format;U=ie===Aa||ie===Ea||ie===Sa}if(U){const ie=P.texture.type,fe=ie===kn||ie===pi||ie===To||ie===Xi||ie===xa||ie===Ma,Ee=Ie.getClearColor(),Ae=Ie.getClearAlpha(),Oe=Ee.r,He=Ee.g,Te=Ee.b;fe?(_[0]=Oe,_[1]=He,_[2]=Te,_[3]=Ae,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Oe,g[1]=He,g[2]=Te,g[3]=Ae,I.clearBufferiv(I.COLOR,0,g))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT),F&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),Ze.dispose(),Re.dispose(),b.dispose(),O.dispose(),$.dispose(),ht.dispose(),L.dispose(),Se.dispose(),H.dispose(),H.removeEventListener("sessionstart",Va),H.removeEventListener("sessionend",Ga),ni.stop()};function Y(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const x=rt.autoReset,D=be.enabled,F=be.autoUpdate,B=be.needsUpdate,U=be.type;de(),rt.autoReset=x,be.enabled=D,be.autoUpdate=F,be.needsUpdate=B,be.type=U}function he(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ze(x){const D=x.target;D.removeEventListener("dispose",ze),gt(D)}function gt(x){Ct(x),Re.remove(x)}function Ct(x){const D=Re.get(x).programs;D!==void 0&&(D.forEach(function(F){Se.releaseProgram(F)}),x.isShaderMaterial&&Se.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,B,U,ie){D===null&&(D=ut);const fe=U.isMesh&&U.matrixWorld.determinant()<0,Ee=Uu(x,D,F,B,U);Ce.setMaterial(B,fe);let Ae=F.index,Oe=1;if(B.wireframe===!0){if(Ae=q.getWireframeAttribute(F),Ae===void 0)return;Oe=2}const He=F.drawRange,Te=F.attributes.position;let Je=He.start*Oe,ft=(He.start+He.count)*Oe;ie!==null&&(Je=Math.max(Je,ie.start*Oe),ft=Math.min(ft,(ie.start+ie.count)*Oe)),Ae!==null?(Je=Math.max(Je,0),ft=Math.min(ft,Ae.count)):Te!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Te.count));const pt=ft-Je;if(pt<0||pt===1/0)return;ht.setup(U,B,Ee,F,Ae);let Bt,tt=ve;if(Ae!==null&&(Bt=j.get(Ae),tt=Ke,tt.setIndex(Bt)),U.isMesh)B.wireframe===!0?(Ce.setLineWidth(B.wireframeLinewidth*dt()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(U.isLine){let we=B.linewidth;we===void 0&&(we=1),Ce.setLineWidth(we*dt()),U.isLineSegments?tt.setMode(I.LINES):U.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else U.isPoints?tt.setMode(I.POINTS):U.isSprite&&tt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,xn=U._multiDrawCounts,nt=U._multiDrawCount,Zt=Ae?j.get(Ae).bytesPerElement:1,bi=Re.get(B).currentProgram.getUniforms();for(let Ht=0;Ht<nt;Ht++)bi.setValue(I,"_gl_DrawID",Ht),tt.render(we[Ht]/Zt,xn[Ht])}else if(U.isInstancedMesh)tt.renderInstances(Je,pt,U.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,xn=Math.min(F.instanceCount,we);tt.renderInstances(Je,pt,xn)}else tt.render(Je,pt)};function it(x,D,F){x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,No(x,D,F),x.side=pn,x.needsUpdate=!0,No(x,D,F),x.side=tn):No(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),f=Ze.get(F),f.init(D),E.push(f),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),x!==F&&x.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Ee=ie[fe];it(Ee,F,U),B.add(Ee)}else it(ie,F,U),B.add(ie)}),E.pop(),f=null,B},this.compileAsync=function(x,D,F=null){const B=this.compile(x,D,F);return new Promise(U=>{function ie(){if(B.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){U(x);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Kt=null;function vn(x){Kt&&Kt(x)}function Va(){ni.stop()}function Ga(){ni.start()}const ni=new fu;ni.setAnimationLoop(vn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(x){Kt=x,H.setAnimationLoop(x),x===null?ni.stop():ni.start()},H.addEventListener("sessionstart",Va),H.addEventListener("sessionend",Ga),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,D,P),f=Ze.get(x,E.length),f.init(D),E.push(f),Le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,Q=te.init(this.clippingPlanes,xe),m=_e.get(x,S.length),m.init(),S.push(m),H.enabled===!0&&H.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Ps(ie,D,-1/0,v.sortObjects)}Ps(x,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,me),Ye=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ye&&Ie.addToRenderList(m,x),this.info.render.frame++,Q===!0&&te.beginShadows();const F=f.state.shadowsArray;be.render(F,x,D),Q===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){const ie=D.cameras;if(U.length>0)for(let fe=0,Ee=ie.length;fe<Ee;fe++){const Ae=ie[fe];$a(B,U,x,Ae)}Ye&&Ie.render(x);for(let fe=0,Ee=ie.length;fe<Ee;fe++){const Ae=ie[fe];Wa(m,x,Ae,Ae.viewport)}}else U.length>0&&$a(B,U,x,D),Ye&&Ie.render(x),Wa(m,x,D);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(v,x,D),ht.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Q===!0&&te.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ps(x,D,F,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){B&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Le);const fe=$.update(x),Ee=x.material;Ee.visible&&m.push(x,fe,Ee,F,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const fe=$.update(x),Ee=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Le)),Array.isArray(Ee)){const Ae=fe.groups;for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Te=Ae[Oe],Je=Ee[Te.materialIndex];Je&&Je.visible&&m.push(x,fe,Je,F,Be.z,Te)}}else Ee.visible&&m.push(x,fe,Ee,F,Be.z,null)}}const ie=x.children;for(let fe=0,Ee=ie.length;fe<Ee;fe++)Ps(ie[fe],D,F,B)}function Wa(x,D,F,B){const U=x.opaque,ie=x.transmissive,fe=x.transparent;f.setupLightsView(F),Q===!0&&te.setGlobalState(v.clippingPlanes,F),B&&Ce.viewport(C.copy(B)),U.length>0&&Do(U,D,F),ie.length>0&&Do(ie,D,F),fe.length>0&&Do(fe,D,F),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $a(x,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new mi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Po:kn,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ie=f.state.transmissionRenderTarget[B.id],fe=B.viewport||C;ie.setSize(fe.z,fe.w);const Ee=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Ie.render(F);const Ae=v.toneMapping;v.toneMapping=ti;const Oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Q===!0&&te.setGlobalState(v.clippingPlanes,B),Do(x,F,B),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Te=0,Je=D.length;Te<Je;Te++){const ft=D[Te],pt=ft.object,Bt=ft.geometry,tt=ft.material,we=ft.group;if(tt.side===tn&&pt.layers.test(B.layers)){const xn=tt.side;tt.side=Ot,tt.needsUpdate=!0,Xa(pt,F,B,Bt,tt,we),tt.side=xn,tt.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}v.setRenderTarget(Ee),v.setClearColor(V,J),Oe!==void 0&&(B.viewport=Oe),v.toneMapping=Ae}function Do(x,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=x.length;U<ie;U++){const fe=x[U],Ee=fe.object,Ae=fe.geometry,Oe=B===null?fe.material:B,He=fe.group;Ee.layers.test(F.layers)&&Xa(Ee,D,F,Ae,Oe,He)}}function Xa(x,D,F,B,U,ie){x.onBeforeRender(v,D,F,B,U,ie),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(v,D,F,B,x,ie),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,v.renderBufferDirect(F,D,B,U,x,ie),U.side=pn,U.needsUpdate=!0,v.renderBufferDirect(F,D,B,U,x,ie),U.side=tn):v.renderBufferDirect(F,D,B,U,x,ie),x.onAfterRender(v,D,F,B,U,ie)}function No(x,D,F){D.isScene!==!0&&(D=ut);const B=Re.get(x),U=f.state.lights,ie=f.state.shadowsArray,fe=U.state.version,Ee=Se.getParameters(x,U.state,ie,D,F),Ae=Se.getProgramCacheKey(Ee);let Oe=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?O:b).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Oe===void 0&&(x.addEventListener("dispose",ze),Oe=new Map,B.programs=Oe);let He=Oe.get(Ae);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===fe)return qa(x,Ee),He}else Ee.uniforms=Se.getUniforms(x),x.onBeforeCompile(Ee,v),He=Se.acquireProgram(Ee,Ae),Oe.set(Ae,He),B.uniforms=Ee.uniforms;const Te=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=te.uniform),qa(x,Ee),B.needsLights=Fu(x),B.lightsStateVersion=fe,B.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=He,B.uniformsList=null,He}function ja(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=xs.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function qa(x,D){const F=Re.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Uu(x,D,F,B,U){D.isScene!==!0&&(D=ut),A.resetTextureUnits();const ie=D.fog,fe=B.isMeshStandardMaterial?D.environment:null,Ee=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:It,Ae=(B.isMeshStandardMaterial?O:b).get(B.envMap||fe),Oe=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,He=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!F.morphAttributes.position,Je=!!F.morphAttributes.normal,ft=!!F.morphAttributes.color;let pt=ti;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=v.toneMapping);const Bt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Bt!==void 0?Bt.length:0,we=Re.get(B),xn=f.state.lights;if(Q===!0&&(xe===!0||x!==M)){const $t=x===M&&B.id===y;te.setState(B,x,$t)}let nt=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xn.state.version||we.outputColorSpace!==Ee||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==Ae||B.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Oe||we.vertexTangents!==He||we.morphTargets!==Te||we.morphNormals!==Je||we.morphColors!==ft||we.toneMapping!==pt||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=B.version);let Zt=we.currentProgram;nt===!0&&(Zt=No(B,D,U));let bi=!1,Ht=!1,oo=!1;const mt=Zt.getUniforms(),ln=we.uniforms;if(Ce.useProgram(Zt.program)&&(bi=!0,Ht=!0,oo=!0),B.id!==y&&(y=B.id,Ht=!0),bi||M!==x){Ce.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),bS(le),vS(le),mt.setValue(I,"projectionMatrix",le)):mt.setValue(I,"projectionMatrix",x.projectionMatrix),mt.setValue(I,"viewMatrix",x.matrixWorldInverse);const Hn=mt.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,Me.setFromMatrixPosition(x.matrixWorld)),$e.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&mt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ht=!0,oo=!0)}if(U.isSkinnedMesh){mt.setOptional(I,U,"bindMatrix"),mt.setOptional(I,U,"bindMatrixInverse");const $t=U.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),mt.setValue(I,"boneTexture",$t.boneTexture,A))}U.isBatchedMesh&&(mt.setOptional(I,U,"batchingTexture"),mt.setValue(I,"batchingTexture",U._matricesTexture,A),mt.setOptional(I,U,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",U._indirectTexture,A),mt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",U._colorsTexture,A));const so=F.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&Ue.update(U,F,Zt),(Ht||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,mt.setValue(I,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=Ae,ln.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(ln.envMapIntensity.value=D.environmentIntensity),Ht&&(mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Ou(ln,oo),ie&&B.fog===!0&&ue.refreshFogUniforms(ln,ie),ue.refreshMaterialUniforms(ln,B,z,ee,f.state.transmissionRenderTarget[x.id]),xs.upload(I,ja(we),ln,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(I,ja(we),ln,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&mt.setValue(I,"center",U.center),mt.setValue(I,"modelViewMatrix",U.modelViewMatrix),mt.setValue(I,"normalMatrix",U.normalMatrix),mt.setValue(I,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const $t=B.uniformsGroups;for(let Hn=0,Vn=$t.length;Hn<Vn;Hn++){const Ya=$t[Hn];L.update(Ya,Zt),L.bind(Ya,Zt)}}return Zt}function Ou(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Fu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,D,F){Re.get(x.texture).__webglTexture=D,Re.get(x.depthTexture).__webglTexture=F;const B=Re.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const F=Re.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,F=0){P=x,T=D,R=F;let B=!0,U=null,ie=!1,fe=!1;if(x){const Ae=Re.get(x);if(Ae.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(Ae.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(Ae.__hasExternalTextures)A.rebindTextures(x,Re.get(x.texture).__webglTexture,Re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Te=x.depthTexture;if(Ae.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const Oe=x.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);const He=Re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(He[D])?U=He[D][F]:U=He[D],ie=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?U=Re.get(x).__webglMultisampledFramebuffer:Array.isArray(He)?U=He[F]:U=He,C.copy(x.viewport),W.copy(x.scissor),k=x.scissorTest}else C.copy(ye).multiplyScalar(z).floor(),W.copy(Ne).multiplyScalar(z).floor(),k=et;if(Ce.bindFramebuffer(I.FRAMEBUFFER,U)&&B&&Ce.drawBuffers(x,U),Ce.viewport(C),Ce.scissor(W),Ce.setScissorTest(k),ie){const Ae=Re.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,F)}else if(fe){const Ae=Re.get(x.texture),Oe=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,Oe)}y=-1},this.readRenderTargetPixels=function(x,D,F,B,U,ie,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){Ce.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Ae=x.texture,Oe=Ae.format,He=Ae.type;if(!$e.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&F>=0&&F<=x.height-U&&I.readPixels(D,F,B,U,Ve.convert(Oe),Ve.convert(He),ie)}finally{const Ae=P!==null?Re.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,B,U,ie,fe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){const Ae=x.texture,Oe=Ae.format,He=Ae.type;if(!$e.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-B&&F>=0&&F<=x.height-U){Ce.bindFramebuffer(I.FRAMEBUFFER,Ee);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(D,F,B,U,Ve.convert(Oe),Ve.convert(He),0);const Je=P!==null?Re.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Je);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gS(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Te),I.deleteSync(ft),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,F=0){x.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-F),U=Math.floor(x.image.width*B),ie=Math.floor(x.image.height*B),fe=D!==null?D.x:0,Ee=D!==null?D.y:0;A.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,fe,Ee,U,ie),Ce.unbindTexture()},this.copyTextureToTexture=function(x,D,F=null,B=null,U=0){x.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let ie,fe,Ee,Ae,Oe,He,Te,Je,ft;const pt=x.isCompressedTexture?x.mipmaps[U]:x.image;F!==null?(ie=F.max.x-F.min.x,fe=F.max.y-F.min.y,Ee=F.isBox3?F.max.z-F.min.z:1,Ae=F.min.x,Oe=F.min.y,He=F.isBox3?F.min.z:0):(ie=pt.width,fe=pt.height,Ee=pt.depth||1,Ae=0,Oe=0,He=0),B!==null?(Te=B.x,Je=B.y,ft=B.z):(Te=0,Je=0,ft=0);const Bt=Ve.convert(D.format),tt=Ve.convert(D.type);let we;D.isData3DTexture?(A.setTexture3D(D,0),we=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),we=I.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),we=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const xn=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=I.getParameter(I.UNPACK_SKIP_PIXELS),bi=I.getParameter(I.UNPACK_SKIP_ROWS),Ht=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const oo=x.isDataArrayTexture||x.isData3DTexture,mt=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const ln=Re.get(x),so=Re.get(D),$t=Re.get(ln.__renderTarget),Hn=Re.get(so.__renderTarget);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Vn=0;Vn<Ee;Vn++)oo&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(x).__webglTexture,U,He+Vn),x.isDepthTexture?(mt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(D).__webglTexture,U,ft+Vn),I.blitFramebuffer(Ae,Oe,ie,fe,Te,Je,ie,fe,I.DEPTH_BUFFER_BIT,I.NEAREST)):mt?I.copyTexSubImage3D(we,U,Te,Je,ft+Vn,Ae,Oe,ie,fe):I.copyTexSubImage2D(we,U,Te,Je,ft+Vn,Ae,Oe,ie,fe);Ce.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(we,U,Te,Je,ft,ie,fe,Ee,Bt,tt,pt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(we,U,Te,Je,ft,ie,fe,Ee,Bt,pt.data):I.texSubImage3D(we,U,Te,Je,ft,ie,fe,Ee,Bt,tt,pt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,Te,Je,ie,fe,Bt,tt,pt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,Te,Je,pt.width,pt.height,Bt,pt.data):I.texSubImage2D(I.TEXTURE_2D,U,Te,Je,ie,fe,Bt,tt,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht),U===0&&D.generateMipmaps&&I.generateMipmap(we),Ce.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,B=null,U=0){return x.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,x=arguments[2],D=arguments[3],U=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,B,U)},this.initRenderTarget=function(x){Re.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),Ce.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,Ce.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class vu extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ra,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let o=0,s=this.stride;o<s;o++)this.array[e+o]=t.array[n+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new w;class Pa{constructor(e,t,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),o=ot(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this}setXYZW(e,t,n,o,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),o=ot(o,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new w,ol=new Qe,sl=new Qe,Lw=new w,rl=new ke,is=new w,lr=new gn,al=new ke,ur=new Qi;class Pw extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,is),this.boundingBox.expandByPoint(is)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,is),this.boundingSphere.expandByPoint(is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,o=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(o),e.ray.intersectsSphere(lr)!==!1&&(al.copy(o).invert(),ur.copy(e.ray).applyMatrix4(al),!(this.boundingBox!==null&&ur.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,o=t.count;n<o;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,o=this.geometry;ol.fromBufferAttribute(o.attributes.skinIndex,e),sl.fromBufferAttribute(o.attributes.skinWeight,e),il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=sl.getComponent(s);if(r!==0){const a=ol.getComponent(s);rl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Lw.copy(il).applyMatrix4(rl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xu extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mu extends Tt{constructor(e=null,t=1,n=1,o,s,r,a,c,l=Ft,u=Ft,d,h){super(null,r,a,c,l,u,o,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new ke,Iw=new ke;class Ia{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,o=this.bones.length;n<o;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,o=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Iw;cl.multiplyMatrices(a,t[s]),cl.toArray(n,s*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mu(t,e,e,qt,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,o=e.bones.length;n<o;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new xu),this.bones.push(r),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let o=0,s=t.length;o<s;o++){const r=t[o];e.bones.push(r.uuid);const a=n[o];e.boneInverses.push(a.toArray())}return e}}class la extends vt{constructor(e,t,n,o=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ke,ll=new ke,os=[],ul=new an,Dw=new ke,ho=new lt,fo=new gn;class Nw extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,Dw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ul.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),fo.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,o=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=o[r+a]}raycast(e,t){const n=this.matrixWorld,o=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Di),ll.multiplyMatrices(n,Di),ho.matrixWorld=ll,ho.raycast(e,os);for(let r=0,a=os.length;r<a;r++){const c=os[r];c.instanceId=s,c.object=this,t.push(c)}os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(o*this.count),o,this.count,ya,sn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=o*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Da extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ss=new w,Es=new w,dl=new ke,po=new Qi,ss=new gn,dr=new w,hl=new w;class Na extends _t{constructor(e=new Yt,t=new Da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,s=t.count;o<s;o++)Ss.fromBufferAttribute(t,o-1),Es.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Ss.distanceTo(Es);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(o),ss.radius+=s,e.ray.intersectsSphere(ss)===!1)return;dl.copy(o).invert(),po.copy(e.ray).applyMatrix4(dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let g=p,m=_-1;g<m;g+=l){const f=u.getX(g),S=u.getX(g+1),E=rs(this,e,po,c,f,S);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=rs(this,e,po,c,g,m);f&&t.push(f)}}else{const p=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let g=p,m=_-1;g<m;g+=l){const f=rs(this,e,po,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=rs(this,e,po,c,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rs(i,e,t,n,o,s){const r=i.geometry.attributes.position;if(Ss.fromBufferAttribute(r,o),Es.fromBufferAttribute(r,s),t.distanceSqToSegment(Ss,Es,dr,hl)>n)return;dr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(dr);if(!(c<e.near||c>e.far))return{distance:c,point:hl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const fl=new w,pl=new w;class yu extends Na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,s=t.count;o<s;o+=2)fl.fromBufferAttribute(t,o),pl.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+fl.distanceTo(pl);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uw extends Na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Su extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new ke,ua=new Qi,as=new gn,cs=new w;class Ow extends _t{constructor(e=new Yt,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(o),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;ml.copy(o).invert(),ua.copy(e.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let _=h,g=p;_<g;_++){const m=l.getX(_);cs.fromBufferAttribute(d,m),_l(cs,m,c,o,e,t,this)}}else{const h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=h,g=p;_<g;_++)cs.fromBufferAttribute(d,_),_l(cs,_,c,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _l(i,e,t,n,o,s,r){const a=ua.distanceSqToPoint(i);if(a<t){const c=new w;ua.closestPointToPoint(i,c),c.applyMatrix4(n);const l=o.ray.origin.distanceTo(c);if(l<o.near||l>o.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Lo extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Lo{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ls(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bw(i){function e(o,s){return i[o]-i[s]}const t=i.length,n=new Array(t);for(let o=0;o!==t;++o)n[o]=o;return n.sort(e),n}function gl(i,e,t){const n=i.length,o=new i.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)o[r++]=i[a+c]}return o}function Eu(i,e,t,n){let o=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[o++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=i[o++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=i[o++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=i[o++];while(s!==void 0)}class Io{constructor(e,t,n,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,o=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<o)){for(let a=n+2;;){if(o===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=o,o=t[++n],e<o)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(o=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(o=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,o)}return this.interpolate_(n,s,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=e*o;for(let r=0;r!==o;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kw extends Io{constructor(e,t,n,o){super(e,t,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){const o=this.parameterPositions;let s=e-2,r=e+1,a=o[s],c=o[r];if(a===void 0)switch(this.getSettings_().endingStart){case cc:s=e,a=2*t-n;break;case lc:s=o.length-2,a=t+o[s]-o[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cc:r=e,c=2*n-t;break;case lc:r=1,c=n+o[1]-o[0];break;default:r=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,o){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(o-t),g=_*_,m=g*_,f=-h*m+2*h*g-h*_,S=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,E=(-1-p)*m+(1.5+p)*g+.5*_,v=p*m-p*g;for(let N=0;N!==a;++N)s[N]=f*r[u+N]+S*r[l+N]+E*r[c+N]+v*r[d+N];return s}}class zw extends Io{constructor(e,t,n,o){super(e,t,n,o)}interpolate_(e,t,n,o){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(o-t),d=1-u;for(let h=0;h!==a;++h)s[h]=r[l+h]*d+r[c+h]*u;return s}}class Hw extends Io{constructor(e,t,n,o){super(e,t,n,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(n.interpolation=o)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return Us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,o=t.length;n!==o;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,o=t.length;n!==o;++n)t[n]*=e}return this}trim(e,t){const n=this.times,o=n.length;let s=0,r=o-1;for(;s!==o&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==o){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,o=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),e=!1;break}r=c}if(o!==void 0&&Fw(o))for(let a=0,c=o.length;a!==c;++a){const l=o[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===Us,s=e.length-1;let r=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(o)c=!0;else{const d=a*n,h=d-n,p=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[h+_]||g!==t[p+_]){c=!0;break}}}if(c){if(a!==r){e[r]=e[a];const d=a*n,h=r*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[a+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,o=new n(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ro;class no extends bn{constructor(e,t,n){super(e,t,n)}}no.prototype.ValueTypeName="bool";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=wo;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class Au extends bn{}Au.prototype.ValueTypeName="color";class Ki extends bn{}Ki.prototype.ValueTypeName="number";class Vw extends Io{constructor(e,t,n,o){super(e,t,n,o)}interpolate_(e,t,n,o){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-t)/(o-t);let l=e*a;for(let u=l+a;l!==u;l+=4)mn.slerpFlat(s,0,r,l-a,r,l,c);return s}}class Zi extends bn{InterpolantFactoryMethodLinear(e){return new Vw(this.times,this.values,this.getValueSize(),e)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends bn{constructor(e,t,n){super(e,t,n)}}io.prototype.ValueTypeName="string";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=wo;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends bn{}Ji.prototype.ValueTypeName="vector";class Gw{constructor(e="",t=-1,n=[],o=Vy){this.name=e,this.tracks=n,this.duration=t,this.blendMode=o,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,o=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push($w(n[r]).scale(o));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(bn.toJSON(n[s]));return o}static CreateFromMorphTargetSequence(e,t,n,o){const s=t.length,r=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Bw(c);c=gl(c,1,u),l=gl(l,1,u),!o&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Ki(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const o=e;n=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<n.length;o++)if(n[o].name===t)return n[o];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const o={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=o[d];h||(o[d]=h=[]),h.push(l)}}const r=[];for(const a in o)r.push(this.CreateFromMorphTargetSequence(a,o[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,_,g){if(p.length!==0){const m=[],f=[];Eu(p,m,f,_),m.length!==0&&g.push(new d(h,m,f))}},o=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)p[h[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let S=0;S!==h[_].morphTargets.length;++S){const E=h[_];m.push(E.time),f.push(E.morphTarget===g?1:0)}o.push(new Ki(".morphTargetInfluence["+g+"]",m,f))}c=p.length*r}else{const p=".bones["+t[d].name+"]";n(Ji,p+".position",h,"pos",o),n(Zi,p+".quaternion",h,"rot",o),n(Ji,p+".scale",h,"scl",o)}}return o.length===0?null:new this(s,c,o,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,o=e.length;n!==o;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ww(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Au;case"quaternion":return Zi;case"bool":case"boolean":return no;case"string":return io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $w(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ww(i.type);if(i.times===void 0){const t=[],n=[];Eu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xw{constructor(e,t,n){const o=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&o.onStart!==void 0&&o.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,o.onProgress!==void 0&&o.onProgress(u,r,a),r===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(u){o.onError!==void 0&&o.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],_=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const jw=new Xw;class gi{constructor(e){this.manager=e!==void 0?e:jw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(o,s){n.load(e,o,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class qw extends Error{constructor(e,t){super(e),this.response=t}}class As extends gi{constructor(e){super(e)}load(e,t,n,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:o});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:o});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Cn[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){S();function S(){d.read().then(({done:E,value:v})=>{if(E)f.close();else{g+=v.byteLength;const N=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let T=0,R=u.length;T<R;T++){const P=u[T];P.onProgress&&P.onProgress(N)}f.enqueue(v),S()}},E=>{f.error(E)})}}});return new Response(m)}else throw new qw(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Qn.add(e,l);const u=Cn[e];delete Cn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Cn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yw extends gi{constructor(e){super(e)}load(e,t,n,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Qn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Co("img");function c(){u(),Qn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),o&&o(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Tu extends gi{constructor(e){super(e)}load(e,t,n,o){const s=new Tt,r=new Yw(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,o),s}}class Ua extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hr=new ke,bl=new w,vl=new w;class Oa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kw extends Oa{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||o!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=o,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zw extends Ua{constructor(e,t,n=0,o=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=o,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Kw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xl=new ke,mo=new w,fr=new w;class Jw extends Oa{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,o=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(mo),fr.copy(n.position),fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fr),n.updateMatrixWorld(),o.makeTranslation(-mo.x,-mo.y,-mo.z),xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}class wu extends Ua{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new Jw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qw extends Oa{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Qw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ao{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,o=e.length;n<o;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class eR extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Qn.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{o&&o(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){o&&o(l),Qn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qn.add(e,c),s.manager.itemStart(e)}}class tR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ml();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ml(){return performance.now()}const Fa="\\[\\]\\.:\\/",nR=new RegExp("["+Fa+"]","g"),Ba="[^"+Fa+"]",iR="[^"+Fa.replace("\\.","")+"]",oR=/((?:WC+[\/:])*)/.source.replace("WC",Ba),sR=/(WCOD+)?/.source.replace("WCOD",iR),rR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ba),aR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ba),cR=new RegExp("^"+oR+sR+rR+aR+"$"),lR=["material","materials","bones","map"];class uR{constructor(e,t,n){const o=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,s=n.length;o!==s;++o)n[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nR,"")}static parseTrackName(e){const t=cR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const s=n.nodeName.substring(o+1);lR.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},o=n(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)e[t++]=n[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,o=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[o];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+o+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=o;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=uR;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yl=new ke;class dR{constructor(e,t,n=0,o=1/0){this.ray=new Qi(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(e,t=!0,n=[]){return ha(e,this,n,t),n.sort(Sl),n}intersectObjects(e,t=!0,n=[]){for(let o=0,s=e.length;o<s;o++)ha(e[o],this,n,t);return n.sort(Sl),n}}function Sl(i,e){return i.distance-e.distance}function ha(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)ha(s[r],e,t,!0)}}class El{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hR extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Al={type:"change"},ka={type:"start"},Ru={type:"end"},us=new Qi,Tl=new Kn,fR=Math.cos(70*Rs.DEG2RAD),yt=new w,kt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pr=1e-6;class pR extends hR{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new mn,this._lastTargetPosition=new w,this._quat=new mn().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new El,this._sphericalDelta=new El,this._scale=1,this._panOffset=new w,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new w,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_R.bind(this),this._onPointerDown=mR.bind(this),this._onPointerUp=gR.bind(this),this._onContextMenu=ER.bind(this),this._onMouseWheel=xR.bind(this),this._onKeyDown=MR.bind(this),this._onTouchStart=yR.bind(this),this._onTouchMove=SR.bind(this),this._onMouseDown=bR.bind(this),this._onMouseMove=vR.bind(this),this._interceptControlDown=AR.bind(this),this._interceptControlUp=TR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Al),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=kt:n>Math.PI&&(n-=kt),o<-Math.PI?o+=kt:o>Math.PI&&(o-=kt),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=yt.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(us.origin.copy(this.object.position),us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(us.direction))<fR?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),us.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pr||this._lastTargetPosition.distanceToSquared(this.target)>pr?(this.dispatchEvent(Al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yt.copy(o).sub(this.target);let s=yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=e-n.left,s=t-n.top,r=n.width,a=n.height;this._mouse.x=o/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(n,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,s=Math.sqrt(n*n+o*o);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),o=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(o,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,s=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function _R(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ru),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bR(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case Bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case Bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ka)}function vR(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xR(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(ka),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ru))}function MR(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function yR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ka)}function SR(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function ER(i){this.enabled!==!1&&i.preventDefault()}function AR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class wR extends vu{constructor(){super();const e=new eo;e.deleteAttribute("uv");const t=new Lo({side:Ot}),n=new Lo,o=new wu(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const s=new lt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new lt(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new lt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new lt(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new lt(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new lt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new lt(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new lt(e,Ni(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new lt(e,Ni(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new lt(e,Ni(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new lt(e,Ni(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const m=new lt(e,Ni(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new lt(e,Ni(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ni(i){const e=new Jn;return e.color.setScalar(i),e}function wl(i,e){if(e===Gy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sa||e===tu){let t=i.getIndex();if(t===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,o=[];if(e===sa)for(let r=1;r<=n;r++)o.push(t.getX(0)),o.push(t.getX(r)),o.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(o.push(t.getX(r)),o.push(t.getX(r+1)),o.push(t.getX(r+2))):(o.push(t.getX(r+2)),o.push(t.getX(r+1)),o.push(t.getX(r)));o.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(o),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class RR extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new jR(t)})}load(e,t,n,o){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Ao.extractUrlBase(e);r=Ao.resolveURL(l,this.path)}else r=Ao.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){o?o(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new As(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,o){let s;const r={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cu){try{r[je.KHR_BINARY_GLTF]=new qR(e)}catch(d){o&&o(d);return}s=JSON.parse(r[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new aC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:r[d]=new PR;break;case je.KHR_DRACO_MESH_COMPRESSION:r[d]=new YR(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:r[d]=new KR;break;case je.KHR_MESH_QUANTIZATION:r[d]=new ZR;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(n,o)}parseAsync(e,t){const n=this;return new Promise(function(o,s){n.parse(e,t,o,s)})}}function CR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LR{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,o=t.length;n<o;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let o=t.cache.get(n);if(o)return o;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],It);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new da(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wu(u),l.distance=d;break;case"spot":l=new Zw(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,In(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),o=Promise.resolve(l),t.cache.add(n,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class PR{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,n){const o=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],It),e.opacity=r[3]}s.baseColorTexture!==void 0&&o.push(n.assignTexture(e,"map",s.baseColorTexture,bt))}return Promise.all(o)}}class IR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class DR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class UR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class OR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=o.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,bt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],It),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=o.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class zR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],It),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,bt)),Promise.all(s)}}class HR{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class VR{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,o=n.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const s=[],r=o.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,o=n.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const s=o.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class WR{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,o=n.json,s=o.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=o.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $R{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,o=n.json,s=o.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=o.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XR{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const o=n.extensions[this.name],s=this.parser.getDependency("buffer",o.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=o.byteOffset||0,l=o.byteLength||0,u=o.count,d=o.byteStride,h=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,o.mode,o.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(p),u,d,h,o.mode,o.filter),p})})}else return null}}class jR{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const o=t.meshes[n.mesh];for(const l of o.primitives)if(l.mode!==jt.TRIANGLES&&l.mode!==jt.TRIANGLE_STRIP&&l.mode!==jt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,p=[];for(const _ of d){const g=new ke,m=new w,f=new mn,S=new w(1,1,1),E=new Nw(_.geometry,_.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),E.setMatrixAt(v,g.compose(m,f,S));for(const v in c)if(v==="_COLOR_0"){const N=c[v];E.instanceColor=new la(N.array,N.itemSize,N.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),p.push(E)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Cu="glTF",_o=12,Rl={JSON:1313821514,BIN:5130562};class qR{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-_o,s=new DataView(e,_o);let r=0;for(;r<o;){const a=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Rl.JSON){const l=new Uint8Array(e,_o+r,a);this.content=n.decode(l)}else if(c===Rl.BIN){const l=_o+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,o=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},c={},l={};for(const u in r){const d=fa[u]||u.toLowerCase();a[d]=r[u]}for(const u in e.attributes){const d=fa[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Vi[h.componentType];l[d]=p.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){o.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}d(p)},a,l,It,h)})})}}class KR{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZR{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Lu extends Io{constructor(e,t,n,o){super(e,t,n,o)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=e*o*3+o;for(let r=0;r!==o;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,o){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=o-t,d=(n-t)/u,h=d*d,p=h*d,_=e*l,g=_-l,m=-2*p+3*h,f=p-h,S=1-m,E=f-h+d;for(let v=0;v!==a;v++){const N=r[g+v+a],T=r[g+v+c]*u,R=r[_+v+a],P=r[_+v]*u;s[v]=S*N+E*T+m*R+f*P}return s}}const JR=new mn;class QR extends Lu{interpolate_(e,t,n,o){const s=super.interpolate_(e,t,n,o);return JR.fromArray(s).normalize().toArray(s),s}}const jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cl={9728:Ft,9729:Wt,9984:$l,9985:ps,9986:bo,9987:Un},Ll={33071:Zn,33648:Ms,10497:fi},mr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eC={CUBICSPLINE:void 0,LINEAR:Ro,STEP:wo},_r={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tC(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Lo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),i.DefaultMaterial}function li(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nC(i,e,t){let n=!1,o=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(o=!0),d.COLOR_0!==void 0&&(s=!0),n&&o&&s)break}if(!n&&!o&&!s)return Promise.resolve(i);const r=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;r.push(h)}if(o){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),o&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function iC(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,o=t.length;n<o;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oC(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gr(t.attributes):e=i.indices+":"+gr(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,o=i.targets.length;n<o;n++)e+=":"+gr(i.targets[n]);return e}function gr(i){let e="";const t=Object.keys(i).sort();for(let n=0,o=t.length;n<o;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sC(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rC=new ke;class aC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);o=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&o<17||s&&r<98?this.textureLoader=new Tu(this.options.manager):this.textureLoader=new eR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,o=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][o.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:o.asset,parser:n,userData:{}};return li(s,a,o),In(a,o),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let o=0,s=t.length;o<s;o++){const r=t[o].joints;for(let a=0,c=r.length;a<c;a++)e[r[a]].isBone=!0}for(let o=0,s=e.length;o<s;o++){const r=e[o];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const o=n.clone(),s=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,u]of r.children.entries())s(u,a.children[l])};return s(n,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const o=e(t[n]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let o=0;o<t.length;o++){const s=e(t[o]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let o=this.cache.get(n);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":o=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(n,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(s,r){n.load(Ao.resolveURL(t.uri,o.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const o=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+o)})}loadAccessor(e){const t=this,n=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const r=mr[o.type],a=Vi[o.componentType],c=o.normalized===!0,l=new a(o.count*r);return Promise.resolve(new vt(l,r,c))}const s=[];return o.bufferView!==void 0?s.push(this.getDependency("bufferView",o.bufferView)):s.push(null),o.sparse!==void 0&&(s.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],c=mr[o.type],l=Vi[o.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=o.byteOffset||0,p=o.bufferView!==void 0?n.bufferViews[o.bufferView].byteStride:void 0,_=o.normalized===!0;let g,m;if(p&&p!==d){const f=Math.floor(h/p),S="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+f+":"+o.count;let E=t.cache.get(S);E||(g=new l(a,f*p,o.count*p/u),E=new Cw(g,p/u),t.cache.add(S,E)),m=new Pa(E,c,h%p/u,_)}else a===null?g=new l(o.count*c):g=new l(a,h,o.count*c),m=new vt(g,c,_);if(o.sparse!==void 0){const f=mr.SCALAR,S=Vi[o.sparse.indices.componentType],E=o.sparse.indices.byteOffset||0,v=o.sparse.values.byteOffset||0,N=new S(r[1],E,o.sparse.count*f),T=new l(r[2],v,o.sparse.count*c);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=N.length;R<P;R++){const y=N[R];if(m.setX(y,T[R*c]),c>=2&&m.setY(y,T[R*c+1]),c>=3&&m.setZ(y,T[R*c+2]),c>=4&&m.setW(y,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const o=this,s=this.json,r=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[r.sampler]||{};return u.magFilter=Cl[h.magFilter]||Wt,u.minFilter=Cl[h.minFilter]||Un,u.wrapS=Ll[h.wrapS]||fi,u.wrapT=Ll[h.wrapT]||fi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==Wt,o.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,o=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=o.images[e],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:r.mimeType});return c=a.createObjectURL(h),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Tt(g);m.needsUpdate=!0,h(m)}),t.load(Ao.resolveURL(d,s.path),_,void 0,p)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),In(d,r),d.userData.mimeType=r.mimeType||sC(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,o){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(r);r=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,c)}}return o!==void 0&&(r.colorSpace=o),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const o=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Su,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Da,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(o||s||r){let a="ClonedMaterial:"+n.uuid+":";o&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),o&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Lo}loadMaterial(e){const t=this,n=this.json,o=this.extensions,s=n.materials[e];let r;const a={},c=s.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const d=o[je.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],It),a.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,bt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tn);const u=s.alphaMode||_r.OPAQUE;if(u===_r.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_r.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Jn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Jn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Jn){const d=s.emissiveFactor;a.emissive=new Pe().setRGB(d[0],d[1],d[2],It)}return s.emissiveTexture!==void 0&&r!==Jn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,bt)),Promise.all(l).then(function(){const d=new r(a);return s.name&&(d.name=s.name),In(d,s),t.associations.set(d,{materials:e}),s.extensions&&li(o,d,s),d})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,o=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Pl(c,a,t)})}const r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=oC(l),d=o[u];if(d)r.push(d.promise);else{let h;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Pl(new Yt,l,t),o[u]={primitive:l,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,o=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const u=r[c].material===void 0?tC(this.cache):this.getDependency("material",r[c].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[p];let f;const S=l[p];if(m.mode===jt.TRIANGLES||m.mode===jt.TRIANGLE_STRIP||m.mode===jt.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Pw(g,S):new lt(g,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===jt.TRIANGLE_STRIP?f.geometry=wl(f.geometry,tu):m.mode===jt.TRIANGLE_FAN&&(f.geometry=wl(f.geometry,sa));else if(m.mode===jt.LINES)f=new yu(g,S);else if(m.mode===jt.LINE_STRIP)f=new Na(g,S);else if(m.mode===jt.LINE_LOOP)f=new Uw(g,S);else if(m.mode===jt.POINTS)f=new Ow(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&iC(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),In(f,s),m.extensions&&li(o,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&li(o,d[0],s),d[0];const h=new hn;s.extensions&&li(o,h,s),t.associations.set(h,{meshes:e});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],o=n[n.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Rs.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let o=0,s=t.joints.length;o<s;o++)n.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(o){const s=o.pop(),r=o,a=[],c=[];for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d){a.push(d);const h=new ke;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ia(a,c)})}loadAnimation(e){const t=this.json,n=this,o=t.animations[e],s=o.name?o.name:"animation_"+e,r=[],a=[],c=[],l=[],u=[];for(let d=0,h=o.channels.length;d<h;d++){const p=o.channels[d],_=o.samplers[p.sampler],g=p.target,m=g.node,f=o.parameters!==void 0?o.parameters[_.input]:_.input,S=o.parameters!==void 0?o.parameters[_.output]:_.output;g.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",S)),l.push(_),u.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],_=d[2],g=d[3],m=d[4],f=[];for(let S=0,E=h.length;S<E;S++){const v=h[S],N=p[S],T=_[S],R=g[S],P=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,N,T,R,P);if(y)for(let M=0;M<y.length;M++)f.push(y[M])}return new Gw(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,o=t.nodes[e];return o.mesh===void 0?null:n.getDependency("mesh",o.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,o.mesh,s);return o.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=o.weights.length;c<l;c++)a.morphTargetInfluences[c]=o.weights[c]}),r})}loadNode(e){const t=this.json,n=this,o=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=o.children||[];for(let l=0,u=a.length;l<u;l++)r.push(n.getDependency("node",a[l]));const c=o.skin===void 0?Promise.resolve(null):n.getDependency("skin",o.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,rC)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?o.createUniqueName(s.name):"",a=[],c=o._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(o.getDependency("camera",s.camera).then(function(l){return o._getNodeRef(o.cameraCache,s.camera,l)})),o._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new xu:l.length>1?u=new hn:l.length===1?u=l[0]:u=new _t,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=r),In(u,s),s.extensions&&li(n,u,s),s.matrix!==void 0){const d=new ke;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return o.associations.has(u)||o.associations.set(u,{}),o.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],o=this,s=new hn;n.name&&(s.name=o.createUniqueName(n.name)),In(s,n),n.extensions&&li(t,s,n);const r=n.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(o.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[h,p]of o.associations)(h instanceof fn||h instanceof Tt)&&d.set(h,p);return u.traverse(h=>{const p=o.associations.get(h);p!=null&&d.set(h,p)}),d};return o.associations=l(s),s})}_createAnimationTracks(e,t,n,o,s){const r=[],a=e.name?e.name:e.uuid,c=[];Yn[s.path]===Yn.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(Yn[s.path]){case Yn.weights:l=Ki;break;case Yn.rotation:l=Zi;break;case Yn.position:case Yn.scale:l=Ji;break;default:n.itemSize===1?l=Ki:l=Ji;break}const u=o.interpolation!==void 0?eC[o.interpolation]:Ro,d=this._getArrayFromAccessor(n);for(let h=0,p=c.length;h<p;h++){const _=new l(c[h]+"."+Yn[s.path],t.array,d,u);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),r.push(_)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pa(t.constructor),o=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)o[s]=t[s]*n;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const o=this instanceof Zi?QR:Lu;return new o(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cC(i,e,t){const n=e.attributes,o=new an;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(o.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const u=pa(Vi[a.componentType]);o.min.multiplyScalar(u),o.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new w,c=new w;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const g=pa(Vi[h.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(a)}i.boundingBox=o;const r=new gn;o.getCenter(r.center),r.radius=o.min.distanceTo(o.max)/2,i.boundingSphere=r}function Pl(i,e,t){const n=e.attributes,o=[];function s(r,a){return t.getDependency("accessor",r).then(function(c){i.setAttribute(a,c)})}for(const r in n){const a=fa[r]||r.toLowerCase();a in i.attributes||o.push(s(n[r],a))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});o.push(r)}return qe.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),In(i,e),cC(i,e,t),Promise.all(o).then(function(){return e.targets!==void 0?nC(i,e.targets,t):i})}const br=new WeakMap;class lC extends gi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,o){const s=new As(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,o)},n,o)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,bt,n).catch(n)}decodeDracoFile(e,t,n,o,s=It,r=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(r)}decodeGeometry(e,t){const n=JSON.stringify(t);if(br.has(e)){const c=br.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(c=>(o=c,new Promise((l,u)=>{o._callbacks[s]={resolve:l,reject:u},o.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{o&&s&&this._releaseTask(o,s)}),br.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Yt;e.index&&t.setIndex(new vt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n],s=o.name,r=o.array,a=o.itemSize,c=new vt(r,a);s==="color"&&(this._assignVertexColorSpace(c,o.vertexColorSpace),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==bt)return;const n=new Pe;for(let o=0,s=e.count;o<s;o++)n.fromBufferAttribute(e,o),qe.toWorkingColorSpace(n,bt),e.setXYZ(o,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new As(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((o,s)=>{n.load(e,o,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const o=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=uC.toString(),r=["/* draco decoder */",o,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const o=new Worker(this.workerSourceURL);o._callbacks={},o._taskCosts={},o._taskLoad=0,o.postMessage({type:"init",decoderConfig:this.decoderConfig}),o.onmessage=function(s){const r=s.data;switch(r.type){case"decode":o._callbacks[r.id].resolve(r);break;case"error":o._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(o)}else this.workerPool.sort(function(o,s){return o._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function uC(){let i,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const p=t(d,h,new Int8Array(c),l),_=p.attributes.map(g=>g.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{d.destroy(h)}});break}};function t(r,a,c,l){const u=l.attributeIDs,d=l.attributeTypes;let h,p;const _=a.GetEncodedGeometryType(c);if(_===r.TRIANGULAR_MESH)h=new r.Mesh,p=a.DecodeArrayToMesh(c,c.byteLength,h);else if(_===r.POINT_CLOUD)h=new r.PointCloud,p=a.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const g={index:null,attributes:[]};for(const m in u){const f=self[d[m]];let S,E;if(l.useUniqueIDs)E=u[m],S=a.GetAttributeByUniqueId(h,E);else{if(E=a.GetAttributeId(h,r[u[m]]),E===-1)continue;S=a.GetAttribute(h,E)}const v=o(r,a,h,m,f,S);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),g.attributes.push(v)}return _===r.TRIANGULAR_MESH&&(g.index=n(r,a,h)),r.destroy(h),g}function n(r,a,c){const u=c.num_faces()*3,d=u*4,h=r._malloc(d);a.GetTrianglesUInt32Array(c,d,h);const p=new Uint32Array(r.HEAPF32.buffer,h,u).slice();return r._free(h),{array:p,itemSize:1}}function o(r,a,c,l,u,d){const h=d.num_components(),_=c.num_points()*h,g=_*u.BYTES_PER_ELEMENT,m=s(r,u),f=r._malloc(g);a.GetAttributeDataArrayForAllPoints(c,d,m,g,f);const S=new u(r.HEAPF32.buffer,f,_).slice();return r._free(f),{name:l,array:S,itemSize:h}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}async function dC(i){const e=new Image;e.src=i,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("loadHeightMap: canvas 2D indisponivel");n.drawImage(e,0,0);const o=n.getImageData(0,0,t.width,t.height).data,s=new Float32Array(t.width*t.height);for(let r=0;r<s.length;r++)s[r]=o[4*r]/255;return{width:t.width,height:t.height,data:s}}function hC(i,e,t,n=!0){const o=t-Math.floor(t),s=(e-Math.floor(e))*i.width-.5,r=(n?1-o:o)*i.height-.5,a=Math.floor(s),c=Math.floor(r),l=s-a,u=r-c,d=i.width,h=i.height,p=i.data,_=v=>(v%d+d)%d,g=v=>(v%h+h)%h,m=p[g(c)*d+_(a)],f=p[g(c)*d+_(a+1)],S=p[g(c+1)*d+_(a)],E=p[g(c+1)*d+_(a+1)];return(m*(1-l)+f*l)*(1-u)+(S*(1-l)+E*l)*u}function Pu(i,e){const t=new Map,n=new Int32Array(i.count);for(let o=0;o<i.count;o++){const s=Math.round(i.getX(o)/e)+","+Math.round(i.getY(o)/e)+","+Math.round(i.getZ(o)/e);let r=t.get(s);r===void 0&&(r=t.size,t.set(s,r)),n[o]=r}return{keys:n,n:t.size}}function Il(i,e,t){const n=i.attributes.position,o=i.index,s=new Float32Array(t*3),r=new w,a=new w,c=new w,l=o?o.count/3:n.count/3;for(let u=0;u<l;u++){const d=o?o.getX(3*u):3*u,h=o?o.getX(3*u+1):3*u+1,p=o?o.getX(3*u+2):3*u+2;r.fromBufferAttribute(n,d),a.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),a.sub(r),c.sub(r),a.cross(c);for(const _ of[d,h,p]){const g=e[_]*3;s[g]+=a.x,s[g+1]+=a.y,s[g+2]+=a.z}}for(let u=0;u<t;u++){const d=Math.hypot(s[3*u],s[3*u+1],s[3*u+2])||1;s[3*u]/=d,s[3*u+1]/=d,s[3*u+2]/=d}return s}function Iu(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function fC(i){const e=Iu(i),t=new Uint8Array(512),n=new Float32Array(256*3),o=[...Array(256).keys()];for(let c=255;c>0;c--){const l=Math.floor(e()*(c+1));[o[c],o[l]]=[o[l],o[c]]}for(let c=0;c<512;c++)t[c]=o[c&255];for(let c=0;c<256;c++){const l=e()*2-1,u=e()*Math.PI*2,d=Math.sqrt(1-l*l);n[3*c]=d*Math.cos(u),n[3*c+1]=d*Math.sin(u),n[3*c+2]=l}const s=c=>c*c*c*(c*(c*6-15)+10),r=(c,l,u,d)=>n[3*c]*l+n[3*c+1]*u+n[3*c+2]*d,a=(c,l,u)=>{const d=Math.floor(c),h=Math.floor(l),p=Math.floor(u);c-=d,l-=h,u-=p;const _=d&255,g=h&255,m=p&255,f=s(c),S=s(l),E=s(u),v=(T,R,P)=>t[t[t[_+T]+g+R]+m+P],N=(T,R,P)=>T+(R-T)*P;return N(N(N(r(v(0,0,0),c,l,u),r(v(1,0,0),c-1,l,u),f),N(r(v(0,1,0),c,l-1,u),r(v(1,1,0),c-1,l-1,u),f),S),N(N(r(v(0,0,1),c,l,u-1),r(v(1,0,1),c-1,l,u-1),f),N(r(v(0,1,1),c,l-1,u-1),r(v(1,1,1),c-1,l-1,u-1),f),S),E)};return(c,l,u)=>a(c,l,u)+.5*a(2.03*c+17.1,2.03*l+3.7,2.03*u+9.2)}function pC(i,e,{stitchSize:t=.0055,depthRatio:n=.3,midLevel:o=.55,lumpSize:s=.012,lumpDepth:r=.0014,seed:a=1,flipY:c=!0,weightAttr:l=null}={}){const u=i.attributes.position,d=i.attributes.uv,h=n*t,_=new an().setFromBufferAttribute(u).getSize(new w).length()*1e-6,{keys:g,n:m}=Pu(u,_),f=Il(i,g,m),S=r>0?fC(a):null,E=l?i.getAttribute(l):void 0,v=new Float32Array(m),N=new Uint16Array(m),T=E?new Float32Array(m):null;for(let y=0;y<u.count;y++)v[g[y]]+=hC(e,d.getX(y),d.getY(y),c),N[g[y]]++,T&&E&&(T[g[y]]+=E.getX(y));for(let y=0;y<u.count;y++){const M=g[y],C=u.getX(y),W=u.getY(y),k=u.getZ(y);let V=(v[M]/N[M]-o)*h;T&&(V*=T[M]/N[M]),S&&(V+=S(C/s,W/s,k/s)*.7*r),u.setXYZ(y,C+f[3*M]*V,W+f[3*M+1]*V,k+f[3*M+2]*V)}u.needsUpdate=!0;const R=Il(i,g,m),P=new Float32Array(u.count*3);for(let y=0;y<u.count;y++){const M=g[y]*3;P[3*y]=R[M],P[3*y+1]=R[M+1],P[3*y+2]=R[M+2]}return i.setAttribute("normal",new vt(P,3)),i.computeBoundingSphere(),i}function mC(i,{density:e=70,strayDensity:t=1.5,color:n=new Pe(1,.9,.78),opacity:o=.55,lightDir:s=new w(-.3,.4,.5),seed:r=7,points:a=5}={}){const c=i.geometry,l=c.attributes.position,u=c.attributes.normal,d=c.index,h=d?d.count/3:l.count/3,p=i.getWorldScale(new w),_=p.x*p.y,g=new Float32Array(h),m=new w,f=new w,S=new w;let E=0;const v=(Me,Be)=>d?d.getX(3*Me+Be):3*Me+Be;for(let Me=0;Me<h;Me++)m.fromBufferAttribute(l,v(Me,0)),f.fromBufferAttribute(l,v(Me,1)),S.fromBufferAttribute(l,v(Me,2)),f.sub(m),S.sub(m),E+=g[Me]=.5*f.cross(S).length();const N=new Float32Array(h);let T=0;for(let Me=0;Me<h;Me++)T+=g[Me],N[Me]=T/E;const R=E*_*1e4,P=Iu(r),y=()=>Math.sqrt(-2*Math.log(P()+1e-12))*Math.cos(2*Math.PI*P()),M=new w().copy(s).normalize(),C=new Fe().getNormalMatrix(i.matrixWorld),W=[["short",Math.round(R*e)],["stray",Math.round(R*t)]],k=W[0][1]+W[1][1],V=a-1,J=new Float32Array(k*V*6),G=new Float32Array(k*V*6),ee=new w,z=new w,ae=new w,me=new w,ye=new w,Ne=new w,et=new w,X=new w;let Q=0;for(const[Me,Be]of W)for(let ut=0;ut<Be;ut++){const Ye=P();let dt=0,I=h-1;for(;dt<I;){const q=dt+I>>1;N[q]<Ye?dt=q+1:I=q}const Rt=dt;let We=P(),$e=P();We+$e>1&&(We=1-We,$e=1-$e);const Ce=v(Rt,0),rt=v(Rt,1),Re=v(Rt,2);m.fromBufferAttribute(l,Ce),f.fromBufferAttribute(l,rt),S.fromBufferAttribute(l,Re),ee.copy(m).addScaledVector(f.sub(m),We).addScaledVector(S.sub(m),$e),z.fromBufferAttribute(u,Ce).add(Ne.fromBufferAttribute(u,rt)).add(Ne.fromBufferAttribute(u,Re)).normalize(),ae.set(y(),y(),y()),ae.addScaledVector(z,-ae.dot(z)).normalize(),me.crossVectors(z,ae);const A=(Me==="short"?Math.exp(Math.log(8e-4)+.45*y()):.002+.003*P())/p.x,b=(Me==="short"?25+50*P():10+45*P())*Math.PI/180,O=Me==="short"?.35+.2*y():.25+.15*y(),j=.55+.45*Math.max(0,X.copy(z).applyMatrix3(C).normalize().dot(M));ye.copy(ee).addScaledVector(z,-15e-5/p.x);for(let q=1;q<=V;q++){const $=b+O*(q/V)*1.6;et.copy(z).multiplyScalar(Math.cos($)).addScaledVector(ae,Math.sin($)).addScaledVector(me,.25*y()).normalize(),Ne.copy(ye).addScaledVector(et,A/V);const Se=j*(.6+.4*(q-1)/V),ue=j*(.6+.4*q/V);J[Q]=ye.x,J[Q+1]=ye.y,J[Q+2]=ye.z,J[Q+3]=Ne.x,J[Q+4]=Ne.y,J[Q+5]=Ne.z,G[Q]=G[Q+1]=G[Q+2]=Se,G[Q+3]=G[Q+4]=G[Q+5]=ue,Q+=6,ye.copy(Ne)}}const xe=new Yt;xe.setAttribute("position",new vt(J,3)),xe.setAttribute("color",new vt(G,3));const le=new Da({color:n,vertexColors:!0,transparent:!0,opacity:o,depthWrite:!1}),Le=new yu(xe,le);return Le.name="CrochetFuzz",Le.renderOrder=1,Le}const Mo={uSqPoint:{value:new w(1e3,1e3,1e3)},uSqDir:{value:new w(0,0,-1)},uSqAmt:{value:0},uSqRadius:{value:.012}},_C=`
uniform vec3 uSqPoint;
uniform vec3 uSqDir;
uniform float uSqAmt;
uniform float uSqRadius;
// afunda no centro (g1) e estufa levemente num anel em volta (g2)
float sqField(vec3 p, out vec3 grad) {
  vec3 d = p - uSqPoint;
  float r2 = dot(d, d);
  float a = uSqRadius, b = uSqRadius * 2.2, k = 0.22;
  float g1 = exp(-r2 / (a * a)), g2 = exp(-r2 / (b * b));
  grad = d * (-2.0 * g1 / (a * a) + k * 2.0 * g2 / (b * b));
  return g1 - k * g2;
}
`;function vr(i){if(!i||i.userData.squish)return i;i.userData.squish=!0,i.onBeforeCompile=t=>{Object.assign(t.uniforms,Mo),t.vertexShader=_C+t.vertexShader,t.vertexShader.includes("#include <beginnormal_vertex>")&&(t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",`
        #include <beginnormal_vertex>
        if (uSqAmt != 0.0) {
          mat3 sqM = mat3(modelMatrix);
          vec3 sqG; float sqF = sqField((modelMatrix * vec4(position, 1.0)).xyz, sqG);
          vec3 sqN = normalize(sqM * objectNormal);
          sqN = normalize(sqN - uSqAmt * dot(uSqDir, sqN) * sqG);
          objectNormal = inverse(sqM) * sqN;
        }`)),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      if (uSqAmt != 0.0) {
        vec3 sqG2; float sqF2 = sqField((modelMatrix * vec4(transformed, 1.0)).xyz, sqG2);
        transformed += inverse(mat3(modelMatrix)) * (uSqDir * uSqAmt * sqF2);
      }`)};const e=i.customProgramCacheKey.bind(i);return i.customProgramCacheKey=()=>e()+"|squish",i.needsUpdate=!0,i}class gC{renderer;camera;getTarget;depth;stiffness;damping;x=0;v=0;pressed=!1;ray=new dR;ndc=new De;onDown=e=>this.down(e);onUp=()=>this.up();onMove=e=>this.move(e);constructor({renderer:e,camera:t,getTarget:n,depth:o=.005,radius:s=.012,stiffness:r=140,damping:a=13}){this.renderer=e,this.camera=t,this.getTarget=n,this.depth=o,this.stiffness=r,this.damping=a,Mo.uSqRadius.value=s,e.domElement.addEventListener("pointerdown",this.onDown,{capture:!0}),addEventListener("pointermove",this.onMove),addEventListener("pointerup",this.onUp),addEventListener("pointercancel",this.onUp)}mirar(e){const t=this.getTarget();if(!t)return!1;const n=this.renderer.domElement.getBoundingClientRect();this.ndc.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const o=this.ray.intersectObject(t,!0).find(s=>s.object.isMesh&&s.object.visible);return o?(Mo.uSqPoint.value.copy(o.point),Mo.uSqDir.value.copy(this.ray.ray.direction).normalize(),!0):!1}down(e){e.pointerType==="mouse"&&e.button!==0||this.mirar(e)&&(this.pressed=!0,this.v+=9)}move(e){this.pressed&&this.mirar(e)}up(){this.pressed=!1}update(e){e=Math.min(e,1/30);const t=4,n=e/t,o=this.pressed?1:0;for(let s=0;s<t;s++){const r=this.stiffness*(o-this.x)-this.damping*this.v;this.v+=r*n,this.x+=this.v*n}!this.pressed&&Math.abs(this.x)<1e-4&&Math.abs(this.v)<.001&&(this.x=0,this.v=0),Mo.uSqAmt.value=this.x*this.depth}dispose(){this.renderer.domElement.removeEventListener("pointerdown",this.onDown,{capture:!0}),removeEventListener("pointermove",this.onMove),removeEventListener("pointerup",this.onUp),removeEventListener("pointercancel",this.onUp)}}const bC=new lC().setDecoderPath("/laura-e-ponto/draco/"),vC=new RR().setDRACOLoader(bC),xC=new Tu,MC=new Map,yC=new Map;function Du(i,e,t){let n=i.get(e);return n||(n=t(),i.set(e,n),n.catch(()=>i.delete(e))),n}function xr(i,e,t){return Du(MC,i,async()=>{const n=await xC.loadAsync(i);return n.flipY=!1,n.wrapS=n.wrapT=fi,n.anisotropy=t.capabilities.getMaxAnisotropy(),n.colorSpace=e?bt:Nn,n.needsUpdate=!0,n})}async function SC(i,e){const[t,n,o,s]=await Promise.all([xr(i.cor,!0,e),xr(i.normal,!1,e),xr(i.orm,!1,e),Du(yC,i.altura,()=>dC(i.altura))]);return{cor:t,normal:n,orm:o,altura:s}}function EC(i){let e=2166136261;for(const t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}const Dl=i=>Array.isArray(i)?i:[i];async function Nl(i,e){const t=i.manifesto,n=[...new Set(t.malhas.map(h=>h.textura))],[o,...s]=await Promise.all([vC.loadAsync(i.urls.modelo),...n.map(h=>SC(i.urls.texturas[h],e.renderer))]),r=new Map(n.map((h,p)=>[h,s[p]])),a=new hn;a.name=t.id,a.add(o.scene);const c=t.deslocamento;a.position.set(c[0],c[2],-c[1]);const l={id:t.id,manifesto:t,grupo:a,croche:[],tingiveis:[]},u=[];o.scene.traverse(h=>{h.isMesh&&u.push(h)});const d=[];for(const h of u){const p=h.userData.amigurumi_malha??h.parent?.userData.amigurumi_malha,_=typeof p=="number"?t.malhas[p]:void 0;if(typeof p=="number"&&_){const g=r.get(_.textura),m=t.texturas[_.textura].ganho,f=EC(t.id)%1e5+p*977,S=h.geometry;(_.relevo>0||_.nuvem_profundidade>0)&&pC(S,g.altura,{stitchSize:_.ponto,depthRatio:_.relevo,midLevel:.55,lumpSize:_.nuvem_tamanho||.012,lumpDepth:_.nuvem_profundidade,seed:f,flipY:!1,weightAttr:_.peso_relevo?"_disp":null}),S.setAttribute("color",new vt(new Float32Array(S.attributes.position.count*3),3));for(const T of Dl(h.material))T.dispose();const E=new cn({name:"Amigurumi_Crochet",map:g.cor,normalMap:g.normal,normalScale:new De(1,1),roughness:1,roughnessMap:g.orm,metalness:0,metalnessMap:g.orm,aoMap:g.orm,aoMapIntensity:1,specularIntensity:.4,sheen:1,sheenRoughness:.45,vertexColors:!0,side:t.categoria==="corpo"?pn:tn});E.color.setScalar(m),vr(E),h.material=E;const v=S.getAttribute("_zone"),N={malha:h,material:E,fiapos:null,zona:v?v.array:null,ganho:m};l.croche.push(N),_.fiapos>0&&d.push({mesh:h,pint:N,densidade:_.fiapos,longos:_.fiapos_longos,seed:f+3})}else for(const g of Dl(h.material))vr(g),g.userData.amigurumi_tingir&&g.isMeshStandardMaterial&&l.tingiveis.push(g)}if(d.length){e.raiz.add(a),e.raiz.updateMatrixWorld(!0);try{for(const h of d){const p=mC(h.mesh,{density:h.densidade,strayDensity:h.longos,seed:h.seed});vr(p.material),h.mesh.add(p),h.pint.fiapos=p.material}}finally{e.raiz.remove(a)}}return l}function AC(i,e){return zl(i,e)}const TC=new Pe(1,1,1);function ds(i,e,t){const n=new Pe(e),o=new Pe(t??AC(i.manifesto,e));for(const s of i.croche){const r=s.malha.geometry.getAttribute("color"),a=r.array;for(let c=0;c<r.count;c++)(s.zona&&s.zona[c]>=.5?o:n).toArray(a,3*c);r.needsUpdate=!0,s.material.sheenColor.copy(n).multiplyScalar(.5).addScalar(.05),s.fiapos&&s.fiapos.color.copy(n).lerp(TC,.12)}for(const s of i.tingiveis)s.color.copy(n)}const wC={corpo:[-.004,.16],cabelo:[.085,.16],conjunto:[.01,.096],superior:[.05,.096],inferior:[.01,.07],calcados:[-.004,.03],acessorios:[.06,.16]},RC=.004;function CC(i){i.updateMatrixWorld(!0);const e=[];return i.traverse(t=>{const n=t;n.isMesh&&n.material.name==="Amigurumi_Crochet"&&e.push({geometria:n.geometry,matriz:n.matrixWorld.clone()})}),{malhas:e}}const LC=`
uniform float uInfla;
varying vec3 vPos;
void main() {
  vec4 w = modelMatrix * vec4(position + normal * uInfla, 1.0);
  vPos = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,PC=`
uniform float uTempo;
uniform float uOpacidade;
uniform vec2 uFaixa;
uniform vec3 uCorA;
uniform vec3 uCorB;
varying vec3 vPos;
void main() {
  float y = vPos.y;
  float mascara = smoothstep(uFaixa.x - 0.006, uFaixa.x, y) * (1.0 - smoothstep(uFaixa.y, uFaixa.y + 0.006, y));
  if (mascara <= 0.001) discard;
  float ang = atan(vPos.z, vPos.x);
  // grade: aneis a cada 4 mm de altura e 40 meridianos ao redor do eixo
  float gy = y / 0.004, ga = ang * 40.0 / 6.2831853;
  float ly = abs(fract(gy - 0.5) - 0.5) / fwidth(gy);
  float la = abs(fract(ga - 0.5) - 0.5) / max(fwidth(ga), 1e-4);
  float linha = 1.0 - min(min(ly, la), 1.0);
  if (linha < 0.05) discard;
  // gradiente que corre ao redor e ao longo da altura
  float onda = 0.5 + 0.5 * sin(y * 120.0 + ang * 2.0 - uTempo * 4.0);
  vec3 cor = mix(uCorA, uCorB, onda);
  // faixa clara que sobe pela regiao da peca
  float varre = mix(uFaixa.x, uFaixa.y, fract(uTempo * 0.55));
  float brilho = exp(-pow((y - varre) / 0.008, 2.0));
  cor = mix(cor, vec3(1.0), brilho * 0.6);
  gl_FragColor = vec4(cor, linha * mascara * uOpacidade * (0.5 + 0.5 * brilho));
}`;class IC{objeto=new hn;material;terminando=!1;opacidade=0;constructor(e,t){const n=new zn({vertexShader:LC,fragmentShader:PC,uniforms:{uTempo:{value:Math.random()*10},uInfla:{value:RC},uOpacidade:{value:0},uFaixa:{value:new De(...wC[t])},uCorA:{value:new Pe("#8a3bb0")},uCorB:{value:new Pe("#f0a6e0")}},transparent:!0,depthWrite:!1});this.material=n,this.objeto.name="IndicadorCarga";for(const{geometria:o,matriz:s}of e.malhas){const r=new lt(o,n);r.matrixAutoUpdate=!1,r.matrix.copy(s),r.renderOrder=2,r.raycast=()=>{},this.objeto.add(r)}}terminar(){this.terminando=!0}atualizar(e){const t=this.material.uniforms;return t.uTempo.value+=e,this.opacidade=this.terminando?Math.max(0,this.opacidade-e/.35):Math.min(1,this.opacidade+e/.2),t.uOpacidade.value=this.opacidade,!(this.terminando&&this.opacidade<=0)}descartar(){this.material.dispose()}}const hs={corpo:0,calcados:1,inferior:2,superior:3,conjunto:3,cabelo:4,acessorios:5},DC=0,Ul=6e-4,Nu=.0012,ma=.0015,Ui=Math.hypot(Nu,ma),NC=3,UC=8,OC=12,FC=.3,BC=.5,Ol=new WeakMap;function za(i){const e=Ol.get(i);if(e)return e;const t=i.attributes.position,n=new an().setFromBufferAttribute(t),{keys:o,n:s}=Pu(t,n.getSize(new w).length()*1e-6),r=new Int32Array(s).fill(-1);for(let m=0;m<o.length;m++)r[o[m]]<0&&(r[o[m]]=m);const a=i.index,c=a?a.count/3:t.count/3,l=(m,f)=>o[a?a.getX(3*m+f):3*m+f],u=Array.from({length:s},()=>new Set);for(let m=0;m<c;m++){const f=l(m,0),S=l(m,1),E=l(m,2);u[f].add(S).add(E),u[S].add(f).add(E),u[E].add(f).add(S)}const d=new Int32Array(s+1);for(let m=0;m<s;m++)d[m+1]=d[m]+u[m].size;const h=new Int32Array(d[s]);for(let m=0;m<s;m++){let f=d[m];for(const S of u[m])h[f++]=S}const p=i.attributes.normal;let _=new Float32Array(s*3);for(let m=0;m<s;m++)_[3*m]=p.getX(r[m]),_[3*m+1]=p.getY(r[m]),_[3*m+2]=p.getZ(r[m]);for(let m=0;m<OC;m++){const f=new Float32Array(s*3);for(let S=0;S<s;S++){let E=_[3*S],v=_[3*S+1],N=_[3*S+2];for(let R=d[S];R<d[S+1];R++){const P=h[R];E+=_[3*P],v+=_[3*P+1],N+=_[3*P+2]}const T=Math.hypot(E,v,N)||1;f[3*S]=E/T,f[3*S+1]=v/T,f[3*S+2]=N/T}_=f}const g={original:new Float32Array(t.array),keys:o,n:s,rep:r,vizInicio:d,viz:h,normal:_};return Ol.set(i,g),g}class Ha{pontos=[];normais=[];celulas=new Map;static chave(e,t,n){const o=Math.floor(e/Ui)+512,s=Math.floor(t/Ui)+512,r=Math.floor(n/Ui)+512;return(o*1024+s)*1024+r}adicionar(e){const t=e.geometry,n=t.attributes.position,o=za(t),s=e.matrixWorld,r=new Fe().getNormalMatrix(s),a=new w,c=new w;for(let l=0;l<o.n;l++){a.fromBufferAttribute(n,o.rep[l]).applyMatrix4(s),c.set(o.normal[3*l],o.normal[3*l+1],o.normal[3*l+2]).applyMatrix3(r).normalize();const u=this.pontos.length/3;this.pontos.push(a.x,a.y,a.z),this.normais.push(c.x,c.y,c.z);const d=Ha.chave(a.x,a.y,a.z),h=this.celulas.get(d);h?h.push(u):this.celulas.set(d,[u])}}get vazia(){return this.pontos.length===0}necessidade(e,t){const n=Math.floor(e.x/Ui)+512,o=Math.floor(e.y/Ui)+512,s=Math.floor(e.z/Ui)+512;let r=0,a=!1;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){const d=this.celulas.get(((n+c)*1024+o+l)*1024+s+u);if(d)for(const h of d){if(t.x*this.normais[3*h]+t.y*this.normais[3*h+1]+t.z*this.normais[3*h+2]<BC)continue;const p=e.x-this.pontos[3*h],_=e.y-this.pontos[3*h+1],g=e.z-this.pontos[3*h+2],m=p*t.x+_*t.y+g*t.z;m>=Ul||m<-Nu||p*p+_*_+g*g-m*m>ma*ma||(r=Math.max(r,Ul-m),m<DC&&(a=!0))}}return a?r:0}}function kC(i){const e=za(i.geometry),t=i.geometry.attributes.position;t.array.set(e.original),t.needsUpdate=!0,i.geometry.computeBoundingSphere()}function zC(i,e){const t=i.geometry,n=t.attributes.position,o=t.attributes.normal,s=za(t),r=s.normal,a=i.matrixWorld,c=new Fe().getNormalMatrix(a),l=i.getWorldScale(new w).x||1,u=new w,d=new w;let h=new Float32Array(s.n),p=0;for(let g=0;g<s.n;g++){const m=s.rep[g];if(o.getX(m)*r[3*g]+o.getY(m)*r[3*g+1]+o.getZ(m)*r[3*g+2]<FC)continue;u.fromBufferAttribute(n,m).applyMatrix4(a),d.set(r[3*g],r[3*g+1],r[3*g+2]).applyMatrix3(c).normalize();const f=e.necessidade(u,d);f&&(h[g]=f,p++)}if(!p)return 0;const _=(g,m)=>{const f=new Float32Array(s.n);for(let S=0;S<s.n;S++){let E=h[S],v=1;for(let N=s.vizInicio[S];N<s.vizInicio[S+1];N++)E=g(E,h[s.viz[N]]),v++;f[S]=m?E/v:E}h=f};for(let g=0;g<NC;g++)_((m,f)=>Math.max(m,f),!1);for(let g=0;g<UC;g++)_((m,f)=>m+f,!0);for(let g=0;g<n.count;g++){const m=s.keys[g],f=h[m]/l;f&&n.setXYZ(g,n.getX(g)+r[3*m]*f,n.getY(g)+r[3*m+1]*f,n.getZ(g)+r[3*m+2]*f)}return n.needsUpdate=!0,t.computeBoundingSphere(),p}const Mr=i=>i.croche.map(e=>e.malha);function HC(i,e=!0){const t=performance.now(),n=[...i].sort((r,a)=>hs[r.manifesto.categoria]-hs[a.manifesto.categoria]);for(const r of n){r.grupo.updateMatrixWorld(!0);for(const a of Mr(r))kC(a)}if(!e)return{movidos:0,ms:performance.now()-t};const o=new Ha;let s=0;for(let r=0;r<n.length;){const a=hs[n[r].manifesto.categoria];let c=r;for(;c<n.length&&hs[n[c].manifesto.categoria]===a;)c++;const l=n.slice(r,c);if(!o.vazia)for(const u of l)for(const d of Mr(u))s+=zC(d,o);for(const u of l)for(const d of Mr(u))o.adicionar(d);r=c}return{movidos:s,ms:performance.now()-t}}const go=cy.corpo,VC=Rs.degToRad(25),GC=new w(0,1,0);function WC(i){const e=new vu,t=new aa(i);e.environment=t.fromScene(new wR,.04).texture,t.dispose(),e.environmentIntensity=.38;const n=new da(16774374,2.6);n.position.set(-.3,.4,.5);const o=new da(16771572,.7);return o.position.set(.4,.2,-.5),e.add(n,o),e}class $C{el;eventos;renderer;scene;camera;controls;raizBoneco=new hn;squish;observer;clock=new tR;tween=null;giroRestante=0;corpo=null;gaiola=null;indicadores=new Map;saindo=[];instancias=new Map;emCarga=new Set;desejados=new Set;constructor(e,t){this.el=e,this.eventos=t,this.renderer=new Rw({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.toneMapping=Gl,e.prepend(this.renderer.domElement),this.scene=WC(this.renderer),this.camera=new Ut(30,1,.005,10),this.camera.position.set(0,go.y,go.dist),this.controls=new pR(this.camera,this.renderer.domElement),this.controls.target.set(0,go.y,0),this.controls.enableDamping=!0,this.controls.minDistance=.08,this.controls.maxDistance=.9,this.controls.enablePan=!1,this.controls.minPolarAngle=Math.PI/2-.35,this.controls.maxPolarAngle=Math.PI/2+.2,this.controls.addEventListener("start",()=>{this.tween=null,this.giroRestante=0}),this.scene.add(this.raizBoneco),this.squish=new gC({renderer:this.renderer,camera:this.camera,getTarget:()=>this.raizBoneco}),this.observer=new ResizeObserver(()=>this.redimensionar()),this.observer.observe(e),this.redimensionar();const n=new w;this.renderer.setAnimationLoop(()=>{const o=this.clock.getDelta(),s=this.tween;if(s){const r=1-Math.exp(-o*6);this.controls.target.lerp(s.target,r),n.copy(this.camera.position).sub(this.controls.target);const a=Rs.lerp(n.length(),s.dist,r);this.camera.position.copy(this.controls.target).add(n.setLength(a)),this.controls.target.distanceTo(s.target)<1e-4&&Math.abs(a-s.dist)<1e-4&&(this.tween=null)}if(this.giroRestante){let r=this.giroRestante*(1-Math.exp(-o*8));Math.abs(this.giroRestante)<.001&&(r=this.giroRestante),this.giroRestante-=r,n.copy(this.camera.position).sub(this.controls.target).applyAxisAngle(GC,r),this.camera.position.copy(this.controls.target).add(n)}this.animarIndicadores(o),this.squish.update(o),this.controls.update(),this.renderer.render(this.scene,this.camera)})}redimensionar(){const e=this.el.clientWidth,t=this.el.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}async carregarCorpo(e,t){const n=await Nl(e,{renderer:this.renderer,raiz:this.raizBoneco});ds(n,t),this.corpo=n,this.raizBoneco.add(n.grupo),this.gaiola=CC(n.grupo)}get corpoPronto(){return this.corpo!==null}async sincronizar(e,t,n){this.desejados=new Set(e);for(const[o,s]of this.instancias)!this.desejados.has(o)&&s.grupo.parent&&this.raizBoneco.remove(s.grupo);await Promise.all(e.map(async o=>{let s=this.instancias.get(o);if(!s){if(this.emCarga.has(o))return;const r=n(o);if(!r)return;this.emCarga.add(o),this.eventos.aoCarregar(o,!0),this.mostrarCarga(o,r);try{s=await Nl(r,{renderer:this.renderer,raiz:this.raizBoneco});const a=t(o);ds(s,a.cor,a.detalhe),this.instancias.set(o,s)}catch(a){this.encerrarCarga(o),this.emCarga.delete(o),this.eventos.aoCarregar(o,!1),this.eventos.aoErro(o,a);return}this.encerrarCarga(o),this.emCarga.delete(o),this.eventos.aoCarregar(o,!1)}this.desejados.has(o)&&!s.grupo.parent&&this.raizBoneco.add(s.grupo)})),this.ajustarCamadas()}ultimoAjuste=null;ajusteAtivo=!0;ajustarCamadas(){const e=[...this.instancias.values()].filter(t=>t.grupo.parent===this.raizBoneco);this.ultimoAjuste=HC(e,this.ajusteAtivo)}mostrarCarga(e,t){if(!this.gaiola||this.indicadores.has(e))return;const n=new IC(this.gaiola,t.manifesto.categoria);this.indicadores.set(e,n),this.scene.add(n.objeto)}encerrarCarga(e){const t=this.indicadores.get(e);t&&(this.indicadores.delete(e),t.terminar(),this.saindo.push(t))}animarIndicadores(e){for(const t of this.indicadores.values())t.atualizar(e);for(let t=this.saindo.length-1;t>=0;t--){const n=this.saindo[t];n.atualizar(e)||(this.scene.remove(n.objeto),n.descartar(),this.saindo.splice(t,1))}}pintarPeca(e,t){const n=this.instancias.get(e);n&&ds(n,t.cor,t.detalhe)}definirPele(e){this.corpo&&ds(this.corpo,e)}girar(e){this.tween=null,this.giroRestante-=e*VC}recentrar(){this.giroRestante=0;const e=new w(0,0,1).multiplyScalar(this.camera.position.distanceTo(this.controls.target));this.camera.position.copy(this.controls.target).add(e),this.tween={target:new w(0,go.y,0),dist:go.dist}}destruir(){this.renderer.setAnimationLoop(null),this.observer.disconnect(),this.squish.dispose(),this.controls.dispose();for(const e of[...this.indicadores.values(),...this.saindo])e.descartar();this.renderer.dispose(),this.renderer.domElement.remove()}}const XC=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});let zt=null;const jC=_a({name:"PanelModelViewer",data(){return{estadoCorpo:"carregando"}},computed:{...Ka(Dn,["corpo","porId"]),...Ka(Ns,["idsSelecionados","cores","coresDetalhe","pele","carregando","erro","total","corDe","corDetalheDe"]),totalTxt(){return XC.format(this.total)}},watch:{idsSelecionados(){this.sincronizar()},cores:{deep:!0,handler(){this.repintar()}},coresDetalhe:{deep:!0,handler(){this.repintar()}},pele(i){zt?.definirPele(i)},carregando:{deep:!0,handler(){this.atualizarPronto()}}},created(){const i=Dn(),e=i.carregado;i.carregar(),e||Ns().iniciar()},async mounted(){window.__ready=!1;const i=Ns(),e=Dn();try{if(zt=new $C(this.$refs.viewer,{aoCarregar:(t,n)=>i.marcarCarregando(t,n),aoErro:(t,n)=>{const o=e.porId(t)?.manifesto.nome??t;console.error(`[palco] falha ao carregar ${t}:`,n),i.tirar(t),i.mostrarErro(`Não foi possível carregar “${o}”.`)}}),window.__app={montagem:i,catalogo:e,palco:zt},!this.corpo)throw new Error("sem pacote de corpo");await zt.carregarCorpo(this.corpo,this.pele),zt.definirPele(this.pele),this.estadoCorpo="pronto"}catch(t){console.error("[palco] falha ao carregar o boneco:",t),this.estadoCorpo="erro";return}await this.sincronizar()},unmounted(){zt?.destruir(),zt=null},methods:{coresDe(i){return{cor:this.corDe(i),detalhe:this.corDetalheDe(i)}},repintar(){for(const i of this.idsSelecionados)zt?.pintarPeca(i,this.coresDe(i))},async sincronizar(){!zt||this.estadoCorpo!=="pronto"||(await zt.sincronizar(this.idsSelecionados,i=>this.coresDe(i),i=>this.porId(i)),this.atualizarPronto())},atualizarPronto(){const i=this.idsSelecionados;window.__ready=this.estadoCorpo==="pronto"&&this.carregando.length===0&&!!zt&&i.every(e=>zt?.instancias.get(e)?.grupo.parent)},recentrar(){zt?.recentrar()},girar(i){zt?.girar(i)}}}),qC={ref:"viewer",class:"viewer"},YC={class:"pill tools"},KC={class:"pill total"},ZC={key:0,class:"pill loading"},JC={key:1,class:"pill progress"},QC={key:2,class:"pill erro",role:"alert"};function eL(i,e,t,n,o,s){return Z(),Xe("main",qC,[re("div",YC,[re("button",{title:"Voltar à vista de frente",onClick:e[0]||(e[0]=r=>i.recentrar())}," Recentrar ")]),re("button",{class:"seta esquerda",type:"button",title:"Girar para a esquerda","aria-label":"Girar o boneco para a esquerda",onClick:e[1]||(e[1]=r=>i.girar(-1))},[...e[3]||(e[3]=[re("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},[re("path",{d:"M15 5l-7 7 7 7"})],-1)])]),re("button",{class:"seta direita",type:"button",title:"Girar para a direita","aria-label":"Girar o boneco para a direita",onClick:e[2]||(e[2]=r=>i.girar(1))},[...e[4]||(e[4]=[re("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},[re("path",{d:"M9 5l7 7-7 7"})],-1)])]),re("div",KC,[e[5]||(e[5]=ku(" Total ",-1)),re("b",null,yo(i.totalTxt),1)]),i.estadoCorpo!=="pronto"?(Z(),Xe("div",ZC,yo(i.estadoCorpo==="erro"?"Não foi possível carregar o boneco. Recarregue a página.":"Carregando o boneco…"),1)):oe("",!0),i.carregando.length>0?(Z(),Xe("div",JC," Carregando peça… ")):oe("",!0),i.erro?(Z(),Xe("div",QC,yo(i.erro),1)):oe("",!0),e[6]||(e[6]=re("div",{class:"pill notice"}," ⓘ Prévia ilustrativa. As cores reais seguem a cartela de fios. Clique no boneco para apertar. ",-1))],512)}const tL=ga(jC,[["render",eL],["__scopeId","data-v-7a89a886"]]),Ln=[{slug:"branco",publishedAt:1792250746054,createdAt:1792250746055,updatedAt:1792270052715,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8001,name:"Branco",img:Ku,color:"#d0ccd1",hue:"neutro"},{slug:"glacial",publishedAt:1792252152148,createdAt:1792252152148,updatedAt:1792270065148,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8013,name:"Glacial",img:Zu,color:"#c4c4d1",hue:"neutro"},{slug:"aco",publishedAt:1792252176193,createdAt:1792252176195,updatedAt:1792270038757,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8797,name:"Aço",img:Ju,color:"#7d717a",hue:"neutro"},{slug:"matrix",publishedAt:1792252187579,createdAt:1792252187581,updatedAt:1792270075439,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8069,name:"Matrix",img:Qu,color:"#474747",hue:"neutro"},{slug:"preto",publishedAt:1792252195876,createdAt:1792252195878,updatedAt:1792270082549,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8990,name:"Preto",img:ed,color:"#151217",hue:"neutro"},{slug:"brownie",publishedAt:1792251294400,createdAt:1792251294401,updatedAt:1792270093921,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7400,name:"Brownie",img:td,color:"#483124",hue:"neutro"},{slug:"castor",publishedAt:1792251250354,createdAt:1792251250356,updatedAt:1792270106030,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7603,name:"Castor",img:nd,color:"#5e483c",hue:"neutro"},{slug:"lenha",publishedAt:1792251260990,createdAt:1792251260992,updatedAt:1792270119520,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7713,name:"Lenha",img:id,color:"#6c4f3c",hue:"neutro"},{slug:"craft",publishedAt:1792251315237,createdAt:1792251315238,updatedAt:1792270134818,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7148,name:"Craft",img:od,color:"#805f42",hue:"neutro"},{slug:"pedra-quente",publishedAt:1792251238512,createdAt:1792251238514,updatedAt:1792270151450,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7066,name:"Pedra Quente",img:sd,color:"#6e6257",hue:"neutro"},{slug:"pedreira",publishedAt:1792252161851,createdAt:1792252161852,updatedAt:1792270161754,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8008,name:"Pedreira",img:rd,color:"#c3b8be",hue:"neutro"},{slug:"natural",publishedAt:1792250783740,createdAt:1792250783742,updatedAt:1792270170570,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:20,name:"Natural",img:ad,color:"#e9dacb",hue:"neutro"},{slug:"creme",publishedAt:1792251365698,createdAt:1792251365700,updatedAt:1792270180836,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:1112,name:"Creme",img:nf,color:"#ebcb8e",hue:"amarelo"},{slug:"mostarda",publishedAt:1792251340192,createdAt:1792251340193,updatedAt:1792270192610,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7030,name:"Mostarda",img:cd,color:"#daa754",hue:"amarelo"},{slug:"amarelo-candy",publishedAt:1792251377960,createdAt:1792251377962,updatedAt:1792270203838,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:1730,name:"Amarelo Candy",img:ld,color:"#eadb70",hue:"amarelo"},{slug:"solar",publishedAt:1792251387962,createdAt:1792251387964,updatedAt:1792270214183,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:1317,name:"Solar",img:ud,color:"#e9b43e",hue:"amarelo"},{slug:"magnolia",publishedAt:1792251399060,createdAt:1792251399062,updatedAt:1792270230578,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:1205,name:"Magnólia",img:dd,color:"#f4d26b",hue:"amarelo"},{slug:"canario",publishedAt:1792251408068,createdAt:1792251408069,updatedAt:1792270252479,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:1289,name:"Canário",img:sf,color:"#fdd305",hue:"amarelo"},{slug:"gema",publishedAt:1792251416708,createdAt:1792251416711,updatedAt:1792270263511,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4146,name:"Gema",img:hd,color:"#d0852a",hue:"amarelo"},{slug:"dark-cheddar",publishedAt:1792251427942,createdAt:1792251427944,updatedAt:1792270270508,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4131,name:"Dark Cheddar",img:fd,color:"#a65d08",hue:"amarelo"},{slug:"doce-de-leite",publishedAt:1792251330248,createdAt:1792251330249,updatedAt:1792270276583,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7077,name:"Doce de Leite",img:pd,color:"#876628",hue:"amarelo"},{slug:"caramelito",publishedAt:1792251349496,createdAt:1792251349497,updatedAt:1792270285466,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7076,name:"Caramelito",img:Wu,color:"#ad8c5d",hue:"amarelo"},{slug:"centeio",publishedAt:1792251357769,createdAt:1792251357770,updatedAt:1792270291827,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7072,name:"Centeio",img:md,color:"#b9a782",hue:"amarelo"},{slug:"porcelana",publishedAt:1792251083407,createdAt:1792251083410,updatedAt:1792270301162,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7564,name:"Porcelana",img:$u,color:"#eec6a7",hue:"laranja"},{slug:"peach-fuzz",publishedAt:1792251669228,createdAt:1792251669230,updatedAt:1792270309337,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4224,name:"Peach Fuzz",img:_d,color:"#f9c09f",hue:"laranja"},{slug:"sopro",publishedAt:1792251678808,createdAt:1792251678810,updatedAt:1792270316597,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3047,name:"Sopro",img:gd,color:"#e8bfac",hue:"laranja"},{slug:"chantilly",publishedAt:1792251100654,createdAt:1792251100656,updatedAt:1792270327846,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7563,name:"Chantilly",img:bd,color:"#e9c0b1",hue:"laranja"},{slug:"amendoa",publishedAt:1792251208929,createdAt:1792251208931,updatedAt:1792270364572,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7650,name:"Amêndoa",img:Xu,color:"#e4b8a6",hue:"laranja"},{slug:"tropicalia",publishedAt:1792251476573,createdAt:1792251476574,updatedAt:1792270376059,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4171,name:"Tropicália",img:vd,color:"#e5a288",hue:"laranja"},{slug:"dalia",publishedAt:1792251484984,createdAt:1792251484985,updatedAt:1792270386195,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4168,name:"Dália",img:xd,color:"#dc8968",hue:"laranja"},{slug:"laranja",publishedAt:1792251494539,createdAt:1792251494540,updatedAt:1792270401063,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4456,name:"Laranja",img:rf,color:"#f78923",hue:"laranja"},{slug:"tangerina",publishedAt:1792251505122,createdAt:1792251505124,updatedAt:1792270412409,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4445,name:"Tangerina",img:Md,color:"#dd591a",hue:"laranja"},{slug:"tamara",publishedAt:1792251303872,createdAt:1792251303874,updatedAt:1792270418394,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7220,name:"Tâmara",img:yd,color:"#a85538",hue:"laranja"},{slug:"castanha",publishedAt:1792251222316,createdAt:1792251222318,updatedAt:1792270432383,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7650,name:"Castanha",img:of,color:"#ce946d",hue:"laranja"},{slug:"tafeta",publishedAt:1792251461745,createdAt:1792251461747,updatedAt:1792270441189,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4093,name:"Tafetá",img:Sd,color:"#cb776b",hue:"vermelho"},{slug:"rum",publishedAt:1792251436976,createdAt:1792251436978,updatedAt:1792270452428,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4095,name:"Rum",img:Ed,color:"#cf3a30",hue:"vermelho"},{slug:"tijolo",publishedAt:1792251447555,createdAt:1792251447557,updatedAt:1792270460994,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4448,name:"Tijolo",img:Ad,color:"#f8452d",hue:"vermelho"},{slug:"cereja",publishedAt:1792251514575,createdAt:1792251514576,updatedAt:1792270469408,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3583,name:"Cereja",img:Td,color:"#a11c23",hue:"vermelho"},{slug:"vermelho-circulo",publishedAt:1792251524702,createdAt:1792251524704,updatedAt:1792270477898,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3402,name:"Vermelho Círculo",img:wd,color:"#811e2b",hue:"vermelho"},{slug:"cacau",publishedAt:1792251273383,createdAt:1792251273385,updatedAt:1792270490207,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7567,name:"Cacau",img:ju,color:"#883034",hue:"vermelho"},{slug:"brigadeiro",publishedAt:1792251285974,createdAt:1792251285977,updatedAt:1792270496757,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7569,name:"Brigadeiro",img:Rd,color:"#5c2423",hue:"vermelho"},{slug:"carmim",publishedAt:1792251535012,createdAt:1792251535014,updatedAt:1792270512795,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3528,name:"Carmim",img:Cd,color:"#ab1333",hue:"vermelho"},{slug:"pimenta-rosa",publishedAt:1792251547534,createdAt:1792251547535,updatedAt:1792270523646,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7078,name:"Pimenta Rosa",img:Ld,color:"#722d2a",hue:"vermelho"},{slug:"rubi",publishedAt:1792251566766,createdAt:1792251566768,updatedAt:1792270532194,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3611,name:"Rubi",img:Pd,color:"#7f0e26",hue:"vermelho"},{slug:"marsala",publishedAt:1792251557987,createdAt:1792251557989,updatedAt:1792270542694,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:7136,name:"Marsala",img:Id,color:"#8a1126",hue:"vermelho"},{slug:"gardenia",publishedAt:1792250795846,createdAt:1792250795848,updatedAt:1792270558588,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3061,name:"Gardênia",img:Dd,color:"#f8e8df",hue:"rosa"},{slug:"off-white",publishedAt:1792250770584,createdAt:1792250770585,updatedAt:1792270574040,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8176,name:"Off white",img:Nd,color:"#d0bfb5",hue:"rosa"},{slug:"macadamia",publishedAt:1792251660379,createdAt:1792251660381,updatedAt:1792270588728,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3148,name:"Macadâmia",img:Ud,color:"#efbeba",hue:"rosa"},{slug:"organza",publishedAt:1792251688793,createdAt:1792251688796,updatedAt:1792270600073,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4092,name:"Organza",img:Od,color:"#fcb1ab",hue:"rosa"},{slug:"cetim",publishedAt:1792251698132,createdAt:1792251698133,updatedAt:1792270609347,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:4094,name:"Cetim",img:Fd,color:"#ee8677",hue:"rosa"},{slug:"quartzo",publishedAt:1792251639950,createdAt:1792251639951,updatedAt:1792270625425,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3077,name:"Quartzo",img:Bd,color:"#f2a9c5",hue:"rosa"},{slug:"chiclete",publishedAt:1792251630735,createdAt:1792251630737,updatedAt:1792270665576,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3131,name:"Chiclete",img:kd,color:"#f999c4",hue:"rosa"},{slug:"pitaya",publishedAt:1792251622399,createdAt:1792251622400,updatedAt:1792270676994,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3182,name:"Pitaya",img:zd,color:"#f97db5",hue:"rosa"},{slug:"rosa-pink",publishedAt:1792251592247,createdAt:1792251592249,updatedAt:1792270686993,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3754,name:"Rosa Pink",img:Hd,color:"#a12b5a",hue:"rosa"},{slug:"tulipa",publishedAt:1792251602256,createdAt:1792251602258,updatedAt:1792270716269,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3334,name:"Tulipa",img:Vd,color:"#f8295f",hue:"rosa"},{slug:"flamingo",publishedAt:1792251611990,createdAt:1792251611992,updatedAt:1792270725710,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3048,name:"Flamingo",img:Gd,color:"#c8606f",hue:"rosa"},{slug:"roseira",publishedAt:1792251719005,createdAt:1792251719007,updatedAt:1792270734607,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3157,name:"Roseira",img:Wd,color:"#d04e6c",hue:"rosa"},{slug:"viva-magenta",publishedAt:1792251580457,createdAt:1792251580458,updatedAt:1792270744e3,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3951,name:"Viva Magenta",img:$d,color:"#8e2e45",hue:"rosa"},{slug:"vinho",publishedAt:1792251843112,createdAt:1792251843114,updatedAt:1792270751791,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3154,name:"Vinho",img:Xd,color:"#780f32",hue:"rosa"},{slug:"docura",publishedAt:1792251650077,createdAt:1792251650079,updatedAt:1792270761922,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3046,name:"Doçura",img:jd,color:"#eab9d1",hue:"roxo"},{slug:"camafeu",publishedAt:1792251709362,createdAt:1792251709363,updatedAt:1792270768977,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:3201,name:"Camafeu",img:qd,color:"#c590a2",hue:"roxo"},{slug:"violeta",publishedAt:1792251727874,createdAt:1792251727875,updatedAt:1792270781974,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6161,name:"Violeta",img:Yd,color:"#d98dbd",hue:"roxo"},{slug:"alfazema",publishedAt:1792251833660,createdAt:1792251833663,updatedAt:1792270792968,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6614,name:"Alfazema",img:Kd,color:"#9a277e",hue:"roxo"},{slug:"malva",publishedAt:1792251737826,createdAt:1792251737827,updatedAt:1792270804530,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6802,name:"Malva",img:Zd,color:"#c694b5",hue:"roxo"},{slug:"lilas-candy",publishedAt:1792251752603,createdAt:1792251752604,updatedAt:1792270812016,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6006,name:"Lilás Candy",img:Jd,color:"#bcacc9",hue:"roxo"},{slug:"azaleia",publishedAt:1792251771380,createdAt:1792251771381,updatedAt:1792270820874,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6399,name:"Azaleia",img:Qd,color:"#7a689a",hue:"roxo"},{slug:"realeza",publishedAt:1792251782445,createdAt:1792251782446,updatedAt:1792270832245,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6034,name:"Realeza",img:eh,color:"#a485b9",hue:"roxo"},{slug:"mistico",publishedAt:1792251854878,createdAt:1792251854879,updatedAt:1792270848396,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6030,name:"Místico",img:th,color:"#401c46",hue:"roxo"},{slug:"tecno",publishedAt:1792251862740,createdAt:1792251862741,updatedAt:1792270859392,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:6201,name:"Tecno",img:nh,color:"#665084",hue:"roxo"},{slug:"nautico",publishedAt:1792251872365,createdAt:1792251872367,updatedAt:1792270867993,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2931,name:"Náutico",img:ih,color:"#3b4c86",hue:"azul"},{slug:"aquario",publishedAt:1792251890932,createdAt:1792251890934,updatedAt:1792270876746,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2927,name:"Aquário",img:oh,color:"#97adcf",hue:"azul"},{slug:"azul-candy",publishedAt:1792251899363,createdAt:1792251899365,updatedAt:1792270884986,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2012,name:"Azul Candy",img:sh,color:"#8fb2d3",hue:"azul"},{slug:"hortensia",publishedAt:1792251914454,createdAt:1792251914455,updatedAt:1792270895757,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2137,name:"Hortênsia",img:rh,color:"#93c2f7",hue:"azul"},{slug:"acqua",publishedAt:1792251924102,createdAt:1792251924102,updatedAt:1792270902788,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2500,name:"Acqua",img:ah,color:"#547eca",hue:"azul"},{slug:"planeta",publishedAt:1792251945406,createdAt:1792251945407,updatedAt:1792270919480,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2618,name:"Planeta",img:ch,color:"#1066aa",hue:"azul"},{slug:"azul-bic",publishedAt:1792251954062,createdAt:1792251954063,updatedAt:1792270929122,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2829,name:"Azul Bic",img:af,color:"#1226a1",hue:"azul"},{slug:"marinheiro",publishedAt:1792251963825,createdAt:1792251963825,updatedAt:1792270942487,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2745,name:"Marinheiro",img:lh,color:"#27325c",hue:"azul"},{slug:"anil-profundo",publishedAt:1792251973391,createdAt:1792251973392,updatedAt:1792270949466,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2856,name:"Anil Profundo",img:uh,color:"#101145",hue:"azul"},{slug:"petroleo",publishedAt:1792251986648,createdAt:1792251986650,updatedAt:1792270963832,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5073,name:"Petróleo",img:dh,color:"#1f2d3c",hue:"azul"},{slug:"verde-candy",publishedAt:1792266847651,createdAt:1792252049877,updatedAt:1792270970596,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2204,name:"Verde Candy",img:hh,color:"#aec6b3",hue:"turquesa"},{slug:"neo-mint",publishedAt:1792252038213,createdAt:1792252038213,updatedAt:1792270977983,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5743,name:"Neo Mint",img:fh,color:"#acdbcc",hue:"turquesa"},{slug:"tiffany",publishedAt:1792252019380,createdAt:1792252019381,updatedAt:1792270990171,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5669,name:"Tiffany",img:ph,color:"#09b8b1",hue:"turquesa"},{slug:"turquesa",publishedAt:1792251933951,createdAt:1792251933952,updatedAt:1792270996602,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2194,name:"Turquesa",img:cf,color:"#20abc4",hue:"turquesa"},{slug:"netuno",publishedAt:1792251880553,createdAt:1792251880555,updatedAt:1792271006988,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:2930,name:"Netuno",img:mh,color:"#1f769d",hue:"turquesa"},{slug:"celeste",publishedAt:1792252026654,createdAt:1792252026656,updatedAt:1792271017830,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5091,name:"Celeste",img:_h,color:"#7fb5ac",hue:"turquesa"},{slug:"periquito",publishedAt:1792252059536,createdAt:1792252059536,updatedAt:1792271028597,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5741,name:"Periquito",img:gh,color:"#98a76c",hue:"verde"},{slug:"limonada",publishedAt:1792252068480,createdAt:1792252068481,updatedAt:1792271041062,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5806,name:"Limonada",img:bh,color:"#b0be48",hue:"verde"},{slug:"verde-limao",publishedAt:1792252080317,createdAt:1792252080318,updatedAt:1792271048965,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5583,name:"Verde Limão",img:vh,color:"#c8d718",hue:"verde"},{slug:"pistache",publishedAt:1792252100052,createdAt:1792252100053,updatedAt:1792271059430,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5800,name:"Pistache",img:xh,color:"#a0af18",hue:"verde"},{slug:"greenery",publishedAt:1792252090883,createdAt:1792252090884,updatedAt:1792271070973,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5203,name:"Greenery",img:Mh,color:"#5f7a23",hue:"verde"},{slug:"bandeira",publishedAt:1792252010635,createdAt:1792252010637,updatedAt:1792271078756,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5767,name:"Bandeira",img:yh,color:"#076b2e",hue:"verde"},{slug:"hera",publishedAt:1792251993719,createdAt:1792251993721,updatedAt:1792271096707,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5076,name:"Hera",img:Sh,color:"#07563c",hue:"verde"},{slug:"musgo",publishedAt:1792252002554,createdAt:1792252002555,updatedAt:1792271105157,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5398,name:"Musgo",img:Eh,color:"#184831",hue:"verde"},{slug:"selva",publishedAt:1792252112367,createdAt:1792252112368,updatedAt:1792271116178,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5089,name:"Selva",img:Ah,color:"#485211",hue:"verde"},{slug:"militar",publishedAt:1792252121023,createdAt:1792252121024,updatedAt:1792271132166,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5368,name:"Militar",img:Th,color:"#57614e",hue:"verde"},{slug:"eco",publishedAt:1792252131144,createdAt:1792252131145,updatedAt:1792271141435,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5083,name:"Eco",img:wh,color:"#657254",hue:"verde"},{slug:"eucalipto",publishedAt:1792252143755,createdAt:1792252143756,updatedAt:1792271148504,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:5745,name:"Eucalipto",img:Rh,color:"#80917a",hue:"verde"},{slug:"indigo",publishedAt:1792252209577,createdAt:1792252209578,updatedAt:1792271159190,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:8736,name:"Índigo",img:Ch,color:"#25293d",hue:"mix"},{slug:"lhama",publishedAt:1792252218563,createdAt:1792252218564,updatedAt:1792271173082,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:9278,name:"Lhama",img:Lh,color:"#bd4553",hue:"mix"},{slug:"unicornio",publishedAt:1792252229514,createdAt:1792252229515,updatedAt:1792271181675,publishedLabel:"17 de outubro de 2026",createdLabel:"17 de outubro de 2026",updatedLabel:"17 de outubro de 2026",code:9534,name:"Unicórnio",img:Ph,color:"#608fb1",hue:"mix"}],nL=_a({name:"MonteOSeuView2",components:{ButtonIcon:Hu,ButtonPrimary:zu,LogoLogoHorizontal:Gu,OptionColor:qu,PanelCloset:jf,PanelModelViewer:tL,SvgIcon:Fl},setup(){const i=Vu(),e=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="neutro")),t=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase().includes("amarelo"))),n=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase().includes("laranja"))),o=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="vermelho")),s=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="rosa")),r=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="roxo")),a=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="azul")),c=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="turquesa")),l=Mn(()=>[...Ln].filter(u=>(u.hue??"").trim().toLowerCase()==="verde"));return{customAmigurumiStore:i,list:e,list2:t,list3:n,list4:o,list5:s,list6:r,list7:a,list8:c,list9:l}},methods:{onOptionColorClick(i){this.customAmigurumiStore.color=String(i)}}}),iL={class:"monte-o-seu"},oL={class:"global-header"},sL={class:"inner-container"},rL={class:"frame-252"},aL={class:"frame-253"},cL={class:"frame-255"},lL={class:"frame-253-2"},uL={class:"frame-255-2"},dL={class:"frame-253-3"},hL={class:"frame-255-3"},fL={class:"frame-257"},pL={class:"main"},mL={class:"inner-container-2"},_L={class:"panel-color-picker","aria-label":"Cor do cabelo"},gL={class:"colors-header"},bL={class:"texts-container"},vL={class:"row"},xL={class:"frame-247"},ML={class:"hue-container-neutro"},yL={class:"grid-colors"},SL={class:"hue-container-amarelo"},EL={class:"grid-colors-2"},AL={class:"hue-container-laranja"},TL={class:"grid-colors-3"},wL={class:"hue-container-vermelho"},RL={class:"grid-colors-4"},CL={class:"hue-container-rosa"},LL={class:"grid-colors-5"},PL={class:"hue-container-roxo"},IL={class:"grid-colors-6"},DL={class:"hue-container-azul"},NL={class:"grid-colors-7"},UL={class:"hue-container-turquesa"},OL={class:"grid-colors-8"},FL={class:"hue-container-verde"},BL={class:"grid-colors-9"};function kL(i,e,t,n,o,s){const r=un("LogoLogoHorizontal"),a=un("SvgIcon"),c=un("ButtonIcon"),l=un("ButtonPrimary"),u=un("PanelCloset"),d=un("PanelModelViewer"),h=un("OptionColor");return Z(),Xe("div",iL,[re("header",oL,[re("div",sL,[K(r,{class:"logo-horizontal"}),re("div",rL,[re("div",aL,[re("div",cL,[K(a,{class:"icon-ic-body",title:"icon-ic-body","aria-hidden":"true"})]),e[0]||(e[0]=re("p",{class:"text-1-montar"},"1. MONTAR",-1))]),e[3]||(e[3]=re("div",{class:"frame-256"},[re("div",{class:"frame-254"})],-1)),re("div",lL,[re("div",uL,[K(a,{class:"icon-ic-edit",title:"icon-ic-edit","aria-hidden":"true"})]),e[1]||(e[1]=re("p",{class:"text-2-detalhar"},"2. DETALHAR",-1))]),e[4]||(e[4]=re("div",{class:"frame-256-2"},[re("div",{class:"frame-254-2"})],-1)),re("div",dL,[re("div",hL,[K(a,{class:"icon-ic-bag",title:"icon-ic-bag","aria-hidden":"true"})]),e[2]||(e[2]=re("p",{class:"text-3-revisar"},"3. REVISAR",-1))])]),re("div",fL,[K(c,{class:"button-icon",icon:"icon-ic-info"}),K(l,{class:"button-adicionar-a-sacola","has-icon":"right",text:"Próximo",as:"RouterLink",to:"/sacola"},{icon:ne(()=>[K(a,{class:"button-adicionar-a-sacola-icon",title:"icon-ic-arrow-right"})]),_:1})])])]),re("main",pL,[re("div",mL,[K(u,{class:"panel-closet"}),K(d,{class:"panel-model-viewer"}),re("section",_L,[re("div",gL,[re("div",bL,[re("div",vL,[K(a,{class:"icon-ic-color",title:"icon-ic-color","aria-hidden":"true"}),e[5]||(e[5]=re("h2",{class:"cor-do-cabelo"},"Cor do cabelo",-1))])])]),re("div",xL,[re("div",ML,[e[6]||(e[6]=re("h2",{class:"neutros"},"NEUTROS",-1)),re("div",yL,[(Z(!0),Xe(yn,null,Sn(i.list,p=>(Z(),ge(h,{class:"option-color",key:p.slug,color:p.color??void 0,img:p.img??void 0,title:p.name??"",selected:String(i.customAmigurumiStore.color).trim().toLowerCase()!==""&&String(i.customAmigurumiStore.color).trim().toLowerCase()===String(p.color??"").trim().toLowerCase()?"true":"false",onClick:_=>i.onOptionColorClick(String(p.color??""))},null,8,["color","img","title","selected","onClick"]))),128))])]),re("div",SL,[e[7]||(e[7]=re("p",{class:"hue-title"},"AMARELO",-1)),re("div",EL,[(Z(!0),Xe(yn,null,Sn(i.list2,p=>(Z(),ge(h,{class:"option-color-2",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",AL,[e[8]||(e[8]=re("p",{class:"hue-title-2"},"LARANJA",-1)),re("div",TL,[(Z(!0),Xe(yn,null,Sn(i.list3,p=>(Z(),ge(h,{class:"option-color-3",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",wL,[e[9]||(e[9]=re("p",{class:"hue-title-3"},"VERMELHO",-1)),re("div",RL,[(Z(!0),Xe(yn,null,Sn(i.list4,p=>(Z(),ge(h,{class:"option-color-4",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",CL,[e[10]||(e[10]=re("p",{class:"hue-title-4"},"ROSA",-1)),re("div",LL,[(Z(!0),Xe(yn,null,Sn(i.list5,p=>(Z(),ge(h,{class:"option-color-5",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",PL,[e[11]||(e[11]=re("p",{class:"hue-title-5"},"ROXO",-1)),re("div",IL,[(Z(!0),Xe(yn,null,Sn(i.list6,p=>(Z(),ge(h,{class:"option-color-6",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",DL,[e[12]||(e[12]=re("p",{class:"hue-title-6"},"AZUL",-1)),re("div",NL,[(Z(!0),Xe(yn,null,Sn(i.list7,p=>(Z(),ge(h,{class:"option-color-7",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",UL,[e[13]||(e[13]=re("p",{class:"hue-title-7"},"TURQUESA",-1)),re("div",OL,[(Z(!0),Xe(yn,null,Sn(i.list8,p=>(Z(),ge(h,{class:"option-color-8",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])]),re("div",FL,[e[14]||(e[14]=re("p",{class:"hue-title-8"},"VERDE",-1)),re("div",BL,[(Z(!0),Xe(yn,null,Sn(i.list9,p=>(Z(),ge(h,{class:"option-color-9",selected:"false",key:p.slug,img:p.img??void 0},null,8,["img"]))),128))])])])])])])])}const nP=ga(nL,[["render",kL],["__scopeId","data-v-5d1e9c67"]]);export{nP as default};
