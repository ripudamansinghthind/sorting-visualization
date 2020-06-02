import './index.css';
import { ReactComponent as CogIcon } from './components/icons/cog.svg';
import { ReactComponent as ChevronIcon } from './components/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './components/icons/arrow.svg';
import { ReactComponent as PlusIcon } from './components/icons/plus.svg';
import { ReactComponent as PlayIcon } from './components/icons/play.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import SortingContainer from './components/Layout/SortingContainer';
import BubbleSort from './components/Layout/BubbleSort';

import soundFile from './components/resources/menuSound.mp3';



// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

function App() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState('Bubble Sort (default)');
  

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => {
        props.onClick && props.onClick();
        props.goToMenu && setActiveMenu(props.goToMenu);
       }}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  function sound() {
    soundFile.play();
  }
  function RandomArray() {
    const array = [];
    for (let i = 0; i < 140; i++) {
        array.push(randomIntFromInterval(5, 730))
        setArray(array);
    };
  }

  async function BubbleSort() {
    let parameter = array;
    const n = parameter.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (parameter[j] > parameter[j+1]) {
          let temp = parameter[j];
          parameter[j] = parameter[j+1];
          parameter[j+1] = temp;
          Promise.resolve().then(() => {
            setArray(parameter);
          })
        }
      }
  }
  }
  
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function sortArray() { 
    if(algorithm === 'Bubble Sort' || algorithm === 'Bubble Sort (default)') {
      BubbleSort();
    }
    else if(algorithm === 'Selection Sort') {
    }
    else if(algorithm === 'Quick Sort') {

    }
    else {
      setAlgorithm('Select Sort Again');
    }
  }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  return (
    <>
    <div className="card" id="Profile">
            <div className="row-card">
            <div className="array-container">
            {array.map((value, idx) => (
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}></div>
            ))}
            </div>
            </div>
            </div>
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={(el) => setMenuHeight(calcHeight(el))}>
        <div className="menu">
            <DropdownItem
              rightIcon={<PlusIcon />}
              onClick= {() => sound()}> 
              Make Random array
              </DropdownItem>
            <DropdownItem
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Sorting algorithm - {algorithm}
            </DropdownItem>
            <DropdownItem
              rightIcon={<CogIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
              rightIcon={<PlayIcon /> }
              onClick= {() => sortArray()}>
              Run
            </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter= {(el) => setMenuHeight(calcHeight(el))}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h4>Settings - This area is under construction</h4>
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={(el) => setMenuHeight(calcHeight(el))}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h4>Sorting Methods</h4>
          </DropdownItem>
          <DropdownItem 
            rightIcon="🦘"
            goToMenu="main"
            onClick= {() => setAlgorithm('Bubble Sort')}>
            Binary Sort
          </DropdownItem>
          <DropdownItem 
            rightIcon="🐸"
            goToMenu="main"
            onClick= {() => setAlgorithm('Selection Sort')}>
            Selection Sort
          </DropdownItem>
          <DropdownItem 
            rightIcon="🦋"
            goToMenu="main"
            onClick= {(() => setAlgorithm('Quick Sort'))}>
            Quick Sort
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
    </>
  );
}

const calcHeight = (el) => el.offsetHeight;


export default App;