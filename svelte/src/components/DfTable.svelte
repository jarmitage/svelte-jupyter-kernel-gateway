<script>
	export let caption
	export let df
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

<table>
	<caption>{caption}</caption>
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
