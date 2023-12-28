import { useEffect, useRef, useState } from "react"
import { StyledRatings } from "./Ratings.styled"

export const Ratings = ({ deets: { data } }) => {
    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);
    const canvasRef3 = useRef(null);
    const [arcSize1, setArcSize1] = useState(0); // Initial arc size in percent
    const [arcSize2, setArcSize2] = useState(0); // Initial arc size in percent
    const [arcSize3, setArcSize3] = useState(0); // Initial arc size in percent
    const drawRatings = (canvasRef, maxArcSize, arcS, text) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const calculateEndAngle = (arcSize) => {
            return ((arcSize / maxArcSize) * 2 * Math.PI) - 0.5 * Math.PI;
        };

        const drawArc = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
            ctx.save()
            // Container
            ctx.beginPath();
            ctx.arc(60, 60, 50, -0.5 * Math.PI, 1.5 * Math.PI);
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#2c2f3a';
            ctx.stroke();
            // Filler
            ctx.beginPath();
            ctx.arc(60, 60, 50, -0.5 * Math.PI, calculateEndAngle(arcS)); // Dynamic end angle
            ctx.lineWidth = 5;
            if (arcS > 0) {
                ctx.lineCap = 'round'
            }
            ctx.strokeStyle = '#aeaeae';
            ctx.stroke();
            // Rating Text
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, 60, 60);
            ctx.restore()
        };

        drawArc();
    }

    useEffect(() => {
        if (data) {
            setArcSize1(data.metacritic)
            setArcSize2(data.rating)
            setArcSize3(data.esrb_rating.name)
        }
        drawRatings(canvasRef1, 100, arcSize1, `${arcSize1}%`)
        drawRatings(canvasRef2, 5, arcSize2, `${arcSize2}`)
        drawRatings(canvasRef3, 100, 100, `${arcSize3}`)
    }, [data, arcSize1, arcSize2, arcSize3]); // Re-draw whenever arcSize changes
    return (
        <>
            {data && (
                <StyledRatings>
                    <h1>{data.name} Ratings</h1>
                    <section className="container">
                        <div>
                            <canvas ref={canvasRef1} width={120} height={120} />
                            <h2>Metacritic rating</h2>
                        </div>
                        <div>
                            <canvas ref={canvasRef2} width={120} height={120} />
                            <h2>RAWG rating</h2>
                        </div>
                        <div>
                            <canvas ref={canvasRef3} width={120} height={120} />
                            <h2>ESRB rating</h2>
                        </div>
                    </section>

                </StyledRatings>
            )}
        </>
    )
}
