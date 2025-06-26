"use client";

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";
import {
  Group,
  SkinnedMesh,
  Material,
  AnimationClip,
  Object3D,
  BufferGeometry,
  Skeleton,
} from "three";

interface AstronautProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

interface GLTFResult {
  nodes: Record<
    string,
    | (SkinnedMesh & {
        geometry: BufferGeometry;
        skeleton: Skeleton;
      })
    | Object3D
  >;
  materials: Record<string, Material>;
  animations: AnimationClip[];
}

export function Astronaut({
  position = [1.3, -1, 0],
  scale = 0.3,
  rotation = [-Math.PI / 2, -0.2, 2.2],
}: AstronautProps) {
  const group = useRef<Group>(null);

  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  const meshNames = [
    "Cube001_0",
    "Cube005_0",
    "Cube002_0",
    "Plane_0",
    "Cube008_0",
    "Cube004_0",
    "Cube003_0",
    "Cube_0",
    "Cube009_0",
    "Cube011_0",
  ];

  return (
    <group
      ref={group}
      dispose={null}
      rotation={rotation}
      scale={scale}
      position={position}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              {"metarig_rootJoint" in nodes && (
                <primitive object={nodes.metarig_rootJoint as Object3D} />
              )}
              {meshNames.map((name) => {
                const mesh = nodes[name] as SkinnedMesh;
                return (
                  <skinnedMesh
                    key={name}
                    name={name}
                    geometry={mesh.geometry}
                    material={materials["AstronautFallingTexture.png"]}
                    skeleton={mesh.skeleton}
                  />
                );
              })}
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
