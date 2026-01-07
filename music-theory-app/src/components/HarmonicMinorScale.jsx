import { Component } from 'react';
import { Renderer, Stave } from 'vexflow';

class HarmonicMinorScale extends Component {
  componentDidMount() {
    const container = document.getElementById('harmonic-minor-scale');
    if (!container) return;
    
    container.innerHTML = '';
    
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(700, 200);
    const context = renderer.getContext();
    
    const stave = new Stave(10, 40, 650);
    stave.addClef('treble');
    stave.setContext(context).draw();
  }

  render() {
    return <div id="harmonic-minor-scale"></div>;
  }
}

export default HarmonicMinorScale;
