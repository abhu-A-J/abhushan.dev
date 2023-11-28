import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'p'>;

function Paragraph(props: Props) {
	const { children, ...otherProps } = props;

	return (
		<p className="mb-4" {...otherProps}>
			{children}
		</p>
	);
}

export default Paragraph;
