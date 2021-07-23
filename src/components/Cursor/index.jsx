import React, {useEffect, useState} from 'react'
import {useLocation} from '@reach/router'
import classNames from "classnames";
import './index.css'
import {isMobile} from 'react-device-detect';
import TopRightArrow from '../../images/arrow-top-right.svg'
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [currentImageSrc, setCurrentImageSrc] = useState(null);
    const [currentImageSize, setCurrentImageSize] = useState({ width: 400, height: 400 });
    const location = useLocation();
    
    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, [location]);
  
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('*[data-cursor-type="hover"]').forEach(el => {
        el.addEventListener("mousemove", (e) => {
          // const {offsetX: x, offsetY: y} = e,
          // {offsetWidth: width, offsetHeight: height} = el
          
          // const move = 5,
          // xMove = x / width * ( move * 2 ) - move,
          // yMove = y / height * ( move * 2 ) - move
          // el.style.transform = `translate(${xMove}px,${yMove}px)`
          setLinkHovered(true)
        });
        el.addEventListener("mouseleave", (e) => {
          // e.target.style.transform = ''
          setLinkHovered(false)
        });
      });

      document.querySelectorAll('*[data-cursor-type="image"]').forEach(el => {
        
        el.addEventListener("mouseenter", (e) => {
          // const {offsetX: x, offsetY: y} = e,
          // {offsetWidth: width, offsetHeight: height} = el
          
          // const move = 5,
          // xMove = x / width * ( move * 2 ) - move,
          // yMove = y / height * ( move * 2 ) - move
          // el.style.transform = `translate(${xMove}px,${yMove}px)`
          const imageSrc = el.dataset?.cursorImage;
          if(imageSrc) {
            setCurrentImageSrc(imageSrc)
          }

          const imageWidth = el.dataset?.cursorImageWidth ?? 400;
          const imageHeight = el.dataset?.cursorImageHeight ?? 400;
          setShowImage(true);
          setCurrentImageSize({ width: imageWidth, height: imageHeight })
          setHidden(true);
        });
        el.addEventListener("mouseleave", (e) => {
          // e.target.style.transform = ''
          setCurrentImageSrc(null);
          setShowImage(false)
          setCurrentImageSize({ width: 400, height: 400 })
          setHidden(false);
        });
      });
    };
  
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };
  
    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
  
    const onMouseLeave = () => {
      setHidden(true);
    };
      
    const onMouseEnter = () => {
      setHidden(false);
    };
          
    const cursorClasses = classNames(
      "cursor-inner",
      {
        'cursor--clicked': clicked,
        'cursor--link-hovered': linkHovered,
        'cursor--hidden': hidden
      }
    );  

    const onMouseMove = (e) => {
      var position = {x: e.clientX, y: e.clientY}
      setPosition(position);
    };                                                               

    if(isMobile) {
      return null;
    }

    return <div id="cursor">
            <div className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
            <AnimatePresence>
              {
                showImage 
                && currentImageSrc 
                && (
                  <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="cursor-img"
                    src={currentImageSrc}
                    style={{
                        width: `${currentImageSize.width}px`,
                        height: `${currentImageSize.height}px`,
                        left: `${position.x}px`,
                        top: `${position.y}px`
                    }}
                  />
                )
              }
            </AnimatePresence>
    </div>
    
  }

export default Cursor