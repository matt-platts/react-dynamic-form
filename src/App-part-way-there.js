import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, ReactDOM } from "react";
import { useForm } from "react-hook-form";

/*
var createReactClass = require('create-react-class');
*/

function App() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const selectedOption = watch("selectOption");
  const baseOption = watch("baseLicenseOption");
  const typeOption = watch("typeLicensingOption");
  const durationOption = watch("durationLicenseOption");
  const [selected, setSelected] = React.useState(""); 
  const onSubmit = (data) => { console.log(data); };

  const changeSelectOptionHandler = (event) => { 
	setSelected(event.target.value); 
	document.getElementById('baseLicenseOption').selectedIndex=0
  }; 

useEffect(() => {
	if (selectedOption === "option1"){
		let baseLicenseOptions = asgOptions;
		let bl_type=asgOptions;
		console.log("its option1");
		console.log(baseLicenseOptions)
		updateBaseOptions();
	} else if (selectedOption === "option2") {
		let baseLicenseOptions = appControllerOptions;
		let bl_type=appControllerOptions;
		console.log("its option2");
		console.log(baseLicenseOptions)
	} else if (selectedOption === "option3") {
		setValue("checkbox1", true);
	} else if (selectedOption === "option4") {
		setValue("checkbox2", true);
	} else {
		setValue("checkbox1", false);
		setValue("checkbox2", false);
	}
}, [selectedOption, setValue]);

useEffect(() => {
    if (typeOption === "Demo") {
	alert("Please select a license duration");
	}
});

let bl_type=""; /* blank var to point to an array of options for base license dropdown */
let baseLicenseOptions = [
    { value: 'default', name: 'Some default option' },
    { value: 'default', name: 'Another default option' },
];

const asgOptions = [
    { value: 'ASG6', name: 'ASG 6' },
    { value: 'ASG7', name: 'ASG 7' }            
];

const appControllerOptions = [
    { value: 'AC1', name: 'Application Controller 1' }

];

const awsPrOptions = [
    { value: 'SGOS6 SWG Edition', name: 'SGOS 6 SWG Edition' }

];
const awsRpOptions = [
    { value: 'SGOS6 Reverse Proxy', name: 'SGOS 6 Reverse Proxy' }

];
const cacheflowOptions = [
    { value: 'Cacheflow', name: 'Cacheflow' }
];
const maOptions = [
    { value: 'Malware Anaylsis', name: 'Malware Analysis' }
];
const casOptions = [
    { value: 'Content Analysis', name: 'Content Analysis' }
];

const  updateBaseOptions = function(){
	console.log("updating options");
        /*let baseLicenseOptions = asgOptions;
	{baseLicenseOptions.map((e, key) => {
		return <option key={key} value={e.value}>{e.name}</option>;
	})}
	*/
}

let options="";

if (selected === "option1"){
	bl_type=asgOptions
} else if (selected === "option2"){
	bl_type= appControllerOptions
} else if (selected === "option3"){
	bl_type = awsPrOptions
} else if (selected === "option4"){
	bl_type = awsRpOptions
} else if (selected === "option5"){
	bl_type = cacheflowOptions
} else if (selected === "option6"){
	bl_type = casOptions
} else if (selected === "option6"){
	bl_type = maOptions
} else if (selected === "option7"){
	bl_type = maOptions
} 

if (bl_type){
	options = bl_type.map((e, key) => { console.log("Key: ",key); return <option key={key} value={e.value}>{e.name}</option>; })
} else {
	console.log("no bl type");
}

/* This is a react component, apparrently */
/*
class BindDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        { name: 'One', id: 1 },
        { name: 'Two', id: 2 },
        { name: 'Three', id: 3 },
        { name: 'four', id: 4 }
      ]
    };
  }
  render() {
    let optionTemplate = this.state.values.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <label>
        Pick your favorite Number:
        <select value={this.state.value} onChange={this.handleChange}>
          {optionTemplate}
        </select>
      </label>
    );
  }
}
ReactDOM.render( <BindDropDown />, document.getElementById('selectRoot'));*/
/*End React component*/


