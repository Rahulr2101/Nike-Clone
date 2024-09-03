
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { exp, sheen, viewport } from "three/webgpu";
import { a } from "@react-spring/three";
import shoe from "../models/shoe3.glb";
import { useFrame, useThree } from "@react-three/fiber";
export function Model1({isRotating,setIsRotating,...props}) {
 
  const { nodes, materials } = useGLTF(shoe);
  const { gl, viewport } = useThree();
  const [popup,setpopup] = useState()
  const shoeRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  useEffect(() => {
    setpopup(true)
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
        if(shoeRef.current.position.y >= -1 && shoeRef.current.rotation.y == 0 ){
            shoeRef.current.rotation.y = 0
            setpopup(false);
    }
}});
  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  const handleMouseUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false)
    console.log("isRotating",isRotating);
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
    <a.group {...props} ref={shoeRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.SOLE_WHT}
        position={[-2.078, -1.408, -1.136]}
        rotation={[-1.528, -0.028, -1.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.SOLE_WHT}
        position={[-2.078, -1.408, -1.136]}
        rotation={[-1.528, -0.028, -1.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.UPPER_WHT}
        position={[-2.078, -1.408, -1.136]}
        rotation={[-1.528, -0.028, -1.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.UPPER_WHT}
        position={[-2.078, -1.408, -1.136]}
        rotation={[-1.528, -0.028, -1.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.UPPER_WHT}
        position={[-2.078, -1.408, -1.136]}
        rotation={[-1.528, -0.028, -1.178]}
      />
    </a.group>
  )
}

export default Model1;
