(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"/dgO":function(e,t,a){e.exports={tableList:"antd-pro-pages-admin-tag-index-style-tableList",tableListOperator:"antd-pro-pages-admin-tag-index-style-tableListOperator",tableListForm:"antd-pro-pages-admin-tag-index-style-tableListForm",submitButtons:"antd-pro-pages-admin-tag-index-style-submitButtons"}},HakG:function(e,t,a){e.exports={standardTable:"antd-pro-pages-admin-tag-index-components-standard-table-index-standardTable",tableAlert:"antd-pro-pages-admin-tag-index-components-standard-table-index-tableAlert"}},UcJB:function(e,t,a){"use strict";var l=a("tAuX"),d=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var n=d(a("Vl3Y"));a("+L6B");var r=d(a("2/Rp"));a("IzEo");var i=d(a("bx4M")),o=d(a("p0pE"));a("/zsF");var s=d(a("PArb")),u=d(a("2Taf")),c=d(a("vZ4D")),f=d(a("l4Ni")),p=d(a("ujKo")),m=d(a("MhPg")),g=l(a("q1tI")),h=a("y1Nh"),b=a("MuoO"),y=d(a("wd/R")),v=d(a("yJQr")),M=d(a("fReX")),E=d(a("q4cp")),w=a("Y2fQ"),V=d(a("/dgO")),A=function(e,t,a,l){var d,n=arguments.length,r=n<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var i=e.length-1;i>=0;i--)(d=e[i])&&(r=(n<3?d(r):n>3?d(t,a,r):d(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r},C=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},k=["\u221a","\xd7"],x=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,f.default)(this,(0,p.default)(t).apply(this,arguments)),e.state={modalVisible:!1,updateModalVisible:!1,selectedRows:[],formValues:{},updateFormValues:{id:0,name:"",keywords:"",description:""}},e.columns=[{title:(0,w.formatMessage)({id:"Name"}),dataIndex:"name"},{title:(0,w.formatMessage)({id:"Keywords"}),dataIndex:"keywords"},{title:(0,w.formatMessage)({id:"Description"}),dataIndex:"description"},{title:(0,w.formatMessage)({id:"Status"}),dataIndex:"deleted_at",filters:[{text:k[0],value:"0"},{text:k[1],value:"1"}],render:function(e){return null===e?k[0]:k[1]}},{title:(0,w.formatMessage)({id:"Created_at"}),dataIndex:"created_at",sorter:!0,render:function(e){return g.default.createElement("span",null,(0,y.default)(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:(0,w.formatMessage)({id:"Handle"}),render:function(t,a){return null===a.deleted_at?g.default.createElement(g.Fragment,null,g.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,w.formatMessage)({id:"Edit"})),g.default.createElement(s.default,{type:"vertical"}),g.default.createElement("a",{onClick:function(){return e.handleDestroy(a)}},(0,w.formatMessage)({id:"Delete"}))):g.default.createElement(g.Fragment,null,g.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,w.formatMessage)({id:"Edit"})),g.default.createElement(s.default,{type:"vertical"}),g.default.createElement("a",{onClick:function(){return e.handleForceDelete(a)}},(0,w.formatMessage)({id:"Force Delete"})),g.default.createElement(s.default,{type:"vertical"}),g.default.createElement("a",{onClick:function(){return e.handleRestore(a)}},(0,w.formatMessage)({id:"Restore"})))}}],e.handleStandardTableChange=function(t,a,l){var d=e.props.dispatch,n=e.state.formValues,r=Object.keys(a).reduce(function(e,t){var l=(0,o.default)({},e);return l[t]=C(a[t]),l},{}),i=(0,o.default)({currentPage:t.current,pageSize:t.pageSize},n,r);l.field&&(i.sorter="".concat(l.field,"_").concat(l.order)),d({type:"adminAndtagAndindex/fetch",payload:i})},e.handleMenuClick=function(t){var a=e.props.dispatch,l=e.state.selectedRows;if(l)switch(t.key){case"remove":a({type:"adminAndtagAndindex/destroy",payload:{key:l.map(function(e){return e.id})},callback:function(){e.setState({selectedRows:[]})}});break;default:break}},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.handleModalVisible=function(t){e.setState({modalVisible:!!t})},e.handleUpdateModalVisible=function(t,a){e.setState({updateModalVisible:!!t,updateFormValues:a||{id:0,name:"",keywords:"",description:""}})},e.handleAdd=function(t){var a=e.props.dispatch;a({type:"adminAndtagAndindex/add",payload:t}),e.handleModalVisible()},e.handleUpdate=function(t){var a=e.props.dispatch;a({type:"adminAndtagAndindex/update",payload:t}),e.handleUpdateModalVisible()},e.handleDestroy=function(t){var a=e.props.dispatch;a({type:"adminAndtagAndindex/destroy",payload:t})},e.handleForceDelete=function(t){var a=e.props.dispatch;a({type:"adminAndtagAndindex/forceDelete",payload:t})},e.handleRestore=function(t){var a=e.props.dispatch;a({type:"adminAndtagAndindex/restore",payload:t})},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"adminAndtagAndindex/fetch"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.adminAndtagAndindex.data,l=t.loading,d=this.state,n=d.selectedRows,o=d.modalVisible,s=d.updateModalVisible,u=d.updateFormValues,c={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible},f={handleUpdateModalVisible:this.handleUpdateModalVisible,handleUpdate:this.handleUpdate};return g.default.createElement(h.PageHeaderWrapper,null,g.default.createElement(i.default,{bordered:!1},g.default.createElement("div",{className:V.default.tableList},g.default.createElement("div",{className:V.default.tableListOperator},g.default.createElement(r.default,{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0)}},(0,w.formatMessage)({id:"Add"}))),g.default.createElement(E.default,{selectedRows:n,loading:l,data:a,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}))),g.default.createElement(v.default,Object.assign({},c,{modalVisible:o})),g.default.createElement(M.default,Object.assign({},f,{updateModalVisible:s,updateFormValues:u})))}}]),t}(g.Component);x=A([(0,b.connect)(function(e){var t=e.adminAndtagAndindex,a=e.loading;return{adminAndtagAndindex:t,loading:a.models.adminAndtagAndindex}})],x);var D=n.default.create()(x);t.default=D},fReX:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var d=l(a("5rEg"));a("2qtc");var n=l(a("kLXV"));a("y8nQ");var r=l(a("Vl3Y")),i=l(a("q1tI")),o=a("Y2fQ"),s=r.default.Item,u=function(e){var t=e.updateModalVisible,a=e.form,l=e.handleUpdate,r=e.handleUpdateModalVisible,u=e.updateFormValues,c=function(){a.validateFields(function(e,t){e||(a.resetFields(),l(t))})};return i.default.createElement(n.default,{destroyOnClose:!0,title:(0,o.formatMessage)({id:"Edit"}),visible:t,onOk:c,onCancel:function(){return r()}},a.getFieldDecorator("id",{rules:[{required:!0}],initialValue:u.id})(i.default.createElement(d.default,{type:"hidden"})),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Name"})},a.getFieldDecorator("name",{rules:[{required:!0}],initialValue:u.name})(i.default.createElement(d.default,null))),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Keywords"})},a.getFieldDecorator("keywords",{rules:[{required:!0}],initialValue:u.keywords})(i.default.createElement(d.default,null))),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Description"})},a.getFieldDecorator("description",{rules:[{required:!0}],initialValue:u.description})(i.default.createElement(d.default,null))))},c=r.default.create()(u);t.default=c},q4cp:function(e,t,a){"use strict";var l=a("tAuX"),d=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var n=d(a("wCAj")),r=d(a("Y/ft")),i=d(a("2Taf")),o=d(a("vZ4D")),s=d(a("l4Ni")),u=d(a("ujKo")),c=d(a("MhPg")),f=d(a("p0pE")),p=l(a("q1tI")),m=d(a("HakG"));function g(e){if(!e)return[];var t=[];return e.forEach(function(e){e.needTotal&&t.push((0,f.default)({},e,{total:0}))}),t}var h=function(e){function t(){var e;return(0,i.default)(this,t),e=(0,s.default)(this,(0,u.default)(t).apply(this,arguments)),e.handleTableChange=function(t,a,l){var d=e.props.onChange;if(d){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];d.apply(void 0,[t,a,l].concat(r))}},e}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.rowKey,l=(0,r.default)(e,["data","rowKey"]),d=t||{},i=d.list,o=void 0===i?[]:i,s=d.pagination,u=void 0!==s&&s,c=!!u&&(0,f.default)({showSizeChanger:!0,showQuickJumper:!0},u);return p.default.createElement("div",{className:m.default.standardTable},p.default.createElement(n.default,Object.assign({rowKey:a||"key",dataSource:o,pagination:c,onChange:this.handleTableChange},l)))}}],[{key:"getDerivedStateFromProps",value:function(e){if(0===e.selectedRows.length){var t=g(e.columns);return{selectedRowKeys:[],needTotalList:t}}return null}}]),t}(p.Component),b=h;t.default=b},yJQr:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var d=l(a("5rEg"));a("2qtc");var n=l(a("kLXV"));a("y8nQ");var r=l(a("Vl3Y")),i=l(a("q1tI")),o=a("Y2fQ"),s=r.default.Item,u=function(e){var t=e.modalVisible,a=e.form,l=e.handleAdd,r=e.handleModalVisible,u=function(){a.validateFields(function(e,t){e||(a.resetFields(),l(t))})};return i.default.createElement(n.default,{destroyOnClose:!0,title:(0,o.formatMessage)({id:"Add"}),visible:t,onOk:u,onCancel:function(){return r()}},i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Name"})},a.getFieldDecorator("name",{rules:[{required:!0}]})(i.default.createElement(d.default,null))),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Keywords"})},a.getFieldDecorator("keywords",{rules:[{required:!0}]})(i.default.createElement(d.default,null))),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,o.formatMessage)({id:"Description"})},a.getFieldDecorator("description",{rules:[{required:!0}]})(i.default.createElement(d.default,null))))},c=r.default.create()(u);t.default=c}}]);