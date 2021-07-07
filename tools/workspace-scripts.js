const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/nativescript-onesignal-skd
			'nativescript-onesignal-skd': {
				build: {
					script: 'nx run nativescript-onesignal-skd:build.all',
					description: '@nativescript/nativescript-onesignal-skd: Build',
				},
			},
			// @nativescript/nativescript-onesignal-sdk
			'nativescript-onesignal-sdk': {
				build: {
					script: 'nx run nativescript-onesignal-sdk:build.all',
					description: '@nativescript/nativescript-onesignal-sdk: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-onesignal-skd': {
				script: 'nx run nativescript-onesignal-skd:focus',
				description: 'Focus on @nativescript/nativescript-onesignal-skd',
			},
			'nativescript-onesignal-sdk': {
				script: 'nx run nativescript-onesignal-sdk:focus',
				description: 'Focus on @nativescript/nativescript-onesignal-sdk',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
