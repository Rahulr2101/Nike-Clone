

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { exp, sheen, viewport } from "three/webgpu";
import { a } from "@react-spring/three";
import shoe from "../models/shoe2.glb";
import { useFrame, useThree } from "@react-three/fiber";


export function Model2({isRotating,setIsRotating,...props}) {
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
            if(shoeRef.current.position.y <= -6){
            shoeRef.current.position.y += 0.4
            }
            if (shoeRef.current.rotation.y >= 6.285){
                shoeRef.current.rotation.y = 0;
            }
            if(shoeRef.current.position.y >= -6 && shoeRef.current.rotation.y >= 5 ){
                shoeRef.current.rotation.y = 5
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
        geometry={nodes.Laces_R_MAT_Laces_R_0.geometry}
        material={materials.MAT_Laces_R}
        position={[0.217, -0.801, 1.903]}
        rotation={[0, 0.145, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoe_R_MAT_Shoe_R_0.geometry}
        material={materials.MAT_Shoe_R}
        position={[0.217, -0.801, 1.903]}
        rotation={[0, 0.145, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sole_R_MAT_Sole_R_0.geometry}
        material={materials.MAT_Sole_R}
        position={[0.217, -0.801, 1.903]}
        rotation={[0, 0.145, 0]}
      />
    </a.group>
  )
}

export default Model2;
