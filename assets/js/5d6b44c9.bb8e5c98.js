"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9435],{44756:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return D},default:function(){return z},frontMatter:function(){return I},metadata:function(){return B},toc:function(){return _}});var r=o(87462),a=o(63366),s=o(67294),i=o(3905),n=o(20407),c=o(67855),u=o(6971),l=o(73686),p=o(91262),h=o(87155),m=o(29359),d=o(85350),f={};function b(e){var t=e.type,o=e.percent,r=void 0!==o&&o,a=(0,u.WV)("rt-osdb-contributors-by-repo-group",f,!1),i=a.data,n=a.loading;return(0,l.pF)("rt-osdb-contributors-by-repo-group",s.createElement(p.Z,null,(function(){var e;return s.createElement(v,{data:null!=(e=null==i?void 0:i.data)?e:[],loading:n,size:24,type:t,percent:r})})),a)}var y=[10,100,1/0],g=["Developers with no more than 10 PRs","Developers with no more than 100 PRs","Developers with more than 100 PRs"];function v(e){var t=e.data,o=e.type,r=e.percent,a=e.loading,i=e.size,n=(0,d.Z)().isDarkTheme,u=function(e){return(0,s.useMemo)((function(){return e.reduce((function(e,t){e[t.repo_group_name]||(e[t.repo_group_name]={contributors:[],totalPrs:0});var o=e[t.repo_group_name];return o.totalPrs+=t.prs,o.contributors.push({contributor:t.contributor,prs:t.prs}),e}),{})}),[e])}(t),l=function(e,t,o){return(0,s.useMemo)((function(){return Object.entries(e).map((function(e){for(var r,a=e[0],s=e[1],i=y.map((function(){return 0})),n=0,u=(0,c.Z)(s.contributors);!(r=u()).done;)for(var l=r.value.prs,p=0;p<y.length;p++)if(l<y[p]){var h="prs"===t?l:1;i[p]+=h,n+=h;break}return[a,n].concat(i.map((function(e){return o?e/n:e})))})).sort((function(e,t){return t[1]-e[1]}))}),[e,t])}(u,o,r),p=(0,s.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0},xAxis:{type:"value",position:"top",name:o,axisLabel:{formatter:r?function(e){return 100*e+"%"}:function(e){return e+" "+o}},max:r?1:void 0},yAxis:{type:"category",data:l.map((function(e){return e[0]})),inverse:!0},series:y.map((function(e,t){return{type:"bar",name:g[t],data:l.map((function(e){return e[t+2]})),stack:"total",emphasis:{focus:"series"},label:r||t!==y.length-1?void 0:{show:!0,position:"right",formatter:function(e){return""+l[e.dataIndex][1]}},tooltip:{valueFormatter:function(e){return r?(100*e).toFixed(1)+"%":e}}}}))}}),[y,l,o]),f=(0,s.useMemo)((function(){return a?400:l.length*(1.5*i)}),[i,a,l]),b=(0,s.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:f,width:"auto",locale:"en"}}),[f]);return s.createElement(h.Z,{showLoading:a,echarts:m,option:p,notMerge:!1,lazyUpdate:!0,theme:n?"dark":"vintage",style:{height:f,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:b})}var k=o(45684),w=o(23599),T=o(37945),C=o(87357),x=o(33810);function P(){var e=(0,d.Z)().isDarkTheme,t=(0,s.useContext)(T.Z),o=t.group,r=t.setGroup,a=(0,s.useCallback)((function(e){r(e.target.value)}),[]);return s.createElement(C.Z,{position:"sticky",sx:{my:2,py:2,top:"var(--ifm-navbar-height)",zIndex:1,backgroundColor:e?"var(--ifm-background-color)":"background.default",borderBottom:"1px solid transparent",borderBottomColor:"divider",textAlign:"right"}},"Try to compare tidb with",s.createElement(k.Z,{autoWidth:!0,value:o,variant:"standard",onChange:a,placeholder:"Select...",sx:{minWidth:100,ml:1}},s.createElement(w.Z,{key:"none",value:void 0},"None"),Object.keys(x.X).map((function(e){return s.createElement(w.Z,{key:e,value:e},e)}))))}var R=["components"],I={title:"Why TiDB is Better",sidebar_class_name:"unlisted"},D=void 0,B={unversionedId:"database/why-tidb-is-better",id:"database/why-tidb-is-better",title:"Why TiDB is Better",description:"const tidbGroup = [41986369, 48833910, 53311716]",source:"@site/docs/database/why-tidb-is-better.mdx",sourceDirName:"database",slug:"/database/why-tidb-is-better",permalink:"/_/database/why-tidb-is-better",editUrl:"https://github.com/pingcap/ossinsight/edit/main/docs/database/why-tidb-is-better.mdx",tags:[],version:"current",frontMatter:{title:"Why TiDB is Better",sidebar_class_name:"unlisted"},sidebar:"tutorialSidebar",previous:{title:"Custom Insights",permalink:"/_/database/history"},next:{title:"JavaScript Framework",permalink:"/_/js-framework/"}},N=[41986369,48833910,53311716],_=[{value:"\u2753 What is tidb",id:"-what-is-tidb",children:[{value:"\u2139\ufe0f  Learn more about TiDB",id:"\u2139\ufe0f--learn-more-about-tidb",children:[],level:4}],level:2},{value:"\ud83d\udc40 Comparison",id:"-comparison",children:[{value:"Stars",id:"stars",children:[{value:"The most starred OSDB repos since 2011 (updated 1 hour ago)",id:"the-most-starred-osdb-repos-since-2011-updated-1-hour-ago",children:[],level:4},{value:"Stargazers from Top 50 Companies in the TiDB repo",id:"stargazers-from-top-50-companies-in-the-tidb-repo",children:[],level:4},{value:"Countries/Regions of stargazers",id:"countriesregions-of-stargazers",children:[],level:4}],level:3},{value:"Issues",id:"issues",children:[{value:"Average time cost from open issue to close",id:"average-time-cost-from-open-issue-to-close",children:[],level:4},{value:"Average time cost from open issue to first response",id:"average-time-cost-from-open-issue-to-first-response",children:[],level:4},{value:"Countries/Regions of Issue Openers",id:"countriesregions-of-issue-openers",children:[],level:4}],level:3},{value:"Pull Requests",id:"pull-requests",children:[{value:"Company of PR Creators about TiDB repository",id:"company-of-pr-creators-about-tidb-repository",children:[],level:4},{value:"Countries/Regions of PR Creators",id:"countriesregions-of-pr-creators",children:[],level:4},{value:"Heat Map of Commits Time about PRs",id:"heat-map-of-commits-time-about-prs",children:[],level:4},{value:"Average time cost from open pull request to close it",id:"average-time-cost-from-open-pull-request-to-close-it",children:[],level:4}],level:3},{value:"Contributors",id:"contributors",children:[{value:"The percentage of different types of contributors in total contributors",id:"the-percentage-of-different-types-of-contributors-in-total-contributors",children:[],level:4},{value:"The percentage of the sum of PRs submitted by different types of contributors in total PRs",id:"the-percentage-of-the-sum-of-prs-submitted-by-different-types-of-contributors-in-total-prs",children:[],level:4}],level:3}],level:2}],q={toc:_};function z(e){var t=e.components,o=(0,a.Z)(e,R);return(0,i.kt)("wrapper",(0,r.Z)({},q,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-what-is-tidb"},"\u2753 What is tidb"),(0,i.kt)("p",null,"TiDB is an open source distributed Hybrid Transactional and Analytical Processing (HTAP) database compatible with the MySQL protocol."),(0,i.kt)("p",null,"Here is a video explaining what TiDB is. You can also check ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/overview"},"TiDB documents")," for more information."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/R7F7vPnaoTY",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h4",{id:"\u2139\ufe0f--learn-more-about-tidb"},"\u2139\ufe0f  Learn more about TiDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source Code: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb"},"https://github.com/pingcap/tidb")),(0,i.kt)("li",{parentName:"ul"},"Official Website: ",(0,i.kt)("a",{parentName:"li",href:"https://en.pingcap.com"},"https://en.pingcap.com")),(0,i.kt)("li",{parentName:"ul"},"Docs: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com"},"https://docs.pingcap.com"))),(0,i.kt)("h2",{id:"-comparison"},"\ud83d\udc40 Comparison"),(0,i.kt)("p",null,"Now we can use TiDB as an example, analyze it in four aspects: stars, issues, PRs and contributors. You can also select any repo in the filter box to compare with it."),(0,i.kt)("h3",{id:"stars"},"Stars"),(0,i.kt)("h4",{id:"the-most-starred-osdb-repos-since-2011-updated-1-hour-ago"},"The most starred OSDB repos since 2011 (updated 1 hour ago)"),(0,i.kt)("p",null,"The number of stars is an important and commonly used metric to measure the popularity of a repository. We sort all database repositories from GitHub and rank them by their accumulated number of stars. "),(0,i.kt)("p",null,"In this bar chart, we can see that TiDB ranks second in the most starred open source database repos since 2011, which is enough to show that it is very popular in the field of open source databases."),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-stars",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"Stars",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"stargazers-from-top-50-companies-in-the-tidb-repo"},"Stargazers from Top 50 Companies in the TiDB repo"),(0,i.kt)("p",null,"We can see which companies (top 50) star the TiDB repo most in this pie chart. Among them, many open source enthusiasts from Chinese Internet giants such as Tencent, Alibaba, and Bytedance expressed their appreciation for TiDB. At the same time, hundreds of developers from Google, Microsoft and Facebook also starred the TiDB repository. It can be seen that TiDB is concerned and welcomed all around the world."),(0,i.kt)(P,{mdxType:"GroupSelect"}),(0,i.kt)(n.h,{chart:"piechart",category:"stars-top-50-company",formatSql:!1,categoryIndex:"company_name",valueIndex:"stargazers",categoryType:"owner",seriesName:"Stargazers",repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"countriesregions-of-stargazers"},"Countries/Regions of stargazers"),(0,i.kt)("p",null,"This map will show you which country or region does stargazers come from. They make an issue to report the problem, or request a new feature."),(0,i.kt)("p",null,"We display the geographic information by all stargazers on the map. They come from 146 countries and regions except for Antarctica. It can be seen that in addition to China (where PingCAP is headquartered), the United States and Europe have gathered the most stargazers, and there are scattered stargazers in other regions. It can also be inferred that TiDB is popular all over the world."),(0,i.kt)(n.h,{chart:"worldmapchart",category:"stars-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"stargazers",effect:!1,size:56,repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"Total number of issues, issue submitters, issues comments, and issue commenters since 2011."),(0,i.kt)("p",null,"Judging from the total number of issues, TiDB repository has a total of 155562 issues(2022-04-06), ranking the top 3 in all open source database repos. We judge the activeness of an open source repository by referring to the number of issues as well. Generally, the higher number of issues means more contributors are involved in a repository, which can presents the active level of it. Therefore, the activity of the TiDB repository can be considered to be at the forefront of the open source database area."),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-issues",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"Issues",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("p",null,"In order to prevent the phenomenon of submitting issues maliciously(only open but not closed), we can also refer to the average opening/closing time and initial response time of issues in open source database repos to make the evaluation."),(0,i.kt)("h4",{id:"average-time-cost-from-open-issue-to-close"},"Average time cost from open issue to close"),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-issue-open-to-close",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"average-time-cost-from-open-issue-to-first-response"},"Average time cost from open issue to first response"),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-issue-open-to-first-responed",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"countriesregions-of-issue-openers"},"Countries/Regions of Issue Openers"),(0,i.kt)("p",null,"This map will show you which country or region issue creators come from. They make an issue to report the problem, or request a new feature."),(0,i.kt)("p",null,"We can see that in addition to China, contributors from 38 countries around the world have submitted issues for the TiDB repository from this map."),(0,i.kt)(n.h,{chart:"worldmapchart",category:"issue-creators-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"Issue openers",effect:!1,size:56,repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("p",null,"Total number of pull requests (PRs), PR creators, PR reviews, and PR reviewers since 2011."),(0,i.kt)("p",null,"In addition to stars and issues, the number of PRs is an important indicator for measuring the activity of repos. The higher number of PRs, are considered as a repository more active basically. In the following bar chart, the total number of PRs of TiDB ranks No.3 in all open source database repos after elasticsearch and cockroachdb, and the gap with second place is gradually narrowing."),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-prs",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"PRs",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"company-of-pr-creators-about-tidb-repository"},"Company of PR Creators about TiDB repository"),(0,i.kt)("p",null,"The pie charts describe the major companies of PR creators for each project."),(0,i.kt)("p",null,"We can also analyze the origin of PR creators about TiDB. If all PRs come from the same company, the definition of open source will be called into question. We use the pie chart below to show the Top 50 companies of contributors who submitted PRs for TiDB."),(0,i.kt)("p",null,"Of course, as the parent company of TiDB, PingCAP has become a gathering place for PR creators. But what is surprising is that hundreds of open source enthusiasts from different companies also contributed to TiDB, and their proportion is  more than 60%, far exceeding PingCAP itself. This also shows that TiDB is a real open source database, and the TiDB community is a typical vibrant organization."),(0,i.kt)(n.h,{chart:"piechart",category:"pull-request-creators-top-50-company",formatSql:!1,categoryIndex:"company_name",valueIndex:"code_contributors",categoryType:"owner",seriesName:"Contributors",repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to learn company distribution about other repository, please visit: ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/compare"},"https://ossinsight.io/compare"),"."))),(0,i.kt)("h4",{id:"countriesregions-of-pr-creators"},"Countries/Regions of PR Creators"),(0,i.kt)("p",null,"This map shows you where the PR creators come from and which countries or regions welcome the repository the best."),(0,i.kt)("p",null,"From the perspective of geographical distribution, people who contributed to TiDB can also measure the repository's popularity and diversity in all open source database repos. We can see that TiDB is an active, inclusive, and international open source project in this map."),(0,i.kt)(n.h,{chart:"worldmapchart",category:"pull-request-creators-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"PR creators",effect:!1,size:56,repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"heat-map-of-commits-time-about-prs"},"Heat Map of Commits Time about PRs"),(0,i.kt)("p",null,"We can also analyze the activity of open source repos from the commits time. The figure below shows the time heat map for PRs commits."),(0,i.kt)("p",null,"The Heat Maps of Commits Time display the number of push events occurring at a particular point of time. The Y-axis represents 7 days a week, and the X-axis represents 24 hours a day according to the Universal Time Coordinated (UTC). The lighter color in this heat map indicates that less push events occur at a particular point of time. On the contrary, the darker color indicates more push events occurring."),(0,i.kt)("p",null,"From this heat map, we can see that the vast majority of PRs are committed between 2:00 - 16:00\uff08UTC\uff09indicating that in addition to the vast majority of Chinese contributors, there are also contributors from different time zones who have contributed to TiDB during working hours."),(0,i.kt)(n.h,{chart:"heatmapchart",category:"commits-time-distribution",xIndex:"hour",yIndex:"dayofweek",valueIndex:"pushes",formatSql:!1,repoId:N,comparing:!0,mdxType:"CommonChart"}),(0,i.kt)("h4",{id:"average-time-cost-from-open-pull-request-to-close-it"},"Average time cost from open pull request to close it"),(0,i.kt)("p",null,"It is unilateral to prove that the repository is active only by the number of submitted PRs. It is also necessary to pay attention to the life cycle of a PR (from open to close) to assist in analyzing the activity and health of open source repos. As you can see from the bar chart below, the PR life cycle length varies widely between repos. On average, hive and ignite take almost 120 days to close a PR, while TiDB, which is also on the list, only takes about 10 days."),(0,i.kt)(n.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-pr-open-to-merge",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,i.kt)("h3",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"The total number of contributors since 2011 about each repository."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"by Contributors")),(0,i.kt)("p",null,"In addition to the above three criteria for measuring the activity of an open source database repository, some interesting conclusions can be drawn from the analysis from the perspective of contributors."),(0,i.kt)("p",null,"Usually, a non-full-time contributor will contribute no more than 100 PRs in the same repository (unless he/she is a super fan of the repository). In order to reasonable to assume whether the people participating in the open source community are real community members (not company employees). We group all contributors by the total number of PRs submitted by themselves into <= 10,<= 100,> 100. Then we can get insights of the TiDB community."),(0,i.kt)("p",null,"In order to obtain a comprehensive and objective analysis result, we recommend that the total number of contributors and the proportion of contributors be compared together. Contributors who submitted less than 10 PRs in the TiDB repository accounted for 76.8% of total PRs which is 806 contributors. There are more than 300 contributors who submitted more than 10 PRs for TiDB. It can be seen that the research and development resources of TiDB are very sufficient, and the quality of the code can be trusted."),(0,i.kt)("h4",{id:"the-percentage-of-different-types-of-contributors-in-total-contributors"},"The percentage of different types of contributors in total contributors"),(0,i.kt)("p",null,"*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100."),(0,i.kt)(b,{type:"contributors",percent:!0,mdxType:"ContributorsCharts"}),(0,i.kt)(b,{type:"contributors",mdxType:"ContributorsCharts"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"by PRs")),(0,i.kt)("p",null,"We can also measure the health of a repository with the percentage of the total number of PRs submitted by these different types of contributors.\n7.4% of contributors created a total of 2082 PRs, 20.3% of contributors created a total of 5093 PRs, and 72.3% of contributors created 20245 PRs. This is a very healthy ratio."),(0,i.kt)("h4",{id:"the-percentage-of-the-sum-of-prs-submitted-by-different-types-of-contributors-in-total-prs"},"The percentage of the sum of PRs submitted by different types of contributors in total PRs"),(0,i.kt)("p",null,"*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100."),(0,i.kt)(b,{type:"prs",percent:!0,mdxType:"ContributorsCharts"}),(0,i.kt)(b,{type:"prs",mdxType:"ContributorsCharts"}))}z.isMDXComponent=!0}}]);