import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

function Reveal(props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.35 }}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default Reveal;