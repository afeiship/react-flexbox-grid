import './dev.scss';
// import ReactFlexboxGrid from './main';
import {Row,Col} from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-flexbox-grid">
        <Row align='center'>
          <Col>col1 <br/> cosdjflksjdfl <br/></Col>
          <Col align='bottom'>col2</Col>
          <Col>col3</Col>
          <Col>col4</Col>
        </Row>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
