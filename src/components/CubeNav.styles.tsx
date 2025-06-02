import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  position: fixed;
  right: 3rem;
  height: 320px; /* Fixed height based on content */
  top: calc(50vh - 160px); /* Center exactly in viewport */
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(88, 161, 242, 0.2),
      rgba(88, 161, 242, 0.5),
      rgba(88, 161, 242, 0.2),
      transparent
    );
    z-index: -1;
    filter: blur(1px);
  }

  @media (max-width: 768px) {
    right: 1rem;
    transform: scale(0.8);
    transform-origin: center right;
  }
`;

export const CubeButton = styled(motion.button)<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.isActive 
      ? 'linear-gradient(135deg, #4A9EFF, #6D5ACF)'
      : 'rgba(88, 161, 242, 0.2)'};
    border: 1px solid rgba(88, 161, 242, ${props => props.isActive ? '0.8' : '0.3'});
    transform: translateZ(-10px);
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.isActive 
      ? 'linear-gradient(135deg, #4A9EFF, #6D5ACF)'
      : 'rgba(88, 161, 242, 0.1)'};
    border: 1px solid rgba(88, 161, 242, ${props => props.isActive ? '0.8' : '0.3'});
    box-shadow: ${props => props.isActive 
      ? '0 0 15px rgba(74, 158, 255, 0.5)'
      : 'none'};
  }
`;

export const Tooltip = styled(motion.div)`
  position: absolute;
  right: calc(100% + 15px);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 11, 25, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid rgba(88, 161, 242, 0.2);
  backdrop-filter: blur(5px);

  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgba(10, 11, 25, 0.9);
  }
`;

export const MobileToggle = styled(motion.button)`
  display: none;
  position: fixed;
  right: 1rem;
  top: 1rem;
  background: rgba(10, 11, 25, 0.9);
  border: 1px solid rgba(88, 161, 242, 0.3);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`; 