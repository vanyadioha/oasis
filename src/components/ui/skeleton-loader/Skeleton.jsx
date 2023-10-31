import { StyledSkeleton } from "./Skeleton.styled";
import { easeInOut, motion } from "framer-motion";


export const Skeleton = ({ w, h }) => {
    return (
        <StyledSkeleton
            w={w}
            h={h}
        >
            <motion.div
                initial={{
                    x: '-100%',
                    opacity: 0
                }}
                animate={{
                    x: '100%',
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: easeInOut,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0.5,
                }}
            />
        </StyledSkeleton>
    )
}

Skeleton.defaultProps = {
    w: '100%',
    h: '20rem'
}