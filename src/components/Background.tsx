interface BackgroundProps {
    image: string;
}

export default function Background({ image }: BackgroundProps) {
    return (
        <>
            <div className="absolute top-0 left-0 z-1 size-full bg-black opacity-60"></div>
            <img className="absolute top-0 left-0 z-0 size-full object-cover" src={image} alt="Background da página inicial" />
        </>
    );
}
