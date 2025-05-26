import HTMLFlipBook from "react-pageflip";
import { useState, useEffect } from "react";

function Book() {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const calculateDimensions = () => {
            const newIsLandscape = window.innerWidth > window.innerHeight;
            const newIsMobile = window.innerWidth < 768;

            setIsLandscape(newIsLandscape);

            const width = newIsMobile ?
                (newIsLandscape ? window.innerHeight * 0.7 : window.innerWidth * 0.9) :
                800;

            const height = newIsMobile ?
                (newIsLandscape ? window.innerHeight * 0.9 : window.innerWidth * 1.3) :
                1200;

            setDimensions({ width, height });
        };

        // Calculate dimensions initially
        calculateDimensions();

        // Add event listener for window resize
        window.addEventListener('resize', calculateDimensions);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, []);

    return (
        <HTMLFlipBook
            width={dimensions.width}
            height={dimensions.height}
            className="max-w-full"
            drawShadow={false}
            showCover={true}
            maxShadowOpacity={0.5}
            mobileScrollSupport={true}
            autoSize={true}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            usePortrait={!isLandscape}
            flippingTime={1000}
            startZIndex={0}
            style={{}}
            startPage={0}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
        >
            {Array.from({length: 60}, (_, i) => (
                <div key={i} className="demoPage bg-white shadow-lg rounded-lg w-full h-full">
                    {i + 1 < 10 ? (
                        <img
                            src={`/assets/images/Sin título-3-0${i + 1}.jpg`}
                            alt={`Page ${i + 1}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    ) : (
                        <img
                            src={`/assets/images/Sin título-3-${i + 1}.jpg`}
                            alt={`Page ${i + 1}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    )}
                </div>
            ))}
        </HTMLFlipBook>
    )
}

export default Book;
