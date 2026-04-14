/**
 * Wie kokomu `PhoneMockup` / IconHighlightPhone – kompaktes Icon-„Phone“ neben Ernährung.
 */
export function IconHighlightPhone({
  icon,
  label,
  className,
}: {
  icon: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={["relative mx-auto", className ?? ""].join(" ")}>
      <div className="relative aspect-[9/16] w-[min(46vw,9.75rem)] overflow-hidden rounded-2xl border border-[#E8E8EE] bg-white shadow-[0_22px_48px_-18px_rgba(45,100,92,0.35)] sm:w-[9.5rem]">
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center sm:gap-3 sm:p-5">
          <span className="text-4xl leading-none sm:text-[2.75rem]" aria-hidden>
            {icon}
          </span>
          <p className="text-xs font-semibold leading-tight text-[#3D6B8F] sm:text-sm">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
