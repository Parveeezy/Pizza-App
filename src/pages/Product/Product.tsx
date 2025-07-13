import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import type { Product } from '../../interfaces/product.interface';

export function Product() {
	const data = useLoaderData() as { data: Product };

	return (
		<>
			<Suspense fallback={'Загружаю...'}>
				<Await resolve={data.data}>
					{({ data }: { data: Product }) => <>Product - {data.name}</>}
				</Await>
			</Suspense>
		</>
	);
}
