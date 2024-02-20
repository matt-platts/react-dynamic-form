import React from "react";
import {render} from "react-dom";

let myVar = "";
class AppTwo extends React.Component{
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
	
	handleAddRow = () => {
		/*alert(document.forms['selectform'].elements['selectAddon'].value);*/
		const item = {
			/*email: document.forms[0].elements['email'].value,*/
			addon: this.state.selectValue, 
			additional: this.state.selectTwoValue, 
			value: this.state.selectThreeValue,
			type: this.state.selectFourValue, 
			duration: this.state.selectFiveValue 
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
	handleOptionThreeChange = (e) => {
		this.setState({selectThreeValue:e.target.value});
	}
	handleOptionFourChange = (e) => {
		this.setState({selectFourValue:e.target.value});
	}
	handleOptionFiveChange = (e) => {
		this.setState({selectFiveValue:e.target.value});
	}

	render () {
		console.log(this.state.rows);

		return (
			<table 
				className="table table-bordered table-hover component_table" 
				id="tab-logic"
			>
				<thead>
				<tr>
					<th className="text-center"> <span>Select All</span><br /><input type="checkbox" /></th>
					<th className="text-center"> <span>Add On:</span><br /><select name="selectAddon" onChange={this.handleOptionChange} ><option value=""></option><option value="Etap">Etap</option><option value="Flash Streaming">Flash Streaming</option><option value="Multi Tenant Policy">Multi Tenant Policy</option></select></th>
					<th className="text-center"> <span>Additional Params:</span><br /><select name="selectAdditional" onChange={this.handleOptionTwoChange} ><option value=""></option><option value="Additional 1">Additional 1</option><option value="Additional 2">Additional 2</option></select></th>
					<th className="text-center"> <span>Value:</span><br /><select name="selectValueFor" onChange={this.handleOptionThreeChange} ><option value=""></option><option value="Value 1">Value 1</option><option value="Value 2">Value 2</option></select></th>
					<th className="text-center"> <span>Type:</span><br /><select name="selectType" onChange={this.handleOptionFourChange} ><option value=""></option><option value="Type 1">Type 1</option><option value="Type 2">Type 2</option></select></th>
					<th className="text-center"> <span>Duration:</span><br /><select name="selectDuration" onChange={this.handleOptionFiveChange} ><option value=""></option><option value="365">365</option><option value="730">730</option></select></th>
					<th><span>.</span><br />
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
							name="addon-{idx}" 
							value={this.state.rows[idx].addon} 
						/>{this.state.rows[idx].addon} 
					</td>
					<td>
						<input 
							type="hidden" 
							name="additional-{idx}" 
							value={this.state.rows[idx].additional} 
						/>{this.state.rows[idx].additional}
					</td>
					<td>
						<input 
							type="hidden" 
							name="value-{idx}" 
							value={this.state.rows[idx].value} 
						/>{this.state.rows[idx].value}
					</td>
					<td>
						<input 
							type="hidden" 
							name="type-{idx}" 
							value={this.state.rows[idx].type} 
						/>{this.state.rows[idx].type}
					</td>
					<td>
						<input 
							type="hidden" 
							name="duration-{idx}" 
							value={this.state.rows[idx].duration} 
						/>{this.state.rows[idx].duration}
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
		);
	};


}

export default AppTwo;