/* Table thing 
var RecordsComponent = createReactClass({

		getInitialState: function () {
		return {
		  tablerows:[
		   {fname:"Tom",lname:"Moody",age:23}
		  ]
		};
		},    
	addRow: function() {
	// add new data from here    
	var newdata = {fname:"Tom",lname:"Moody",age:23}    
	//take the existing state and concat the new data and set the state again    
	this.setState({ tablerows: this.state.tablerows.concat(newdata ) });    
	},    
	rows:function(){
	return this.state.tablerows.map(function(row,i){
	    return   (<tr key={i}>
		     <td>{row.fname}</td>
		     <td>{row.lname}</td> 
		     <td>{row.age}</td>
		     </tr>);
	});
	},

	render : function() {
	    return (
		<div>
		    <table>
			<tr>
			    <td> row 1 </td>
			</tr>
			<tr>
			    <td> row 2 </td>
			</tr>
			<tr>
			    <td> row 3 </td>
			</tr>
			{this.rows()}
		    </table>
		    <button id= "addBtn" onClick={this.addRow}>ADD</button>
		</div>
	    );
	}
});
    
ReactDOM.render(<RecordsComponent/>, document.getElementById('display'))
/* End table thing */

/* New Table Code */

	let state = {
		rows: []
		/* Note: [{}] inserts a blank row in first */
	};
	let handleChange = idx => e => {
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
	
	let handleChangeEmail = idx => e => {
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

	let handleAddRow = () => {
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
	let handleRemoveRow = () => {
		this.setState({
			rows: this.state.rows.slice(0,-1)
		});
	};
	const handleRemoveSpecificRow = idx => () => {
		const rows = [...this.state.rows];
		rows.splice(idx,1);
		this.setState({ rows });
	};	
	let handleOptionChange = (e) => {
		this.setState({selectValue:e.target.value});
	}
	let handleOptionTwoChange = (e) => {
		this.setState({selectTwoValue:e.target.value});
	}
	let handleOptionThreeChange = (e) => {
		this.setState({selectThreeValue:e.target.value});
	}
	let handleOptionFourChange = (e) => {
		this.setState({selectFourValue:e.target.value});
	}
	let handleOptionFiveChange = (e) => {
		this.setState({selectFiveValue:e.target.value});
	}
/* End New Table Code */

const rows = ("one","two","three");

  return (
    <div className="App">
	<h1>SLGS License Generation System</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

	<div id="selectRoot"></div>

	<div id="ProductSection">
		<fieldset>
		<legend name="Product">Product</legend>
		<div id="FirstSelect" className="selectDiv">
			<label htmlFor="firstSelect">Choose Product:</label>
			<select {...register("selectOption")} onChange={changeSelectOptionHandler}>
			  <option value="">Please Select:</option>
			  <option value="option1">Advanced Secure Gateway</option>
			  <option value="option2">Application Controller</option>
			  <option value="option3">AWS Market Place PR</option>
			  <option value="option4">AWS Market Place RP</option>
			  <option value="option5">CacheFlow</option>
			  <option value="option6">Content Analysis System</option>
			  <option value="option7">Malware Analysis Enterprise Edition</option>
			</select>
		</div>

		{selectedOption === "option3" && (
		  <>
		    <div className="checkboxExtra">
		    <label htmlFor="checkbox1">Checkbox 1:</label>
		    <input type="checkbox" {...register("checkbox1")} />
		    </div>
		  </>
		)}

		{selectedOption === "option4" && (
		  <>
		    <div className="checkboxExtra">
		    <label htmlFor="checkbox2">Checkbox 2:</label>
		    <input type="checkbox" {...register("checkbox2")} />
		    </div>
		  </>
		)}

		<div id="SecondSelect" className="selectDiv">
			<label htmlFor="secondSelect">Base License:</label>
			<select {...register("baseLicenseOption")} id="baseLicenseOption">
			<option value="">Please select:</option>
				{ options }
			</select>
		</div>

		<div id="ThirdSelect" className="selectDiv">
			<label htmlFor="thirdSelect">License Type:</label>
			<select {...register("typeLicensingOption")}>
			  <option value="">Please Select:</option>
			  <option value="Perpetual">Perpetual</option>
			  <option value="Subscription">Subscription</option>
			  <option value="Demo">Demo</option>
			</select>
		</div>

		{(typeOption === "Demo" || typeOption === "Subscription") && (
		<div id="FourthSelect" className="selectDiv">
			<label htmlFor="thirdSelect">License Duration:</label>
			<select {...register("durationLicenseOption")}>
			  <option value="">Please select</option>
			  <option value="365">365</option>
			  <option value="730">730</option>
			</select>
		</div>
		)}
	</fieldset>
	</div> 

	<div id="Configurations">


		{((selectedOption && baseOption && (typeOption === "Perpetual" || durationOption)))  && (
		<>
		<fieldset>
		<legend>General Settings</legend>
		<div className="selectDiv">

			<label>Debug Mode:</label>
			<select>
				<option value="On">On</option>
				<option value="Off">Off</option>
			</select>

			<br /><br />

			<label>Environment:</label>
			<select>
				<option value="Development">Development</option>
			</select>

			<br /><br />

			<label>BC Signing CA:</label>
			<select>
				<option value="Production">Production</option>
				<option value="Old-Production">Old-Production</option>
			</select>

			<br /><br />

			<label>License CA:</label>
			<select>
				<option value="Production">Production</option>
				<option value="Old-Production">Old-Production</option>
				<option value="Development">Development</option>
				<option value="Bogus">Bogus</option>
			</select>

		</div>
		</fieldset>


		<fieldset>
		<legend>Main Configurations</legend>
		<div className="selectDiv">

			<label>Serial Number:</label>
			<input type="text" name="serial" />

			<br /> <br />

			<label>Include Appliance Birth Certificate:</label>
			<input type="checkbox" name="birthcert" id="birthcert"/>

			<br /> <br />

			<label>Model:</label>
			<select>
				<option value="">Please Select:</option>
				<option value="Production">Dynamic Option 1</option>
				<option value="Old-Production">Dynamic Options 2</option>
			</select>

			<br /> <br />

			<label>VA Offline Support:</label>
			<input type="checkbox" name="vaoffline" id="vaoffline"/>

		</div>
		</fieldset>

		<fieldset>
		<legend>Licensing Bill Of Materials</legend>
		<p>- No Lbom Currently Available -</p>
		</fieldset>

		<fieldset>
		<legend>Bundled Components</legend>
		<table style={{width: 700}}>
		<thead>
		<tr><td><input type="checkbox" />Default Components</td><td>Value</td><td>License</td><td>Duration(days)</td></tr>
		</thead>
		<tbody>
		<tr><td><input type="checkbox" />ASG 6</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Compression</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Bandwidth Management</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Icap Services</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Quicktime Streaming</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Windows Media Streaming</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Real Media Streaming</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Peer To Peer</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />SSL Termination</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />SSL Proxy</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />SG Client Accelleration</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />SG Client Web Filtering</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />3rd Party Onbox Content Filteringtd</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Oblix CoreId</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Netegrity Siteminder</td><td></td><td>Perpetual</td><td>365</td></tr>
		<tr><td><input type="checkbox" />Yahoo Instant Messaging</td><td></td><td>Perpetual</td><td>365</td></tr>
		</tbody>
		</table>
		</fieldset>

		<fieldset>
		<legend>Add On Components</legend>
		<table style={{width: 700}}>
		<thead>
		<tr><td><input type="checkbox" />Select All</td><td>Add On<br /><select><option value="Etap">Etap</option><option value="Flash Streaming">Flash Streaming</option><option value="Multi-Tenant Policy">Multi Tenant Policty</option></select></td><td>Additional Params<br /><select><option value="">Select one:</option></select></td><td>Value<select><option value="">Select one:</option></select></td><td>Type<br /><select> <option value="Perpetual">Perpetual</option> <option value="Subscription">Subscription</option> <option value="Demo">Demo</option> </select> </td><td>Duration<br /><select> <option value="365">365</option> <option value="730">730</option> </select> </td><td>Action<br /><input type="button" value="Add" /></td></tr>
		</thead>
		<tbody>
		</tbody>
		</table>
		</fieldset>
		</>
		)}

	</div>

        <input type="submit" value="Generate License" className="submitButton"  />
	<br /><br />
      </form>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
