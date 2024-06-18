<template>
	<div class="footer">
		<div className="footer-left">
			<p className="powered-by">Powered By:</p>
			<a href="/">
				<img
					className="footer-logo"
					src=""
					alt="logo"
				/>
			</a>
		</div>
		<div class="footer-right">
			<!-- <SiteMap /> -->
			<!-- <button
					onClick={handleShowModal}
					style={{ padding: '8px' }}
				>
					<FaPhone size={22} />
				</button> -->
		</div>
	</div>
</template>

<style>
	.footer {
		background: white;
		width: 100%;
		height: 10vh;
		min-height: 48px;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		border-top: solid black;
		z-index: 100;

		/* left section */
		.footer-left {
			height: 100%;
			display: flex;
			margin: auto 1rem;

			/* powered by text */
			.powered-by {
				margin: auto 0;
				padding: 5px;
				font-weight: bold;
			}

			/* lower-left logo */
			.footer-logo {
				height: 100%;
				width: unset;
			}

			& a {
				height: 100%;
				padding: 5px;
			}
		}

		/* right section */
		.footer-right {
			display: flex;
			margin: 0 0.5rem;

			/* footer right buttons */
			& button {
				margin: auto 0.4vw;
				height: 85%;
				width: 3.5vw;
				border-radius: 1rem;

				& a {
					width: 100%;
					height: 100%;
					display: block;
					padding: 8px;
				}

				& svg {
					color: #000;
					margin: auto;
					display: block;
					width: 80%;
					height: auto;
				}

				/* footer right buttons hover */
				&:hover {
					transform: scale(1.05);
					filter: opacity(0.8);
				}
			}
		}

		@media screen and (max-width: 480px) {
			background: white;
			position: absolute;
			z-index: 1;
			.footer-left {
				padding: 10px;
				margin: 0;

				& a {
					padding: 0;
				}
			}

			.footer-right {
				margin: 0;
				text-align: center;
				& h2 {
					font-size: 18px;
					margin: auto;
				}

				& button {
					width: 14vw;

					& a {
						padding: 2px;
					}
				}
			}
		}
	}
</style>
