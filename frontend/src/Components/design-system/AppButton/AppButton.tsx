import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import Link from 'next/link';

type AppButtonProps = ButtonProps & {
  href?: string;
};

const baseButtonStyles: SxProps<Theme> = {
  textDecoration: 'none',
};

export default function AppButton({ href, sx, ...props }: AppButtonProps) {
  const mergedSx = [baseButtonStyles, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])];

  if (href) {
    return <Button component={Link} href={href} sx={mergedSx} {...props} />;
  }

  return <Button sx={mergedSx} {...props} />;
}
