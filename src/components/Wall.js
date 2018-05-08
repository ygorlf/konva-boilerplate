// Libs
import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

// Components
import Sticker from './Sticker';

class Wall extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Stage
        x={0}
        y={0}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer
          x={0}
          y={0}
        >
          <Sticker />
        </Layer>
      </Stage>
    );
  }
}

export default Wall;