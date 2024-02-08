import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const selectedOption = watch("selectOption");

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (selectedOption === "option1") {
      setValue("checkbox1", true);
    } else if (selectedOption === "option2") {
      setValue("checkbox2", true);
    } else {
      setValue("checkbox1", false);
      setValue("checkbox2", false);
    }
  }, [selectedOption, setValue]);

  return (
    <div className="App">
	<h1>SLGS License Generation System</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

	<div id="ProductSection">
		<div id="FirstSelect" className="selectDiv">
			<label for="firstSelect">Choose Product:</label>
			<select {...register("selectOption")}>
			  <option value="option1">Advanced Secure Gateway</option>
			  <option value="option2">Application Controller</option>
			  <option value="option3">AWS Market Place PR</option>
			  <option value="option4">AWS Market Place RP</option>
			  <option value="option5">CacheFlow</option>
			  <option value="option6">Content Analysis System</option>
			  <option value="option7">Malware Analysis Enterprise Edition</option>
			</select>
		</div>

		{selectedOption === "option1" && (
		  <>
		    <input type="checkbox" {...register("checkbox1")} />
		    <label htmlFor="checkbox1">Checkbox 1</label>
		  </>
		)}

		{selectedOption === "option2" && (
		  <>
		    <input type="checkbox" {...register("checkbox2")} />
		    <label htmlFor="checkbox2">Checkbox 2</label>
		  </>
		)}

		<div id="SecondSelect" className="selectDiv">
			<label for="secondSelect">Base License:</label>
			<select {...register("selectOption2")}>
			  <option value="" selected>Please select:</option>
			  <option value="option1">Dynamic Value 1</option>
			  <option value="option2">Dynamic value 2</option>
			</select>
		</div>

		<div id="ThirdSelect" className="selectDiv">
			<label for="thirdSelect">License Type:</label>
			<select {...register("selectOption3")}>
			  <option value="" selected>Please Select:</option>
			  <option value="Perpetual">Perpetual</option>
			  <option value="Subscription">Subscription</option>
			  <option value="Demo">Demo</option>
			</select>
		</div>

		<div id="FourthSelect" className="selectDiv">
			<label for="thirdSelect">License Duration:</label>
			<select {...register("selectOption4")}>
			  <option value="" selected>Please select</option>
			  <option value="365">365</option>
			  <option value="730">730</option>
			</select>
		</div>
	</div> 

        <input type="submit" value="Get License" className="submitButton"  />
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
