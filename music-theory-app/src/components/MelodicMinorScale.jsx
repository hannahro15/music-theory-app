import { Component } from 'react';
import { Renderer, Stave } from 'vexflow';

class MelodicMinorScale extends Component {
  componentDidMount() {
    const container = document.getElementById('melodic-minor-scale');
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
    return <div id="melodic-minor-scale"></div>;
  }
}

export default MelodicMinorScale;
