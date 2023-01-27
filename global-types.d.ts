export {};
type Props = {
    src?: string;
    alt?: string;
    caption?: string;
    className?: string;
    width?: number;
    height?: number;
    layout?: 'fill';
    overflow?: 'hidden';
    position?: 'static' | 'relative' | 'absolute' | 'sticky';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    unoptimized?: boolean;
    onError: () => void;
};

declare module '*.svg' {
    const content: Props;
    export default content;
}
