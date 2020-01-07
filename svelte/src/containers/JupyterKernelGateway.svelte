<script>
	import { onMount } from 'svelte'
	import { JupyterStore } from '../stores/jupyterStore.js'

	import DataFrame from "dataframe-js";

	$: df = {}
	$: received = false

	onMount(async () => {
		JupyterStore.setup('8889')
		await getDataFrame()
	})

	async function getDataFrame() {
		let df_json = await JupyterStore.get('getdf')
		df = new DataFrame(JSON.parse(df_json))
		df.show()
		received = true
	}

</script>

<style>
	table {
		table-layout: fixed;
		width: 50%;
		border-collapse: collapse;
		border: 1px solid black;
		text-align: left;
	}
	th, tr, td {
		border: 1px solid black;
	}
</style>

<p>Port: {$JupyterStore.port}</p>

{#if received}
	<table>
		<caption>DataFrame</caption>
		<thead>
			<tr>
				{#each df.listColumns() as column}
					<th>{column}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each df.listColumns() as column, c}
				<tr>
					{#each df.getRow(c).toArray() as row, r}
						<td>{row}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
