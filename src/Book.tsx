import HTMLFlipBook from "react-pageflip";
import {useState, useEffect, useRef} from "react";

function Book() {
    const containerRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor del libro
    const [isLandscape, setIsLandscape] = useState(false); // Determina si es orientación horizontal
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const calculateDimensions = () => {
            if (!containerRef.current) return;

            const parentWidth = containerRef.current.offsetWidth * 0.8; // Aplicar escala del 80%
            const parentHeight = containerRef.current.offsetHeight; // Aplicar escala del 80%
            const isLandscape = parentWidth > parentHeight;

            setIsLandscape(isLandscape);

            // Ratio de aspecto A4 en formato retrato (1:1.4142)
            const aspectRatio = 1.4142;

            let width, height;

            if (isLandscape) {
                // Mostrar dos páginas (horizontal)
                width = parentWidth / 2 - 20; // Descontar márgenes laterales
                height = width * aspectRatio;
            } else {
                // Mostrar una página (vertical)
                height = parentHeight * 0.9; // Usar el 90% de la altura
                width = height / aspectRatio;
            }

            setDimensions({
                width: Math.min(width, parentWidth),
                height: Math.min(height, parentHeight),
            });
        };

        calculateDimensions();
        // Recalcular dimensiones al redimensionar la ventana
        window.addEventListener("resize", calculateDimensions);

        return () => {
            window.removeEventListener("resize", calculateDimensions);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full flex justify-center items-center bg-white">
            <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                className="no-padding"
                drawShadow={true}
                showCover={true}
                maxShadowOpacity={0.3}
                mobileScrollSupport={true}
                autoSize={false}
                size="fixed"
                minWidth={300}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                usePortrait={!isLandscape}
                flippingTime={800}
                startZIndex={0}
                style={{padding: 0}}
                startPage={0}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={0}
                showPageCorners={false}
                disableFlipByClick={false}
            >
                {Array.from({length: 60}, (_, i) => (
                    <div key={i} className="demoPage bg-white shadow-lg w-full h-full p-0">
                        {i + 1 < 10 ? (
                            <img
                                src={`/assets/images/Sin título-3-0${i + 1}.jpg`}
                                alt={`Page ${i + 1}`}
                                className="w-full h-full"
                                loading="lazy"
                            />
                        ) : (
                            <img
                                src={`/assets/images/Sin título-3-${i + 1}.jpg`}
                                alt={`Page ${i + 1}`}
                                className="w-full h-full"
                                loading="lazy"
                            />
                        )}
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

export default Book;