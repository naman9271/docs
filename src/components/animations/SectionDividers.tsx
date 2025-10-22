interface SectionDividersProps {
  /** Show the top-right divider */
  showTopRight?: boolean;
  /** Show the bottom-left divider */
  showBottomLeft?: boolean;
  /** Size of the dividers - defaults to 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Opacity of the dividers - defaults to 10 */
  opacity?: number;
}

export default function SectionDividers({
  showTopRight = true,
  showBottomLeft = true,
  size = 'md',
  opacity = 10,
}: SectionDividersProps) {
  // Size mappings
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[32rem] h-[32rem]',
  };

  // Position mappings
  const positionClasses = {
    sm: { topRight: '-top-16 -right-16', bottomLeft: '-bottom-16 -left-16' },
    md: { topRight: '-top-24 -right-24', bottomLeft: '-bottom-24 -left-24' },
    lg: { topRight: '-top-32 -right-32', bottomLeft: '-bottom-32 -left-32' },
  };

  return (
    <>
      {/* Top-right divider */}
      {showTopRight && (
        <div
          className={`absolute ${positionClasses[size].topRight} ${sizeClasses[size]} bg-gradient-to-br from-blue-500/${opacity} to-purple-500/${opacity} rounded-full blur-3xl`}
        />
      )}

      {/* Bottom-left divider */}
      {showBottomLeft && (
        <div
          className={`absolute ${positionClasses[size].bottomLeft} ${sizeClasses[size]} bg-gradient-to-tr from-purple-500/${opacity} to-blue-500/${opacity} rounded-full blur-3xl`}
        />
      )}
    </>
  );
}