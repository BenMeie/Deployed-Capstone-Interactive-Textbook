import DemoLayout from "@components/ui/layout/MatrixLayout/MatrixLayout";
import InteractiveCanvas, { TransformationStateManager } from "@components/InteractiveCanvas/InteractiveCanvas";
import { Color, Euler, Matrix4, TextureLoader, Vector3 } from "three";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "@react-three/drei";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function MatrixTransformations() {
	const [correct, setCorrect] = useState(false)
	const loader = new TextureLoader()

	const moonTexture = loader.load('/textures/moon.png')
	const sunTexture = loader.load('/textures/sun.png')
	const earthTexture = loader.load('/textures/earth.png')

	useEffect(() => {
		TransformationStateManager.addChangedCallback(() => {
				let c = TransformationStateManager.activeTransformations.length === 4;
				if(c) {
					if (TransformationStateManager.activeTransformations[0].id !== 2) c = false;
					if (TransformationStateManager.activeTransformations[1].id !== 3) c = false;
					if (TransformationStateManager.activeTransformations[2].id !== 1) c = false;
					if (TransformationStateManager.activeTransformations[3].id !== 0) c = false;
				}
				setCorrect(c)
		})
	}, [])

	return (
		<DemoLayout>
			<InteractiveCanvas useUndoControls={true} useDND={true}
				availableTransformations={[
					{ id: 0, type: 'empty', name: "E_r", matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 0.1)) },
					{ id: 1, type: 'raw', name: "E_t", matrix4: new Matrix4().makeTranslation(new Vector3(4, 4, 0)) },
					{ id: 3, type: 'rotation', name: "M_r", amount: [0, 0, 1], matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 1)) },
					{ id: 2, type: 'raw', name: "M_t", matrix4: new Matrix4().makeTranslation(new Vector3(2, 0, 0)) },
                ]} 
				scenes={[
					// Moon Cube
					(!correct) ? {
						geometry: <planeGeometry />, color: {color: new Color(0xff4444), opacity: 0.5}, staticTransformations:[
							{ id: 4, type: 'rotation', amount: [0, 0, 0.5], matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 0.1))},
							{ id: 5, type: 'raw', matrix4: new Matrix4().makeTranslation(new Vector3(4, 4, 0.1)) },
							{ id: 6, type: 'rotation', name: "M_r", amount: [0, 0, 1], matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 1)) },
							{ id: 7, type: 'raw', name: "M_t", matrix4: new Matrix4().makeTranslation(new Vector3(2, 0, 0)) },
						]
					} : { geometry: <planeGeometry />, color: {color: new Color(0xff4444), opacity: 0}},
					// Earth
					{ geometry: <circleGeometry args={[0.5]} />, color: new Color(0xffffff), staticTransformations: [
						{ id: 8, type: 'rotation', amount: [0, 0, 0.5], matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 0.1)), publishToId: 0 },
						{ id: 9, type: 'raw', matrix4: new Matrix4().makeTranslation(new Vector3(4, 4, 0.1)) }
					], texture: earthTexture},
					// Sun
					{ geometry: <circleGeometry args={[1]} />, color: new Color(0xffffff), staticTransformations: [
						{ id: 10, type: 'rotation', amount: [0, 0, 0.1], matrix4: new Matrix4().makeRotationFromEuler(new Euler(0, 0, 1))},
						{ id: 11, type: 'raw', matrix4: new Matrix4().makeTranslation(new Vector3(0, 0, 0.1)) }
					], texture: sunTexture},
					// Moon
					{ geometry: <circleGeometry args={[0.3]} />, acceptTransformations: true, color: new Color(0xffffff), staticTransformations: [
						{ id: 12, type: 'raw', matrix4: new Matrix4().makeTranslation(new Vector3(0, 0, 0.1)) }
					], texture: moonTexture },
                ]}
				tooltipContent={[<h4>How To Use The Interactive Canvas</h4>,<p>
                Drag and drop matrices from the top on to the canvas grid to apply 
                transformations to the "moon". 
                Apply multiple matrices together to change the final transformation.
                Undo a matrix with the arrow icon, and clear all transformations with the delete icon.
                Experiment with different order combinations of matrices to see 
                different transformation behavior.</p>]}
				/>
		</DemoLayout>
	)
}			