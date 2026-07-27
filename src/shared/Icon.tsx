import sprite from "../assets/icons/icons.svg";

interface IconProps {
  id: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Icon = ({
  id,
  className = "",
  width = 24,
  height = 24,
}: IconProps) => {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};
