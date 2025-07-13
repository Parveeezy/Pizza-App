import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';

function Button({ children, className, appearence = 'small', ...props }: ButtonProps): ReactNode {
	return (
		<button
			className={cn(styles['button'], styles['accent'], className, {
				[styles['small']]: appearence === 'small',
				[styles['big']]: appearence === 'big'
      })}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
