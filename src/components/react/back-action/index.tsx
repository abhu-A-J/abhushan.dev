import type { ComponentProps } from 'react';

import InternalLink from '@components/react/link/internal';

type Props = ComponentProps<typeof InternalLink>;

function BackAction({ href, children, ...others }: Props) {
	return (
		<InternalLink href={href} {...others}>
			<svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6 12H18M6 12L11 7M6 12L11 17"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span className="text-inherit">{children}</span>
		</InternalLink>
	);
}

export default BackAction;
