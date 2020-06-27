<img alt="React Native Dynamic Rate" src="assets/logo.png" width="1050"/>

[![React Native Dynamic Rate](https://img.shields.io/badge/-React%20Native%20Library%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-dynamic-rate)

[![npm version](https://img.shields.io/npm/v/react-native-dynamic-rate.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dynamic-rate)
[![npm](https://img.shields.io/npm/dt/react-native-dynamic-rate.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dynamic-rate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Dynamic Rate"
        src="assets/Screenshots/example.gif" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-dynamic-rate
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```js
import DynamicRate from "react-native-dynamic-rate";
```

## Basic Usage

Rate is depends on the hour you need to calculate your rate depends on the **/per hour**
3600 rate is 1 plus per second.

```js
<DynamicRate value={150000} rate={3600} />
```

# Configuration - Props

| Property |  Type   | Default | Description                                             |
| -------- | :-----: | :-----: | ------------------------------------------------------- |
| outline  | boolean |  true   | make the button outline                                 |
| solid    | boolean |  false  | make the button with a solid background and a shadow    |
| gradient | boolean |  false  | make the button with a gradient background and a shadow |
| width    | number  |   150   | change the button's width                               |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Rate is available under the MIT license. See the LICENSE file for more info.
