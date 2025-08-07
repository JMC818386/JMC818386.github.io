import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

const StokedTwoBooklet = () => {
  const totalPages = 14;
  const pages = [];
  const flipBookRef = useRef(null);
  const containerRef = useRef(null);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenOpened) {
            // When book enters viewport and hasn't been opened yet, open to first spread
            setTimeout(() => {
              if (flipBookRef.current) {
                flipBookRef.current.pageFlip().flipNext(); // Open first page to show first spread
                setHasBeenOpened(true); // Mark as opened so it won't trigger again
                setIsOpened(true); // Mark as opened for styling
                
                // Disconnect observer after first trigger to prevent future automatic page turns
                observer.disconnect();
              }
            }, 300);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the book is visible
        rootMargin: '0px'
      }
    );

    if (containerRef.current && !hasBeenOpened) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasBeenOpened]);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div className="page" key={i}>
        <img
          src={`/booklet-stoked-2/stoked-2-page-${i}.png`}
          alt={`Stoked Two Page ${i}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div className={`flipbook-container ${isOpened ? 'opened' : ''}`} ref={containerRef}>
      <HTMLFlipBook
        ref={flipBookRef}
        width={469}
        height={625}
        size="fixed"
        minWidth={313}
        maxWidth={625}
        minHeight={406}
        maxHeight={813}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        startPage={0}
        drawShadow={true}
        flippingTime={600}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {pages}
      </HTMLFlipBook>
    </div>
  );
};

export default StokedTwoBooklet;
