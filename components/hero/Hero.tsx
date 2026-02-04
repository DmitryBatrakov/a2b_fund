import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <Image
                src="/assets/heroImage.webp"
                alt="Hero background"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute bg-black/20 w-full h-full" />
        </section>
    );
};
