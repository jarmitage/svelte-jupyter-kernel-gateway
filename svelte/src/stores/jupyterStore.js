import { writable } from "svelte/store"

const createJupyter = () => {

	let state = {
		port: 8888
	}

	const { subscribe, set, update } = writable(state)

	const methods = {
		setup: (port) => {
			if (port != null)
				update(s => { s.port = port; return s })
		},
		get: async (_route, _params=null) => {
			var port
			update(s => { port = s.port; return s })
            var params = new URLSearchParams();
            for(var key in _params)
                params.append(key, _params[key]);
            return await fetch('http://localhost:'+port+'/'+_route+'?'+params)
                .then(r => r.json())
                .then(res => {return res})
        },
		reset: () => { return set(state) }
	}

	return { subscribe, set, update, ...methods }

}

export const JupyterStore = createJupyter()
