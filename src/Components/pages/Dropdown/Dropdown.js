import React,{useState}from 'react'
import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                <div className="dropdown-btn" onClick={toggleDropdown}>
                    <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
                </div>
            </div>
    )
}

export default Dropdown