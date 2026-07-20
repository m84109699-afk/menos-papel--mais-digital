import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'ref'> {
  name: string;
  className?: string;
  size?: number | string;
}

export default function LucideIcon({ name, className = '', size, ...props }: LucideIconProps) {
  // Fallback to HelpCircle if icon name is not found
  const IconComponent = (Icons as Record<string, React.ComponentType<any>>)[name] || Icons.HelpCircle;

  return <IconComponent className={className} size={size} {...props} />;
}
