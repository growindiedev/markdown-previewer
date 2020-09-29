import React, { useState, useEffect } from 'react';
import { Form, useFormik } from 'formik';
import './styles.css';
//import marked from 'marked';
import placeholder from './placeholder';

let marked = require('marked');

function App() {
	const formik = useFormik({
		initialValues: {
			editor: placeholder
		},
		onSubmit: (values) => {
			console.log(values);
		}
	});

	return (
		<div id="main_wrapper">
			<form onSubmit={formik.handleSubmit}>
				<div id="edit_wrapper" className="editor">
					<div className="headbar">
						<span>Editor</span>
					</div>
					<textarea
						id="editor"
						class="editor"
						type="text"
						name="editor"
						value={formik.values.editor}
						onChange={formik.handleChange}
					/>
				</div>
			</form>
			<div id="preview_wrapper" className="preview">
				<div className="headbar">
					<span>Preview</span>
				</div>
				<div id="preview" dangerouslySetInnerHTML={{ __html: marked(formik.values.editor) }} />
			</div>

			{/*<div>
				<div>
					<div>preview</div>
					<div id="preview" dangerouslySetInnerHTML={{ __html: marked(formik.values.editor) }} />
				</div>
			</div> */}
		</div>
	);
}

export default App;
