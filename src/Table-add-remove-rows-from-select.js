import React from "react";
import {render} from "react-dom";

let myVar = "";
class App extends React.Component{
	state = {
		rows: []
		/* Note: [{}] inserts a blank row in first */
	};
	handleChange = idx => e => {
		const {name, value} = e.target;

		console.log(name,value);

		const rows = [...this.state.rows];
		rows[idx] = {
			...rows[idx],
			[name]: value
		};
		this.setState({
			rows
		});
	};
	
	handleChangeEmail = idx => e => {
		const { name, value } = e.target;

		console.log(name,value);

		const rows = [...this.state.rows];
		rows[idx] = {
			...rows[idx],
			email: value
		};
		this.setState({
			rows
		});
	};

	handleAddRow = () => {
		/*alert(document.forms['selectform'].elements['selectemail'].value);*/
		const item = {
			/*email: document.forms[0].elements['email'].value,*/
			email: this.state.selectValue, 
			mobile: this.state.selectTwoValue 
		};
		this.setState({
			rows: [...this.state.rows, item]
		});
	};
	handleRemoveRow = () => {
		this.setState({
			rows: this.state.rows.slice(0,-1)
		});
	};
	handleRemoveSpecificRow = idx => () => {
		const rows = [...this.state.rows];
		rows.splice(idx,1);
		this.setState({ rows });
	};	
	handleOptionChange = (e) => {
		this.setState({selectValue:e.target.value});
	}
	handleOptionTwoChange = (e) => {
		this.setState({selectTwoValue:e.target.value});
	}
	render () {
		console.log(this.state.rows);

		return (
			<div>
			<div className="container">
			<div className="row clearfix">
			<div className="col-md-12 column">
			<table 
				className="table table-bordered table-hover" 
				id="tab-logic"
			>
				<thead>
				<tr>
					<th className="text-center"> # </th>
					<th className="text-center"> <select name="selectemail" onChange={this.handleOptionChange} ><option value=""></option><option value="Matt">Matt</option><option value="John">John</option></select></th>
					<th className="text-center"> <select name="selectmobile" onChange={this.handleOptionTwoChange} ><option value=""></option><option value="07460 614340">07460 614340</option><option value="07584 440279">07584 440279</option></select></th>
					<th>
						<button onClick={this.handleAddRow} className = "btn btn-primary"> Add Row </button>

					</th>
				</tr>
				</thead>
				<tbody>
				{this.state.rows.map((item,idx) => (
					<tr id="addr0" key={idx+1}>
					<td>{idx+1}</td>
					<td>
						<input 
							type="hidden" 
							name="email-{idx}" 
							value={this.state.rows[idx].email} 
						/>{this.state.rows[idx].email} 
					</td>
					<td>
						<input 
							type="hidden" 
							name="mobile-{idx}" 
							value={this.state.rows[idx].mobile} 
						/>{this.state.rows[idx].mobile}
					</td>
					<td>
						<button 
							className="btn btn-outline-danger button-sm"
							onClick={this.handleRemoveSpecificRow(idx)}
						>
						Remove
						</button>
					</td>
				</tr>
				))}
				</tbody>
				</table>
			</div>
			</div>
			</div>
			</div>
		);
	};


}

export default App;
