import React, { useState } from 'react'
import FromData from 'form-data';
import axios from 'axios';
import './App.css';

function App() {
	const [data, setData] = useState("");
	const handleSubmit = async () => {
		// let fromData = new FromData();
		// fromData.append("data", data);
		const result = await axios.post("http://localhost:5000/postData", data);
	}
	return (
		<div className='App'>
			<input type='text' required onChange={(e) => setData(e.target.value)}></input>
			<button type='submit' onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default App;



