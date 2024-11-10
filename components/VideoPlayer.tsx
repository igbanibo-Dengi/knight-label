// VideoPlayer.tsx
import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
    src: string; // URL of the video
    width?: number; // Width of the video player (optional)
    height?: number; // Height of the video player (optional)
    autoPlay?: boolean; // Whether to autoplay the video
    loop?: boolean; // Whether to loop the video
    muted?: boolean; // Whether to mute the video
    controls?: boolean; // Whether to show video controls
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    width = 480,
    height = 270,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Optional effect to handle any custom logic for autoplay or other props
    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play();
        }
    }, [autoPlay]);

    return (
        <div style={{ width, height, overflow: 'hidden', borderRadius: '8px' }}>
            <video
                ref={videoRef}
                src={src}
                width={width}
                height={height}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );
};
