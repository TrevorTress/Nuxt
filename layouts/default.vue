<template>
	<Header />
	<Navbar />
	<Container>
		<slot />
	</Container>
	<Footer />
</template>

<style>
	:root {
		--safety: #dcc032;
		--equipment: #dc8923;
		--maintenance: #0f4ead;
		--troubleshooting: #920e0e;
		--drawings: purple;
		--appendix: grey;
	}
</style>
