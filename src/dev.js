import './dev.scss';
// import ReactFlexboxGrid from './main';
import {Row,Col} from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-flexbox-grid">
        <Row align='center'>
          <Col span={33}>col1 <br/> cosdjflksjdfl <br/></Col>
          <Col>Left...</Col>
        </Row>

        <Row align='center' wrap={true}>
          <Col span={33}>col1</Col>
          <Col span={33}>col1</Col>
          <Col span={33}>col1</Col>
          <Col span={33}>col1</Col>
          <Col span={33}>col1</Col>
        </Row>

        <div style={{height:'10px'}}></div>

        <Row align='bottom'>
          <Col offset={33}>offset 33...</Col>
        </Row>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
