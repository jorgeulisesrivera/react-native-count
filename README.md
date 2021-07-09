<h3 align="center">
  react-native-count
</h3>

<p align="center">
  Timer for React-Native
</p>

## Getting started

`npm install react-native-count`

## Properties

### `initialSeconds`
number of seconds

### `textStyle`
style for Text native react-native element

### `direction`
up | down
## React-Native example

```js
import {Timer} from 'react-native-count';

<Timer initialSeconds={120} textStyle={{color:"blue"}} direction={"up"}/>

//EXAMPLE: 00:02:01

```