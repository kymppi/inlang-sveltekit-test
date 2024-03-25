import * as m from '$lib/paraglide/messages';
import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';

export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	defaultLanguageTag: 'en',
	pathnames: {
		'/about': m.about_path
	}
});
