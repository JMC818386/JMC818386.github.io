import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

const StokedThreeBooklet = () => {
  const totalPages = 26;
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

  // Create pages array with special handling for the duplicate page 4
  const pageNumbers = [1, 2, 3, 4, '4-1', 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  
  pageNumbers.forEach((pageNum, index) => {
    pages.push(
      <div className="page" key={index + 1}>
        <img
          src={`/booklet-stoked-3/stoked-3-page-${pageNum}.png`}
          alt={`Stoked 3 Page ${pageNum}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  });

  return (
    <div className={`flipbook-container stoked-three-booklet ${isOpened ? 'opened' : ''}`} ref={containerRef}>
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
      >
        {pages}
      </HTMLFlipBook>
    </div>
  );
};

export default StokedThreeBooklet;
