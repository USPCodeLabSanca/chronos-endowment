import React from "react"
import { motion } from "framer-motion"

const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

function ChronosSymbolGraphism() {
    return (
        <motion.svg
            id="Hero_Symbol"
            data-name="Hero Symbol"
            viewBox="0 0 515.22 515.95"
        >
            <defs>
            <style>
                {
                ".cls-1,.cls-2{fill:none;stroke:#cbcbca;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-2{stroke:#f4af23}"
                }
            </style>
            </defs>
            <g id="Graphism">
                <g id="Grey"
                opacity="0.6">
                    <motion.path
                        className="cls-1"
                        d="M257.5 257.95L257.5 257.95 257.5 257.95 257.5 257.95z"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-1"
                        d="M44.37 338.89l235.09-59.35-242.12-13.38a245.06 245.06 0 007.03 72.73z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-1"
                        d="M279.46 279.54L220.2 44.1a241.87 241.87 0 00-149 110.84z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-1"
                        d="M71.18 154.94a241.53 241.53 0 00-33.84 111.22l242.12 13.38-208.28-124.6z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-1"
                        d="M276.65 118a159.61 159.61 0 0185.68 22.63c76.52 45.78 101.57 145.27 55.86 221.91s-145 101.62-221.53 55.84a160.43 160.43 0 01-60.52-64.71l-80 20.21a241.39 241.39 0 0098.94 114.26c114.94 68.75 264.2 31.07 332.79-83.93s31-264.58-83.9-333.34a240.55 240.55 0 00-147.47-33z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </g>
                <g id="Orange"
                opacity="0.6">
                    <motion.path
                        className="cls-2"
                        d="M257.73 258L257.73 258 257.73 258 257.73 258z"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-2"
                        d="M529.11 216.62l-249.42 63 256.88 14.19a260 260 0 00-7.46-77.19z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-2"
                        d="M279.69 279.59l62.88 249.78a256.59 256.59 0 00158.09-117.6zM500.66 411.77a256.2 256.2 0 0035.91-118l-256.88-14.18 221 132.18z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                    <motion.path
                        className="cls-2"
                        d="M282.68 451a169.41 169.41 0 01-90.9-24C110.59 378.41 84 272.85 132.52 191.55s153.83-107.81 235-59.25a170.24 170.24 0 0164.23 68.7l84.9-21.43a256.07 256.07 0 00-105-121.23c-121.94-72.94-280.29-33-353.07 89.05S25.69 428 147.63 501a255.18 255.18 0 00156.46 35z"
                        transform="translate(-21.96 -21.59)"

                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </g>
            </g>
            <g id="Symbol">
                <motion.g id="Colors"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                >
                    <path
                        fill="none"
                        d="M257.63 257.95L257.63 257.95 257.63 257.95 257.63 257.95z"
                    />
                    <path
                        d="M343.55 215.58l-64 64 80.11-42.05a91.06 91.06 0 00-16.11-21.95z"
                        transform="translate(-21.96 -21.59)"
                        fill="#0097a9"
                    />
                    <path
                        d="M279.59 279.54l64 64a90.22 90.22 0 0026.55-64z"
                        transform="translate(-21.96 -21.59)"
                        fill="#f4af23"
                    />
                    <path
                        d="M370.1 279.54a89.86 89.86 0 00-10.4-42.05l-80.11 42.05z"
                        transform="translate(-21.96 -21.59)"
                        fill="#59bec9"
                    />
                </motion.g>
                <g id="C">
                    <motion.path
                    id="C"
                    d="M311.36 330.67a59.64 59.64 0 01-31.77 9.15 60.26 60.26 0 1131.75-111.41l21.77-21.77a90.53 90.53 0 100 145.81z"
                    transform="translate(-21.96 -21.59)"

                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                    />
                </g>
            </g>
        </motion.svg>
  )
}

export default ChronosSymbolGraphism
 
