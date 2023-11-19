import { getPathFromSlug } from '@utils/index';

type BlogListingSummary = {
	title: string;
	publishedDate: Date;
	slug: string;
	seriesLength?: number;
};
type Props = {
	listings: Array<BlogListingSummary>;
};

function BlogListing({ listings }: Props) {
	return (
		<ul className="flex flex-col gap-5">
			{listings.map((listing) => {
				const anchorTitle = listing.seriesLength
					? `Explore the complete series: ${listing.title}`
					: `Read about ${listing.title}`;
				return (
					<li>
						<div>
							<a href={getPathFromSlug(listing.slug)} className="w-fit text-gray-12 underline" title={anchorTitle}>
								<p className="text-current">{listing.title}</p>
							</a>
							<p className="mt-1 flex flex-wrap items-center gap-2 text-sm">
								<time dateTime={new Date(listing.publishedDate).toDateString()}>
									{new Date(listing.publishedDate).toDateString()}
								</time>
								{listing.seriesLength && <span> - ({listing.seriesLength} part series)</span>}
							</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default BlogListing;
