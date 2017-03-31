import './dev.scss';
import ReactFlexboxGrid from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-flexbox-grid">
        <ReactFlexboxGrid />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
