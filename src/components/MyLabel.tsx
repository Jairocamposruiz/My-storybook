import { CSSProperties } from 'react';

import './mylabel.css';


interface MyLabelProps {
  /**
   * Message label
   */
  label: string;
  /**
   * Size of the font label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  /**
   * Font capitalice
   */
  allCaps?: boolean,
  /**
   * Regular colors for the font
   */
  color?: 'primary' | 'secondary' | 'tertiary',
  /**
   * Custom color for the font
   */
  fontColor?: string;
  className?: string;
  style?: CSSProperties;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  className,
  style,
}: MyLabelProps) => {
  const classColor = (fontColor) ? '' : `text-${color}`

  return (
    <label
      className={ `label ${ size } ${ className } ${classColor}` }
      style={{
        ...style,
        color: fontColor
      }}
    >
      {
        allCaps
          ? label.toUpperCase()
          : label
      }
    </label>
  );
};
