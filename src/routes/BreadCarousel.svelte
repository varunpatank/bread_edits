<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import challah from './carousel/challah.jpg?enhanced';
	import bananaBread from './carousel/banana-bread.jpg?enhanced';
</script>

<Carousel.Root
	opts={{
		loop: true,
	}}
	plugins={[Autoplay()]}
>
	<Carousel.Content>
		<Carousel.Item>
			<enhanced:img src={challah} alt="Challah bread" />
		</Carousel.Item>
		<Carousel.Item>
			<enhanced:img src={bananaBread} alt="Banana bread" />
		</Carousel.Item>
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
