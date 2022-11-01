import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

type SolidIconName = keyof typeof SolidIcons;
type OutlinedIconName = keyof typeof OutlineIcons;

interface SolidIconProps {
  icon: SolidIconName;
  className?: string;
}

interface OutlinedIconProps {
  icon: OutlinedIconName;
  className?: string;
}

export const SolidIcon = ({ icon, className }: SolidIconProps) => {
  const DynamicHeroIcon = SolidIcons[icon];
  return <DynamicHeroIcon className={className} />;
};

export const OutlinedIcon = ({ icon, className }: OutlinedIconProps) => {
  const DynamicHeroIcon = OutlineIcons[icon];
  return <DynamicHeroIcon className={className} />;
};
