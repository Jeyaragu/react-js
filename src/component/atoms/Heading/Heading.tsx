type HeadingProps = {
    title: string;
    level?: number;
    style?: React.CSSProperties;
};

const Heading = ({
    title,
    level = 3,
    style
}: HeadingProps) => {
    switch (level) {
        case 1:
            return <h1 style={style}>{title}</h1>;
        case 2:
            return <h2 style={style}>{title}</h2>;
        case 3:
            return <h3 style={style}>{title}</h3>;
        default:
            return <h3 style={style}>{title}</h3>;
    }
};

export default Heading;