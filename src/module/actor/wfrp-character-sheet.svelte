<script>
	export let sheetData
	const { actor, data } = sheetData
	const localize = (string) => game.i18n.localize(string)

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="characteristics">
	<div class="characteristics-table" cellpadding="0">
	  <div class="table-header table-row">
		{#each Object.entries(actor.system.attributes) as [a, at]}
		<div title="{at.label}" class="table-header">
		  <div class="header-block">{a}</div>
		</div>      
		{/each}
	  </div>
	  <div class="table-row">
		{#each Object.entries(actor.system.attributes) as [a, at]}
		<div class="table-data">
		  <input class="attr-edit" data-attribute="{a}" name="data.attributes.{a}.value" type="text" value="{at.value}" data-dtype="Number">
		</div>
		<div class="table-data attribute-luck">
		  {#if at.luck}
		  <a class="attribute-toggle" toggle-type="{a}"><i class="far fa-check-circle"></i></a>
		  {:else}
		  <a class="attribute-toggle" toggle-type="{a}"><i class="far fa-circle"></i></a>
		  {/if}
		</div>
		{/each}
	  </div>
  
	  <hr>
  
	  <div class="table-header table-row">
		<div title="{actor.system.state.stance.current}" class="table-header stance">
		  <div class="header-block">{actor.system.state.stance.current}</div>
		</div>
	  </div>
	</div>
  </div>
  
<!-- svelte-ignore a11y-missing-attribute -->
  <div class="main-row first">
	<div class="movement row-section">
	  <div class="move-section">
		<div class="move-value">
		  {#if actor.flags.damage}
		  <a class="readonly-toggle" toggle-type="damage">{actor.system.state.damage.value}</a>
		  {:else}
		  <input class="readonly-toggle" toggle-type="damage" name="data.state.damage.value" type="text" value="{data.state.damage.value}" >
		  {/if}
		</div>
		<div class="move-name">
		  <h4>DR</h4>
		</div>
	  </div>
	  <div class="move-section">
		<div class="move-value">
		  {#if actor.flags.criticalDamage}
		  <a class="readonly-toggle" toggle-type="criticalDamage">{actor.system.state.criticalDamage.value}</a>
		  {:else}
		  <input class="readonly-toggle" toggle-type="criticalDamage" name="data.state.criticalDamage.value" type="text" value="{data.state.criticalDamage.value}" data-dtype="String">
		  {/if}
		</div>
		<div class="move-name">
		  <h4>CR</h4>
		</div>
	  </div>
	  <div class="move-section">
		<div class="move-value">
		  {#if actor.flags.defence}
		  <a class="readonly-toggle" toggle-type="defence">{actor.system.state.defence.value}</a>
		  {:else}
		  <input class="readonly-toggle" toggle-type="defence" name="data.state.defence.value" type="text" value="{data.state.defence.value}">
		  {/if}
		</div>
		<div class="move-name">
		  <h4>Defence</h4>
		</div>
	  </div>
	  <div class="move-section">
		<div class="move-value">
		  {#if actor.flags.soak}
		  <a class="readonly-toggle" toggle-type="soak">{actor.system.state.soak.value}</a>
		  {:else}
		  <input class="readonly-toggle" toggle-type="soak" name="data.state.soak.value" type="text" value="{data.state.soak.value}">
		  {/if}
		</div>
		<div class="move-name">
		  <h4>Soak</h4>
		</div>
	  </div>
	</div>
  
	<div class="fate-resilience row-section">
	  <div class="fate-resilience-section">
		<span class="top label">Fortune</span>
		<span class="bottom label">Expertise</span>
	  </div>
	  <div class="fate-resilience-section values">
		<div class="top value">
		  <a class = "metacurrency-value" data-point-type="fortune">{data.state.fortune.value}</a>
		</div>
		<div class="bottom value">
		  <a class = "metacurrency-value" data-point-type="expertise">{data.state.expertise.value}</a>
		</div>
	  </div>
	  <div class="fate-resilience-section">
		<span class="top label">Agression</span>
		<span class="bottom label">Cunning</span>
	  </div>
	  <div class="fate-resilience-section values">
		<div class="top value">
		  <a class = "metacurrency-value" data-point-type="aggression">{data.state.aggression.value}</a>
		</div>
		<div class="bottom value">
		  <a class = "metacurrency-value" data-point-type="cunning">{data.state.cunning.value}</a>
		</div>
	  </div>
	</div>
  </div>
  
  <div class="main-row second">
  
	<div class="stance row-section">
	  <div class="state-section">
		<span class="top label">Stance R/C</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" style="color: red;" type="text" name="data.state.stance.reckless" value="{data.state.stance.reckless}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			<input class="state-value" style="color: green;" type="text" name="data.state.stance.conservative" value="{data.state.stance.conservative}" >
		  </div>
		</div>
	  </div>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="wounds row-section">
	  <div class="state-section">
		<span class="top label">Wounds</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.wounds.value" value="{data.state.wounds.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.wounds}
			<input class="readonly-toggle" toggle-type="wounds" name="data.state.wounds.max" type="text" value="{data.state.wounds.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="wounds">{actor.system.state.wounds.max}</a>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="criticalWounds row-section">
	  <div class="state-section">
		<span class="top label">Criticals</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.criticalWounds.value" value="{data.state.criticalWounds.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.criticalWounds}
			<input class="readonly-toggle" toggle-type="criticalWounds" name="data.state.criticalWounds.max" type="text" value="{data.state.criticalWounds.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="criticalWounds">{actor.system.state.criticalWounds.max}</a> 
			{/if}
		  </div>
		</div>
	  </div>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="fatigue row-section">
	  <div class="state-section">
		<span class="top label">Fatigue</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.fatigue.value" value="{data.state.fatigue.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.fatigue}
			<input class="readonly-toggle" toggle-type="fatigue" name="data.state.fatigue.max" type="text" value="{data.state.fatigue.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="fatigue">{actor.system.state.fatigue.max}</a>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="stress row-section">
	  <div class="state-section">
		<span class="top label">Stress</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.stress.value" value="{data.state.stress.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.stress}
			<input class="readonly-toggle" toggle-type="stress" name="data.state.stress.max" type="text" value="{data.state.stress.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="stress">{actor.system.state.stress.max}</a>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="corruption row-section">
	  <div class="state-section">
		<span class="top label">Corruption</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.corruption.value" value="{data.state.corruption.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.corruption}
			<input class="readonly-toggle" toggle-type="corruption" name="data.state.corruption.max" type="text" value="{data.state.corruption.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="corruption">{actor.system.state.corruption.max}</a>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
	
<!-- svelte-ignore a11y-missing-attribute -->
	<div class="magicPower row-section">
	  <div class="state-section">
		<span class="top label">Magic Power</span> 
		<div class="state-value-box">
		  <div id="value">
			<input class="state-value" type="text" name="data.state.magicPower.value" value="{data.state.magicPower.value}">
		  </div>
		  <div id="divisor">
			/
		  </div>
		  <div id="state-max">
			{#if actor.flags.magicPower}
			<input class="readonly-toggle" toggle-type="magicPower" name="data.state.magicPower.max" type="text" value="{data.state.magicPower.max}" >
			{:else}
			<a class="readonly-toggle" toggle-type="magicPower">{actor.system.state.magicPower.max}</a>
			{/if}
		  </div>
		</div>
	  </div>
	</div>
  
  </div>
  
  <div class="main-row third">
	<div class="experience row-section">
	  <div class="experience-section">
		<span class="top label">Experience</span>
	  </div>
	  <div class="experience-section">
		<span class="bottom label">Current</span>
		<div id="value">
		  <input name="data.details.experience.current" type="text" value="{data.details.experience.current}" readonly data-dtype="Number"/>
		</div>
		<span class="bottom label">Spent</span>
		<div id="value">
		  <input name="data.details.experience.spent" type="text" value="{data.details.experience.spent}" data-dtype="Number"/>
		</div>
		<span class="bottom label">Total</span>
		<div id="value">
		  <input name="data.details.experience.total" type="text" value="{data.details.experience.total}" data-dtype="Number"/>
		</div>
	  </div>
	</div>
  </div>
  
  <div class="career-list">
	<div class="inventory-header item">
	  <span id="career">Career</span>
	  <span id="current">Current</span>
	  <span id="complete">Complete</span>
	  <span id="level">Level</span>
	</div>
  
<!-- svelte-ignore a11y-missing-attribute -->
	<ol class="inventory-list save-scroll">
	  {#each Object.entries(actor.careers) as [item, i]}
	  <li class="item career-item" data-item-id="{item.id}">
		<div class="content">
		  <div class="item-name item-dropdown">
			<div class="image" style="background-image: url({item.img})"></div>
			<a class="name">{item.name}</a>
		  </div>
		  {#if item.data.current.value}
		  <a class="career-current career-toggle" toggle-type="current"><i class="far fa-check-circle"></i></a>
		  {:else}
		  <a class="career-current career-toggle" toggle-type="current"><i class="far fa-circle"></i></a>
		  {/if}
		  {#if item.data.complete.value}
		  <a class="career-complete career-toggle" toggle-type="complete"><i class="far fa-check-circle"></i></a>
		  {:else}
		  <a class="career-complete career-toggle" toggle-type="complete"><i class="far fa-circle"></i></a>
		  {/if}
		  <div class="career-level">{item.data.level.value}</div>  
		</div>
  
		<script>
		  $(document).ready(function () {
			$('#testlist li:nth-child(odd)').addClass('alternate');
		  });
		</script>
	  </li>
	  {/each}
	</ol>
  </div>

<style>
	:global(.character) {
		background: green
	}

	:global(.character > .window-content) {
		background: #fff
	}
</style>