(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{LVb3:function(e,t,a){"use strict";var n=a("tAuX"),d=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var l=d(a("Vl3Y"));a("IzEo");var r=d(a("bx4M")),i=d(a("p0pE"));a("/zsF");var o=d(a("PArb")),u=d(a("2Taf")),s=d(a("vZ4D")),c=d(a("l4Ni")),f=d(a("ujKo")),p=d(a("MhPg")),m=n(a("q1tI")),h=a("y1Nh"),v=a("MuoO"),g=d(a("wd/R")),b=d(a("OUpD")),y=d(a("LaW7")),M=a("Y2fQ"),E=d(a("NRDp")),x=function(e,t,a,n){var d,l=arguments.length,r=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(d=e[i])&&(r=(l<3?d(r):l>3?d(t,a,r):d(t,a))||r);return l>3&&r&&Object.defineProperty(t,a,r),r},A=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},w=["\u221a","\xd7"],V=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments)),e.state={updateModalVisible:!1,selectedRows:[],formValues:{},updateFormValues:{id:0,content:"",is_audited:1}},e.columns=[{title:(0,M.formatMessage)({id:"Content"}),dataIndex:"content",render:function(e){return m.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{title:(0,M.formatMessage)({id:"Article"}),dataIndex:"article.title"},{title:(0,M.formatMessage)({id:"User"}),dataIndex:"socialite_user.name"},{title:(0,M.formatMessage)({id:"Audited"}),dataIndex:"is_audited",filters:[{text:w[0],value:"0"},{text:w[1],value:"1"}],render:function(e){return 1===e?w[0]:w[1]}},{title:(0,M.formatMessage)({id:"Status"}),dataIndex:"deleted_at",filters:[{text:w[0],value:"0"},{text:w[1],value:"1"}],render:function(e){return null===e?w[0]:w[1]}},{title:(0,M.formatMessage)({id:"Created_at"}),dataIndex:"created_at",sorter:!0,render:function(e){return m.default.createElement("span",null,(0,g.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:(0,M.formatMessage)({id:"Handle"}),render:function(t,a){return null===a.deleted_at?m.default.createElement(m.Fragment,null,m.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,M.formatMessage)({id:"Edit"})),m.default.createElement(o.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleDestroy(a)}},(0,M.formatMessage)({id:"Delete"}))):m.default.createElement(m.Fragment,null,m.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,M.formatMessage)({id:"Edit"})),m.default.createElement(o.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleForceDelete(a)}},(0,M.formatMessage)({id:"Force Delete"})),m.default.createElement(o.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleRestore(a)}},(0,M.formatMessage)({id:"Restore"})))}}],e.handleStandardTableChange=function(t,a,n){var d=e.props.dispatch,l=e.state.formValues,r=Object.keys(a).reduce(function(e,t){var n=(0,i.default)({},e);return n[t]=A(a[t]),n},{}),o=(0,i.default)({currentPage:t.current,pageSize:t.pageSize},l,r);n.field&&(o.sorter="".concat(n.field,"_").concat(n.order)),d({type:"adminAndcommentAndindex/fetch",payload:o})},e.handleMenuClick=function(t){var a=e.props.dispatch,n=e.state.selectedRows;if(n)switch(t.key){case"remove":a({type:"adminAndcommentAndindex/destroy",payload:{key:n.map(function(e){return e.id})},callback:function(){e.setState({selectedRows:[]})}});break;default:break}},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.handleUpdateModalVisible=function(t,a){e.setState({updateModalVisible:!!t,updateFormValues:a||{id:0,content:"",is_audited:1}})},e.handleUpdate=function(t){var a=e.props.dispatch;a({type:"adminAndcommentAndindex/update",payload:t}),e.handleUpdateModalVisible()},e.handleDestroy=function(t){var a=e.props.dispatch;a({type:"adminAndcommentAndindex/destroy",payload:t})},e.handleForceDelete=function(t){var a=e.props.dispatch;a({type:"adminAndcommentAndindex/forceDelete",payload:t})},e.handleRestore=function(t){var a=e.props.dispatch;a({type:"adminAndcommentAndindex/restore",payload:t})},e}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"adminAndcommentAndindex/fetch"})}},{key:"render",value:function(){var e=this.props,t=e.adminAndcommentAndindex.data,a=e.loading,n=this.state,d=n.selectedRows,l=n.updateModalVisible,i=n.updateFormValues,o={handleUpdateModalVisible:this.handleUpdateModalVisible,handleUpdate:this.handleUpdate};return m.default.createElement(h.PageHeaderWrapper,null,m.default.createElement(r.default,{bordered:!1},m.default.createElement("div",{className:E.default.tableList},m.default.createElement("div",{className:E.default.tableListOperator}),m.default.createElement(y.default,{selectedRows:d,loading:a,data:t,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}))),m.default.createElement(b.default,Object.assign({},o,{updateModalVisible:l,updateFormValues:i})))}}]),t}(m.Component);V=x([(0,v.connect)(function(e){var t=e.adminAndcommentAndindex,a=e.loading;return{adminAndcommentAndindex:t,loading:a.models.adminAndcommentAndindex}})],V);var C=l.default.create()(V);t.default=C},LaW7:function(e,t,a){"use strict";var n=a("tAuX"),d=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var l=d(a("wCAj")),r=d(a("Y/ft")),i=d(a("2Taf")),o=d(a("vZ4D")),u=d(a("l4Ni")),s=d(a("ujKo")),c=d(a("MhPg")),f=d(a("p0pE")),p=n(a("q1tI")),m=d(a("O7M1"));function h(e){if(!e)return[];var t=[];return e.forEach(function(e){e.needTotal&&t.push((0,f.default)({},e,{total:0}))}),t}var v=function(e){function t(){var e;return(0,i.default)(this,t),e=(0,u.default)(this,(0,s.default)(t).apply(this,arguments)),e.handleTableChange=function(t,a,n){var d=e.props.onChange;if(d){for(var l=arguments.length,r=new Array(l>3?l-3:0),i=3;i<l;i++)r[i-3]=arguments[i];d.apply(void 0,[t,a,n].concat(r))}},e}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.rowKey,n=(0,r.default)(e,["data","rowKey"]),d=t||{},i=d.list,o=void 0===i?[]:i,u=d.pagination,s=void 0!==u&&u,c=!!s&&(0,f.default)({showSizeChanger:!0,showQuickJumper:!0},s);return p.default.createElement("div",{className:m.default.standardTable},p.default.createElement(l.default,Object.assign({rowKey:a||"key",dataSource:o,pagination:c,onChange:this.handleTableChange},n)))}}],[{key:"getDerivedStateFromProps",value:function(e){if(0===e.selectedRows.length){var t=h(e.columns);return{selectedRowKeys:[],needTotalList:t}}return null}}]),t}(p.Component),g=v;t.default=g},NRDp:function(e,t,a){e.exports={tableList:"antd-pro-pages-admin-comment-index-style-tableList",tableListOperator:"antd-pro-pages-admin-comment-index-style-tableListOperator",tableListForm:"antd-pro-pages-admin-comment-index-style-tableListForm",submitButtons:"antd-pro-pages-admin-comment-index-style-submitButtons"}},O7M1:function(e,t,a){e.exports={standardTable:"antd-pro-pages-admin-comment-index-components-standard-table-index-standardTable",tableAlert:"antd-pro-pages-admin-comment-index-components-standard-table-index-tableAlert"}},OUpD:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7Kak");var d=n(a("9yH6"));a("5NDa");var l=n(a("5rEg"));a("2qtc");var r=n(a("kLXV"));a("y8nQ");var i=n(a("Vl3Y")),o=n(a("q1tI")),u=a("Y2fQ"),s=i.default.Item,c=function(e){var t=e.updateModalVisible,a=e.form,n=e.handleUpdate,i=e.handleUpdateModalVisible,c=e.updateFormValues,f=function(){a.validateFields(function(e,t){e||(a.resetFields(),n(t))})};return o.default.createElement(r.default,{destroyOnClose:!0,title:(0,u.formatMessage)({id:"Edit"}),visible:t,onOk:f,onCancel:function(){return i()}},a.getFieldDecorator("id",{rules:[{required:!0}],initialValue:c.id})(o.default.createElement(l.default,{type:"hidden"})),o.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,u.formatMessage)({id:"Content"})},a.getFieldDecorator("content",{rules:[{required:!0}],initialValue:c.content})(o.default.createElement(l.default,null))),o.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,u.formatMessage)({id:"Audited"})},a.getFieldDecorator("is_audited",{rules:[{required:!0}],initialValue:c.is_audited})(o.default.createElement(d.default.Group,null,o.default.createElement(d.default,{value:1},(0,u.formatMessage)({id:"Yes"})),o.default.createElement(d.default,{value:0},(0,u.formatMessage)({id:"No"}))))))},f=i.default.create()(c);t.default=f}}]);