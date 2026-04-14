type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/** Entspricht kokomu `SectionTitle` (Foody-Farben, kein koko-Theme). */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const hasCustomMaxWidth = /\bmax-w-[\w[\].]+/.test(className ?? "");
  const wrap =
    align === "center"
      ? [
          "mx-auto text-center",
          hasCustomMaxWidth ? "" : "max-w-3xl",
        ]
          .filter(Boolean)
          .join(" ")
      : "max-w-xl text-left lg:mx-0";
  return (
    <div className={[wrap, className ?? ""].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#56B4A0]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-[#2A4F6E] sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
