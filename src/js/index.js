import React from 'react';
import ReactDom from 'react-dom';

// var App = React.createClass({
// 	getDefaultProps: function () {
// 		console.log('getDefaultProps');
// 		return {
// 			name: 'ccc'
// 		}
// 	},
// 	getInitialState: function () {
// 		console.log('getInitialState');
// 		return {
// 			value: 'please input'
// 		}
// 	},
// 	componentWillMount: function () {
// 		console.log('componentWillMount');
// 	},
// 	shouldComponentUpdate(nextProps, nextState) {
// 		console.log(nextProps, nextState);
// 		return true;
// 	},
// 	componentWillUpdate(nextProps, nextState) {
// 		console.log('componentWillUpdate');	
// 	},
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('componentDidUpdate');
// 	},
// 	render: function () {
// 		console.log(this.props.name);
// 		return (
// 			<div>
// 				<h1>sss</h1>
// 				<ul>
// 					{
// 						this.props.data.map(function (ele, index) {
// 							return <li key={index + 100}>{ele}</li>
// 						})
// 					}
// 				</ul>
// 			</div>
// 		)
// 	},
// 	componentDidMount() {
// 		console.log('componentDidMount');
// 		var self = this;
// 		setTimeout(function () {
// 			self.setState({value: 'xxxx'});
// 		}, 1000);
// 	}
// });

// var dataList = ['cst', 'jc', 'ld'];

// ReactDom.render(
// 	<App data={dataList}/>, 
// 	document.getElementById('root')
// );


var Search = React.createClass({
	getInitialState: function () {
		return {
			value: 'please input'
		}
	},
	onHandleChange: function () {
		this.setState({
			value: this.refs.inp.value
		})
	},
	render: function () {
		return (
			<div>
				<input type="text" ref="inp" value={this.state.value} onChange={this.onHandleChange}/>
				<span>{this.state.value}</span>
			</div>
		)
	}
});

ReactDom.render(
	<Search/>,
	document.getElementById('root')
)