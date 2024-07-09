import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from "react";

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function TextTransform () {
    const [text, setText] = useState("");
    const [prevInputValue, setPrevInputValue] = useState('');
    const textRef = useRef(null);

    const handleUpperCase= () => {
    let newText = text.toUpperCase();
    setText(newText);
    }
    const handleLowerCase= () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalize= () => {
        let newText = titleCase(text);
        setText(newText);
    }
    const handleClear = () => {
        let newText = " ";
        setText(newText);
    }

    const handleUndo = () => {
        setText(prevInputValue);
    }

    const handleSelect= () => {
        if (textRef.current) {
            textRef.current.select();
          }
    }

    const handleOnChange = (e) => {
        setPrevInputValue(text);
        setText(e.target.value);
    }

return (
        <div className="mt-4">
            <h3 className="mb-3">Please enter your text</h3>
        <Form>
        <Button variant="primary" onClick={handleUndo} className="mb-3">undo</Button>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control ref={textRef} as="textarea" rows={8} value={text} onChange={handleOnChange} />
            </Form.Group>
            </Form>
            <div className="buttonGroup d-flex mt-4">
            <Button variant="primary" onClick={handleUpperCase} className="mx-2">Uppercase</Button>
            <Button variant="secondary" onClick={handleLowerCase} className="mx-2">Lowercase</Button>
            <Button variant="primary" onClick={handleCapitalize} className="mx-2">Capitalize</Button>
            <Button variant="secondary" onClick={handleClear} className="mx-2">Clear Text</Button>
            <Button variant="secondary" onClick={handleSelect} className="mx-2">Select All</Button>
            </div>

            <div className="formFooter">
                <h3 className="mt-3">Your text summery</h3>
                <div>No. of words: {text.split(" ").length}</div>
                <div>No. of letters: {text.length}</div>
                <div>Reading time: {0.008 * text.split(" ").length} minutes</div>
            </div>
        </div>
    );
}

export default TextTransform;