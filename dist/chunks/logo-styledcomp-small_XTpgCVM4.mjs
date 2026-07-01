const logoStyledcompSmall = new Proxy({"src":"/_astro/logo-styledcomp-small.DjLA0XsQ.webp","width":100,"height":100,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Katu/Desktop/Portfolio-katu/src/assets/imagenes/logos/logo-styledcomp-small.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Katu/Desktop/Portfolio-katu/src/assets/imagenes/logos/logo-styledcomp-small.webp");
							return target[name];
						}
					});

export { logoStyledcompSmall as default };
