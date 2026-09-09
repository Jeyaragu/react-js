type BadgeProps = {
    text: string;
    variant?: "success" | "secondary" | "warning" | "danger" | "info";
    className?: string;
};

const Badge = ({ text, variant = "secondary", className }: BadgeProps) => {
    return <span className={`badge bg-${variant}${className ? ` ${className}` : ""}`}>{text}</span>;
};

export default Badge;
