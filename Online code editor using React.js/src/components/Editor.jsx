import React from 'react';
import './Editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

function Editor() {
  function run() {
    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let js = document.getElementById('js').value;
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
  }

  return (
    <div id="container">
      <div id='left-window'>
        <label><FontAwesomeIcon icon={faHtml5} /> HTML</label>
        <textarea onKeyUp={run} id='html'></textarea>

        <label><FontAwesomeIcon icon={faCss3Alt} /> CSS</label>
        <textarea onKeyUp={run} id='css'></textarea>

        <label><FontAwesomeIcon icon={faJs} /> JavaScript</label>
        <textarea onKeyUp={run} id='js'></textarea>

        <label id='output-heading'>Output</label>
        <div id='right-window'>
          <iframe title='output' id='output'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Editor;
