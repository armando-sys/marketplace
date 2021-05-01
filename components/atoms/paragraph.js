
export default function paragraph({ value, size, variant, family, style, weight, color }) {
    return (
        <>
            <p style={{
                fontSize: size,
                fontVariant: variant,
                fontFamily: family,
                fontStyle: style,
                fontWeight: weight,
                color: color,

            }}>{value}</p>
        </>
    );
}