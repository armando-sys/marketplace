
export default function AtomButton({ customClass, value, margin, padding, background, color, border, radius }) {
    return (<button
        className={customClass} style={{
            background: background,
            color: color,
            margin: margin,
            padding: padding,
            border: border,
            borderRadius: radius,
        }}>{value}
    </button>
    );
}