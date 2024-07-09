<script setup>
import logo from '~/assets/header-logo.webp';
const route = useRoute();
const { plant, section, page } = route.params;

function getPlantTitle() {
	switch (plant) {
		case 'GMFW':
			return 'GM Fort Wayne SMARTInspect IETM';
		case 'WTAP':
			return 'WTAP SMARTInspect IETM';
		case 'HMMA':
			return 'HMMA SMARTInspect IETM';
		default:
			return 'Home';
	}
}
</script>

<template>
	<header>
		<div class="header-left">
			<NuxtLink to="/">
				<img :src="logo" alt="Logo" />
			</NuxtLink>

			Plant: {{ plant }} - Section: {{ section }} - Page: {{ page }}
		</div>
		<!-- <SystemToggle /> -->

		<div class="header-right">
			<h1>{{ plant ? getPlantTitle() : 'Inovision QuickResponse Library' }}</h1>
			<button>
				<Icon name="i-heroicons-arrow-left-start-on-rectangle-16-solid" />
			</button>
		</div>
	</header>
</template>

<style>
header {
	background: white;
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 10vh;
	padding: 0.8vh 0.4vw;
	border-bottom: solid black;
	margin: 0;
	z-index: 100;

	.header-left {
		height: 100%;
		display: flex;

		a {
			height: 100%;
			color: black;
			text-decoration: none;
			margin: auto 0;
		}

		img,
		h1 {
			display: block;
			height: 100%;
			margin: auto;
			color: #000;
		}
	}

	.header-right {
		height: 100%;
		display: flex;
		align-items: center;

		h1 {
			font-weight: bold;
			font-size: 2rem;
			color: #000;
			margin: 0 1rem;
		}

		button {
			height: 90%;
			width: 5vw;
			border: solid black 1px;
			border-radius: 0.7rem;
			background: #ffffff1f;
			cursor: pointer;

			svg {
				width: 50%;
				height: auto;
				color: #000;
			}
		}

		.mobile-menu {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		position: absolute;
		height: 7vh;

		.header-left {
			& img {
				width: 23vw;
			}
		}

		.header-right {
			margin: 0;

			h1 {
				font-size: 18px;
			}

			button {
				width: 11vw;
			}
		}

		.mobile-menu {
			display: block !important;
			margin: auto;

			& button {
				width: 16vw;
				border: none;
				border-radius: 1rem;
				margin: auto 5px;
				padding: 0;
				background: #ffffff1f;
			}

			& svg {
				color: var(--secondary);
			}
		}

		.dropdown-menu.show {
			background: lightgrey;
			width: 40vw;

			& svg {
				color: var(--primary);
				margin-right: 10px;
			}
		}

		.dropdown-item {
			display: flex;
			font-weight: bold;
			justify-content: space-between;

			& span {
				margin: auto;
			}
		}
	}
}
</style>
