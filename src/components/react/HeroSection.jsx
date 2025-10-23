export default function HeroSection(){
    return (
        <section className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
            {/* Info Badge */}
            <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                Coming Soon New Components
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight leading-tighter sm:text-5xl md:text-6xl lg:max-w-4xl">
                 Beautiful UI components build with Tailwind CSS and Alphine JS
            </h1>

            {/* Description */}
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-1xl text-justify leading-relaxed">
                 An open-source collection of copy-and-paste components for quickly
                 building application UIs.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                    href="/docs/introduction"
                    className="rounded-md bg-black text-white px-6 py-2 text-sm font-medium hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/80 transition"
                >
                    Get Started
                </a>
                <a
                    href="/docs/components"
                    className="rounded-md border border-border px-6 py-2 text-sm font-medium hover:bg-muted transition"
                >
                    View Components
                </a>
            </div>
        </section>
    );
}