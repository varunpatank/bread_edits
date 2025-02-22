import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data: productDetails } = await supabase
		.from('products')
		.select('*')
		.eq('slug', params.product)
		.single();

	return {
		productDetails: {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			...productDetails!,
			image_url: supabase.storage
				.from(productDetails?.image_bucket_id ?? '')
				.getPublicUrl(productDetails?.image_name ?? '').data.publicUrl,
		},
	};
}) satisfies PageServerLoad;
