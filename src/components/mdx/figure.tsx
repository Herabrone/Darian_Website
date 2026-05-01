import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  width = 1280,
  height = 800,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-[13px] text-[var(--color-fg-subtle)]">{caption}</figcaption>
      )}
    </figure>
  );
}
