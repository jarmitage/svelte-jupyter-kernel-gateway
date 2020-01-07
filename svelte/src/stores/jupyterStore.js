import { writable } from "svelte/store"

const createJupyter = () => {

	let state = {
		port: 8888
	}

	const { subscribe, set, update } = writable(state)

	const methods = {
		setup: () => {

		},
		reset: () => { return set(state) }
	}

	return { subscribe, set, update, ...methods }

}

export const JupyterStore = createJupyter()
