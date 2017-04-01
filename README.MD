# react-flexbox-grid
> React flexbox grid layout component.

## size:
+ react-flexbox-grid.js  5.66 kB
+ react-flexbox-grid.js.map    26 kB

## resource:
+ http://roylee0704.github.io/react-flexbox-grid/
+ https://ant.design/components/grid-cn/

## dependencies:
+ git@github.com:afeiship/webkit-sass-flexbox-grid.git
+ override config:
```scss
$grid-padding-width:0;
$grid-responsive:();

```


## usage:
+ import react-flexbox-grid
```javascript
// npm install --save afeiship/react-flexbox-grid
import {Row,Col} from 'react-flexbox-grid';
```

+ layout your apps:
```html
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

<Row align='center' wrap={true}>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
  <Col style={{width:'120px'}}>col1</Col>
</Row>

<Row justify='center'>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
</Row>

<Row justify='around'>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
</Row>

<Row justify='between'>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
  <div className="l-box">col1</div>
</Row>
```
