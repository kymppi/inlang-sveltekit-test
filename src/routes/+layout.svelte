<script>
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
</script>

<ParaglideJS {i18n}>
	<slot />
	<br/>
	<br/>
	<LanguageSwitcher />
</ParaglideJS>
