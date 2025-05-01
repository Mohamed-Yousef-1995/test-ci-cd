import { useEffect, useState } from "react";

interface DataProps {
    label: string;
    percentage: number;
    type: "success" | "alert" | "progress";
    size?: "small" | "medium" | "large";
}

const Data = ({ label, percentage, type, size = "medium" }: DataProps) => {
    const [dashOffset, setDashOffset] = useState(0);
    const sizeMap = {
        small: { svg: 110, text: "text-xs", percentage: "text-lg" },
        medium: { svg: 130, text: "text-sm", percentage: "text-2xl" },
        large: { svg: 180, text: "text-md", percentage: "text-4xl" },
    };

    const { svg: circleSize, text, percentage: percentageText } = sizeMap[size];
    const radius = circleSize / 2 - 5;
    const circleLength = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = circleLength - (percentage / 100) * circleLength;
        setDashOffset(progressOffset);
    }, [percentage, circleLength]);
    const getColor = () => {
        switch (type) {
            case "success":
                return "#2b8a3e";
            case "alert":
                return "#ee3e43";
            case "progress":
                return "#1864AB";
            default:
                return "gray";
        }
    };

    const getBackgroundColor = () => {
        switch (type) {
            case "success":
                return "#ebfbee";
            case "alert":
                return "#fdecec";
            case "progress":
                return "#e7f5ff";
            default:
                return "gray";
        }
    };

    return (
        <div
            className="relative flex items-center justify-center focus:outline-none active:scale-95 transition-transform"

        >
            <svg width={circleSize} height={circleSize} viewBox={`0 0 ${circleSize} ${circleSize}`}>
                <circle
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={radius}
                    stroke={getBackgroundColor()}
                    strokeWidth={circleSize * 0.06}
                    fill="none"
                />
                {percentage > 0 && (
                    <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        stroke={getColor()}
                        strokeWidth={circleSize * 0.06}
                        fill="none"
                        strokeDasharray={circleLength}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
                    />
                )}
            </svg>
            <div className="absolute flex flex-col items-center">
                <p className={`${text} font-medium text-gray-900`}>{label}</p>
                <p className={`${percentageText} font-bold text-gray-900`}>{percentage}%</p>
            </div>
        </div>
    );
};

export default Data;
