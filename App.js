import React from 'react';
import './App.css';

class ExampleClass extends React.Component {
  render() {
    return <p className="example__bordered">Example Class Component - {this.props.text} {this.props.text1}</p>
  }
}

function Massage(props) {
  console.log(props)

  return <p>Example - {props.text} {props.text1}</p>
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {props.name}!
        </p>
        <Example text="Welcome!" text1="Передали пропсом текст" />
        <ExampleClass text="Welcome!" text1="This is text 1" />
      </header>
    </div>
  );
}

export default App;
