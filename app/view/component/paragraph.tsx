interface ParagraphProps {
    text: string;
    className?: string;
}

export default function Paragraph({ text, className }: ParagraphProps) {
    return (
        <p className={`mb-4 leading-7 z-10 relative ${className}`}>
            {text.split('\n').map((line, i) => (
                <span key={i}>
                    {line}
                    {i !== text.split('\n').length - 1 && <br />}
                </span>
            ))}</p>
    )
}