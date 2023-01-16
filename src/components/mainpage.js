import cardsData from './cards';
import React, { useEffect, useState, useRef, CSSProperties } from "react";
import Modal from 'react-modal';
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { Suspense, useLayoutEffect } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, MeshReflectorMaterial, Environment, Stage, PresentationControls } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";



const Model = () => {
  const gltf = useLoader(GLTFLoader, "./park.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.02} />
    </>
  );
};


function MainPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cards] = useState(cardsData);

  function openModal() {
    setIsOpen(true);
    console.log("test")
  }

  function closeModal() {
    setIsOpen(false);
  }


  return <>
    <section>
      <div className="container">
        <h1></h1>
        <div className="cards">
          {
            cards.map((card, i) => (
              <div className="card">
                <h3>
                  {card.title}
                </h3>
                <p>
                  {card.text}
                </p><button className="btn" onClick={openModal}>Explore</button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <div className="modalContent">
          <div className='title'>
            <h2>Skatepark</h2>
            <button onClick={closeModal}>close</button>
          </div>
          <Canvas>
            <Suspense fallback={null}>
              <Model />
              <OrbitControls />
              <Environment preset="sunset" background={false} />
            </Suspense>
          </Canvas>
        </div>
      </Modal>
    </div>


  </>


}

export default MainPage;