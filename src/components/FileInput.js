import React, {Component} from 'react';
import styled from 'styled-components';

const File = styled.li `
  margin-bottom: 10px;
  box-shadow: 1;
  list-style: none;
`;

const Files = styled.ul `
  margin: 0;
  padding: 0;
`;

const FileText = styled.p`
  white-space: pre-wrap;
`

export default class FileInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      firstFileText: ''
    };

    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFilesList = this.updateFilesList.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.files[0].name}`);
  }

  uploadedFiles() {
    if (this.state.files) {
      return this.state.files.map(file => <File key={file.name}>
        <div>{file.name}</div>
        <div>Last Modified: {new Date(file.lastModified).toString()}</div>
        <div>Type: {file.type}</div>
        <div>All?: {window.URL.createObjectURL(file)}</div>
      </File>);
    }
  }

  updateFilesList() {
    if (this.fileInput.current && this.fileInput.current.files) {
      this.setState(({files}) => ({
        files: [
          ...files,
          ...this.fileInput.current.files
        ]
      }), () => {
        if (this.state.files.length === 1) {
          const reader = new FileReader();
          reader.onload = ({target: { result }}) => this.setState({firstFileText: result});
          reader.readAsText(this.state.files[0]);
        }
      });
    }
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={this.fileInput} onChange={this.updateFilesList} multiple={true}/>
      </label>
      <br/>
      <button type="submit">Submit</button>
      <Files>{this.uploadedFiles()}</Files>
      <FileText>{this.state.firstFileText}</FileText>
    </form>);
  }
}
