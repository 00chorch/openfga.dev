"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8705],{12963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),o=a(5270);const r={sidebar_position:3,slug:"/interacting/managing-user-access",description:"Granting a user access to a particular object"},s="Managing User Access",l={unversionedId:"content/interacting/managing-user-access",id:"content/interacting/managing-user-access",title:"Managing User Access",description:"Granting a user access to a particular object",source:"@site/docs/content/interacting/managing-user-access.mdx",sourceDirName:"content/interacting",slug:"/interacting/managing-user-access",permalink:"/docs/interacting/managing-user-access",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/managing-user-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/interacting/managing-user-access",description:"Granting a user access to a particular object"},sidebar:"docs",previous:{title:"Interacting with the API",permalink:"/docs/interacting"},next:{title:"Managing Group Access",permalink:"/docs/interacting/managing-group-access"}},c={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Adding Direct Relationship",id:"01-adding-direct-relationship",level:3},{value:"02. Removing Direct Relationship",id:"02-removing-direct-relationship",level:3},{value:"Related Sections",id:"related-sections",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-user-access"},"Managing User Access"),(0,i.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you will learn how to grant a ",(0,i.kt)(o.uH,{section:"what-is-a-user",linkName:"user",mdxType:"ProductConcept"})," access to a particular ",(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),"."),(0,i.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"Granting access with a ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," is a core part of ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"}),". Without any relationship tuples, any ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"}))," will fail. You should use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"authorization model")," to represent what ",(0,i.kt)("strong",{parentName:"li"},"relation"),"s are possible between the users and objects in your system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"relationship tuples")," to represent the facts about the relationships between users and objects in your system."))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,i.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,i.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("p",null,"Assume that you have the following ",(0,i.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,i.kt)("br",null),"\nYou have a ",(0,i.kt)(o.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet")," that can have a ",(0,i.kt)("inlineCode",{parentName:"p"},"reader"),".")),(0,i.kt)(o.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"tweet",relations:{reader:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"user"}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition, you will need to know the following:"),(0,i.kt)("h3",{id:"direct-access"},"Direct Access"),(0,i.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,i.kt)("h3",{id:"-concepts"},(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})))),(0,i.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,i.kt)("h3",{id:"01-adding-direct-relationship"},"01. Adding Direct Relationship"),(0,i.kt)("p",null,"For our application, we will give user Anne the ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship to a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet"),". To do so we add a tuple as follows:"),(0,i.kt)(o.Wz,{relationshipTuples:[{_description:"Anne can read tweet:1",user:"user:anne",relation:"reader",object:"tweet:1"}],mdxType:"RelationshipTuplesViewer"}),(0,i.kt)("p",null,"With the above, we have added a ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/building-blocks/direct-relationships"},(0,i.kt)("strong",{parentName:"a"},"direct")," relationship")," between Anne and ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet:1"),". When we call the Check API to see if Anne has a ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship, ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," will say yes."),(0,i.kt)(o.uT,{user:"user:anne",relation:"reader",object:"tweet:1",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("h3",{id:"02-removing-direct-relationship"},"02. Removing Direct Relationship"),(0,i.kt)("p",null,"Now let's change this so that Anne no longer has a ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship to ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet:1")," by deleting the tuple:"),(0,i.kt)(o.Gb,{deleteRelationshipTuples:[{user:"user:anne",relation:"reader",object:"tweet:1"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("p",null,"With this, we have removed the ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/building-blocks/direct-relationships"},"direct relationship")," between Anne and ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet:1"),". And because our type definition for ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," does not include any other relations, a call to the Check API will now return a negative response."),(0,i.kt)(o.uT,{user:"user:anne",relation:"reader",object:"tweet:1",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(o.$q,{description:"Check the following sections for more on how to manage user access.",relatedLinks:[{title:"Direct Access",description:"Learn about how to model granting user access to an object.",link:"../modeling/direct-access",id:"../modeling/direct-access.mdx"},{title:"Modeling Public Access",description:"Learn about how to model granting public access.",link:"../modeling/public-access",id:"../modeling/public-access"},{title:"How to update relationship tuples",description:"Learn about how to update relationship tuples in SDK.",link:"../getting-started/update-tuples",id:"../getting-started/update-tuples"}],mdxType:"RelatedSection"}))}u.isMDXComponent=!0}}]);