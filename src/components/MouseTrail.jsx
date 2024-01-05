import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseTrail = () => {
	const [trail, setTrail] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setTrail({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<motion.div
			style={{
				position: 'fixed',
				left: trail.x,
				top: trail.y,
				width: 20,
				height: 20,
				borderRadius: '50%',
				backgroundColor: 'blue',
				pointerEvents: 'none', // 마우스 이벤트 방지
				zIndex: 9999,
			}}
			initial={{ opacity: 0.8, scale: 1 }}
			animate={{ opacity: 0, scale: 0 }}
			transition={{ duration: 0.5 }}
		/>
	);
};
