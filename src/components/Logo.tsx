export function Logo({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="45" stroke="#9C27B0" strokeWidth="2" />
            <path
                d="M30 50 L50 30 L70 50 L50 70 Z"
                fill="#00BCD4"
                stroke="#9C27B0"
                strokeWidth="2"
            />
        </svg>
    )
}

