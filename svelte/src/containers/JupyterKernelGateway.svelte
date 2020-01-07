<script>
	import { onMount } from 'svelte'
	import { JupyterStore } from '../stores/jupyterStore.js'
	import DfTable from '../components/DfTable.svelte'

	import DataFrame from "dataframe-js";

	$: df = {}
	$: received = false

	onMount(async () => {
		JupyterStore.setup()
		await getDataFrame()
	})

	async function getDataFrame() {
		let df_json = await JupyterStore.get('getdf')
		df = new DataFrame(JSON.parse(df_json))
		df.show()
		received = true
	}

</script>

<p>Port: {$JupyterStore.port}</p>

{#if received}
	<DfTable caption='DataFrame' df={df}/>
{/if}
