import React, { useEffect, useRef } from 'react';
import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind"
    });
    const {renderer, scene, camera} = mindarThree;
    const anchor = mindarThree.addAnchor(0);
    const geometry = new THREE.PlaneGeometry(1, 0.55);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
    const plane = new THREE.Mesh( geometry, material );
    anchor.group.add(plane);

    mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      mindarThree.stop();
    }
  }, []);

  return (
    <div style={{width: "700%", height: "1150%"}} ref={containerRef}>
    </div>
  )
}

