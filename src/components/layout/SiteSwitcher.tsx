import { useState } from 'react';
import { css } from '@linaria/core';
import { Plus, X, Monitor, Settings, PenTool, Book } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const container = css`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
  font-family: sans-serif;
`;

const trigger = css`
  width: 80px;
  height: 80px;
  background: #000;
  color: white;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 16px 16px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background: #222;
  }
`;

const menu = css`
  position: absolute;
  bottom: 60px;
  right: 20px;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 180px;
  transform-origin: bottom right;
  animation: slideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`;

const menuItem = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: #f5f5f5;
  }
  
  &[data-active="true"] {
    background: #f0f0f0;
    color: #000;
  }
`;

const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #666;
  
  ${menuItem}:hover & {
    color: #000;
  }
`;

export const SiteSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={container}>
      {isOpen && (
        <div className={menu}>
          <Link to="/" className={menuItem} onClick={() => setIsOpen(false)}>
            <div className={iconWrapper}><Monitor size={16} /></div>
            Frontend
          </Link>
          <Link to="/admin" className={menuItem} onClick={() => setIsOpen(false)}>
            <div className={iconWrapper}><Settings size={16} /></div>
            Admin
          </Link>
          <Link to="/studio" className={menuItem} onClick={() => setIsOpen(false)}>
            <div className={iconWrapper}><PenTool size={16} /></div>
            Studio
          </Link>
          <Link to="/docs" className={menuItem} onClick={() => setIsOpen(false)}>
            <div className={iconWrapper}><Book size={16} /></div>
            Docs
          </Link>
        </div>
      )}

      <div className={trigger} onClick={toggle} role="button" aria-label="Site Navigation">
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </div>
    </div>
  );
};
