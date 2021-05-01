
export default function AtomText({ value, size, variant, family, style, weight, color, margin, padding, align }) {
    return (
        <>
            <p style={{
                fontSize: size,
                fontVariant: variant,
                fontFamily: family,
                fontStyle: style,
                fontWeight: weight,
                color: color,
                margin: margin,
                padding: padding,
                textAlign: align

            }}>
                {value}</p>
        </>
    );
}