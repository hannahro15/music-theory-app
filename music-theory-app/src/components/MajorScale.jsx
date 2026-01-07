import { Component } from 'react';
import { Renderer, Stave } from 'vexflow';

class MajorScale extends Component {
  componentDidMount() {
    const container = document.getElementById('c-major-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create SVG renderer
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(700, 200);
    const context = renderer.getContext();
    
    // Create and draw stave
    const stave = new Stave(10, 40, 650);
    stave.addClef('treble');
    stave.setContext(context).draw();
  }

  render() {
    return <div id="c-major-scale"></div>;
  }
}

export default MajorScale;
