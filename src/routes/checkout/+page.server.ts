import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
	const { data: products } = await supabase.from('products').select('*').order('name');

	return {
		products:
			products?.map((product) => ({
				...product,
				image_url: supabase.storage
					.from(product.image_bucket_id ?? '')
					.getPublicUrl(product.image_name ?? '').data.publicUrl,
			})) ?? [],
	};
}) satisfies PageServerLoad;
