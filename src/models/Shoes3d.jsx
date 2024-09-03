
import React, { useEffect, useRef,useState } from "react";
import { useGLTF } from "@react-three/drei";
import { exp, sheen, viewport } from "three/webgpu";
import { a } from "@react-spring/three";
import shoe from "../models/shoe.glb";
import { useFrame, useThree } from "@react-three/fiber";

export function Model3({ isRotating, setIsRotating,startAnimation,setStartAnimation, ...props }) {
  const { nodes, materials } = useGLTF(shoe);
  const [popup,setpopup] = useState(false)
  const { gl, viewport } = useThree();
  const shoeRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  useEffect(() => {
    if(!startAnimation){
      console.log("first hmm!")
    setpopup(true)
    shoeRef.current.position.x = 0
    shoeRef.current.position.y = -75
    shoeRef.current.position.z = -55
    }
    
}, []);

useFrame(() => {
    if(popup){
        shoeRef.current.rotation.y += 0.01*Math.PI
        if(shoeRef.current.position.y <= -1){
        shoeRef.current.position.y += 0.4
        }
        if (shoeRef.current.rotation.y >= 6.28){
            shoeRef.current.rotation.y = 0;
        }
        if(shoeRef.current.position.y >= -6 && shoeRef.current.rotation.y <= 0.5){
            shoeRef.current.rotation.y = 0.2
            setpopup(false);
    }
}});

  useFrame(() => {
    if (startAnimation) {
      shoeRef.current.rotation.y += 0.009*Math.PI;
      if (shoeRef.current.rotation.y >= 6.28){
        shoeRef.current.rotation.y = 0;
      }
      
      if (shoeRef.current.position.x >= 1) {
        shoeRef.current.position.x -= 0.1;
      }
      if (shoeRef.current.position.z >= -50) {
        shoeRef.current.position.z -= 0.15;
      }
      if (shoeRef.current.position.y <= -1){
        shoeRef.current.position.y += 0.1;
      }
      
      
      if (shoeRef.current.position.y >= -1 && shoeRef.current.position.x <= 1 && shoeRef.current.position.z <= -50 && shoeRef.current.rotation.y <= 0.5) {
        
          setStartAnimation(false);
        
        console.log("stop",startAnimation);
      }
    }
  });

  

  const handleMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    setIsRotating(false);
  };

  const handleMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      shoeRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gl, handleMouseUp, handleMouseDown]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

  
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      shoeRef.current.rotation.y += rotationSpeed.current;
    }
  });
  return (
    <group {...props} ref={shoeRef} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_4.geometry}
      material={materials.Main}
      position={[1.29, 0.172, -0.142]}
      rotation={[-Math.PI, 0, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_6.geometry}
      material={materials.Main}
      position={[1.617, 0.838, -0.18]}
      rotation={[1.555, 0.066, Math.PI / 2]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_8.geometry}
      material={materials.Main}
      position={[0.863, 1.164, -0.063]}
      rotation={[0, -1.571, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_10.geometry}
      material={materials.Main}
      position={[1.03, 1.496, -0.091]}
      rotation={[Math.PI, -0.263, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_12.geometry}
      material={materials.Main}
      position={[0.431, 0.406, 0.02]}
      rotation={[Math.PI, -0.343, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_14.geometry}
      material={materials.Main}
      position={[-1.349, -0.619, -0.244]}
      rotation={[Math.PI / 2, 0, -2.052]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_16.geometry}
      material={materials.Main}
      position={[-0.888, 0.243, 0.139]}
      rotation={[Math.PI / 2, 0, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_18.geometry}
      material={materials.Main}
      position={[-1.649, -0.064, 0.039]}
      rotation={[Math.PI / 2, 0, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_20.geometry}
      material={materials.Main}
      position={[-1.666, 0.168, 0.049]}
      rotation={[0, -1.571, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_22.geometry}
      material={materials.Main}
      position={[0.576, 0.875, -0.052]}
      rotation={[Math.PI, -0.343, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_24.geometry}
      material={materials.Main}
      position={[0.285, 1.662, -0.004]}
      rotation={[Math.PI / 2, -1.019, Math.PI / 2]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_26.geometry}
      material={materials.Main}
      position={[0.231, 1.899, 0.045]}
      rotation={[1.6, -0.914, 1.601]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_28.geometry}
      material={materials.Main}
      position={[0.842, 1.146, 0.574]}
      rotation={[0.11, 0.21, -0.359]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_30.geometry}
      material={materials.Main}
      position={[-0.415, -0.596, -0.028]}
      rotation={[Math.PI / 2, 0, -2.052]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_32.geometry}
      material={materials.Main}
      position={[-0.043, 1.021, 0.028]}
      rotation={[Math.PI / 2, 0.595, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_34.geometry}
      material={materials.Main}
      position={[0.746, 0.482, -0.084]}
      rotation={[Math.PI / 2, 0, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_36.geometry}
      material={materials.Main}
      position={[-0.191, -0.618, 0.118]}
      rotation={[Math.PI / 2, 0, -2.052]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_38.geometry}
      material={materials.Main}
      position={[-0.403, -0.271, -0.005]}
      rotation={[-1.571, -0.024, -1.571]}
      scale={0.04}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_40.geometry}
      material={materials.Main}
      position={[-0.433, 0.838, 0.049]}
      rotation={[-Math.PI, 1.562, -Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_42.geometry}
      material={materials.Main}
      position={[-0.012, 1.076, 0.062]}
      rotation={[Math.PI / 2, -1.019, Math.PI / 2]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_44.geometry}
      material={materials.Main}
      position={[0.913, 1.662, -0.079]}
      rotation={[Math.PI, -0.263, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_46.geometry}
      material={materials.Main}
      position={[-1.385, -0.592, -0.006]}
      rotation={[Math.PI / 2, 0, -2.052]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_48.geometry}
      material={materials.Main}
      position={[-0.262, -0.295, -0.039]}
      rotation={[0, -1.571, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_50.geometry}
      material={materials.Main}
      position={[-0.338, -0.557, 0.011]}
      rotation={[Math.PI / 2, 0, -2.052]}
    />
  </group>
  );
}
export default Model3;
