import type { ComponentProps } from 'react';

import InternalLink from './internal';

type Props = ComponentProps<typeof InternalLink>;

function ExternalLink({ children, href, ...otherProps }: Props) {
	return (
		<InternalLink href={href} {...otherProps}>
			<svg
				className="-mb-[2px] stroke-current"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<span className="text-current">{children}</span>
		</InternalLink>
	);
}

export default ExternalLink;
