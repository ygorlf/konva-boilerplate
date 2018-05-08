// Libs
import React, { Component } from 'react';
import { Rect } from 'react-konva';

class Sticker extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Rect
        x={10}
        y={10}
        width={150}
        height={200}
        fill="tomato"
        //draggable
      >
        
      </Rect>
    );
  }
}

export default Sticker;