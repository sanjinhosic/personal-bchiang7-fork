import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
`;

const StyledPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 50px auto 0;
  padding: 60px 40px;
  background: linear-gradient(135deg, var(--light-navy) 0%, var(--lightest-navy) 100%);
  border-radius: var(--border-radius);
  border: 1px solid var(--lightest-navy);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 25px;
    margin: 30px auto 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, var(--green-tint) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, var(--green-tint) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const StyledTerminal = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--dark-navy);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  position: relative;
  z-index: 1;
`;

const StyledTerminalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: var(--navy);
  gap: 8px;
`;

const StyledDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const StyledTerminalBody = styled.div`
  padding: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  line-height: 1.8;
  color: var(--slate);

  @media (max-width: 480px) {
    font-size: var(--fz-xs);
    padding: 15px;
  }
`;

const StyledLine = styled.div`
  display: flex;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  .prompt {
    color: var(--green);
    margin-right: 10px;
    user-select: none;
  }

  .command {
    color: var(--lightest-slate);
  }

  .output {
    color: var(--slate);
    padding-left: 20px;
  }

  .highlight {
    color: var(--green);
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: var(--green);
    margin-left: 2px;
    vertical-align: middle;
    animation: ${blink} 1s step-end infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      opacity: 1;
    }
  }
`;

const StyledMessage = styled.div`
  text-align: center;
  margin-top: 40px;
  position: relative;
  z-index: 1;

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    margin-bottom: 15px;
  }

  p {
    color: var(--slate);
    font-size: var(--fz-lg);
    max-width: 450px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }
`;

const StyledProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--slate);
  position: relative;
  z-index: 1;

  .dots {
    display: flex;
    gap: 4px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    animation: ${pulse} 1.5s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      opacity: 0.6;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Featured = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledProjectsSection id="projects" ref={revealContainer}>
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <StyledPlaceholder>
        <StyledTerminal>
          <StyledTerminalHeader>
            <StyledDot color="#ff5f56" />
            <StyledDot color="#ffbd2e" />
            <StyledDot color="#27c93f" />
          </StyledTerminalHeader>
          <StyledTerminalBody>
            <StyledLine>
              <span className="prompt">$</span>
              <span className="command">git status</span>
            </StyledLine>
            <StyledLine>
              <span className="output">
                On branch <span className="highlight">portfolio-v2</span>
              </span>
            </StyledLine>
            <StyledLine>
              <span className="output">Changes staged for commit:</span>
            </StyledLine>
            <StyledLine>
              <span className="output">
                &nbsp;&nbsp;<span className="highlight">new:</span> projects/
              </span>
            </StyledLine>
            <StyledLine>
              <span className="prompt">$</span>
              <span className="command">npm run build-portfolio</span>
              <span className="cursor" />
            </StyledLine>
          </StyledTerminalBody>
        </StyledTerminal>

        <StyledMessage>
          <h3>Portfolio Under Construction</h3>
          <p>
            Curating projects and case studies to showcase here. Check back soon for featured work
            samples.
          </p>
        </StyledMessage>

        <StyledProgress>
          <span>Building</span>
          <div className="dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </StyledProgress>
      </StyledPlaceholder>
    </StyledProjectsSection>
  );
};

export default Featured;
