<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { i18n } from '../i18n';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '../paraglide/runtime';

	function handleOnChange(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		}
	) {
		if (e.currentTarget.value) {
			switchToLanguage(e.currentTarget.value as any);
		}
	}

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	const labels: Record<AvailableLanguageTag, string> = {
		en: '🇬🇧 English',
		fi: '🇫🇮 Finnish'
	};
</script>

<select name="language-selector" id="language-selector" on:change={(e) => handleOnChange(e)}>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
	{/each}
</select>
