import './dev.scss';
import ReactLayoutGrid from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-grid">
        <ReactLayoutGrid />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
