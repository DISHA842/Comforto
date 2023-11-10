const defaultTheme = require("tailwindcss/defaultTheme");

const plugin = require("tailwindcss/plugin");
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

// eslint-disable-next-line no-undef
module.exports = {
    purge: {
        content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        enabled: true,
        safelist: [
            //these classes will always included in the css file generated
            //if you feel that some of your taiwlind classes are not working
            //and you were using some sort of condition rendering for classname
            //then add that class name here
            "text-center",
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: "435px",
            between: "512px",
            sm: "640px",
            md: "768px",
            bnine: "900px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                linkedin: "#2867B2",
                facebook: "#4267B2",
                instagram: "#e95950",
                custom: {
                    primary: withOpacity("--color-primary"),
                    secondary: withOpacity("--color-secondary"),
                    accent: withOpacity("--color-accent"),
                    muted: withOpacity("--color-muted"),
                },
            }, //usage: text-custom-primary  or text-custom-accent
            backgroundColor: {
                custom: {
                    primary: withOpacity("--bg-primary"),
                    secondary: withOpacity("--bg-secondary"),
                    muted: withOpacity("--bg-muted"),
                },
            }, //usage: bg-custom-primary
            gradientColorStops: {
                custom: {
                    hue: withOpacity("--color-fill"),
                },
            }, //usage: you can use the name in gradient's to via and from classes
            fontFamily: {
                sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
            },
            //font customization help: https://www.youtube.com/watch?v=sOnBG2wUm1s

            height: {
                "8screen/10": "80vh",
                "screen/2": "50vh",
                "2screen/5": "40vh",
                "3screen/10": "30vh",
                "screen/5": "20vh",
                "screen/4": "25vh",
                "screen/8": "13vh",
                "screen/10": "10vh",
            },
            width: {
                "4screen/5": "80vw",
                "screen/2": "50vh",
                "2sc/5": "40vw",
                "2screen/5": "40vh",
                "3screen/10": "30vh",
                "screen/5": "20vh",
                "screen/4": "25vh",
                "screen/8": "13vh",
                "screen/10": "10vh",
                112: "448px",
                136: "544px",
            },
            margin: {
                "-33%": "-33vh",
                "-26%": "-26vh",
                "-22%": "-22vh",
                "-13%": "-13vh",
                "3%": "3vh",
                "-7%": "-7vh",
                "-4%": "-4vh",
                "-2screen/5": "-35vh",
                "10%": "10vw",
                "7%": "7vw",
                "5%h": "5vh",
                "12%h": "12vh",
                "15%h": "15vh",
            },
            zIndex: {
                "-10": "-10",
                1400: "1400",
                1500: "1500",
            },
            boxShadow: {
                nxl: "0 0px 15px -5px rgba(255, 255, 255, 0.2)",
            },
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
            translate: ["group-hover"],
            scale: ['active', 'group-hover'],
            fill: ['hover', 'focus'],

        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                /* Hide scrollbar for Chrome, Safari and Opera */
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                    "scroll-behavior": "smooth",
                },

                /* Hide scrollbar for IE, Edge and Firefox */
                ".no-scrollbar": {
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                    "scroll-behavior": "smooth",
                },
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        }),
    ],
};
