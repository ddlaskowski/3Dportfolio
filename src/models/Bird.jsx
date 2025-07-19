import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef);
    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({clock, camera}) => {
        //Update Y position to simulate bird motion using sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        //check if the bird reach a certain endpoint relative to the camera
        if(birdRef.current.position.x > camera.position.x + 10) {
            //change direction to backward and rotate the bird 180deg on y-axis
            birdRef.current.rotation.y = Math.PI;
        }
        else if (birdRef.current.position.x < camera.position.x -10)
        {
            //change direction to forward and reset the bird's rotation
            birdRef.current.rotation.y = 0;
        }
        //Update X & Z position based on direction
        if (birdRef.current.rotation.y === 0) {
            //Moving forward
            birdRef.current.position.x += 0.02;
            birdRef.current.position.z -= 0.01;
        }
        else {
            //moving backward
            birdRef.current.position.x -= 0.02;
            birdRef.current.position.z += 0.01;
        }

    })
    return ( 
        <mesh 
        position={[-3, 2, 1]} 
        scale={[0.003, 0.003, 0.003]} 
        ref={birdRef}>
            <primitive object={scene}/>
        </mesh>

     );
}
 
export default Bird;