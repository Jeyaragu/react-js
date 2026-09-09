import { TailSpin } from "react-loader-spinner";

type LoadingIndicatorProps = {
    color: string;
    height: number;
    width: number;
}

const LoadingIndicator = ({ color, height, width }: LoadingIndicatorProps) => {
    return <TailSpin color={color} height={height} width={width} />
}

export default LoadingIndicator;